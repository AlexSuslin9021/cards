import React, { ChangeEvent } from "react";
import s from "common/component/Input/input.module.scss";

export const Answer: React.FC<AnswerType> = ({ answer, setAnswer }) => {
  // const [question, setQuestion] = useState("");
  const onChangeAnswer = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.currentTarget.value);
  };
  return (
    <div className={s.inputContainer}>
      <label>Answger</label>
      <input value={answer} onChange={onChangeAnswer} type="text" />
    </div>
  );
};

type AnswerType = {
  setAnswer: (question: string) => void;
  answer: string;
};
