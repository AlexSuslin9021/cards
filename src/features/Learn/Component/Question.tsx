import React from "react";
import s from "features/Learn/style.module.scss";

type QuestionType = {
  question: string;
};
export const Question: React.FC<QuestionType> = ({ question }) => {
  return (
    <>
      <div className={s.question}>
        <b>Question:</b> {question}
      </div>
    </>
  );
};
