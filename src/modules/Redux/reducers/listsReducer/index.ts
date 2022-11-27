import {
    FETCH_LIST_REUEST,
    FETCH_LIST_SUCCESS,
    FETCH_LIST_FAILURE,
} from "../../action/lists/actionTypes";
import {
    ListActions,
    ListState,
} from "../../actions/lists/types";

const initialState: ListsState = {
    pending: false,
    error: null,
    list: [],
};

export default (state = initialState, action: ListActions) => {
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

