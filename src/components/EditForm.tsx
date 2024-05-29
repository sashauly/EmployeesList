import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setEditMode } from "../modules/employee/employeeDetails/employeeDetails.actions";
import { Employee } from "../modules/employee/employeeDetails/employeeDetails.types";
import style from "../style/EmployeesList.module.css";
import CustomButton from "./CustomButton";

interface EmployeeEditFormProps {
  employee: Employee;
  onSubmit: (updatedEmployee: Employee) => void;
}

interface EmployeeFormErrorMessageProps {
  errorMessage: string | undefined;
}

const EmployeeFormErrorMessage = ({
  errorMessage,
}: EmployeeFormErrorMessageProps) => (
  <span className={style.employee__form__error}>{errorMessage}</span>
);

const EmployeeEditForm: React.FC<EmployeeEditFormProps> = ({
  employee,
  onSubmit,
}) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: employee,
  });

  useEffect(() => {
    Object.keys(employee).forEach((key) => {
      setValue(key, employee[key]);
    });
  }, [employee, setValue]);

  const handleCancel = () => {
    dispatch(setEditMode(false));
  };

  return (
    <>
      <h2>Edit employee</h2>
      <form className={style.employee__form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name:</label>
        <div className={style.employee__form__input}>
          <input
            id="name"
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Name"
            autoComplete={"name"}
          />
          {errors.name && (
            <EmployeeFormErrorMessage errorMessage={errors.name.message} />
          )}
        </div>

        <label htmlFor="email">Email:</label>
        <div className={style.employee__form__input}>
          <input
            id="email"
            type="email"
            {...register("email", { required: "email is required" })}
            placeholder="Email"
            autoComplete={"email"}
          />
          {errors.email && (
            <EmployeeFormErrorMessage errorMessage={errors.email.message} />
          )}
        </div>

        <label htmlFor="phone">Phone:</label>
        <div className={style.employee__form__input}>
          <input
            id="phone"
            type="text"
            {...register("phone", { required: "Phone is required" })}
            placeholder="Phone"
            autoComplete={"tel"}
          />
          {errors.phone && (
            <EmployeeFormErrorMessage errorMessage={errors.phone.message} />
          )}
        </div>

        <label htmlFor="username">Username:</label>
        <div className={style.employee__form__input}>
          <input
            id="username"
            type="text"
            {...register("username", { required: "Username is required" })}
            placeholder="Username"
            autoComplete={"username"}
          />
          {errors.username && (
            <EmployeeFormErrorMessage errorMessage={errors.username.message} />
          )}
        </div>

        <label htmlFor="website">Website:</label>
        <div className={style.employee__form__input}>
          <input
            id="website"
            type="text"
            {...register("website", { required: "Website is required" })}
            placeholder="Website"
            autoComplete={"url"}
          />
          {errors.website && (
            <EmployeeFormErrorMessage errorMessage={errors.website.message} />
          )}
        </div>

        <div className={style.employee__form__actions}>
          <CustomButton type="submit" disabled={!isDirty}>
            Save
          </CustomButton>
          <CustomButton type="button" onClick={handleCancel}>
            Cancel
          </CustomButton>
        </div>
      </form>
    </>
  );
};

export default EmployeeEditForm;
