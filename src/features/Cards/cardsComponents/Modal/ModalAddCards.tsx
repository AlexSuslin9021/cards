import React, { useState } from "react";
import { BasicModal } from "common/component/Modal/BasicModal";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { cardsThunks } from "features/Cards/cards.slice";
import { cardsPack_idSelector } from "features/Cards/cardsSelectors";
import { SelectChangeEvent } from "@mui/material/Select";
import { Question } from "features/Cards/cardsComponents/Question";
import { Answer } from "features/Cards/cardsComponents/Answer";
import { AddCover } from "common/component/AddCover/AddCover";
import { SelectModal } from "features/Cards/cardsComponents/Modal/SelectModal";
import { useModal } from "features/Cards/hook/useModal";

export const ModalAddCards = () => {
  const {
    answer,
    setAnswer,
    question,
    setQuestion,
    value,
    value1,
    onClickHandler,
    handleChangeQuestion,
    handleChangeAnswer,
  } = useModal("", "");
  return (
    <BasicModal header={"Add new Cards"} name={"Add new card"} callback={onClickHandler}>
      <SelectModal
        value={value}
        option1={"Image"}
        option2={"Text questions"}
        label={"Question"}
        handleChange={handleChangeQuestion}
      />
      {value === "Text questions" && <Question question={question} setQuestion={setQuestion} />}
      {value === "Image" && <AddCover name={"add card"} setFile={setQuestion} />}

      <SelectModal
        value={value1}
        option1={"Image"}
        option2={"Text answer"}
        label={"Answer"}
        handleChange={handleChangeAnswer}
      />
      {value1 === "Text answer" && <Answer answer={answer} setAnswer={setAnswer} />}
      {value1 === "Image" && <AddCover name={"Download image"} setFile={setAnswer} />}
    </BasicModal>
  );
};
