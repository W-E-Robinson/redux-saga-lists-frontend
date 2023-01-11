import {
    fetchListRequest,
    fetchListFailure,
    fetchListSuccess,
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
});

