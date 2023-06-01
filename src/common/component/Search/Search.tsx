import React, { ChangeEvent, useState } from "react";
import s from "common/component/Search/Search.module.scss";
import { useDebounce } from "common/hooks/useDebounce";
import { cardsSearchParams } from "features/Cards/cards.slice";

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
