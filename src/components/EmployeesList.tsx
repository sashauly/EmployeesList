import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Employee, fetchEmployees } from "../redux/actions";
import { EmployeeState } from "../redux/reducers";
import { AppDispatch } from "../redux/store";

export const EmployeesList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { employees, isLoading, error } = useSelector(
    (state: EmployeeState) => state
  );
  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <h1>EmployeesList</h1>
      {employees.map((employee: Employee) => (
        <div key={employee.id}>
          <h3>{employee.name}</h3>
          <p>{employee.email}</p>
        </div>
      ))}
    </div>
  );
};
