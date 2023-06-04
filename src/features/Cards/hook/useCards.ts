import { useAppSelector } from "app/store";
import {
  cardsSelector,
  packNameSelect,
  packUserIdSelector,
  pageCountSelector,
  pageQuerySelector,
  sortCardsSelector,
} from "features/Cards/cardsSelectors";
import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch } from "common/hooks";
import { useDebounce } from "common/hooks/useDebounce";
import { useNavigate, useParams } from "react-router-dom";
import { myIdSelector } from "features/Packs/packsSelector";
import { isLoggedInSelect } from "app/selectorsApp";
import { cardsSearchParams, getCards } from "features/Cards/cards.slice";

export const useCards = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useAppDispatch();
  const debounceValue = useDebounce(value, 1000);
  const { id } = useParams();
  const packName = useAppSelector(packNameSelect);
  const myId = useAppSelector(myIdSelector);
  const userId = useAppSelector(packUserIdSelector);
  const sortCards = useAppSelector(sortCardsSelector);
  const page = useAppSelector(pageQuerySelector);
  const pageCount = useAppSelector(pageCountSelector);
  const navigate = useNavigate();
  const loading = useAppSelector(isLoggedInSelect);
  const cards = useAppSelector(cardsSelector);

  const linkToPacks = myId === userId ? "my" : "all";
  const onClickPageNumber = (page: number) => {
    dispatch(cardsSearchParams({ page: page, pageCount: pageCount }));
  };
  const onClickLearn = () => {
    navigate(`/learn/${packName}`);
  };
  const SearchCards = (value: string) => {
    setValue(value);
    dispatch(cardsSearchParams({ cardAnswer: debounceValue }));
  };
  // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   SearchCards(e.currentTarget.value);
  // };

  return {
    cards,
    value,
    setValue,
    dispatch,
    id,
    debounceValue,
    packName,
    myId,
    userId,
    sortCards,
    page,
    pageCount,
    navigate,
    loading,
    linkToPacks,
    onClickPageNumber,
    onClickLearn,
    SearchCards,
    // onChangeHandler,
  };
};
