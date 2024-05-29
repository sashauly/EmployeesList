import { Employee } from "../employeeDetails/employeeDetails.types";

export interface EmployeesList {
  employees: Employee[];
}

export type EmployeesListStore = ReducerState<EmployeesList>;
