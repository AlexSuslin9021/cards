import React, { FC, useState } from "react";
import s from "./input.module.scss";

export const Input: FC<inputT> = ({ register, placeholder, type, name, ...rest }) => {
  return (
    <div className={s.inputContainer}>
      <span>

        <input
          className={type === "checkbox" ? s.checkbox : ''}
          type={type}
          placeholder={placeholder}
          {...register(name)}
          {...rest}
        />
        {type === "checkbox" && "Remember me"}
      </span>
    </div>
  );
};

type inputT = {
  register?: any;
  name: string;
  type?: string;
  placeholder?: string;
};
