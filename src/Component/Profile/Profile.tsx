import React, { useState } from "react";
import s from "Component/Login/ContainerLogin.module.scss";
import style from "./Profile.module.scss";
import { Title } from "common/component/Title/Title";
import { useSelector } from "react-redux";
import { EditableSpan } from "Component/Profile/EditableSpan/EditableSpan";

const Profile = () => {
  return (
    <div className={s.containLogo}>
      <div className={s.login}>
        <Title name={"Personal Information"} />
        <div>
          <div className={style.iconContainer}> </div>
          <EditableSpan />
        </div>
      </div>
    </div>
  );
};

export default Profile;
