import React from "react";
import { authThunks } from "features/auth/auth.slice";
import { Title } from "common/component/Title/Title";
import { Hint } from "common/component/Hint/Hint";
import { BottomAuth } from "common/component/BottomAuth/BottomAuth";
import { Button } from "common/component/Button/Button";
import { FormTest } from "common/component/FormTest/Form";
import { Input } from "common/component/Input/Input";
import style from "../../../common/styles/container.module.scss";

const Register = () => {
  return (
    <div className={style.container}>
      <Title name={"Sign up"} />
      <FormTest callback={authThunks.registerTC} defaultValues={{ email: "", password: "", confirmPassword: "" }}>
        <Input name={"email"} placeholder={"Email"} />
        <Input type={"password"} placeholder={"Password"} name={"password"} />
        <Input type={"password"} placeholder={"Password"} name={"confirmPassword"} />
        <Button name={"Sign up"} />
        <Hint description={"Already have an account?"} />
        <BottomAuth name={"Sign in"} to={"/login"} />
      </FormTest>
    </div>
  );
};

export default Register;
