import React, { ChangeEvent, useState } from "react";
import s from "../Input/input.module.scss";
type InputType = {
  value: string;
};
export const InputModal: React.FC<InputType> = ({ value }) => {
  const [field, setField] = useState("");
  const onChangeAnswer = (e: ChangeEvent<HTMLInputElement>) => {
    setField(e.currentTarget.value);
    setField("");
  };
  return (
    <span className={s.input}>
      <input value={field} onChange={onChangeAnswer} type="text" />
    </span>
  );
};
