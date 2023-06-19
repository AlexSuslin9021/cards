import React from "react";
import { Title } from "common/component/Title/Title";
import { Hint } from "common/component/Hint/Hint";
import { BottomAuth } from "common/component/BottomAuth/BottomAuth";
import { Navigate } from "react-router-dom";
import { Button } from "common/component/Button/Button";
import { useAppSelector } from "common/hooks";
import { authThunks } from "features/Auth/auth.slice";
import { Message } from "common/component/Message/Message";
import { Input } from "common/component/Input/Input";
import { FormTest } from "common/component/Form/Form";
import style from "../../../common/styles/container.module.scss";

export const ForgotPassword = () => {
  const isLoggedIn = useAppSelector<boolean>((state) => state.auth.responseForgot);

  if (isLoggedIn) {
    return <Navigate to={"/check-email"} />;
  }

  return (
    <div className={style.container}>
      <Title name={"Forgot your password?"} />
      <FormTest callback={authThunks.forgotPasswordTC} defaultValues={{ email: "" }}>
        <Input name={"email"} placeholder={"Email"} />
        <Message message={"Enter your email address and we will send you further instructions "} />
        <Button name={"Send Instructions"} />
        <Hint description={"Did you remember your password?"} />
        <BottomAuth name={"Try logging in"} to={"/login"} />
      </FormTest>
    </div>
  );
};
