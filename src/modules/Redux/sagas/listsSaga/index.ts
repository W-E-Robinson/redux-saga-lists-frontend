import { put, call, takeLatest, all } from "redux-saga/effects";

import {
    fetchListSuccess,
    fetchListFailure,
} from "../../actions/lists/actions";
import { FETCH_LIST_REQUEST } from "../../actions/lists/actionTypes";
import { getList } from "../../apis/lists";

function* fetchListSaga(action) {
    try {
        const response = yield call(getList, action.payload.id);
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

export default function* listsSaga() {
    yield all([
        takeLatest(FETCH_LIST_REQUEST, fetchListSaga),
    ]);
}

