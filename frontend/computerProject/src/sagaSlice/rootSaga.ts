/* import { all, fork } from "redux-saga/effects";
import watchFetchProductsData from "./ComputerDataSagas";

export default function* rootSaga() {
  yield all([
    fork(watchFetchProductsData)
  ]);
} */
// src/redux/sagas/index.ts
import { all } from "redux-saga/effects";
import { watchFetchData } from "./ComputerDataSagas";
import { watchSingleData } from "./GetSingleComputerDataSaga";

export default function* rootSaga() {
    yield all([
        watchFetchData(),
        watchSingleData()
    ]);
}
