import React from 'react';
import { BiArrowToLeft, BiArrowToRight, BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import { PaginationInfo, PaginationItem, PaginationWrapper } from "./Pagination.styles";

interface  IPaginationProps {
    page: string,
    setPage: (page: string)=>void,
    perPage: number,
    pages: number,
    count: number,
}

const Pagination:React.FC<IPaginationProps> = (props) => {
    const { page, setPage, perPage, pages, count } = props;
    enum TEXT {
        by = 'из'
    }

    const pageInPagination = (renderCount: number) => {
        const pagesArray = Array(pages).fill(0).map((_, index) => ++index);
        const currentPage = Number(page);
        if(currentPage === 1) return pagesArray.slice(0, currentPage+renderCount);
        if(currentPage === pages) return pagesArray.slice(pages-(renderCount+1), pages);
        if(currentPage > pages-2) return pagesArray.slice(currentPage-renderCount, pages);
        return pagesArray.slice(currentPage-2, currentPage+2);
    }
    const renderPaginationList = (pageInPagination(3).map((p) =>
            (<PaginationItem
                key={p}
                onClick={() => setPage(String(p))} active={Number(page)===(p)}
            >
                {p}
            </PaginationItem>)));

    return (
        <PaginationWrapper>
          <PaginationItem
              onClick={() => setPage('1')}
              active={Number(page)===1}
          >
              <BiArrowToLeft />
          </PaginationItem>
            {Number(page) > 1 && <PaginationItem>
                <BiLeftArrowAlt onClick={() => setPage(String(Number(page)-1))} />
            </PaginationItem>}
            {renderPaginationList}
            {Number(page) < pages && <PaginationItem>
                <BiRightArrowAlt onClick={() => setPage(String(Number(page)+1))} />
            </PaginationItem>}
            <PaginationItem
                onClick={() => setPage(String(pages))}
                active={pages===Number(page)}
            >
                <BiArrowToRight />
            </PaginationItem>
           <PaginationInfo>
               {Number(page)*perPage-perPage} - {Number(page)*perPage} {TEXT.by} {count}
           </PaginationInfo>
        </PaginationWrapper>
    );
};

export default Pagination;