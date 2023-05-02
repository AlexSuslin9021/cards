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

      {props.name === "Sign in" ? (
        <div className={s.input}>
          {" "}
          <input placeholder={"Password"} {...register("password")} />
        </div>
      ) : (
        ""
      )}

      {props.name === "Sign in" ? (
        <div className={s.me}>
          <div>
            <input type={"checkbox"} {...register("rememberMe")} />
            <span> Rememeber me</span>
          </div>
        </div>
      ) : // <span> Remember Me</span>

      // Remember me

      props.name === "Sign up" ? (
        <input placeholder={"Confirm password"} {...register("confirmPassword")} />
      ) : (
        ""
      )}

      {props.toggle && (
        <div className={s.forgotPassword}>
          <NavLink to={"/register"}>Forgot password</NavLink>
        </div>
      )}
      {props.name === "Send Instructions" && (
        <div>Enter your email address and we will send you further instructions </div>
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
