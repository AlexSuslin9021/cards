import { useAppDispatch } from "app/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { authThunks } from "features/auth/auth.slice";
import s from "./Form.module.scss";
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
      <div className={s.input}>
        <input placeholder={"Password"} {...register("password")} />
      </div>
      <div className={s.input}>
        <input type={"checkbox"} {...register("rememberMe")} />
        Remember me
      </div>

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
