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
  [key: string]: unknown;
}

export interface EmployeeDetails {
  selectedEmployee: Employee | null;
  isEditing: boolean;
}

export type EmployeeDetailsStore = ReducerState<EmployeeDetails>;
