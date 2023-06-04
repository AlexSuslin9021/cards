import React from "react";
import { BasicModal } from "common/component/Modal/BasicModal";
import pencil from "common/image/pencil.svg";
import { cardsThunks } from "features/Cards/cards.slice";
import { SelectModal } from "common/component/Modal/FormControl/FormControls";
import { Question } from "features/Cards/cardsComponents/Question";
import { AddCover } from "common/component/AddCover/AddCover";
import { Answer } from "features/Cards/cardsComponents/Answer";
import { useModal } from "features/Cards/hook/useModal";

type UpdateModalType = { id: string; cardsPack_id: string; answerUpdate: string; questionUpdate: string };
export const UpdateModalCard: React.FC<UpdateModalType> = ({ id, cardsPack_id, answerUpdate, questionUpdate }) => {
  const {
    dispatch,
    answer,
    setAnswer,
    question,
    setQuestion,
    value,
    value1,
    // onClickHandler,
    handleChangeQuestion,
    handleChangeAnswer,
  } = useModal(answerUpdate, questionUpdate);
  const onClickHandler = () => {
    dispatch(cardsThunks.updateCard({ card: { _id: id, answer: answer, cardsPack_id, question: question } }));
  };

  return (
    <BasicModal name={"Edit card"} callback={onClickHandler} header={"Edit pack"} src={pencil} mode={false}>
      <SelectModal
        value={value}
        option1={"Image"}
        option2={"Text questions"}
        label={"Question"}
        handleChange={handleChangeQuestion}
      />
      {value === "Text questions" && <Question question={question} setQuestion={setQuestion} />}
      {value === "Image" && <AddCover name={"Change question"} setFile={setQuestion} />}
      {questionUpdate.includes("base64") && (
        <img style={{ width: "30px", height: "30px" }} src={questionUpdate} alt="" />
      )}
      <SelectModal
        value={value1}
        option1={"Image"}
        option2={"Text answer"}
        label={"Answer"}
        handleChange={handleChangeAnswer}
      />
      {value1 === "Text answer" && <Answer answer={answer} setAnswer={setAnswer} />}
      {value1 === "Image" && <AddCover name={"Change answer"} setFile={setAnswer} />}
    </BasicModal>
  );
};
