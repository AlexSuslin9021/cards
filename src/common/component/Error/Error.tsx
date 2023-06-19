import React from "react";
import error from '../../image/error.svg'
import s from './error.module.scss'
export const Error = () => {
  return (
    <div className={s.error} >
      <img src={error} alt="" />
    </div>
  );
};

