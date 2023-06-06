import React from "react";
import s from "common/component/Header/Header.module.scss";
import { Button } from "common/component/Button/Button";
import { useParams } from "react-router-dom";
import { ProfilePhoto } from "common/component/Avatar/ProfilePhoto/ProfilePhoto";
import { MenuModal } from "common/component/MenuModal/MenuModal";
import { useProfile } from "common/hooks/useProfile";

export const Header = () => {
  const { isLoggedIn, open, name, logoutButton, onMouseMoveName, onMouseLeaveName } = useProfile();
  const params = useParams();
  return (
    <div className={s.header}>
      <div onMouseMove={onMouseMoveName} onMouseLeave={onMouseLeaveName} className={s.button}>
        {isLoggedIn ? (
          <div className={s.loginAvatar}>
            <span>{name}</span>
            <ProfilePhoto />
            {open && <MenuModal />}
          </div>
        ) : (
          <Button callback={logoutButton} name={"Sign in"} />
        )}
      </div>
    </div>
  );
};
