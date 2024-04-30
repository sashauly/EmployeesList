import { AnyAction } from "redux";
import { EmployeeState } from "./employee.types";

const initialState: EmployeeState = {
  employees: [],
  selectedEmployee: null,
  isEditing: false,
  isLoading: false,
  error: null,
};

export const employeeReducer = (
  state = initialState,
  action: AnyAction
): EmployeeState => {
  switch (action.type) {
    case "FETCH_EMPLOYEE_LIST_REQUEST":
      return { ...state, isLoading: true };
    case "FETCH_EMPLOYEE_LIST_SUCCESS":
      return { ...state, isLoading: false, employees: action.payload };
    case "FETCH_EMPLOYEE_LIST_FAILURE":
      return { ...state, isLoading: false, error: action.payload };

    case "FETCH_EMPLOYEE_REQUEST":
      return { ...state, isLoading: true };
    case "FETCH_EMPLOYEE_SUCCESS":
      return { ...state, isLoading: false, selectedEmployee: action.payload };
    case "FETCH_EMPLOYEE_FAILURE":
      return { ...state, isLoading: false, error: action.payload };

    case "UPDATE_EMPLOYEE_REQUEST":
      return { ...state, isLoading: true };
    case "UPDATE_EMPLOYEE_SUCCESS":
      return { ...state, isLoading: false, selectedEmployee: action.payload };
    case "UPDATE_EMPLOYEE_FAILURE":
      return { ...state, isLoading: false, error: action.payload };

    case "SET_EDIT_MODE":
      return {
        ...state,
        isEditing: action.payload,
      };

    default:
      return state;
  }
};
