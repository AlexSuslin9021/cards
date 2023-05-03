import React from "react";
import s from "Component/Login/ContainerLogin.module.scss";
import { Title } from "common/component/Title/Title";
import { Form } from "common/component/Form/Form";
import { authThunks, createNewPasswordTC } from "features/auth/auth.slice";
import { useAppSelector } from "app/store";

export const CreatePassword = () => {
  const a = () => {};
  return (
    <div className={s.containLogo}>
      <div className={s.login}>
        <Title name={"Create new password"} />
        <Form callback={authThunks.createNewPasswordTC} name={"Create new password"} toggle={false} />
      </div>
    </div>
  );
};
