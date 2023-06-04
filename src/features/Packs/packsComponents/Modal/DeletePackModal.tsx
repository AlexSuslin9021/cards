import React from "react";
import { BasicModal } from "common/component/Modal/BasicModal";
import remove from "common/image/trash.svg";
import { useModal } from "features/Packs/hooks/useModal";

export const DeletePackModal: React.FC<DeleteModalType> = ({ id, name }) => {
  const { onClickDeleteModal } = useModal("", "", id);

  return (
    <BasicModal buttonName={"Delete"} callback={onClickDeleteModal} header={"Delete pack"} src={remove} mode={false}>
      <span>
        Вы действительно хотите удалить <b>{name}</b>
      </span>
    </BasicModal>
  );
};
type DeleteModalType = {
  id: string;
  name: string;
};
