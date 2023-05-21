import React, { ChangeEvent, useState } from "react";
import { BasicModal } from "common/component/Modal/BasicModal";
import { useAppDispatch } from "common/hooks";
import pencil from "../../../common/Image/pencil.svg";
import { packsThunks } from "features/Packs/pack.slice";

type UpdateModalType = { id: string };
export const UpdateModal: React.FC<UpdateModalType> = ({ id }) => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const onClickHandler = () => {
    dispatch(packsThunks.updatePackTC({ cardsPack: { _id: id, name: value } }));
  };

  return (
    <BasicModal name={"Edit pack"} callback={onClickHandler} header={"Edit pack"} src={pencil} mode={false}>
      <input value={value} onChange={onChangeHandler} type="text" />;
    </BasicModal>
  );
};
