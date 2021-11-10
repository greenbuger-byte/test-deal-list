import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { httpRequest } from "./middlewares/rest";
import { Api } from "../utils/api";
import { IDeal, IDealErrors, IDealResponse, IDealSliceState } from "../types/deal";

const initialState: IDealSliceState  = {
    page: 1,
    perPages: 10,
    pages: 1,
    count: 0,
    deals: [],
    deal: null,
    isLoading: false,
    error: null,
}

const slice = createSlice({
    name: 'dealSlice',
    initialState,
    reducers: {
        dealResponse: (state, action: PayloadAction<IDeal>) => {
            state.deal = action.payload;
        },
        dealsResponse: (state, action: PayloadAction<IDealResponse>) => {
            const { page, pages, deals, count } = action.payload;
            state.page = page;
            state.count = count;
            state.pages = pages;
            state.deals = deals;
        },
        loadingToggle: (state, action:PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        dealErrorResponse: (state, action:PayloadAction<IDealErrors>) => {
            state.error = action.payload;
        }
    }
});


export const { dealsResponse, dealResponse, loadingToggle, dealErrorResponse } = slice.actions;

export default slice.reducer;

export const fetchDeals = (page:number) => {
    return httpRequest({
        url: `${Api.deals}?page=${page}`,
        method: 'get',
        onSuccess: dealsResponse.type,
        onLoading: loadingToggle.type,
        onError: dealErrorResponse.type
    })
}

export const fetchDeal = (id:number) => {
    return httpRequest({
        url: `${Api.info}/${id}`,
        method: 'get',
        onSuccess: dealResponse.type,
        onLoading: loadingToggle.type,
        onError: dealErrorResponse.type
    })
}
