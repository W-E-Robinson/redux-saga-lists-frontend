import {
    fetchListRequest,
    fetchListSuccess,
    fetchListFailure,
} from "../actions.ts";

describe("Actions functions testing", () => {
    const functions = [
        fetchListRequest,
        fetchListSuccess,
        fetchListFailure,
    ];

    for (const func of functions) {
        test("function test", () => {
            const f = func("");
            expect(f.type).toBeTruthy();
        });
    }
});

