import React, { useEffect } from "react";
import s from "common/component/Profile/Profile.module.scss";
import style from "common/styles/container.module.scss";
import { Title } from "common/component/Title/Title";
import { EditableSpan } from "common/component/Profile/EditableSpan/EditableSpan";
import { Navigate } from "react-router-dom";
import { BackTo } from "common/component/BackTo/BackTo";
import { Avatar } from "common/component/Avatar/Avatar";
import logout from "../../image/logout2.svg";
import { IconModal } from "common/component/Icon/IconModal";
import { useProfile } from "common/hooks/useProfile";

export const Profile = () => {
  const { isLoggedIn, email, onClickLogout } = useProfile();

  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className={style.container}>
      <BackTo name={"Go to Pack List"} link={"/packs/all"} />
      <Title name={"Personal Information"} />
      <Avatar />
      <EditableSpan />
      <div className={s.email}> {email}</div>

      <div className={s.buttonBlock} onClick={onClickLogout}>
       <button className={s.button}><IconModal value={"Logout"} src={logout} /></button>
      </div>
    </div>
  );
};
