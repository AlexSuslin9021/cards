import React from "react";
import { BasicModal } from "common/component/Modal/BasicModal";
import pencil from "common/image/pencil.svg";
import { AddCover } from "common/component/AddCover/AddCover";
import cover from "common/image/Mask.svg";
import s from "common/component/Input/input.module.scss";
import { useModal } from "features/Packs/hooks/useModal";

type UpdateModalType = { id: string; src: string | null; name: string; deckCover: string | null };
export const UpdatePackModal: React.FC<UpdateModalType> = ({ id, src, name, deckCover }) => {
  const { value, setFile, onChangeHandler, onClickUpdate } = useModal(name, src, id);

  return (
    <BasicModal name={"Edit pack"} callback={onClickUpdate} header={"Edit pack"} src={pencil} mode={false}>
      <div className={s.icon}>
        <img style={{ width: "40px", height: "40px" }} src={src ? src : cover} alt="" />
      </div>
      <div className={s.input}>
        <div>
          <input value={value} onChange={onChangeHandler} />
        </div>
      </div>
      <AddCover name={"Change cover"} setFile={setFile} />
    </BasicModal>
  );
};
