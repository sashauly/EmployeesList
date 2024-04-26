import { ThunkAction } from "redux-thunk";
import { AnyAction, Dispatch } from "redux";
import { EmployeeState } from "./reducers";

export interface Employee {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const FETCH_EMPLOYEES_REQUEST = "FETCH_EMPLOYEES_REQUEST";
export const FETCH_EMPLOYEES_SUCCESS = "FETCH_EMPLOYEES_SUCCESS";
export const FETCH_EMPLOYEES_FAILURE = "FETCH_EMPLOYEES_FAILURE";

export const fetchEmployeesRequest = () => ({
  type: FETCH_EMPLOYEES_REQUEST,
});

export const fetchEmployeesSuccess = (employees: Employee[]) => ({
  type: FETCH_EMPLOYEES_SUCCESS,
  payload: employees,
});

export const fetchEmployeesFailure = (error: string) => ({
  type: FETCH_EMPLOYEES_FAILURE,
  payload: error,
});

export const fetchEmployees =
  (): ThunkAction<void, EmployeeState, unknown, AnyAction> =>
  async (dispatch: Dispatch<AnyAction>) => {
    dispatch(fetchEmployeesRequest());
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data: Employee[] = await response.json();
      dispatch(fetchEmployeesSuccess(data));
    } catch (error) {
      dispatch(fetchEmployeesFailure(error as string));
    }
  };
