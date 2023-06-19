import React from "react";
import s from "common/component/Header/Header.module.scss";
import { Button } from "common/component/Button/Button";
import { useLocation } from "react-router-dom";
import { ProfilePhoto } from "common/component/Avatar/ProfilePhoto/ProfilePhoto";
import { useProfile } from "common/hooks/useProfile";
import { HeaderModal } from "common/component/MenuModal/HeaderModal";

export const Header = () => {
  const { isLoggedIn, open, name, setOpen, logoutButton } = useProfile();
  const location = useLocation();
  const condition = location.pathname !== "/cards";

  return (
    <div
      className={s.header}
      onClick={() => {
        debugger;
        setOpen(!open);
      }}
    >
      <div className={s.button}>
        {isLoggedIn ? (
          <div className={s.loginAvatar}>
            <span>{name}</span>
            <ProfilePhoto />
            {open && condition && <HeaderModal />}
          </div>
        ) : (
          <Button callback={logoutButton} name={"Sign in"} />
        )}
      </div>
    </div>
  );
};
