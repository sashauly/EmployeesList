import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setEditMode } from "../modules/employee/employeeDetails/employeeDetails.actions";
import {
  fetchEmployee,
  updateEmployee,
} from "../modules/employee/employeeDetails/employeeDetails.thunk";
import { Employee } from "../modules/employee/employeeDetails/employeeDetails.types";
import { RootState } from "../reducers";
import { AppDispatch } from "../store";
import style from "../style/EmployeesList.module.css";
import CustomButton from "./CustomButton";
import EditForm from "./EditForm";

interface EmployeeNotFoundProps {
  id: string;
}

const EmployeeNotFound: React.FC<EmployeeNotFoundProps> = ({
  id,
}: EmployeeNotFoundProps) => (
  <>
    <h1>Employee not found!</h1>
    <p>Employee with the ID {id} is not found.</p>
    <p>Please check the URL and try again.</p>
    <Link to="/">Go back to the list</Link>
  </>
);

const EmployeeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const {
    success: { selectedEmployee, isEditing },
    isLoading,
    error,
  } = useSelector((state: RootState) => state.employee.employeeDetails);

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

  function isOrgDomain() {
    return selectedEmployee?.website.endsWith(".org");
  }

  if (!selectedEmployee || !selectedEmployee.id)
    return <EmployeeNotFound id={id as string} />;

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={style.employee__container}>
      <h1>
        <Link to="/">Employees</Link>
      </h1>
      <CustomButton disabled={isEditing} onClick={handleRefreshClick}>
        Refresh
      </CustomButton>
      {isEditing ? (
        <EditForm
          employee={selectedEmployee as Employee}
          onSubmit={handleEditSubmit}
        />
      ) : (
        <>
          <div className={style.employee__details}>
            <h2>{selectedEmployee?.name}</h2>
            <p>e-mail: {selectedEmployee?.email}</p>
            <p>Phone: {selectedEmployee?.phone}</p>
            <p>Username: {selectedEmployee?.username}</p>
            {isOrgDomain() && <p>Website: {selectedEmployee?.website}</p>}
          </div>
          <CustomButton disabled={isEditing} onClick={handleEditClick}>
            Edit
          </CustomButton>
        </>
      )}
    </div>
  );
};

export default EmployeeDetails;
