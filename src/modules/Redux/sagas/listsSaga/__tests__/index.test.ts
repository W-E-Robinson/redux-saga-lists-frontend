import { call, put, take } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";

import { fetchListSaga } from "../index";
import {
    fetchListSuccess,
    //fetchListFailure,
} from "../../../actions/lists/actions";
import { FETCH_LIST_REQUEST } from "../../../actions/lists/actionTypes";
import { getList } from "../../../apis/lists";

const mockData = [
    {
        "id": 1,
        "value": "take out the rubbish",
        "completed": true, 
    },
    {
        "id": 2,
        "value": "take out the garbage",
        "completed": false,
    },
    {
        "id": 3,
        "value": "walk the dog",
        "completed": false,
    },
];

describe("#1 fetchListSaga testing", () => {
    function* mockSaga(api) {
        const action = yield take(FETCH_LIST_REQUEST);
        const response = yield call(api.getList, action.payload);

        yield put({
            type: FETCH_LIST_REQUEST,
            payload: response,
        });
    };

    test("#1 mockSaga", () => {
        const api = {
            getList: resource => ({ resource }),
        };

        return expectSaga(mockSaga, api)
            .put({
                type: FETCH_LIST_REQUEST,
                payload: { resource: "mockResource" },
            })
            .dispatch({
                type: FETCH_LIST_REQUEST,
                payload: "mockResource",
            })
            .run();
    });

    test("#2 successful response", () => {
        const response = {
            message: "List successfully returned",
            data: mockData,
        };

        const generator = fetchListSaga();

        expect(generator.next().value).toEqual(call(
            getList,
        ));
        expect(generator.next(response).value).toEqual(put(
            fetchListSuccess({
                list: [mockData]
            })
        ));
    });
});
