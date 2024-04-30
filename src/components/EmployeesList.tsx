import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../redux/employee.thunk";
import { Employee, EmployeeState } from "../redux/employee.types";
import { AppDispatch } from "../store";
import { useNavigate } from "react-router-dom";
import style from "./EmployeesList.module.css";
import CustomButton from "./CustomButton";

export const EmployeesList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { employees, isLoading, error } = useSelector(
    (state: EmployeeState) => state
  );
  const navigate = useNavigate();

  const onRefreshClick = () => {
    dispatch(fetchEmployees());
  };

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleEmployeeClick = (employeeId: number) => {
    navigate(`/employee/${employeeId}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={style.employees__container}>
      <h1>EmployeesList</h1>
      <CustomButton onClick={onRefreshClick}>Refresh</CustomButton>
      <ul className={style.employees__list}>
        {employees.map((employee: Employee) => (
          <li
            key={employee.id}
            className={style.employees__list__item}
            onClick={() => handleEmployeeClick(employee.id)}
          >
            <h3>{employee.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};
