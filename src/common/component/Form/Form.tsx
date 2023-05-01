import { useAppDispatch } from "app/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import s from "./Form.module.scss";
import React from "react";
import { Button } from "common/component/Button/Button";
import { NavLink } from "react-router-dom";
type FormType = {
  callback: any;
  name: string;
  toggle: boolean;
};
export const Form = (props: FormType) => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      rememberMe: false,
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => dispatch(props.callback(data));
  return (
    <form className={s.formContainer} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.input}>
        <input
          placeholder={"Email"}
          {...register("email", {
            required: "Обязательно",
            minLength: {
              value: 5,
              message: "минимум 5 символов",
            },
          })}
        />
      </div>
      {props.toggle ? (
        <div className={s.input}>
          <input placeholder={"Password"} {...register("password")} />
        </div>
      ) : (
        ""
      )}

      {props.toggle ? (
        <div className={s.input}>
          <input type={"checkbox"} {...register("rememberMe")} />
          Remember me
        </div>
      ) : (
        <div className={s.input}>
          <input placeholder={"Confirm password"} {...register("confirmPassword")} />
        </div>
      )}
      {props.toggle && (
        <NavLink className={s.forgotPassword} to={""}>
          {" "}
          Forgot password{" "}
        </NavLink>
      )}
      <Button name={props.name} />
    </form>
  );
};

interface IFormInput {
  email: string;
  password: string;
  rememberMe: boolean;
  confirmPassword: "";
}
