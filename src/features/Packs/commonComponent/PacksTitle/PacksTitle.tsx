import React, { FC } from "react";
import s from "./PacksTitle.module.scss";
import { Title } from "common/component/Title/Title";
import { Button } from "common/component/Button/Button";
type PacksTitleType = {
  name: string;
  buttonName: string;
  callback: any;
};
export const PacksTitle: FC<PacksTitleType> = ({ name, buttonName, callback }) => {
  return (
    <div className={s.contPacksTitle}>
      <Title name={name} />
      <Button name={buttonName} callback={callback} />
    </div>
  );
};
