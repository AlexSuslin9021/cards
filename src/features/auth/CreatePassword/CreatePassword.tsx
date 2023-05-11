import React from "react";
import style from "../../../common/styles/container.module.scss";
import { Title } from "common/component/Title/Title";
import { authThunks } from "features/auth/auth.slice";
import { Message } from "common/component/Message/Message";
import { Button } from "common/component/Button/Button";
import { FormTest } from "common/component/Form/Form";
import { Input } from "common/component/Input/Input";
import { useAppSelector } from "common/hooks";
import { Navigate } from "react-router-dom";

export const CreatePassword = () => {
  const isLoggedIn = useAppSelector<boolean>((state) => state.auth.isLoggedIn);
  if (isLoggedIn) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div className={style.container}>
      <Title name={"Create new password"} />
      <FormTest callback={authThunks.createNewPasswordTC} defaultValues={{ password: "" }}>
        <Input type={"password"} placeholder={"Password"} name={"password"} />
        <Message message={"Create new password and we will send you further instructions to email"} />
        <Button name={"Create new password"} />
      </FormTest>
    </div>
  );
};
// };
