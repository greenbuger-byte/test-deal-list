import { ComponentType } from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { RootState } from "../store";
import { fetchDeals, fetchDeal } from "../store/deal";

const mapCommonStates = (Component:ComponentType<any>) => {
    const mapGlobalStateToProps = (state:RootState) => ({
        dealState: state.dealSlice,
    });
    const mapGlobalDispatchToProps = (dispatch:Dispatch) => ({
        fetchDeals: (page: number) => dispatch(fetchDeals(page)),
        fetchDeal: (id: number) => dispatch(fetchDeal(id)),
    });
    return connect(mapGlobalStateToProps, mapGlobalDispatchToProps)(Component)
}

export default mapCommonStates;