import React from "react";
import s from "Component/Login/ContainerLogin.module.scss";
import { Title } from "common/component/Title/Title";
import { authThunks } from "features/auth/auth.slice";
import { Message } from "common/component/Message/Message";
import { Button } from "common/component/Button/Button";
import { FormTest } from "common/component/FormTest/Form";
import { Input } from "common/component/Input/Input";
import { useAppSelector } from "app/store";
import { Navigate } from "react-router-dom";

export const CreatePassword = () => {
  const isLoggedIn = useAppSelector<boolean>((state) => state.auth.isLoggedIn);
  if (isLoggedIn) {
    debugger;
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <Title name={"Create new password"} />
      <FormTest callback={authThunks.createNewPasswordTC} defaultValues={{ password: "" }}>
        <Input type={"password"} placeholder={"Password"} name={"password"} />
        <Message message={"Create new password and we will send you further instructions to email"} />
        <Button name={"Create new password"} />
      </FormTest>
    </>
  );
};
// };