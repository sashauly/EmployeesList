import { combineReducers } from "redux";
import employeeReducer from "./modules/employee/employee.reducer";

const rootReducer = combineReducers({
  employee: employeeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
