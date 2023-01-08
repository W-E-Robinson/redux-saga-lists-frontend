import {
	FetchListFailure,
	FetchListFailurePayload,
	FetchListRequest,
	FetchListSuccess,
	FetchListSuccessPayload,
	ToggleCompletionFailure,
	ToggleCompletionFailurePayload,
	ToggleCompletionRequest,
	ToggleCompletionRequestPayload,
	ToggleCompletionSuccess,
	ToggleCompletionSuccessPayload,
} from "./types";
import {
    FETCH_LIST_REQUEST,
    FETCH_LIST_SUCCESS,
    FETCH_LIST_FAILURE,
    TOGGLE_COMPLETION_REQUEST,
    TOGGLE_COMPLETION_SUCCESS,
    TOGGLE_COMPLETION_FAILURE,
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

export const toggleCompletionRequest = (
    payload: ToggleCompletionRequestPayload,
): ToggleCompletionRequest => ({
    type: TOGGLE_COMPLETION_REQUEST,
    payload,
});

export const toggleCompletionSuccess = (
    payload: ToggleCompletionSuccessPayload,
): ToggleCompletionSuccess => ({
    type: TOGGLE_COMPLETION_SUCCESS,
    payload,
});

export const toggleCompletionFailure = (
    payload: ToggleCompletionFailurePayload,
): ToggleCompletionFailure => ({
    type: TOGGLE_COMPLETION_FAILURE,
    payload,
});
