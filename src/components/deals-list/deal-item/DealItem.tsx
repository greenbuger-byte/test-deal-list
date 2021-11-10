import React, { FC } from 'react';
import { BiTime } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import { IDeal, StatusLangList} from "@deal/types/deal";
import { useHumanTime } from "@deal/hooks/useHumanTime";
import {
    DealBackColor,
    DealImportant,
    DealItemWrapper,
    DetailItemTd,
    Label,
    SubTitle,
    SubTitleTime,
    Title
} from "./DealItem.styles";
import {Links} from "@deal/utils/links";

interface IDealItemProps {
    deal: IDeal,
    width: number,
}

const DealItem:FC<IDealItemProps> = (props) => {
    const { deal, width } = props;
    const humanDate = useHumanTime('date');
    const humanTime = useHumanTime('time');
    const navigate = useNavigate();
    const renderLabel = (
        <Label
            status={deal.status}
            circle={width < 1000}
        >
            { width > 1000 && StatusLangList[deal.status]}
        </Label>);

    const navigateToPage = () => {
        navigate(`${Links.info}/${deal.id}`);
    }

    return (
        <DealItemWrapper onClick={navigateToPage}>
            <DetailItemTd mw={6}>
                <Title><b><DealImportant> {deal.id}</DealImportant></b></Title>
               <SubTitleTime><BiTime />{humanTime(deal.created_date)}</SubTitleTime>
                <SubTitleTime>{humanDate(deal.created_date)}</SubTitleTime>
            </DetailItemTd>
            <DetailItemTd>
              <Title>{deal.order_type.name}</Title>
                <SubTitle>{deal.account.name}</SubTitle>
            </DetailItemTd>
            <DetailItemTd>
              <Title>{deal.account.name}</Title>
                <SubTitle>{deal.terminal.name}</SubTitle>
            </DetailItemTd>
            <DetailItemTd>
                {renderLabel}
            </DetailItemTd>
            <DealBackColor status={deal.status} />
        </DealItemWrapper>
    );
};

export default DealItem;