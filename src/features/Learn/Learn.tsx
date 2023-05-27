import React, { useState } from "react";
import s from "./style.module.scss";
import { Button } from "common/component/Button/Button";
import { useParams } from "react-router-dom";
import { Question } from "features/Learn/Component/Question";
import { Answer } from "features/Learn/Component/Answer";

export const Learn = () => {
  const [edit, setEdit] = useState(false);
  const onClickShow = () => {
    setEdit(!edit);
  };
  const params = useParams();
  return (
    <div>
      <h2 className={s.header}> {params.packName}</h2>
      <div className={s.learnContainer}>
        <Question />
        <div className={s.countAnswer}> Количество попыток ответов на вопрос: 10</div>
        {edit && <Answer />}
        <div className={s.btn}>
          <Button name={"Show answer"} callback={onClickShow}></Button>
        </div>
      </div>
    </div>
  );
};
