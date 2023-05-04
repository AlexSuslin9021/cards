import React from "react";
import s from "Component/Login/ContainerLogin.module.scss";
import { Title } from "common/component/Title/Title";
import { authThunks } from "features/auth/auth.slice";
import { Message } from "common/component/Message/Message";
import { Button } from "common/component/Button/Button";
import { FormTest } from "common/component/FormTest/Form";
import { Input } from "common/component/Input/Input";

export const CreatePassword = () => {
  return (
    <div className={s.containLogo}>
      <div className={s.login}>
        <Title name={"Create new password"} />
        <FormTest callback={authThunks.createNewPasswordTC} defaultValues={{ password: "" }}>
          <Input type={"password"} placeholder={"Password"} name={"password"} />
          <Message message={"Create new password and we will send you further instructions to email"} />
          <Button name={"Create new password"} />
        </FormTest>
      </div>
    </div>
  );
};
