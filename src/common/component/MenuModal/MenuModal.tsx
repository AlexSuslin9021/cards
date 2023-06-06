import s from "./menuModal.module.scss";
import user from "../../image/user.svg";
import logout from "../../image/logout2.svg";
import { IconModal } from "common/component/Icon/IconModal";
import { useNavigate } from "react-router-dom";
import { useProfile } from "common/hooks/useProfile";
export const MenuModal = () => {
  const navigate = useNavigate();
  const onClickProfile = () => {
    navigate("/");
  };
  const { onClickLogout } = useProfile();
  return (
    <div className={s.modal}>
      <div onClick={onClickProfile}>
        <IconModal value={"Profile"} src={user} />
      </div>
      <div onClick={onClickLogout}>
        <IconModal value={"Logout"} src={logout} />
      </div>
    </div>
  );
};
