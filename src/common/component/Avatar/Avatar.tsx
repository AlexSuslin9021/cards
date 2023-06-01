import React from "react";
import s from "common/component/Profile/Profile.module.scss";
import { ProfilePhoto } from "common/component/Avatar/ProfilePhoto/ProfilePhoto";
import { ChangeAvatar } from "common/component/Avatar/ChangeAvatar/ChangeAvatar";

export const Avatar = () => {
  return (
    <div className={s.iconContainer}>
      <ProfilePhoto />
      <ChangeAvatar />
    </div>
  );
};
