import React, { useEffect } from "react";
import s from "common/component/Header/Header.module.scss";
import { Button } from "common/component/Button/Button";
import { useLocation, useParams } from "react-router-dom";
import { ProfilePhoto } from "common/component/Avatar/ProfilePhoto/ProfilePhoto";
import { MenuModal } from "common/component/MenuModal/MenuModal";
import { useProfile } from "common/hooks/useProfile";

export const Header = () => {
  const { isLoggedIn, open, name, setOpen, logoutButton, onMouseMoveName, onMouseLeaveName } = useProfile();
  const location = useLocation();
  const condition = location.pathname !== "/";

  console.log(open, condition);
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
            {open && condition && <MenuModal />}
          </div>
        ) : (
          <Button callback={logoutButton} name={"Sign in"} />
        )}
      </div>
    </div>
  );
};
