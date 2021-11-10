import React, { useEffect } from 'react';
import { ActionCreator } from "redux";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

import DefaultLayout from "@deal/layouts/default-layout";

import mapCommonStates from "@deal/utils/store";
import {Links} from "@deal/utils/links";

import { IDeal } from "@deal/types/deal";

import NotFound from "@deal/pages/not-found";

interface InfoProps {
    fetchDeal: ActionCreator<number>
    dealState:{deal: IDeal, isLoading: boolean},
}

const Info:React.FC<InfoProps> = (props) => {
    enum TEXT {
        back = 'В список',
        loading = 'Загрузка информации'
    }
    const { fetchDeal, dealState: { deal, isLoading }} = props;
    const { id } = useParams();
    useEffect(() => {
        fetchDeal(Number(id))
    },[fetchDeal, id] );
    if(isLoading) return <DefaultLayout>{TEXT.loading}</DefaultLayout>;
    if(!isLoading && !deal) return <DefaultLayout><NotFound /></DefaultLayout>
    return (
        <DefaultLayout>
            <Link to={Links.home}><BiArrowBack />{TEXT.back}</Link>
            {deal && <>
                <h1>{deal.id} {deal.account.name}</h1></>}
        </DefaultLayout>
    );
};

export default mapCommonStates(Info);