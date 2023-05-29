import React from "react";
import s from "./Profile.module.scss";
import style from "../../common/styles/container.module.scss";
import { Title } from "common/component/Title/Title";
import { EditableSpan } from "Component/Profile/EditableSpan/EditableSpan";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { Navigate } from "react-router-dom";
import { logoutTC } from "features/auth/auth.slice";
import avatar from "../../common/Image/ava.svg";
import { BackTo } from "common/component/BackTo/BackTo";

const Profile = () => {
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
      <div className={s.iconContainer}>
        <img src={avatar} alt="avatar" />
      </div>
      <EditableSpan />
      <div className={s.email}> {email}</div>
      <button className={s.button} onClick={onClickLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
