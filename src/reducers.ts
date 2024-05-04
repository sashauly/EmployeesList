import { combineReducers } from "redux";
import { employeeReducer } from "./modules/employee/employee.reducer";

export default combineReducers({
  employee: employeeReducer,
});
