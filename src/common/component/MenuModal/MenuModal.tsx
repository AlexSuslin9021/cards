import s from "./menuModal.module.scss";
import user from "../../image/user.svg";
import logout from "../../image/logout2.svg";
import { IconModal } from "common/component/Icon/IconModal";
import { useProfile } from "common/hooks/useProfile";
export const MenuModal = () => {
  const { onClickLogout, onClickProfile, setOpen } = useProfile();
  return (
    <div onClick={() => setOpen(false)} className={s.modalBlock}>
      <div className={s.modal}>
        <div onClick={onClickProfile}>
          <IconModal value={"Profile"} src={user} />
        </div>
        <div onClick={onClickLogout}>
          <IconModal value={"Logout"} src={logout} />
        </div>
      </div>
    </div>
  );
};
