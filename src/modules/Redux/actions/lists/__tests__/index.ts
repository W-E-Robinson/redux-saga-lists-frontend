import {
    fetchListRequest,
    fetchListFailure,
    fetchListSuccess,
    toggleCompletionRequest,
    toggleCompletionSuccess,
    toggleCompletionFailure,
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
});

