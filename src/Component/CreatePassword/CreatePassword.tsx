import React from "react";
import s from "Component/Login/ContainerLogin.module.scss";
import { Title } from "common/component/Title/Title";
import { Form } from "common/component/Form/Form";
import { authThunks } from "features/auth/auth.slice";

export const CreatePassword = () => {
  return (
    <div className={s.containLogo}>
      <div className={s.login}>
        <Title name={"Create new password"} />
        <Form callback={authThunks.registerTC} name={"Create new password"} toggle={false} />
      </div>
    </div>
  );
};
