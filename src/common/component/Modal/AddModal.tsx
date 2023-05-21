import React, { ChangeEvent, useState } from "react";
import { BasicModal } from "common/component/Modal/BasicModal";
import { useAppDispatch } from "common/hooks";
import { packsThunks } from "features/Packs/pack.slice";

export const AddModal = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const onClickHandler = () => {
    dispatch(packsThunks.addPacksTC({ cardsPack: { name: value } }));
    setValue("");
  };
  return (
    <BasicModal header={"Add new Pack"} name={"Add new Pack"} callback={onClickHandler}>
      <input value={value} onChange={onChangeHandler} type="text" />
    </BasicModal>
  );
};
