import { AnyAction } from "redux";
import EEmployeeListConsts from "./employeesList.consts";
import { EmployeesListStore } from "./employeesList.types";

const initialState: EmployeesListStore = {
  success: {
    employees: [],
  },
  isLoading: false,
  error: null,
};

export const employeesListStore: React.Reducer<
  EmployeesListStore,
  AnyAction
> = (state = initialState, action: AnyAction): EmployeesListStore => {
  switch (action.type) {
    case EEmployeeListConsts.FETCH_EMPLOYEE_LIST_REQUEST:
      return { ...state, isLoading: true };
    case EEmployeeListConsts.FETCH_EMPLOYEE_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: { employees: action.payload },
      };
    case EEmployeeListConsts.FETCH_EMPLOYEE_LIST_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
