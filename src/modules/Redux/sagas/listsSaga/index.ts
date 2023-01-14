import { put, call, takeLatest, takeEvery, all } from "redux-saga/effects";

import {
    fetchListSuccess,
    fetchListFailure,
    toggleCompletionSuccess,
    toggleCompletionFailure,
    addItemSuccess,
    addItemFailure,
} from "../../actions/lists/actions";
import {
    FETCH_LIST_REQUEST,
    TOGGLE_COMPLETION_REQUEST,
    ADD_ITEM_REQUEST,
} from "../../actions/lists/actionTypes";
import {
    getList,
    patchList,
    postItem,
} from "../../apis/lists" 

function* fetchListSaga() {
    try {
        const response = yield call(getList);
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

function* toggleCompletionSaga(id) {
    try {
        const response = yield call(patchList, id.payload);
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

function* addItemSaga(value) {
    try {
        const response = yield call(postItem, value);
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

export default function* listsSaga() {
    yield all([
        takeLatest(FETCH_LIST_REQUEST, fetchListSaga),
        takeLatest(TOGGLE_COMPLETION_REQUEST, toggleCompletionSaga),
        takeEvery(ADD_ITEM_REQUEST, addItemSaga),
    ]);
}

