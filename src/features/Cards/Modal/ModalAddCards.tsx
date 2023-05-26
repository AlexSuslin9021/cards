import React, { ChangeEvent, useState } from "react";
import { BasicModal } from "common/component/Modal/BasicModal";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { cardsThunks } from "features/Cards/cards.slice";
import { cardsPack_idSelector } from "features/Cards/selectors";
import s from "../../../common/component/Input/input.module.scss";
import Select from "@mui/material/Select";

export const ModalAddCards = () => {
  const dispatch = useAppDispatch();
  const cardsPack_id = useAppSelector(cardsPack_idSelector);
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const onChangeAnswer = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.currentTarget.value);
  };
  const onChangeQuestion = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.currentTarget.value);
  };
  const onClickHandler = () => {
    dispatch(cardsThunks.addCard({ card: { cardsPack_id: cardsPack_id, answer: answer, question: answer } }));
    setAnswer("");
  };
  return (
    <BasicModal header={"Add new Cards"} name={"Add new card"} callback={onClickHandler}>
      {/*<Select></Select>*/}
      <div className={s.input}>
        <label>Question</label>
        <input value={question} onChange={onChangeQuestion} type="text" />
      </div>
      <div className={s.input}>
        <label>Answer</label>

        <input value={answer} onChange={onChangeAnswer} type="text" />
      </div>
    </BasicModal>
  );
};
