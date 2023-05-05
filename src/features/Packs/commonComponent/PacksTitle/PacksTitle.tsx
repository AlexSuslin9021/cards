import React, { FC } from "react";
import s from "./PacksTitle.module.scss";
import { Button } from "common/component/Button/Button";
type PacksTitleType = {
  name: string;
  buttonName: string;
  callback: any;
};
export const PacksTitle: FC<PacksTitleType> = ({ name, buttonName, callback }) => {
  return (
    <div className={s.contPacksTitle}>
      <div className={s.title}>{name}</div>
      <Button name={buttonName} callback={callback} />
    </div>
  );
};
