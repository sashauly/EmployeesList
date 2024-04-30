import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployee, updateEmployee } from "../redux/employee.thunk";
import { AppDispatch } from "../store";
import { Employee, EmployeeState } from "../redux/employee.types";
import style from "./EmployeesList.module.css";
import CustomButton from "./CustomButton";
import { setEditMode } from "../redux/employee.actions";
import EditForm from "./EditForm";

const EmployeeDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { selectedEmployee, isLoading, isEditing, error } = useSelector(
    (state: EmployeeState) => state
  );

  useEffect(() => {
    dispatch(fetchEmployee(Number(id)));
  }, [dispatch, id]);

  const handleEditSubmit = (updatedEmployee: Employee) => {
    dispatch(updateEmployee(updatedEmployee));
    dispatch(setEditMode(false));
  };

  const handleEditClick = () => {
    dispatch(setEditMode(true));
  };
  const handleRefreshClick = () => {
    dispatch(fetchEmployee(Number(id)));
  };

  if (isLoading) return <div>Loading...</div>;
  if (!selectedEmployee) return <div>Employee not found</div>;
  if (error)
    return (
      <div>
        Error: {error}
        <CustomButton onClick={() => dispatch(fetchEmployee(Number(id)))}>
          Retry
        </CustomButton>
      </div>
    );

  return (
    <div className={style.employee__container}>
      <div className={style.employee__header}>
        <Link to="/">Go Back</Link>
        <div className={style.employee__buttons}>
          <CustomButton disabled={isEditing} onClick={handleEditClick}>
            Edit
          </CustomButton>
          <CustomButton disabled={isEditing} onClick={handleRefreshClick}>
            Refresh
          </CustomButton>
        </div>
      </div>
      {isEditing ? (
        <EditForm
          employee={selectedEmployee as Employee}
          onSubmit={handleEditSubmit}
        />
      ) : (
        <div className={style.employee__details}>
          <h1>{selectedEmployee?.name}</h1>
          <p>email: {selectedEmployee?.email}</p>
          <p>phone: {selectedEmployee?.phone}</p>
          <p>username: {selectedEmployee?.username}</p>
          <p>website: {selectedEmployee?.website}</p>
        </div>
      )}
    </div>
  );
};

export default EmployeeDetails;
