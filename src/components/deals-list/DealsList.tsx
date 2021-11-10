import React, {useEffect, useState} from 'react';

import { StylesDealsList } from "./DealsList.styles";
import DealItem from "./deal-item";
import DealsHeader from "./deals-header";
import mapCommonStates from "../../utils/store";
import { ActionCreator } from "redux";
import { IDealSliceState } from "../../types/deal";
import { useNavigate } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import Pagination from "../pagination";
import ErrorMessage from "@deal/components/error-message";
import Skeleton from "@deal/components/skeleton";
import { useResolutionListener } from "@deal/hooks/useResolutionListener";

interface IDealListProps {
    fetchDeals: ActionCreator<number>,
    dealState: IDealSliceState
}

const DealsList:React.FC<IDealListProps> = (props) => {
    const { fetchDeals, dealState: { deals, error, pages, perPages, isLoading, count } } = props;
    const query = useQuery();
    const [page, setPage] = useState<string>(query.get('page') || '1');
    const [width, setWidth] = useState(window.innerWidth);
    useResolutionListener(setWidth);
    const navigate = useNavigate();

    useEffect( () => {
        fetchDeals(page);
        page === '1' ? navigate("/") :  navigate(`?page=${page}`);
    }, [fetchDeals, navigate, page])

    const renderDeals = isLoading
        ? <><Skeleton count={10} /></>
        : deals && deals.map(deal => <DealItem key={deal.id} width={width} deal={deal}/>);

    return (
        <StylesDealsList>
            <ErrorMessage message={error?.message} />
            <DealsHeader />
            {renderDeals}
            <Pagination page={page} perPage={perPages} pages={pages} count={count} setPage={setPage}/>
        </StylesDealsList>
    );
};

export default mapCommonStates(DealsList);