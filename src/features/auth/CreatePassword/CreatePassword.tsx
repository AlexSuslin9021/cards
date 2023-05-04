import React from "react";
import s from "Component/Login/ContainerLogin.module.scss";
import { Title } from "common/component/Title/Title";
import { Form } from "common/component/Form/Form";
import { authThunks, createNewPasswordTC } from "features/auth/auth.slice";
import { useAppSelector } from "app/store";
import { Message } from "common/component/Message/Message";
import { Button } from "common/component/Button/Button";

export const CreatePassword = () => {
  const a = () => {};
  return (
    <div className={s.containLogo}>
      <div className={s.login}>
        <Title name={"Create new password"} />
        <Form callback={authThunks.createNewPasswordTC} name={"Create new password"}>
          <Message message={"Create new password and we will send you further instructions to email"} />
          <Button name={"Create new password"} />
        </Form>
      </div>
    </div>
  );
};
