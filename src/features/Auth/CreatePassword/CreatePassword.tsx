import React, { ChangeEvent, useState } from "react";
import style from "../../../common/styles/container.module.scss";
import { Title } from "common/component/Title/Title";
import { authThunks } from "features/Auth/auth.slice";
import { Message } from "common/component/Message/Message";
import { Button } from "common/component/Button/Button";
import { FormTest } from "common/component/Form/Form";
import s from '../../../common/component/Input/input.module.scss'
import { Input } from "common/component/Input/Input";
import { useAppSelector } from "common/hooks";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export const CreatePassword = () => {
const params=useParams()
  const navigate=useNavigate()
  const [value, setValue]=useState('')
  const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
  setValue(e.currentTarget.value)
  }
  const onClickHandler=()=>{
    navigate('/login')
  }
debugger
  return (
    <div className={style.container}>
      <Title name={"Create new password"} />
      <FormTest callback={()=>authThunks.createNewPasswordTC({password:value, resetPasswordToken:params.token})} defaultValues={{ password: "" }}>
        {/*<Input type={"password"} placeholder={"Password"} name={"password"} />*/}
        <div className={s.inputContainer}>
        <input  type="password" placeholder={'Password'} name={"password"} value={value} onChange={onChangeHandler} />
    </div>
        <Message message={"Create new password and we will send you further instructions to email"} />
        {/*<button>Create new password</button>*/}
        <Button callback={onClickHandler}  name={"Create new password"} />
      </FormTest>
    </div>
  );
};
// };
