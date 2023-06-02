import React, { ChangeEvent, useState } from "react";
import { BasicModal } from "common/component/Modal/BasicModal";
import { useAppDispatch } from "common/hooks";
import pencil from "../../image/pencil.svg";
import { packsThunks } from "features/Packs/pack.slice";
import { AddCover } from "common/component/AddCover/AddCover";
import cover from "../../image/Mask.svg";
import s from "common/component/Input/input.module.scss";

type UpdateModalType = { id: string; src: string | null; name: string };
export const UpdateModal: React.FC<UpdateModalType> = ({ id, src, name }) => {
  const [title, setValue] = useState<string>(name);
  const [file, setFile] = useState("");
  const dispatch = useAppDispatch();
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const onClickHandler = () => {
    dispatch(packsThunks.updatePackTC({ cardsPack: { _id: id, name: title, deckCover: file } }));
  };

  return (
    <BasicModal name={"Edit pack"} callback={onClickHandler} header={"Edit pack"} src={pencil} mode={false}>
      <div className={s.icon}>
        <img style={{ width: "40px", height: "40px" }} src={src ? src : cover} alt="" />
      </div>
      <div className={s.input}>
        <div>
          <input value={title} onChange={onChangeHandler} />
        </div>
      </div>
      <AddCover name={"Change cover"} setFile={setFile} />
    </BasicModal>
  );
};
