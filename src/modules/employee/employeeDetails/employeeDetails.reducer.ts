import { AnyAction } from "redux";
import EEmployeeDetailsConsts from "./employeeDetails.consts";
import { EmployeeDetailsStore } from "./employeeDetails.types";

const initialState: EmployeeDetailsStore = {
  success: { selectedEmployee: null, isEditing: false },
  isLoading: false,
  error: null,
};

export const employeeDetailsStore: React.Reducer<
  EmployeeDetailsStore,
  AnyAction
> = (state = initialState, action: AnyAction): EmployeeDetailsStore => {
  switch (action.type) {
    case EEmployeeDetailsConsts.FETCH_EMPLOYEE_REQUEST:
      return { ...state, isLoading: true };
    case EEmployeeDetailsConsts.FETCH_EMPLOYEE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: { selectedEmployee: action.payload, isEditing: false },
      };
    case EEmployeeDetailsConsts.FETCH_EMPLOYEE_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    case EEmployeeDetailsConsts.UPDATE_EMPLOYEE_REQUEST:
      return { ...state, isLoading: true };
    case EEmployeeDetailsConsts.UPDATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: { selectedEmployee: action.payload, isEditing: false },
      };
    case EEmployeeDetailsConsts.UPDATE_EMPLOYEE_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    case EEmployeeDetailsConsts.SET_EDIT_MODE:
      return {
        ...state,
        success: {
          selectedEmployee: state.success.selectedEmployee,
          isEditing: action.payload,
        },
      };

    default:
      return state;
  }
};
