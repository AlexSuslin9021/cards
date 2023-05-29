import React, { useEffect, useState } from "react";
import s from "./style.module.scss";
import { Button } from "common/component/Button/Button";
import { useParams } from "react-router-dom";
import { Question } from "features/Learn/Component/Question";
import { Answer } from "features/Learn/Component/Answer";
import { CardResponseType } from "features/Cards/Cards.api";
import { cardsSelector } from "features/Cards/selectors";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { getCards, updateGrade } from "features/Cards/cards.slice";
import { BackTo } from "common/component/BackTo/BackTo";

const getCard = (cards: CardResponseType[]) => {
  //возвращает рандомную карточку
  const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
  const rand = Math.random() * sum;
  const res = cards.reduce(
    (acc: { sum: number; id: number }, card, i) => {
      const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
      return { sum: newSum, id: newSum < rand ? i : acc.id };
    },
    { sum: 0, id: -1 }
  );
  return cards[res.id + 1];
};

export const Learn = () => {
  const [card, setCard] = useState<CardResponseType>({
    _id: "fake",
    cardsPack_id: "",
    answer: "answer fake",
    question: "question fake",
    grade: 0,
    shots: 5,
    created: "",
    updated: "",
    user_id: "",
  });
  const [edit, setEdit] = useState(false);
  const [first, setFirst] = useState<boolean>(true);
  const cards = useAppSelector(cardsSelector);
  const { id, packName } = useParams();
  const dispatch = useAppDispatch();

  const onClickShow = () => {
    setEdit(!edit);
  };

  const onNext = (grade: number) => {
    setEdit(false);
    if (cards.length > 0) {
      dispatch(updateGrade({ card_id: card._id, grade: grade }));
      setCard(getCard(cards));
    }
  };

  useEffect(() => {
    if (first) {
      if (id) dispatch(getCards({ cardsPack_id: id }));
      setFirst(false);
    }
    if (cards.length > 0) setCard(getCard(cards));
    return () => {
      // console.log("LearnContainer useEffect off");
    };
  }, [dispatch, id, cards, first]);
  return (
    <div>
      <BackTo name={"Back to MyPack List"} link={`/cards/${card.cardsPack_id}`} />
      <h2 className={s.header}> {packName}</h2>
      <div className={s.learnContainer}>
        <Question question={card.question} />
        {edit && <Answer answer={card.answer} onNext={onNext} />}
        <div className={s.btn}>{!edit && <Button name={"Show answer"} callback={onClickShow}></Button>}</div>
      </div>
    </div>
  );
};
