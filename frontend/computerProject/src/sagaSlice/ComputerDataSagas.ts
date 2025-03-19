/* import{call,put,takeLatest} from "redux-saga/effects"
import axios from "axios"
import{fetchLoading,fetchComputerData,fetchError, productsType} from "../sliceReducers/getComputerDataSlice"

function *fetchProductsData():Generator<any, void, { data: productsType[] }>{
    try {
        const response=yield call(axios.get,("http://localhost:5000/product"))
        yield put(fetchComputerData(response.data))
    } catch (error ) {
        if (error instanceof Error) {
            yield put(fetchError(error.message));
          } else {
            yield put(fetchError("An unknown error occurred"));
          }
    }
}
function *watchFetchProductsData(){
    yield takeLatest(fetchLoading.type,fetchProductsData)
}
export default watchFetchProductsData; */
// src/redux/sagas/computerDataSaga.ts
import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { fetchComputerData, fetchError, fetchRequest } from "../sliceReducers/getComputerDataSlice";
import { productsType } from "../sliceReducers/getComputerDataSlice";

const fetchData = async () => {
    const response = await axios.get<productsType[]>("http://localhost:5000/product");
    return response.data;
}

function* handleFetchData() {
    try {
        const data: productsType[] = yield call(fetchData);
        yield put(fetchComputerData(data));
    } catch (error: any) {
        yield put(fetchError(error.message));
    }
}

export function* watchFetchData() {
    yield takeLatest(fetchRequest.type, handleFetchData);
}
