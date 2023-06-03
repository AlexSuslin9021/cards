import React from "react";
import s from "features/Learn/style.module.scss";

type QuestionType = {
  question: string;
};
export const Question: React.FC<QuestionType> = ({ question }) => {
  return (
    <div>
      <div className={s.question}>
        <b>Question:</b>
        {question.includes("base64") ? (
          <img style={{ width: "30px", height: "30px" }} src={question} alt="" />
        ) : (
          question
        )}
        <div className={s.countAnswer}> Количество попыток ответов на вопрос:5</div>
      </div>
    </div>
  );
};
