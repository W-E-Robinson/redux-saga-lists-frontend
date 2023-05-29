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
            getList: (resource: string) => ({ resource }),
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
    function* mockSaga(api: unknown) {
        const action = yield take(TOGGLE_COMPLETION_REQUEST);
        const response: ListItem[] = yield call(api.patchList, action.payload);

        yield put({
            type: TOGGLE_COMPLETION_REQUEST,
            payload: response,
        });
    };

    test("#1 mockSaga", () => {
        const api = {
            patchList: (resource: string) => ({ resource }),
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
            patchList, mockAction.payload.id,
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
            patchList, mockAction.payload.id,
        ));
        expect(generator.throw(response).value).toEqual(put(
            toggleCompletionFailure({
                error: response.message, 
            })
        ));
    });
});

describe("#3 addItemSaga testing", () => {
    function* mockSaga(api: unknown) {
        const action = yield take(ADD_ITEM_REQUEST);
        const response: ListItem[] = yield call(api.postItem, action.payload);

        yield put({
            type: ADD_ITEM_REQUEST,
            payload: response,
        });
    };

    test("#1 mockSaga", () => {
        const api = {
            postItem: (resource: string) => ({ resource }),
        };

        return expectSaga(mockSaga, api)
            .put({
                type: ADD_ITEM_REQUEST,
                payload: { resource: "mockResource" },
            })
            .dispatch({
                type: ADD_ITEM_REQUEST,
                payload: "mockResource",
            })
            .run();
    });

    test("#2 successful response", () => {
        const mockAction = {
            type: ADD_ITEM_REQUEST,
            payload: {
                value: "mock value",
            },
        };

        const response = {
            message: "List successfully returned",
            data: mockData,
        };

        const generator = addItemSaga(mockAction);

        expect(generator.next().value).toEqual(call(
            postItem, mockAction.payload.value,
        ));
        expect(generator.next(response).value).toEqual(put(
            addItemSuccess({
                list: mockData
            })
        ));
    });

    test("#3 error response", () => {
        const mockAction = {
            type: ADD_ITEM_REQUEST,
            payload: {
                value: "mock value",
            },
        };

        const response = {
            message: "500 Internal Server Error!",
        };

        const generator = addItemSaga(mockAction);

        expect(generator.next().value).toEqual(call(
            postItem, mockAction.payload.value,
        ));
        expect(generator.throw(response).value).toEqual(put(
            addItemFailure({
                error: response.message, 
            })
        ));
    });
});

describe("#4 deleteItemSaga testing", () => {
    function* mockSaga(api: unknown) {
        const action = yield take(DELETE_ITEM_REQUEST);
        const response: ListItem[] = yield call(api.deleteItem, action.payload);

        yield put({
            type: DELETE_ITEM_REQUEST,
            payload: response,
        });
    };

    test("#1 mockSaga", () => {
        const api = {
            deleteItem: (resource: string) => ({ resource }),
        };

        return expectSaga(mockSaga, api)
            .put({
                type: DELETE_ITEM_REQUEST,
                payload: { resource: "mockResource" },
            })
            .dispatch({
                type: DELETE_ITEM_REQUEST,
                payload: "mockResource",
            })
            .run();
    });

    test("#2 successful response", () => {
        const mockAction = {
            type: DELETE_ITEM_REQUEST,
            payload: {
                id : 1,
            },
        };

        const response = {
            message: "List successfully returned",
            data: mockData,
        };

        const generator = deleteItemSaga(mockAction);

        expect(generator.next().value).toEqual(call(
            deleteItem, mockAction.payload.id,
        ));
        expect(generator.next(response).value).toEqual(put(
            deleteItemSuccess({
                list: mockData
            })
        ));
    });

    test("#3 error response", () => {
        const mockAction = {
            type: DELETE_ITEM_REQUEST,
            payload: {
                id : 1,
            },
        };

        const response = {
            message: "500 Internal Server Error!",
        };

        const generator = deleteItemSaga(mockAction);

        expect(generator.next().value).toEqual(call(
            deleteItem, mockAction.payload.id,
        ));
        expect(generator.throw(response).value).toEqual(put(
            deleteItemFailure({
                error: response.message, 
            })
        ));
    });
});
