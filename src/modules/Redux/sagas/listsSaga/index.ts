import { put, call, takeLatest, all } from "redux-saga/effects";

import { getList } from "../../apis/lists";
import {
    fetchListSuccess,
    fetchListFailure,
} from "../../actions/lists/actions";
import { FETCH_LIST_REQUEST } from "../../actions/lists/actionTypes";

function* fetchListSaga(action) {
    try {
        const data = yield call(getList, action.payload.id);
        yield put(fetchListSuccess({
            list: response.data;
        })
    } catch (error) {
        yield put(fetchListFailure({
            error = error.response ? error.reponse.error : error.message
        })
    }
}

export function* listsSaga() {
    yield all([
        takeLatest(FETCH_LIST_REQUEST, fetchListSaga),
    ]);
}

