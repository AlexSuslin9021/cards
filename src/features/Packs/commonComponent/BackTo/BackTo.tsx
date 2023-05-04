import React, { FC } from "react";
import s from "./BackTo.module.scss";
import { Navigate, useNavigate } from "react-router-dom";
type BackToType = {
  name: string;
  link: string;
};
export const BackTo: FC<BackToType> = ({ name, link }) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    return navigate(link);
  };
  return (
    <div className={s.contLink}>
      {/*<img src="" alt="" />*/}
      <span className={s.link} onClick={onClickHandler}>
        {name}
      </span>
    </div>
  );
};
