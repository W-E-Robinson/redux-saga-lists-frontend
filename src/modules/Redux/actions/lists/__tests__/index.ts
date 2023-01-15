import {
    fetchListRequest,
    fetchListFailure,
    fetchListSuccess,
    toggleCompletionRequest,
    toggleCompletionSuccess,
    toggleCompletionFailure,
    addItemRequest,
    addItemSuccess,
    addItemFailure,
    deleteItemRequest,
    deleteItemSuccess,
    deleteItemFailure,
} from "../actions";

describe("Actions functions testing", () => {
    test("#1 fetchListRequest", () => {
        expect(fetchListRequest().type).toBe("FETCH_LIST_REQUEST");
    });
    test("#2 fetchListFailure", () => {
        expect(fetchListFailure({ error: "mock error" }).type).toBe("FETCH_LIST_FAILURE");
    });
    test("#3 fetchListSuccess", () => {
        expect(fetchListSuccess({ list: [{ id: 1, value: "mock value", completed: true }] }).type).toBe("FETCH_LIST_SUCCESS");
    });
    test("#4 toggleCompletionRequest", () => {
        expect(toggleCompletionRequest({ id: 1 }).type).toBe("TOGGLE_COMPLETION_REQUEST");
    });
    test("#5 toggleCompletionFailure", () => {
        expect(toggleCompletionFailure({ error: "mock error" }).type).toBe("TOGGLE_COMPLETION_FAILURE");
    });
    test("#6 toggleCompletionSuccess", () => {
        expect(toggleCompletionSuccess({ list: [{ id: 1, value: "mock value", completed: true }] }).type).toBe("TOGGLE_COMPLETION_SUCCESS");
    });
    test("#7 addItemRequest", () => {
        expect(addItemRequest({ value: "mock value" }).type).toBe("ADD_ITEM_REQUEST");
    });
    test("#8 addItemFailure", () => {
        expect(addItemFailure({ error: "mock error" }).type).toBe("ADD_ITEM_FAILURE");
    });
    test("#9 addItemSuccess", () => {
        expect(addItemSuccess({ list: [{ id: 1, value: "mock value", completed: true }] }).type).toBe("ADD_ITEM_SUCCESS");
    });
    test("#10 deleteItemRequest", () => {
        expect(deleteItemRequest({ id: 1 }).type).toBe("DELETE_ITEM_REQUEST");
    });
    test("#11 deleteItemFailure", () => {
        expect(deleteItemFailure({ error: "mock error" }).type).toBe("DELETE_ITEM_FAILURE");
    });
    test("#12 deleteItemSuccess", () => {
        expect(deleteItemSuccess({ list: [{ id: 1, value: "mock value", completed: true }] }).type).toBe("DELETE_ITEM_SUCCESS");
    });
});

