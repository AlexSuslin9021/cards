import React, { FC, useState } from "react";
import s from "./input.module.scss";

export const Input: FC<inputT> = ({ register, placeholder, type, name, ...rest }) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <div className={s.input}>
      <input
        className={type === "checkbox" ? s.checkbox : ""}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        {...rest}
      />
      {type === "checkbox" && <span>Remember me</span>}
    </div>
  );
};

type inputT = {
  register?: any;
  name: string;
  type?: string;
  placeholder?: string;
};
