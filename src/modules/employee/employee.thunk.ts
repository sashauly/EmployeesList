import { AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  fetchEmployeeFailure,
  fetchEmployeeListFailure,
  fetchEmployeeListRequest,
  fetchEmployeeListSuccess,
  fetchEmployeeRequest,
  fetchEmployeeSuccess,
  updateEmployeeFailure,
  updateEmployeeRequest,
  updateEmployeeSuccess,
} from "./employee.actions";
import { Employee, EmployeeState } from "./employee.types";

const baseUrl = "https://jsonplaceholder.typicode.com/users";

export const fetchEmployees =
  (): ThunkAction<void, EmployeeState, unknown, AnyAction> =>
  async (dispatch: Dispatch<AnyAction>) => {
    dispatch(fetchEmployeeListRequest());
    try {
      const response = await fetch(baseUrl);
      const data: Employee[] = await response.json();
      dispatch(fetchEmployeeListSuccess(data));
    } catch (error) {
      dispatch(fetchEmployeeListFailure(error as string));
    }
  };

export const fetchEmployee =
  (id: number): ThunkAction<void, EmployeeState, unknown, AnyAction> =>
  async (dispatch: Dispatch<AnyAction>) => {
    dispatch(fetchEmployeeRequest());
    try {
      const response = await fetch(`${baseUrl}/${id}`);
      const data: Employee = await response.json();
      dispatch(fetchEmployeeSuccess(data));
    } catch (error) {
      dispatch(fetchEmployeeFailure(error as string));
    }
  };

export const updateEmployee =
  (employeeData: Partial<Employee>) =>
  async (dispatch: Dispatch<AnyAction>) => {
    dispatch(updateEmployeeRequest());
    try {
      const response = await fetch(`${baseUrl}/${employeeData.id}`, {
        method: "PUT",
        body: JSON.stringify(employeeData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      dispatch(updateEmployeeSuccess(data));
    } catch (error) {
      dispatch(updateEmployeeFailure(error as string));
    }
  };
