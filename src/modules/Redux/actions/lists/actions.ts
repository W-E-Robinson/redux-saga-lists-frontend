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
	AddItemFailure,
	AddItemFailurePayload,
	AddItemRequest,
	AddItemRequestPayload,
	AddItemSuccess,
	AddItemSuccessPayload,
	DeleteItemFailure,
	DeleteItemFailurePayload,
	DeleteItemRequest,
	DeleteItemRequestPayload,
	DeleteItemSuccess,
	DeleteItemSuccessPayload,
    SetListProperties,
    SetListPropertiesPayload,
    ResetListProperties,
    ResetListPropertiesPayload,
} from "./types";
import {
    FETCH_LIST_REQUEST,
    FETCH_LIST_SUCCESS,
    FETCH_LIST_FAILURE,
    TOGGLE_COMPLETION_REQUEST,
    TOGGLE_COMPLETION_SUCCESS,
    TOGGLE_COMPLETION_FAILURE,
    ADD_ITEM_REQUEST,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAILURE,
    DELETE_ITEM_REQUEST,
    DELETE_ITEM_SUCCESS,
    DELETE_ITEM_FAILURE,
    SET_LIST_PROPERTIES,
    RESET_LIST_PROPERTIES,
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

export const addItemRequest = (
    payload: AddItemRequestPayload,
): AddItemRequest => ({
    type: ADD_ITEM_REQUEST,
    payload,
});

export const addItemSuccess = (
    payload: AddItemSuccessPayload,
): AddItemSuccess => ({
    type: ADD_ITEM_SUCCESS,
    payload,
});

export const addItemFailure = (
    payload: AddItemFailurePayload,
): AddItemFailure => ({
    type: ADD_ITEM_FAILURE,
    payload,
});

export const deleteItemRequest = (
    payload: DeleteItemRequestPayload,
): DeleteItemRequest => ({
    type: DELETE_ITEM_REQUEST,
    payload,
});

export const deleteItemSuccess = (
    payload: DeleteItemSuccessPayload,
): DeleteItemSuccess => ({
    type: DELETE_ITEM_SUCCESS,
    payload,
});

export const deleteItemFailure = (
    payload: DeleteItemFailurePayload,
): DeleteItemFailure => ({
    type: DELETE_ITEM_FAILURE,
    payload,
});

export const setListProperties = (
    payload: SetListPropertiesPayload,
): SetListProperties => ({
    type: SET_LIST_PROPERTIES,
    payload,
});

export const resetListProperties = (
    payload: ResetListPropertiesPayload,
): ResetListProperties => ({
    type: RESET_LIST_PROPERTIES,
    payload,
});
