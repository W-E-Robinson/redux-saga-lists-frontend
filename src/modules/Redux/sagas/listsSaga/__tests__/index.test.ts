import { call, put, take } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";

import {
    ADD_ITEM_REQUEST,
    DELETE_ITEM_REQUEST,
    FETCH_LIST_REQUEST,
    TOGGLE_COMPLETION_REQUEST,
} from "../../../actions/lists/actionTypes";
import {
    fetchListSaga,
    toggleCompletionSaga,
    addItemSaga,
    deleteItemSaga,
} from "../index";
import {
    fetchListSuccess,
    fetchListFailure,
    toggleCompletionSuccess,
    toggleCompletionFailure,
    addItemSuccess,
    addItemFailure,
    deleteItemSuccess,
    deleteItemFailure,
} from "../../../actions/lists/actions";
import {
    getList,
    patchList,
    postItem,
    deleteItem,
} from "../../../apis/lists";
import { ListItem } from "../../../actions/lists/types";
import { mockComponent } from "react-dom/test-utils";

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
        const response: ListItem[] = yield call(api.getList, action.payload);

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
                list: mockData
            })
        ));
    });

    test("#3 error response", () => {
        const response = {
            message: "500 Internal Server Error!",
        };

        const generator = fetchListSaga();

        expect(generator.next().value).toEqual(call(
            getList,
        ));
        expect(generator.throw(response).value).toEqual(put(
            fetchListFailure({
                error: response.message, 
            })
        ));
    });
});

describe("#2 toggleCompletionSaga testing", () => {
    function* mockSaga(api) {
        const action = yield take(TOGGLE_COMPLETION_REQUEST);
        const response: ListItem[] = yield call(api.patchList, action.payload);

        yield put({
            type: TOGGLE_COMPLETION_REQUEST,
            payload: response,
        });
    };

    test("#1 mockSaga", () => {
        const api = {
            patchList: resource => ({ resource }),
        };

        return expectSaga(mockSaga, api)
            .put({
                type: TOGGLE_COMPLETION_REQUEST,
                payload: { resource: "mockResource" },
            })
            .dispatch({
                type: TOGGLE_COMPLETION_REQUEST,
                payload: "mockResource",
            })
            .run();
    });

    test("#2 successful response", () => {
        const mockAction = {
            type: TOGGLE_COMPLETION_REQUEST,
            payload: {
                id : 1,
            },
        };

        const response = {
            message: "List successfully returned",
            data: mockData,
        };

        const generator = toggleCompletionSaga(mockAction);

        expect(generator.next().value).toEqual(call(
            patchList
        ));
        expect(generator.next(response).value).toEqual(put(
            toggleCompletionSuccess({
                list: mockData
            })
        ));
    });

    test("#3 error response", () => {
        const mockAction = {
            type: TOGGLE_COMPLETION_REQUEST,
            payload: {
                id : 1,
            },
        };

        const response = {
            message: "500 Internal Server Error!",
        };

        const generator = toggleCompletionSaga(mockAction);

        expect(generator.next().value).toEqual(call(
            patchList,
        ));
        expect(generator.throw(response).value).toEqual(put(
            toggleCompletionFailure({
                error: response.message, 
            })
        ));
    });
});
