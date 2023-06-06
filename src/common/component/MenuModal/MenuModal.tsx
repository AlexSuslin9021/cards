import s from "./menuModal.module.scss";
import user from "../../image/user.svg";
import logout from "../../image/logout2.svg";
export const MenuModal = () => {
  const iconStyle = { width: "14px", height: "14px" };
  return (
    <div className={s.modal}>
      <div>
        <span className={s.str}>
          <img style={iconStyle} src={user} alt="" /> Profile
        </span>
      </div>
      <div>
        <span className={s.str}>
          <img style={iconStyle} src={logout} alt="" /> Logout
        </span>
      </div>
    </div>
  );
};
