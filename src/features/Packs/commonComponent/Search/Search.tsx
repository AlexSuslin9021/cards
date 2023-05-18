import React, { ChangeEvent } from "react";
import s from "./Search.module.scss";

type InputType = {
  value: string;
  callback: (value: string) => void;
};
const Search = (props: InputType) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.callback(e.currentTarget.value);
  };
  return (
    <div className={s.searchBlock}>
      <input value={props.value} onChange={onChangeHandler} placeholder={"    Provide your text"} />
    </div>
  );
};

export default Search;
