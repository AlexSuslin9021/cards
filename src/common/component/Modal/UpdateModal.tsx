import React from "react";
import { BasicModal } from "common/component/Modal/BasicModal";
import { useAppDispatch } from "common/hooks";
import pencil from "../../../common/Image/pencil.svg";
import { packsThunks } from "features/Packs/pack.slice";

type UpdateModalType = { id: string };
export const UpdateModal: React.FC<UpdateModalType> = ({ id }) => {
  const dispatch = useAppDispatch();
  const onClickHandler = (value: string) => {
    dispatch(packsThunks.updatePackTC({ cardsPack: { _id: id, name: value } }));
  };
  return <BasicModal name={"Edit pack"} callback={onClickHandler} header={"Edit pack"} src={pencil} mode={false} />;
};
