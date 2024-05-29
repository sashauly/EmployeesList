import { Employee } from "../employeeDetails/employeeDetails.types";
import EEmployeeListConsts from "./employeesList.consts";

export const fetchEmployeeListRequest = () => ({
  type: EEmployeeListConsts.FETCH_EMPLOYEE_LIST_REQUEST,
});

export const fetchEmployeeListSuccess = (employees: Employee[]) => ({
  type: EEmployeeListConsts.FETCH_EMPLOYEE_LIST_SUCCESS,
  payload: employees,
});

export const fetchEmployeeListFailure = (error: string) => ({
  type: EEmployeeListConsts.FETCH_EMPLOYEE_LIST_FAILURE,
  payload: error,
});
