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
        const mockAction = { type: FETCH_LIST_REQUEST }; 
        const updatedState = listsReducer(initialState, mockAction); 

        expect(updatedState.pending).toBe(true);
        expect(updatedState.error).toBe(null);
        expect(updatedState.list).toEqual([]);
    });

    test("#2 FETCH_LIST_REQUEST", () => {
        const mockAction = {
            type: FETCH_LIST_SUCCESS,
            payload: [
                {
                    "id": 0,
                    "value": "mock job 1",
                    "completed": false
                },
                {
                    "id": 1,
                    "value": "mock job 2",
                    "completed": false
                },
                {
                    "id": 2,
                    "value": "mock job 3",
                    "completed": false
                }
            ],
        };
        const updatedState = listsReducer(initialState, mockAction); 

        expect(updatedState.pending).toBe(false);
        expect(updatedState.error).toBe(null);
        expect(updatedState.list).toEqual(mockAction.payload);
    });

    test("#3 FETCH_LIST_REQUEST", () => {
        const mockAction = { type: FETCH_LIST_FAILURE };
        const updatedState = listsReducer(initialState, mockAction); 

        expect(updatedState.pending).toBe(false);
        expect(updatedState.error).toBe(null);
        expect(updatedState.list).toEqual([]);
    });
});
