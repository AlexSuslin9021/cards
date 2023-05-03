import React, { useState } from "react";
import s from "Component/Login/ContainerLogin.module.scss";
import style from "./Profile.module.scss";
import { Title } from "common/component/Title/Title";
import { useSelector } from "react-redux";
import { EditableSpan } from "Component/Profile/EditableSpan/EditableSpan";
import b from "../../common/component//Button/button.module.scss";
import { useAppDispatch } from "app/hooks";
import { logoutTC } from "features/auth/auth.slice";
import { useAppSelector } from "app/store";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useAppDispatch();
  const onClickLogout = () => {
    dispatch(logoutTC());
  };
  const isLoggedIn = useAppSelector<boolean>((state) => state.auth.isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div className={s.containLogo}>
      <div className={s.login}>
        <Title name={"Personal Information"} />
        <div>
          <div className={style.iconContainer}> </div>
          <EditableSpan />
        </div>
        <div> email</div>
        <button className={b.button} onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
