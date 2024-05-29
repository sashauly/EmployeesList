import { AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  fetchEmployeeDetailsFailure,
  fetchEmployeeDetailsRequest,
  fetchEmployeeDetailsSuccess,
  updateEmployeeDetailsFailure,
  updateEmployeeDetailsRequest,
  updateEmployeeDetailsSuccess,
} from "./employeeDetails.actions";

import { Employee, EmployeeDetailsStore } from "./employeeDetails.types";

const baseUrl = "https://jsonplaceholder.typicode.com/users";

export const fetchEmployee =
  (id: number): ThunkAction<void, EmployeeDetailsStore, unknown, AnyAction> =>
  async (dispatch: Dispatch<AnyAction>) => {
    dispatch(fetchEmployeeDetailsRequest());
    try {
      const response = await fetch(`${baseUrl}/${id}`);
      const data: Employee = await response.json();
      dispatch(fetchEmployeeDetailsSuccess(data));
    } catch (error) {
      dispatch(fetchEmployeeDetailsFailure(error as string));
    }
  };

export const updateEmployee =
  (employeeData: Partial<Employee>) =>
  async (dispatch: Dispatch<AnyAction>) => {
    dispatch(updateEmployeeDetailsRequest());
    try {
      const response = await fetch(`${baseUrl}/${employeeData.id}`, {
        method: "PUT",
        body: JSON.stringify(employeeData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      dispatch(updateEmployeeDetailsSuccess(data));
    } catch (error) {
      dispatch(updateEmployeeDetailsFailure(error as string));
    }
  };
