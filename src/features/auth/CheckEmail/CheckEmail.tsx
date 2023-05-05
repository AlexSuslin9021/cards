import React from "react";
import style from "../../../common/styles/container.module.scss";
import { Title } from "common/component/Title/Title";
import s1 from "common/component/Button/button.module.scss";
import s from "features/auth/CheckEmail/checkEmail.module.scss";
import { NavLink } from "react-router-dom";
import { Message } from "common/component/Message/Message";
import mail from "../../../common/Image/mail.svg";

export const CheckEmail = () => {
  return (
    <div className={style.container}>
      <Title name={"Check email"} />
      <span className={s.image}>
        <img src={mail} alt="" />
      </span>
      <Message message={"We’ve sent an Email with instructions to example@mail.com"} />
      <button className={s1.button}>
        <NavLink className={s.link} to={"/login"}>
          Back to login
        </NavLink>
      </button>
    </div>
  );
};
