import React, { FC } from "react";
import s from "./PacksTitle.module.scss";
import { Button } from "common/component/Button/Button";
import { BasicModal } from "common/component/Modal/basicModal";
type PacksTitleType = {
  name: string;
  buttonName: string;
  callback: any;
};
export const PacksTitle: FC<PacksTitleType> = ({ name, buttonName, callback }) => {
  return (
    <div className={s.contPacksTitle}>
      <div className={s.title}>{name}</div>
      <BasicModal>
        <h2>Add Pack</h2>
      </BasicModal>
    </div>
  );
};
