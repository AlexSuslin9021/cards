import s from "./menuModal.module.scss";
export const MenuModal = () => {
  return (
    <div className={s.modal}>
      <div> Profile</div>
      <div> Logout</div>
    </div>
  );
};
