import React, { ReactNode } from "react";
import s from "./menuModal.module.scss";

import { useProfile } from "common/hooks/useProfile";

export const BaseModal: React.FC<BaseModalType> = ({ children }) => {
  const { closeModal } = useProfile();
  return (
    <div onClick={closeModal} className={s.modalBlock}>
      {children}
    </div>
  );
};

type BaseModalType = {
  children: ReactNode;
};
