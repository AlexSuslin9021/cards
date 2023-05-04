import React from "react";
import { authThunks } from "features/auth/auth.slice";

import { Title } from "common/component/Title/Title";
import { Hint } from "common/component/Hint/Hint";
import { BottomAuth } from "common/component/BottomAuth/BottomAuth";
import s from "Component/Login/ContainerLogin.module.scss";
import { Button } from "common/component/Button/Button";
import { FormTest } from "common/component/FormTest/Form";
import { Input } from "common/component/Input/Input";

const Register = () => {
  return (
    <div className={s.containLogo}>
      <div className={s.login}>
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
    </div>
  );
};

export default Register;

// let age = prompt('Возраст?', 18);
//
// let message = (age < 3) ? 'Здравствуй, малыш!' :
//   (age < 18) ? 'Привет!' :
//     (age < 100) ? 'Здравствуйте!' :
//       'Какой необычный возраст!';
