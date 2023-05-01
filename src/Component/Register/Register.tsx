import React from "react";
import { authThunks } from "features/auth/auth.slice";
import { Form } from "common/component/Form/Form";
import { Title } from "common/component/Title/Title";
import { Hint } from "common/component/Hint/Hint";
import { BottomAuth } from "common/component/BottomAuth/BottomAuth";
import s from "Component/Login/ContainerLogin.module.scss";

const Register = () => {
  return (
    <div className={s.containLogo}>
      <div className={s.login}>
        <Title name={"Sign up"} />
        <Form callback={authThunks.registerTC} name={"Sign un"} toggle={false} />
        <Hint description={"Already have an account?"} />
        <BottomAuth name={"Sign in"} />
      </div>
    </div>
  );
};

export default Register;
