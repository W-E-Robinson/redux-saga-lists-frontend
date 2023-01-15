import {
    FETCH_LIST_REQUEST,
    FETCH_LIST_SUCCESS,
    FETCH_LIST_FAILURE,
    TOGGLE_COMPLETION_REQUEST,
    TOGGLE_COMPLETION_SUCCESS,
    TOGGLE_COMPLETION_FAILURE,
    ADD_ITEM_REQUEST,
    ADD_ITEM_FAILURE,
    ADD_ITEM_SUCCESS,
    DELETE_ITEM_REQUEST,
    DELETE_ITEM_FAILURE,
    DELETE_ITEM_SUCCESS,
} from "../../actions/lists/actionTypes";
import {
    ListActions,
    ListState,
} from "../../actions/lists/types";

export const initialState: ListState = {
    pending: false,
    error: null,
    list: [],
};

export const listsReducer = (state = initialState, action: ListActions) => {
    switch (action.type) {
        case FETCH_LIST_REQUEST:
        case TOGGLE_COMPLETION_REQUEST:
        case ADD_ITEM_REQUEST:
        case DELETE_ITEM_REQUEST:
            return {
                ...state,
                pending: true,
            };
        case ADD_ITEM_SUCCESS:
        case DELETE_ITEM_SUCCESS:
        case FETCH_LIST_SUCCESS:
        case TOGGLE_COMPLETION_SUCCESS:
            return {
                ...state,
                pending: false,
                error: null,
                list: action.payload.list,
            };
        case FETCH_LIST_FAILURE:
        case ADD_ITEM_FAILURE:
        case DELETE_ITEM_FAILURE:
        case TOGGLE_COMPLETION_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.payload.error,
            };
        default:
            return {
                ...state,
            };
    }
}

