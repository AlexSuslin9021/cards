import React from "react";
import s from "Component/Login/ContainerLogin.module.scss";
import { Title } from "common/component/Title/Title";
import b from "common/component/Button/button.module.scss";
import style from "features/auth/CheckEmail/checkEmail.module.scss";
import { NavLink } from "react-router-dom";
import { Message } from "common/component/Message/Message";
import mail from "../../../common/Image/mail.svg";

export const CheckEmail = () => {
  return (
    <div className={s.containLogo}>
      <div className={s.login}>
        <Title name={"Check email"} />
        <span className={style.image}>
          <img src={mail} alt="" />
        </span>
        <Message message={"We’ve sent an Email with instructions to example@mail.com"} />
        <button className={b.button}>
          <NavLink className={s.link} to={"/login"}>
            {" "}
            Back to login
          </NavLink>
        </button>
      </div>
    </div>
  );
};
