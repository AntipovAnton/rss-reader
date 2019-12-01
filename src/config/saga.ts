import { all, fork } from 'redux-saga/effects';
import { saga as rssSaga } from '../pages/duck';

export default function* rootSaga() {
    yield all([
        fork(rssSaga),
    ]);
}