import axios, { AxiosInstance } from "axios";
import {
    createAction,
    Middleware,
    PayloadActionCreator
} from "@reduxjs/toolkit";

export interface IErrorRequest {
    status: string,
    headers: string,
    message: string,
}

interface IHttpErrorRequestPayload {
    onError?: string,
    onLoading?: string,
    error?: IErrorRequest
}

interface IHttpSuccessRequestPayload {
    onSuccess?:string,
    onLoading?: string,
    data?: any,
}

interface IRequestPayload extends IHttpSuccessRequestPayload{
    url: string,
    onError?: string,
    method: 'get',
}

export const httpRequest:PayloadActionCreator<IRequestPayload> = createAction('http/request');
const httpSuccessRequest:PayloadActionCreator<IHttpSuccessRequestPayload> = createAction('http/successRequest');
const httpErrorRequest:PayloadActionCreator<IHttpErrorRequestPayload> = createAction('http/errorRequest');
const getApiHtmlBaseUrl:string = `${window.location.protocol}//${window.location.host}/api/`;

const http:AxiosInstance = axios.create({
    baseURL: getApiHtmlBaseUrl,
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
});

const rest:Middleware = ({ dispatch }) => next => async action => {
    const { type, payload } = action;
    switch (type) {
        case httpRequest.type: {
            const { url, method, data, onSuccess, onLoading, onError } = payload;
            if(onLoading) dispatch({ type: onLoading, payload: true });
            return  http.request({ url, method, data }).then((response) => {
                const { data } = response;
                dispatch(httpSuccessRequest({ onLoading, onSuccess, data }))
                return data;
            }).catch( httpError => {
                const error:IErrorRequest = {
                    status: httpError.status,
                    headers: httpError.headers,
                    message: httpError.message
                };
                dispatch(httpErrorRequest({ onLoading, onError, error }));
            });
        }
        case httpSuccessRequest.type: {
            const { onSuccess, onLoading, data } = payload;
            if(onSuccess) dispatch({ type: onSuccess, payload: data });
            if(onLoading) dispatch({ type: onLoading, payload: false });
            break;
        }
        case httpErrorRequest.type: {
            const { onError, error, onLoading } = payload;
            if(onError) dispatch({ type: onError, payload: error });
            if(onLoading) dispatch({ type: onLoading, payload: false });
            await Promise.reject(error);
            break;
        }
        default:
            next(action);
    }
}

export default rest;