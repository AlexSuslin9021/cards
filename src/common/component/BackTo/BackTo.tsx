import React, { FC } from "react";
import s from "common/component/BackTo/BackTo.module.scss";
import { useNavigate } from "react-router-dom";
import arrow from "common/image/Vector 1.svg";

export const BackTo: FC<BackToType> = ({ name, link }) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    return navigate(-1);
  };

  return (
    <div className={s.contLink}>
      <img src={arrow} alt="" />
      <span className={s.link} onClick={onClickHandler}>
        {name}
      </span>
    </div>
  );
};

type BackToType = {
  name: string;
  link?: string;
};
