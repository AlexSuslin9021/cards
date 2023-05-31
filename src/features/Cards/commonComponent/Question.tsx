import React, { ChangeEvent } from "react";
import s from "common/component/Input/input.module.scss";

export const Question: React.FC<AnswerType> = ({ question, setQuestion }) => {
  // const [question, setQuestion] = useState("");
  const onChangeQuestion = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.currentTarget.value);
  };
  return (
    <div className={s.input}>
      <label>Question</label>
      <input value={question} onChange={onChangeQuestion} type="text" />
    </div>
  );
};

type AnswerType = {
  setQuestion: (question: string) => void;
  question: string;
};
