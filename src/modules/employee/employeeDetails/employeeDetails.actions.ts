import EEmployeeDetailsConsts from "./employeeDetails.consts";
import { Employee } from "./employeeDetails.types";

export const fetchEmployeeDetailsRequest = () => ({
  type: EEmployeeDetailsConsts.FETCH_EMPLOYEE_REQUEST,
});

export const fetchEmployeeDetailsSuccess = (selectedEmployee: Employee) => ({
  type: EEmployeeDetailsConsts.FETCH_EMPLOYEE_SUCCESS,
  payload: selectedEmployee,
});

export const fetchEmployeeDetailsFailure = (error: string) => ({
  type: EEmployeeDetailsConsts.FETCH_EMPLOYEE_FAILURE,
  payload: error,
});

export const updateEmployeeDetailsRequest = () => ({
  type: EEmployeeDetailsConsts.UPDATE_EMPLOYEE_REQUEST,
});

export const updateEmployeeDetailsSuccess = (selectedEmployee: Employee) => ({
  type: EEmployeeDetailsConsts.UPDATE_EMPLOYEE_SUCCESS,
  payload: selectedEmployee,
});

export const updateEmployeeDetailsFailure = (error: string) => ({
  type: EEmployeeDetailsConsts.UPDATE_EMPLOYEE_FAILURE,
  payload: error,
});

export const setEditMode = (isEditing: boolean) => ({
  type: EEmployeeDetailsConsts.SET_EDIT_MODE,
  payload: isEditing,
});
