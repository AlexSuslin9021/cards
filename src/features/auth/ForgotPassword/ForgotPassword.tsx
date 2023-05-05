import React from "react";
import s from "Component/Login/ContainerLogin.module.scss";
import { Title } from "common/component/Title/Title";
import { Hint } from "common/component/Hint/Hint";
import { BottomAuth } from "common/component/BottomAuth/BottomAuth";
import { Navigate } from "react-router-dom";
import { Button } from "common/component/Button/Button";
import { useAppSelector } from "app/store";
import { authThunks } from "features/auth/auth.slice";
import { Message } from "common/component/Message/Message";
import { Input } from "common/component/Input/Input";
import { FormTest } from "common/component/FormTest/Form";

export const ForgotPassword = () => {
  const isLoggedIn = useAppSelector<boolean>((state) => state.auth.isLoggedIn);

  if (isLoggedIn) {
    debugger;
    return <Navigate to={"/check-email"} />;
  }

  return (
    <>
      <Title name={"Forgot your password?"} />
      <FormTest callback={authThunks.forgotPasswordTC} defaultValues={{ email: "" }}>
        <Input name={"email"} placeholder={"Email"} />
        <Message message={"Enter your email address and we will send you further instructions "} />
        <Button name={"Send Instructions"} />
        <Hint description={"Did you remember your password?"} />
        <BottomAuth name={"Try logging in"} to={"/login"} />
      </FormTest>
    </>
  );
};