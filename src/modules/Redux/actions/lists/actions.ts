import {
	FetchListFailure,
	FetchListFailurePayload,
	FetchListRequest,
	FetchListSuccess,
	FetchListSuccessPayload,
} from "./types";
import {
    FETCH_LIST_REQUEST,
    FETCH_LIST_SUCCESS,
    FETCH_LIST_FAILURE,
} from "./actionTypes";

export const fetchListRequest = (): FetchListRequest => ({
    type: FETCH_LIST_REQUEST,
});

export const fetchListSuccess = (
    payload: FetchListSuccessPayload,
): FetchListSuccess => ({
    type: FETCH_LIST_SUCCESS,
    payload,
});

export const fetchListFailure = (
    payload: FetchListFailurePayload,
): FetchListFailure => ({
    type: FETCH_LIST_FAILURE,
    payload,
});
