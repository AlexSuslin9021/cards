import React from "react";
import { BasicModal } from "common/component/Modal/BasicModal";
import { useAppDispatch } from "common/hooks";
import { packsThunks } from "features/Packs/pack.slice";

export const AddModal = () => {
  const dispatch = useAppDispatch();
  const onClickHandler = (value: string) => {
    dispatch(packsThunks.addPacksTC({ cardsPack: { name: value } }));
  };
  return <BasicModal header={"Add new Pack"} name={"Add new Pack"} callback={onClickHandler}></BasicModal>;
};
