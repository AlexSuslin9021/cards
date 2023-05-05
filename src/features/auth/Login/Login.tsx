import React from "react";
import { authThunks } from "features/auth/auth.slice";
import s from "Component/Login/ContainerLogin.module.scss";
import { Title } from "common/component/Title/Title";
import { BottomAuth } from "common/component/BottomAuth/BottomAuth";
import { Hint } from "common/component/Hint/Hint";
import { useAppSelector } from "app/store";
import { Navigate, NavLink } from "react-router-dom";
import { Button } from "common/component/Button/Button";
import { Input } from "common/component/Input/Input";
import { FormTest } from "common/component/FormTest/Form";

const Login = () => {
  const isLoggedIn = useAppSelector<boolean>((state) => state.auth.isLoggedIn);
  if (isLoggedIn) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
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
    </>
  );
};

export default Login;
