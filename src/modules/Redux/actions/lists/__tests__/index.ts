import {
    fetchListRequest,
    fetchListSuccess,
    fetchListFailure,
} from "../actions";

describe("Actions functions testing", () => {
    test.each([
        [fetchListRequest, "FETCH_LIST_REQUEST"],
        [fetchListSuccess, "FETCH_LIST_SUCCESS"],
        [fetchListFailure, "FETCH_LIST_FAILURE"],
    ])("%s action should have type %s", (action, actionType: string) => {
        expect(action().type).toBe(actionType);
    });
});

