import {
  FETCH_EMPLOYEE_FAILURE,
  FETCH_EMPLOYEE_LIST_FAILURE,
  FETCH_EMPLOYEE_LIST_REQUEST,
  FETCH_EMPLOYEE_LIST_SUCCESS,
  FETCH_EMPLOYEE_REQUEST,
  FETCH_EMPLOYEE_SUCCESS,
  SET_EDIT_MODE,
  UPDATE_EMPLOYEE_FAILURE,
  UPDATE_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_SUCCESS,
} from "./employee.consts";
import { Employee } from "./employee.types";

export const fetchEmployeeListRequest = () => ({
  type: FETCH_EMPLOYEE_LIST_REQUEST,
});

export const fetchEmployeeListSuccess = (employees: Employee[]) => ({
  type: FETCH_EMPLOYEE_LIST_SUCCESS,
  payload: employees,
});

export const fetchEmployeeListFailure = (error: string) => ({
  type: FETCH_EMPLOYEE_LIST_FAILURE,
  payload: error,
});

export const fetchEmployeeRequest = () => ({
  type: FETCH_EMPLOYEE_REQUEST,
});

export const fetchEmployeeSuccess = (selectedEmployee: Employee) => ({
  type: FETCH_EMPLOYEE_SUCCESS,
  payload: selectedEmployee,
});

export const fetchEmployeeFailure = (error: string) => ({
  type: FETCH_EMPLOYEE_FAILURE,
  payload: error,
});

export const updateEmployeeRequest = () => ({
  type: UPDATE_EMPLOYEE_REQUEST,
});

export const updateEmployeeSuccess = (selectedEmployee: Employee) => ({
  type: UPDATE_EMPLOYEE_SUCCESS,
  payload: selectedEmployee,
});

export const updateEmployeeFailure = (error: string) => ({
  type: UPDATE_EMPLOYEE_FAILURE,
  payload: error,
});

export const setEditMode = (isEditing: boolean) => ({
  type: SET_EDIT_MODE,
  payload: isEditing,
});
