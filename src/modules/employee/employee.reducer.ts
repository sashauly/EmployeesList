import { combineReducers } from "redux";
import { employeeDetailsStore } from "./employeeDetails/employeeDetails.reducer";
import { employeesListStore } from "./employeesList/employeesList.reducer";

const employeeReducer = combineReducers({
  employeesList: employeesListStore,
  employeeDetails: employeeDetailsStore,
});

export default employeeReducer;
