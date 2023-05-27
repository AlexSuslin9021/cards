import React, { useState } from "react";
import s from "./style.module.scss";
import { Button } from "common/component/Button/Button";
import { useParams } from "react-router-dom";
import { Question } from "features/Learn/Component/Question";
import { Answer } from "features/Learn/Component/Answer";
import { CardType } from "features/Cards/Cards.api";

export const Learn = () => {
  const [edit, setEdit] = useState(false);
  // const getCard = (cards: CardType[]) => {
  //   const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
  //   const rand = Math.random() * sum;
  //   const res = cards.reduce(
  //     (acc: { sum: number; id: number }, card, i) => {
  //       const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
  //       return { sum: newSum, id: newSum < rand ? i : acc.id };
  //     },
  //     { sum: 0, id: -1 }
  //   );
  //   console.log("test: ", sum, rand, res);
  //
  //   return cards[res.id + 1];
  // };

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
