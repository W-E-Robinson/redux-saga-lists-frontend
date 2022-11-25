import {
	FetchListFailure,
	FetchListFailurePayload,
	FetchListRequest,
	FetchListRequestPayload,
	FetchListSuccess,
	FetchListSuccessPayload,
} from "./actionTypes";
import {
    FETCH_LIST_REQUEST,
    FETCH_LIST_SUCCESS,
    FETCH_LIST_FAILURE,
} from "./types";

export const fetchListRequest = (
    payload: FetchListRequestPyaload,
): FetchListRequest => ({
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
