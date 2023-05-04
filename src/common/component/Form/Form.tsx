import { useAppDispatch } from "app/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import s from "./Form.module.scss";
import React from "react";

import { NavLink } from "react-router-dom";

type FormType = {
  callback: any;
  name: string;
  children?: any;
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
          <input type={"password"} placeholder={"Password"} {...register("password")} />
          {/*<Input name={"password"} type={"password"} register={register} />*/}
        </div>
      ) : props.name === "Sign up" ? (
        <div className={s.input}>
          <input type={"password"} placeholder={"Password"} {...register("password")} />
          {/*<Input name={"password"} type={"password"} register={register} />*/}
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
        <div className={s.input}>
          <input placeholder={"Confirm password"} {...register("confirmPassword")} />
        </div>
      ) : (
        ""
      )}

      {props.name === "Sign in" && (
        <div className={s.forgotPassword}>
          <NavLink to={"/forgot-password"}>Forgot password</NavLink>
        </div>
      )}
      {props.name === "Send Instructions" && (
        <div>Enter your email address and we will send you further instructions </div>
      )}

      <div>{props.children}</div>
    </form>
  );
};

interface IFormInput {
  email: string;
  password: string;
  rememberMe: boolean;
  confirmPassword: "";
}
