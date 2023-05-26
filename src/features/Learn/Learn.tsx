import React from "react";
import s from "./style.module.scss";
// import s1 from "features/Packs/style.module.scss";
import { Button } from "common/component/Button/Button";
// import { useAppSelector } from "common/hooks";
// import { packNameSelect } from "features/Cards/selectors";
import { useParams } from "react-router-dom";

export const Learn = () => {
  // const packName = useAppSelector(packNameSelect);
  const params = useParams();
  return (
    <div>
      <h2 className={s.header}> {params.packName}</h2>
      <div className={s.learnContainer}>
        <div className={s.question}>
          <b>Question:</b> How this work in JS
        </div>
        <div className={s.countAnswer}> Количество попыток ответов на вопрос: 10</div>
        <Button name={"Show answer"} callback={() => {}}></Button>
      </div>
    </div>
  );
};
