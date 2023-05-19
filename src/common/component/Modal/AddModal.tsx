import React, { ChangeEvent, useState } from "react";
import { BasicModal } from "common/component/Modal/BasicModal";
import { Button } from "common/component/Button/Button";
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
    <BasicModal name={"add"}>
      <h2>Add new pack</h2>
      <input value={value} onChange={onChangeHandler} type="text" />
      <Button name={"Save"} callback={onClickHandler}></Button>
    </BasicModal>
  );
};
