import { useAppDispatch } from "app/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { authThunks } from "features/auth/auth.slice";
import s from "Component/Login/ContainerLogin.module.scss";
import b from "common/component/Button/button.module.scss";
import React from "react";
import login from "Component/Login/Login";

export const Form = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => alert(JSON.stringify(data));
  // dispatch(authThunks.loginTC(data));
  return (
    <form className={s.formContainer} onSubmit={handleSubmit(onSubmit)}>
      {/*<div>Email</div>*/}
      <div>
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

      <div>
        <input placeholder={"Password"} {...register("password")} />
      </div>
      <div> Remember me</div>
      <input type={"checkbox"} {...register("rememberMe")} />
      <button className={b.button} type="submit">
        Sign in
      </button>

      {/*<input type="submit" />*/}
    </form>
  );
};

interface IFormInput {
  email: string;
  password: string;
  rememberMe: boolean;
}
