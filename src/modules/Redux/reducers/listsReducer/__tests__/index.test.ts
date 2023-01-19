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

    test("#2 FETCH_LIST_SUCCESS", () => {
        const mockAction = {
            type: FETCH_LIST_SUCCESS,
            payload: { 
                list: [
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
            },
        };
        const updatedState = listsReducer(initialState, mockAction); 

        expect(updatedState.pending).toBe(false);
        expect(updatedState.error).toBe(null);
        expect(updatedState.list).toEqual(mockAction.payload.list);
    });

    test("#3 FETCH_LIST_FAILURE", () => {
        const mockAction = {
            type: FETCH_LIST_FAILURE,
            payload: { 
                error: "mock error message",
            },
        };
        const updatedState = listsReducer(initialState, mockAction); 

        expect(updatedState.pending).toBe(false);
        expect(updatedState.error).toEqual(mockAction.payload.error);
        expect(updatedState.list).toEqual([]);
    });

    test("#4 TOGGLE_COMPLETION_REQUEST", () => {
        const mockAction = { type: TOGGLE_COMPLETION_REQUEST }; 
        const updatedState = listsReducer(initialState, mockAction); 

        expect(updatedState.pending).toBe(true);
        expect(updatedState.error).toBe(null);
        expect(updatedState.list).toEqual([]);
    });

    test("#5 TOGGLE_COMPLETION_SUCCESS", () => {
        const mockAction = {
            type: TOGGLE_COMPLETION_SUCCESS,
            payload: { 
                list: [
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
            },
        };
        const updatedState = listsReducer(initialState, mockAction); 

        expect(updatedState.pending).toBe(false);
        expect(updatedState.error).toBe(null);
        expect(updatedState.list).toEqual(mockAction.payload.list);
    });

    test("#6 TOGGLE_COMPLETION_FAILURE", () => {
        const mockAction = {
            type: TOGGLE_COMPLETION_FAILURE,
            payload: { 
                error: "mock error message",
            },
        };
        const updatedState = listsReducer(initialState, mockAction); 

        expect(updatedState.pending).toBe(false);
        expect(updatedState.error).toEqual(mockAction.payload.error);
        expect(updatedState.list).toEqual([]);
    });

    test("#7 ADD_ITEM_REQUEST", () => {
        const mockAction = { type: ADD_ITEM_REQUEST }; 
        const updatedState = listsReducer(initialState, mockAction); 

        expect(updatedState.pending).toBe(true);
        expect(updatedState.error).toBe(null);
        expect(updatedState.list).toEqual([]);
    });

    test("#8 ADD_ITEM_SUCCESS", () => {
        const mockAction = {
            type: ADD_ITEM_SUCCESS,
            payload: { 
                list: [
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
            },
        };
        const updatedState = listsReducer(initialState, mockAction); 

        expect(updatedState.pending).toBe(false);
        expect(updatedState.error).toBe(null);
        expect(updatedState.list).toEqual(mockAction.payload.list);
    });

    test("#9 ADD_ITEM_FAILURE", () => {
        const mockAction = {
            type: ADD_ITEM_FAILURE,
            payload: { 
                error: "mock error message",
            },
        };
        const updatedState = listsReducer(initialState, mockAction); 

        expect(updatedState.pending).toBe(false);
        expect(updatedState.error).toEqual(mockAction.payload.error);
        expect(updatedState.list).toEqual([]);
    });

    test("#10 DELETE_ITEM_REQUEST", () => {
        const mockAction = { type: DELETE_ITEM_REQUEST }; 
        const updatedState = listsReducer(initialState, mockAction); 

        expect(updatedState.pending).toBe(true);
        expect(updatedState.error).toBe(null);
        expect(updatedState.list).toEqual([]);
    });

    test("#11 DELETE_ITEM_SUCCESS", () => {
        const mockAction = {
            type: DELETE_ITEM_SUCCESS,
            payload: { 
                list: [
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
            },
        };
        const updatedState = listsReducer(initialState, mockAction); 

        expect(updatedState.pending).toBe(false);
        expect(updatedState.error).toBe(null);
        expect(updatedState.list).toEqual(mockAction.payload.list);
    });

    test("#12 DELETE_ITEM_FAILURE", () => {
        const mockAction = {
            type: DELETE_ITEM_FAILURE,
            payload: { 
                error: "mock error message",
            },
        };
        const updatedState = listsReducer(initialState, mockAction); 

        expect(updatedState.pending).toBe(false);
        expect(updatedState.error).toEqual(mockAction.payload.error);
        expect(updatedState.list).toEqual([]);
    });

    test("#12 SET_LIST_PROPERTIES", () => {
        const mockAction = {
            type: SET_LIST_PROPERTIES,
            payload: { 
                listName: "mock list name",
            },
        };
        const updatedState = listsReducer(initialState, mockAction); 

        expect(updatedState.pending).toBe(false);
        expect(updatedState.error).toEqual(null);
        expect(updatedState.listName).toEqual("mock list name");
    });

    test("#12 RESET_LIST_PROPERTIES", () => {
        const alteredInitialState = { ...initialState, listName: "mockListName" };
        const mockAction = {
            type: RESET_LIST_PROPERTIES,
            payload: { 
                properties: ["listName"],
            },
        };
        const updatedState = listsReducer(alteredInitialState, mockAction); 

        expect(updatedState.pending).toBe(false);
        expect(updatedState.error).toEqual(null);
        expect(updatedState.listName).toEqual("");
    });
    
    test("#13 RESET_LIST_STATE", () => {
        const alteredInitialState = { ...initialState, listName: "mockListName" };
        const mockAction = {
            type: RESET_LIST_STATE,
        };
        const updatedState = listsReducer(alteredInitialState, mockAction); 

        expect(updatedState.pending).toBe(false);
        expect(updatedState.error).toEqual(null);
        expect(updatedState.listName).toEqual("");
    });
});
