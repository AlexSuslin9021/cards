import React from "react";
import { BasicModal } from "common/component/Modal/BasicModal";
import s from "common/component/Input/input.module.scss";
import { AddCover } from "common/component/AddCover/AddCover";
import { useModal } from "features/Packs/hooks/useModal";

export const AddPackModal = () => {
  const { value, onChangeHandler, onClickAddModal, setFile } = useModal("", "", "");
  return (
    <BasicModal header={"Add new Pack"} name={"Add new Pack"} callback={onClickAddModal}>
      <div className={s.inputContainer}>
        <label>Pack name</label>
        <input value={value} onChange={onChangeHandler} type="text" />
      </div>
      <AddCover name={"Download pack"} setFile={setFile} />
    </BasicModal>
  );
};
