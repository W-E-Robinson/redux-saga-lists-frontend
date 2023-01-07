import {
    FETCH_LIST_REQUEST,
    FETCH_LIST_SUCCESS,
    FETCH_LIST_FAILURE,
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
            return {
                ...state,
                pending: true,
            };
        case FETCH_LIST_SUCCESS:
            return {
                ...state,
                pending: false,
                error: null,
                list: action.payload.list,
            };
        case FETCH_LIST_FAILURE:
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

