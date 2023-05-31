import React, { ChangeEvent, useState } from "react";
import { BasicModal } from "common/component/Modal/BasicModal";
import { useAppDispatch } from "common/hooks";
import pencil from "../../../common/Image/pencil.svg";
import { packsThunks } from "features/Packs/pack.slice";
import { AddCover } from "common/component/AddCover/AddCover";
import cover from "../../Image/Mask.svg";

type UpdateModalType = { id: string; src: string | null };
export const UpdateModal: React.FC<UpdateModalType> = ({ id, src }) => {
  const [value, setValue] = useState("");
  const [file, setFile] = useState("");
  const dispatch = useAppDispatch();
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const onClickHandler = () => {
    dispatch(packsThunks.updatePackTC({ cardsPack: { _id: id, name: value, deckCover: file } }));
  };

  return (
    <BasicModal name={"Edit pack"} callback={onClickHandler} header={"Edit pack"} src={pencil} mode={false}>
      <div>
        <img style={{ width: "40px", height: "40px" }} src={src ? src : cover} alt="" />
      </div>
      <input value={value} onChange={onChangeHandler} type="text" />;
      <AddCover setFile={setFile} />
    </BasicModal>
  );
};
