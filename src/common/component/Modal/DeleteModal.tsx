import React from "react";
import { BasicModal } from "common/component/Modal/BasicModal";
import { useAppDispatch } from "common/hooks";
import { packsThunks } from "features/Packs/pack.slice";
import remove from "../../../common/Image/trash.svg";

type DeleteModalType = {
  id: string;
  name: string;
};
export const DeleteModal: React.FC<DeleteModalType> = ({ id, name }) => {
  const dispatch = useAppDispatch();
  const onClickHandler = () => {
    dispatch(packsThunks.removePackTC(id));
  };

  return (
    <BasicModal callback={onClickHandler} header={"Delete pack"} src={remove} mode={false}>
      <span>
        {" "}
        Вы действительно хотите удалить <b>{name}</b>{" "}
      </span>
    </BasicModal>
  );
};
