import { AnyAction } from "redux";
import { Employee } from "./actions";

export interface EmployeeState {
  employees: Employee[];
  isLoading: boolean;
  error: string | null;
}

const initialState: EmployeeState = {
  employees: [],
  isLoading: false,
  error: null,
};

export const employeeReducer = (
  state = initialState,
  action: AnyAction
): EmployeeState => {
  switch (action.type) {
    case "FETCH_EMPLOYEES_REQUEST":
      return { ...state, isLoading: true };
    case "FETCH_EMPLOYEES_SUCCESS":
      return { ...state, isLoading: false, employees: action.payload };
    case "FETCH_EMPLOYEES_FAILURE":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
