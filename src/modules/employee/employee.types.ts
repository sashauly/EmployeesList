import { EmployeeDetailsStore } from "./employeeDetails/employeeDetails.types";
import { EmployeesListStore } from "./employeesList/employeesList.types";

export type EmployeeStore = {
  employeesList: EmployeesListStore;
  employeeDetails: EmployeeDetailsStore;
};
