import { useAppDispatch, useAppSelector } from "common/hooks";
import { cardsPack_idSelector } from "features/Cards/cardsSelectors";
import { useState } from "react";
import { cardsThunks } from "features/Cards/cards.slice";
import { SelectChangeEvent } from "@mui/material/Select";

export const useModal = (answerUpdate: string, questionUpdate: string) => {
  const dispatch = useAppDispatch();
  const cardsPack_id = useAppSelector(cardsPack_idSelector);
  const [answer, setAnswer] = useState(answerUpdate);
  const [question, setQuestion] = useState(questionUpdate);
  const [value, setValue] = useState<any>("");
  const [value1, setValue1] = useState<any>("");
  const onClickHandler = () => {
    dispatch(cardsThunks.addCard({ card: { cardsPack_id: cardsPack_id, answer: answer, question: question } }));
    setAnswer("");
    setValue("");
    setValue1("");
  };
  const handleChangeQuestion = (e: SelectChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleChangeAnswer = (e: SelectChangeEvent<HTMLInputElement>) => {
    setValue1(e.target.value);
  };
  return {
    dispatch,
    cardsPack_id,
    answer,
    setAnswer,
    question,
    setQuestion,
    value,
    setValue,
    value1,
    setValue1,
    onClickHandler,
    handleChangeQuestion,
    handleChangeAnswer,
  };
};
