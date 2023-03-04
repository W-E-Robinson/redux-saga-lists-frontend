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
    RESET_LIST_STATE,
} from "./actionTypes";

export interface ListItem {
    id: number;
    value: string;
    completed: boolean;
}

export interface ListState {
    pending: boolean;
    error: string | null;
    list: ListItem[];
    listName: string;
}

export interface FetchListSuccessPayload {
    list: ListItem[];
}

export interface FetchListFailurePayload {
    error: string;
}

export type FetchListRequest = {
    type: typeof FETCH_LIST_REQUEST;
}

export type FetchListSuccess = {
    type: typeof FETCH_LIST_SUCCESS;
    payload: FetchListSuccessPayload;
};

export type FetchListFailure = {
    type: typeof FETCH_LIST_FAILURE;
    payload: FetchListFailurePayload;
};

export interface ToggleCompletionRequestPayload {
    id: number;
}

export interface ToggleCompletionSuccessPayload {
    list: ListItem[];
}

export interface ToggleCompletionFailurePayload {
    error: string;
}

export type ToggleCompletionRequest = {
    type: typeof TOGGLE_COMPLETION_REQUEST;
    payload: ToggleCompletionRequestPayload;
}

export type ToggleCompletionSuccess = {
    type: typeof TOGGLE_COMPLETION_SUCCESS;
    payload: ToggleCompletionSuccessPayload;
};

export type ToggleCompletionFailure = {
    type: typeof TOGGLE_COMPLETION_FAILURE;
    payload: ToggleCompletionFailurePayload;
};

export interface AddItemRequestPayload {
    value: string;
}

export interface AddItemSuccessPayload {
    list: ListItem[];
}

export interface AddItemFailurePayload {
    error: string;
}

export type AddItemRequest = {
    type: typeof ADD_ITEM_REQUEST;
    payload: AddItemRequestPayload;
}

export type AddItemSuccess = {
    type: typeof ADD_ITEM_SUCCESS;
    payload: AddItemSuccessPayload;
};

export type AddItemFailure = {
    type: typeof ADD_ITEM_FAILURE;
    payload: AddItemFailurePayload;
};

export interface DeleteItemRequestPayload {
    id: number;
}

export interface DeleteItemSuccessPayload {
    list: ListItem[];
}

export interface DeleteItemFailurePayload {
    error: string;
}

export type DeleteItemRequest = {
    type: typeof DELETE_ITEM_REQUEST;
    payload: DeleteItemRequestPayload;
}

export type DeleteItemSuccess = {
    type: typeof DELETE_ITEM_SUCCESS;
    payload: DeleteItemSuccessPayload;
};

export type DeleteItemFailure = {
    type: typeof DELETE_ITEM_FAILURE;
    payload: DeleteItemFailurePayload;
};

export interface SetListPropertiesPayload {
    listName: string;
}

export type SetListProperties = {
    type: typeof SET_LIST_PROPERTIES;
    payload: SetListPropertiesPayload;
};

export interface ResetListPropertiesPayload {
    properties: string[];
}

export type ResetListProperties = {
    type: typeof RESET_LIST_PROPERTIES;
    payload: ResetListPropertiesPayload;
};

export type ResetListState = {
    type: typeof RESET_LIST_STATE;
};

export type ListActions =
    | FetchListRequest
    | FetchListSuccess
    | FetchListFailure
    | ToggleCompletionRequest
    | ToggleCompletionSuccess
    | ToggleCompletionFailure
    | AddItemRequest
    | AddItemSuccess
    | AddItemFailure
    | DeleteItemRequest
    | DeleteItemSuccess
    | DeleteItemFailure
    | SetListProperties
    | ResetListProperties
    | ResetListState;
