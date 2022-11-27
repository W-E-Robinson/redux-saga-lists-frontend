import { put, call, takeLatest, all } from "redux-saga/effects";

import { getList } from "../../apis/lists";
import {
    fetchListSuccess,
    fetchListFailure,
} from "../../actions/lists/actions";
import { FETCH_LIST_REQUEST } from "../../actions/lists/actionTypes";

function* fetchListSaga(action) {
    const data = yield call(getList, action.id);

    yield put({
        type: 'FETCH_LIST_SUCCESS',
        data,
    });
}

export function* listsSaga() {
    yield all([takeLatest(FETCH_LIST_REQUEST, fetchListSaga)]);
}

