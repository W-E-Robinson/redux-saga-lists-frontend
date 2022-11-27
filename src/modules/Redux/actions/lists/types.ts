import {
    FETCH_LIST_REQUEST,
    FETCH_LIST_SUCCESS,
    FETCH_LIST_FAILURE,
} from "./actionTypes";

interface ListItem {
    id: number;
    value: string;
    completed: boolean;
}

export interface ListState {
    pending: boolean;
    list: ListItem[];
    error: string | null;
}

export interface FetchListRequestPayload {
    id: number;
}

export interface FetchListSuccessPayload {
    list: ListItem[];
}

export interface FetchListFailurePayload {
    error: string;
}

export type FetchListRequest = {
    type: typeof FETCH_LIST_REQUEST;
    payload: FetchListRequestPayload;
}

export type FetchListSuccess = {
    type: typeof FETCH_LIST_SUCCESS;
    payload: FetchListSuccessPayload;
};

export type FetchListFailure = {
    type: typeof FETCH_LIST_FAILURE;
    payload: FetchListFailurePayload;
};

export type ListActions =
    | FetchListRequest
    | FetchListSuccess
    | FetchListFailure
