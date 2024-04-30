import { applyMiddleware, createStore } from "redux";
import { employeeReducer } from "./redux/employee.reducers";
import { thunk } from "redux-thunk";

const store = createStore(employeeReducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;

export default store;
