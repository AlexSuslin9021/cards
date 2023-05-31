import React, { useState } from "react";
import { BasicModal } from "common/component/Modal/BasicModal";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { cardsThunks } from "features/Cards/cards.slice";
import { cardsPack_idSelector } from "features/Cards/selectors";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Question } from "features/Cards/commonComponent/Question";
import { Answer } from "features/Cards/commonComponent/Answer";
import MenuItem from "@mui/material/MenuItem";
import { InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { AddCover } from "common/component/AddCover/AddCover";

export const ModalAddCards = () => {
  const dispatch = useAppDispatch();
  const cardsPack_id = useAppSelector(cardsPack_idSelector);
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const [value, setValue] = useState<any>("");
  const [value1, setValue1] = useState<any>("");
  const [file, setFile] = useState("");
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
  return (
    <BasicModal header={"Add new Cards"} name={"Add new card"} callback={onClickHandler}>
      <FormControl fullWidth>
        <InputLabel>Question</InputLabel>
        <Select value={value} label="Question" onChange={handleChangeQuestion}>
          <MenuItem value={"Image"}>Image</MenuItem>
          <MenuItem value={"Text questions"}>Text questions</MenuItem>
        </Select>
      </FormControl>
      {value === "Text questions" && <Question question={question} setQuestion={setQuestion} />}
      {value === "Image" && <AddCover setFile={setFile} />}
      <FormControl fullWidth>
        <InputLabel>Answer</InputLabel>
        <Select value={value1} label="Answer" onChange={handleChangeAnswer}>
          <MenuItem value={"Image"}>Image</MenuItem>
          <MenuItem value={"Text questions"}>Text questions</MenuItem>
        </Select>
      </FormControl>
      {value1 === "Text questions" && <Answer answer={answer} setAnswer={setAnswer} />}
    </BasicModal>
  );
};
