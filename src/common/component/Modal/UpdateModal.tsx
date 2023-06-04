import React from "react";
import { BasicModal } from "common/component/Modal/BasicModal";
import pencil from "../../image/pencil.svg";
import { AddCover } from "common/component/AddCover/AddCover";
import cover from "../../image/Mask.svg";
import s from "common/component/Input/input.module.scss";
import { useModal } from "common/component/Modal/hook/useModal";

type UpdateModalType = { id: string; src: string | null; name: string; deckCover: string | null };
export const UpdateModal: React.FC<UpdateModalType> = ({ id, src, name, deckCover }) => {
  const { value, setFile, onChangeHandler, onClickHandler } = useModal(name, src, id);

  return (
    <BasicModal name={"Edit pack"} callback={onClickHandler} header={"Edit pack"} src={pencil} mode={false}>
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
