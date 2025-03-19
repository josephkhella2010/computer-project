/* import { configureStore } from "@reduxjs/toolkit";
import computerDataReducer from '../sliceReducers/getComputerDataSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../sagaSlice/rootSaga";
const sagaMiddleware = createSagaMiddleware();

const store=configureStore({
    reducer:{
getComputerData:computerDataReducer
    }, middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})
// Run the root saga
sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
 */



import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import computerDataReducer from "../sliceReducers/getComputerDataSlice";
import rootSaga from "../sagaSlice/rootSaga";
import singleComputerDataReducer from "../sliceReducers/GetSingleComputerDataSlice"

// Create Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Create Store
const store = configureStore({
  reducer: {
    computerData: computerDataReducer, // This should match your useSelector
  singleComputerData:singleComputerDataReducer
},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
});

// Run Saga
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

