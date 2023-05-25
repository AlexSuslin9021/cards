import React, { ChangeEvent, useState } from "react";
import { BasicModal } from "common/component/Modal/BasicModal";
import { useAppDispatch } from "common/hooks";
import pencil from "../../../common/Image/pencil.svg";
import { cardsThunks } from "features/Cards/cards.slice";

type UpdateModalType = { id: string; cardsPack_id: string };
export const UpdateModalCard: React.FC<UpdateModalType> = ({ id, cardsPack_id }) => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const onClickHandler = () => {
    dispatch(cardsThunks.updateCard({ card: { _id: id, answer: value, cardsPack_id } }));
  };

  return (
    <BasicModal name={"Edit pack"} callback={onClickHandler} header={"Edit pack"} src={pencil} mode={false}>
      <input value={value} onChange={onChangeHandler} type="text" />;
    </BasicModal>
  );
};
