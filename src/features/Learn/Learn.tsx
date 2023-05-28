import React, { useEffect, useState } from "react";
import s from "./style.module.scss";
import { Button } from "common/component/Button/Button";
import { useParams } from "react-router-dom";
import { Question } from "features/Learn/Component/Question";
import { Answer } from "features/Learn/Component/Answer";
import { CardResponseType } from "features/Cards/Cards.api";
import { cardsSelector } from "features/Cards/selectors";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { getCards } from "features/Cards/cards.slice";

const getCard = (cards: CardResponseType[]) => {
  const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
  const rand = Math.random() * sum;
  const res = cards.reduce(
    (acc: { sum: number; id: number }, card, i) => {
      const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
      return { sum: newSum, id: newSum < rand ? i : acc.id };
    },
    { sum: 0, id: -1 }
  );
  console.log("test: ", sum, rand, res);

  return cards[res.id + 1];
};

export const Learn = () => {
  const [edit, setEdit] = useState(false);
  const cards = useAppSelector(cardsSelector);
  const { id } = useParams();
  const [first, setFirst] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log("LearnContainer useEffect");

    if (first) {
      if (id) dispatch(getCards({ cardsPack_id: id }));
      setFirst(false);
    }

    console.log("cards", cards);
    if (cards.length > 0) setCard(getCard(cards));

    return () => {
      console.log("LearnContainer useEffect off");
    };
  }, [dispatch, id, cards, first]);
  const [card, setCard] = useState<CardResponseType>({
    _id: "fake",
    cardsPack_id: "",
    answer: "answer fake",
    question: "question fake",
    grade: 0,
    shots: 0,
    created: "",
    updated: "",
    user_id: "",
  });

  const onNext = () => {
    debugger;
    setEdit(false);
    if (cards.length > 0) {
      setCard(getCard(cards));
    } else {
    }
  };

  const onClickShow = () => {
    setEdit(!edit);
  };
  const params = useParams();

  return (
    <div>
      <h2 className={s.header}> {params.packName}</h2>
      <div className={s.learnContainer}>
        <div>
          <Question question={card.question} />
          <div className={s.countAnswer}> Количество попыток ответов на вопрос: 10</div>
          {edit && <Answer answer={card.answer} />}
        </div>

        <div className={s.btn}>
          {!edit ? (
            <Button name={"Show answer"} callback={onClickShow}></Button>
          ) : (
            <Button name={"Next"} callback={onNext}></Button>
          )}
        </div>
      </div>
    </div>
  );
};
