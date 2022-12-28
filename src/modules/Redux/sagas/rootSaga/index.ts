import { all, fork } from 'redux-saga/effects';

import listsSaga from "../listsSaga";

export function* rootSaga() {
    yield all([fork(listsSaga)]);
}
