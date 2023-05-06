import React from "react";
import s from "./Search.module.scss";
const Search = () => {
  return (
    <div className={s.searchBlock}>
      <input placeholder={"    Provide your text"} />
    </div>
  );
};

export default Search;
