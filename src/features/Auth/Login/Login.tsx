import React from "react";
import { authThunks } from "features/Auth/auth.slice";
import style from "../../../common/styles/container.module.scss";
import s from "./Login.module.scss";
import { Title } from "common/component/Title/Title";
import { BottomAuth } from "common/component/BottomAuth/BottomAuth";
import { Hint } from "common/component/Hint/Hint";
import { Navigate, NavLink } from "react-router-dom";
import { Button } from "common/component/Button/Button";
import { Input } from "common/component/Input/Input";
import { FormTest } from "common/component/Form/Form";
import { useAppDispatch, useAppSelector } from "common/hooks";
const Login = () => {
  const isLoggedIn = useAppSelector<boolean>((state) => state.auth.isLoggedIn);
  if (isLoggedIn) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className={style.container}>
      <Title name={"Sign in"} />
      <FormTest callback={authThunks.loginTC} defaultValues={{ email: "", password: "", rememberMe: false }}>
        <Input name={"email"} placeholder={"Email"} />
        <Input type={"password"} placeholder={"Password"} name={"password"} />
        <Input type={"checkbox"} name={"rememberMe"} />
        <div className={s.forgotPassword}>
          <NavLink to={"/forgot-password"}>Forgot password</NavLink>
        </div>
        <Button name={"Sign in"} />
        <Hint description={"Don't have an account?"} />
        <BottomAuth name={"Sign up"} to={"/register"} />
      </FormTest>
    </div>
  );
};

export default Login;
