import React, { ChangeEvent, useState } from "react";

export const InputModal = () => {
  const [value, setValue] = useState("");
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  return <input value={value} onChange={onChangeHandler} type="text" />;
};
