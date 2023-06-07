import s from "./menuModal.module.scss";
import user from "../../image/user.svg";
import logout from "../../image/logout2.svg";
import { IconModal } from "common/component/Icon/IconModal";
import { useProfile } from "common/hooks/useProfile";
import { BaseModal } from "common/component/MenuModal/BaseModal";
export const HeaderModal = () => {
  const { onClickLogout, onClickProfile } = useProfile();
  return (
    <BaseModal>
      <div className={s.modal}>
        <IconModal callback={onClickProfile} value={"Profile"} src={user} />
        <IconModal callback={onClickLogout} value={"Logout"} src={logout} />
      </div>
    </BaseModal>
  );
};
