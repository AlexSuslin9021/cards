import React, { FC, ReactNode } from "react";
import s from "./PacksTitle.module.scss";
import { AddModal } from "common/component/Modal/AddModal";

type PacksTitleType = {
  name?: string;
  children: ReactNode;
  callback?: any;
};
export const PacksTitle: FC<PacksTitleType> = ({ name, callback, children }) => {
  return (
    <div className={s.contPacksTitle}>
      <div className={s.title}>{name}</div>
      {children}
    </div>
  );
};
