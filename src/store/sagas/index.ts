import { all, call, spawn, takeEvery } from 'redux-saga/effects';

const wait = (t: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, t)
  });
};

export function* genFunction() {
  // yield wait(1000);
  // we don't have anything async here yet
};

export function* watchNumbersSaga() {
  yield takeEvery('CLICK_NUMBER', genFunction);
};

export function* watchCancelSaga() {
  yield takeEvery('CLICK_CANCEL', genFunction);
};

export function* watchOperationSaga() {
  yield takeEvery('CLICK_OPERATION', genFunction);
};

function* rootSaga() {
  const sagas = [
    watchNumbersSaga,
    watchCancelSaga,
    watchOperationSaga
  ];

  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          console.warn(e);
        }
      }
    }))
  );
};

export default rootSaga;