import React, { ChangeEvent, useState } from "react";
import s from "features/Learn/style.module.scss";
import { Button } from "common/component/Button/Button";
type AnswerType = {
  answer: string;
  onNext: (grade: number) => void;
};
export const Answer: React.FC<AnswerType> = ({ answer, onNext }) => {
  const [value, setValue] = useState<number>(0);
  const grades = [
    { id: 1, gradesValue: "Did not know" },
    { id: 2, gradesValue: "Forgot" },
    { id: 3, gradesValue: "A lot of thought" },
    { id: 4, gradesValue: "Сonfused" },
    { id: 5, gradesValue: "Knew the answer" },
  ];
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(+e.currentTarget.value);
  };
  return (
    <div className={s.answerVariant}>
      <div style={{ margin: "10px 0 10px 0" }}>
        <b>Answer:</b>
        {answer.includes("base64") ? <img style={{ width: "30px", height: "30px" }} src={answer} alt="" /> : answer}
      </div>
      <form action="">
        {grades.map((g) => {
          return (
            <div key={g.id}>
              <input type="radio" value={g.id} onChange={onChange} />
              <span>{g.gradesValue}</span>
            </div>
          );
        })}
        <Button name={"Next"} callback={() => onNext(value)} />
      </form>
    </div>
  );
};
