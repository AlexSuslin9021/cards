import React from "react";
import s from "common/component/Profile/Profile.module.scss";
import style from "common/styles/container.module.scss";
import { Title } from "common/component/Title/Title";
import { EditableSpan } from "common/component/Profile/EditableSpan/EditableSpan";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { Navigate } from "react-router-dom";
import { logoutTC } from "features/Auth/auth.slice";
import { BackTo } from "common/component/BackTo/BackTo";
import { Avatar } from "common/component/Avatar/Avatar";

export const Profile = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector<boolean>((state) => state.auth.isLoggedIn);
  const email = useAppSelector((state) => {
    if (state.auth.profile !== null) return state.auth.profile.email;
  });

  const onClickLogout = () => {
    dispatch(logoutTC());
  };

  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className={style.container}>
      <BackTo name={"Back to MyPack List"} link={"/packs/all"} />
      <Title name={"Personal Information"} />
      <Avatar />
      <EditableSpan />
      <div className={s.email}> {email}</div>
      <button className={s.button} onClick={onClickLogout}>
        Logout
      </button>
    </div>
  );
};
