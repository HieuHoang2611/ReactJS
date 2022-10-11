import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/userSaga";
import { createStoreHook } from "react-redux";

// Apply middleware
const sagaMiddleware = createSagaMiddleware();

// Đăng kí reducer cho redux quản lí
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Chạy middleware cho redux để chạy các effect tại dòng code
sagaMiddleware.run(rootSaga);

export default store;