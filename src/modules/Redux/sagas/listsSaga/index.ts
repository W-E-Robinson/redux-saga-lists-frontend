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
    ADD_ITEM_REQUEST,
    FETCH_LIST_REQUEST,
    TOGGLE_COMPLETION_REQUEST,
} from "../../actions/lists/actionTypes";
import {
    addItem,
    getList,
    patchList,
} from "../../apis/lists" 
import { ListItem } from "../../actions/lists/types";

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

function* toggleCompletionSaga(id: number) {
    try {
        const response: Response = yield call(patchList, id.payload);
        //const response: Response = yield call(patchList, id);
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

function* addItemSaga(value: string) {
    try {
        const response: Response = yield call(addItem, value);
        //const response: Response = yield call(patchList, id);
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

