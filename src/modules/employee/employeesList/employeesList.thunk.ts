import { Dispatch } from "react";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  Employee,
  EmployeeDetailsStore,
} from "../employeeDetails/employeeDetails.types";
import {
  fetchEmployeeListFailure,
  fetchEmployeeListRequest,
  fetchEmployeeListSuccess,
} from "./employeesList.actions";

const baseUrl = "https://jsonplaceholder.typicode.com/users";

export const fetchEmployees =
  (): ThunkAction<void, EmployeeDetailsStore, unknown, AnyAction> =>
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
