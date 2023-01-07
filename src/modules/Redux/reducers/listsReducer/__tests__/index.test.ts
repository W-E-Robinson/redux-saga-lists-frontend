import {
    FETCH_LIST_REQUEST,
    FETCH_LIST_SUCCESS,
    FETCH_LIST_FAILURE,
} from "../../../actions/lists/actionTypes";

import {
    initialState,
    listsReducer,
} from "../index";

describe("listReducer testing", () => {
    test("#1 FETCH_LIST_REQUEST", () => {
        const action = { type: FETCH_LIST_REQUEST }; 
        const updatedState = listsReducer(initialState, action); 

        expect(updatedState.pending).toBe(true);
        expect(updatedState.error).toBe(null);
        expect(updatedState.list).toEqual([]);
    });
    xtest("#2 FETCH_LIST_REQUEST", () => {
        
    });
    xtest("#3 FETCH_LIST_REQUEST", () => {
        
    });
    xtest("#4 Default", () => {
        
    });
});
