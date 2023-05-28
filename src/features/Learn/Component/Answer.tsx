import React from "react";
import s from "features/Learn/style.module.scss";
type AnswerType = {
  answer: string;
  // id:number
  // gradesValue:string
};
export const Answer: React.FC<AnswerType> = ({ answer }) => {
  const grades = [
    { id: 1, gradesValue: "Did not know" },
    { id: 2, gradesValue: "Forgot" },
    { id: 3, gradesValue: "A lot of thought" },
    { id: 4, gradesValue: "Сonfused" },
    { id: 5, gradesValue: "Knew the answer" },
  ];
  return (
    <div className={s.answerVariant}>
      <div style={{ margin: "10px 0 10px 0" }}>
        <b>Answer:</b>
        {answer}
      </div>
      {grades.map((g) => {
        return (
          <div key={g.id}>
            <input type="radio" value={g.id} />
            <span>{g.gradesValue}</span>
          </div>
        );
      })}
    </div>
  );
};
