import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setEditMode } from "../redux/employee.actions";
import { Employee } from "../redux/employee.types";
import CustomButton from "./CustomButton";
import style from "./EmployeesList.module.css";

interface EmployeeEditFormProps {
  employee: Employee;
  onSubmit: (updatedEmployee: Employee) => void;
}

const EmployeeEditForm: React.FC<EmployeeEditFormProps> = ({
  employee,
  onSubmit,
}) => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState(employee);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formState);
  };

  const handleCancel = () => {
    dispatch(setEditMode(false));
  };

  return (
    <form className={style.employee__form} onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        name="name"
        value={formState.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        name="email"
        value={formState.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <label htmlFor="phone">Phone:</label>
      <input
        id="phone"
        type="text"
        name="phone"
        value={formState.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        name="username"
        value={formState.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <label htmlFor="website">Website:</label>
      <input
        id="website"
        type="text"
        name="website"
        value={formState.website}
        onChange={handleChange}
        placeholder="Website"
      />
      <div className={style.employee__form__actions}>
        <CustomButton type="submit">Save</CustomButton>
        <CustomButton type="button" onClick={handleCancel}>
          Cancel
        </CustomButton>
      </div>
    </form>
  );
};

export default EmployeeEditForm;
