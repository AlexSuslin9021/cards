import React from "react";
import s from "features/Learn/style.module.scss";
type AnswerType = {
  answer: string;
};
export const Answer: React.FC<AnswerType> = ({ answer }) => {
  return (
    <div className={s.answerVariant}>
      <div style={{ margin: "10px 0 10px 0" }}>
        <b>Answer:</b>
        {answer}
      </div>
      <div>
        <input type="radio" />
        <span>Did not know</span>
      </div>
      <div>
        <input type="radio" />
        <span>Forgot</span>
      </div>
      <div>
        <input type="radio" />
        <span>A lot of thought</span>
      </div>
      <div>
        <input type="radio" />
        <span>Сonfused</span>
      </div>
      <div>
        <input type="radio" />
        <span>Knew the answer</span>
      </div>
    </div>
  );
};
