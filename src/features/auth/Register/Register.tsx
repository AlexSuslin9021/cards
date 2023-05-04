import React from "react";
import { authThunks } from "features/auth/auth.slice";
import { Form } from "common/component/Form/Form";
import { Title } from "common/component/Title/Title";
import { Hint } from "common/component/Hint/Hint";
import { BottomAuth } from "common/component/BottomAuth/BottomAuth";
import s from "Component/Login/ContainerLogin.module.scss";
import { Button } from "common/component/Button/Button";

const Register = () => {
  return (
    <div className={s.containLogo}>
      <div className={s.login}>
        <Title name={"Sign up"} />
        <Form callback={authThunks.registerTC} name={"Sign up"}>
          <Button name={"Sign up"} />
        </Form>
        <Hint description={"Already have an account?"} />
        <BottomAuth name={"Sign in"} to={"/login"} />
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
