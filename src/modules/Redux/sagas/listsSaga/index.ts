import { put, call, takeLatest, takeEvery, all } from "redux-saga/effects";

import {
    fetchListSuccess,
    fetchListFailure,
    toggleCompletionSuccess,
    toggleCompletionFailure,
    addItemSuccess,
    addItemFailure,
    deleteItemSuccess,
    deleteItemFailure,
} from "../../actions/lists/actions";
import {
    FETCH_LIST_REQUEST,
    TOGGLE_COMPLETION_REQUEST,
    ADD_ITEM_REQUEST,
    DELETE_ITEM_REQUEST,
} from "../../actions/lists/actionTypes";
import {
    getList,
    patchList,
    postItem,
    deleteItem,
} from "../../apis/lists" 
import { AddItemRequest, DeleteItemRequest, ListItem, ToggleCompletionRequest } from "../../actions/lists/types";

interface Response {
    data: ListItem[];
    message: string;
}

export function* fetchListSaga() {
    try {
        const response: Response = yield call(getList);
        yield put(
            fetchListSuccess({
                list: response.data,
            }),
        )   
    } catch (error) {
        yield put(
            fetchListFailure({
                error: error.response ? error.reponse.error : error.message
            }),
        )
    }
}

function* toggleCompletionSaga(action: ToggleCompletionRequest) {
    try {
        const response: Response = yield call(patchList, action.payload.id);
        yield put(
            toggleCompletionSuccess({
                list: response.data,
            }),
        )   
    } catch (error) {
        yield put(
            toggleCompletionFailure({
                error: error.response ? error.reponse.error : error.message
            }),
        )
    }
}

function* addItemSaga(action: AddItemRequest) {
    try {
        const response: Response = yield call(postItem, action.payload.value);
        yield put(
            addItemSuccess({
                list: response.data,
            }),
        )   
    } catch (error) {
        yield put(
            addItemFailure({
                error: error.response ? error.reponse.error : error.message
            }),
        )
    }
}

function* deleteItemSaga(action: DeleteItemRequest) {
    try {
        const response: Response = yield call(deleteItem, action.payload.id);
        yield put(
            deleteItemSuccess({
                list: response.data,
            }),
        )   
    } catch (error) {
        yield put(
            deleteItemFailure({
                error: error.response ? error.reponse.error : error.message
            }),
        )
    }
}

export default function* listsSaga() {
    yield all([
        takeLatest(FETCH_LIST_REQUEST, fetchListSaga),
        takeLatest(TOGGLE_COMPLETION_REQUEST, toggleCompletionSaga),
        takeEvery(ADD_ITEM_REQUEST, addItemSaga),
        takeEvery(DELETE_ITEM_REQUEST, deleteItemSaga),
    ]);
}

