import React, { FC } from "react";
import s from "./Form.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "common/hooks";
// type InputType = {
//   name: string;
//   type: string;
//   register: any;
// };

export type DefaultValueType = {
  email?: "";
  password?: "";
  confirmPassword?: "";
  rememberMe?: false;
};
export type formT = {
  defaultValues: DefaultValueType;
  children?: any;
  callback: any;
};
export const FormTest: FC<formT> = ({ defaultValues, children, callback }) => {
  const dispatch = useAppDispatch();
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<DefaultValueType> = (data) => dispatch(callback(data));
  return (
    <form className={s.formContainer} onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                key: child.props.name,
              },
            })
          : child;
      })}
    </form>
  );
};
