import { useState } from "react";
import { CardResponseType } from "features/Cards/Cards.api";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { cardsSelector } from "features/Cards/cardsSelectors";
import { useParams } from "react-router-dom";
import { updateGrade } from "features/Cards/cards.slice";

export const useLearn = () => {
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
  return {
    getCard,
    packName,
    card,
    setCard,
    cards,
    edit,
    setEdit,
    dispatch,
    first,
    setFirst,
    id,
    onClickShow,
    onNext,
  };
};
