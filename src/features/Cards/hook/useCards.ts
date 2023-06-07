import { useAppSelector } from "app/store";
import {
  cardsSelector,
  packNameSelect,
  packUserIdSelector,
  pageCountSelector,
  pageQuerySelector,
  sortCardsSelector,
} from "features/Cards/cardsSelectors";
import { useState } from "react";
import { useAppDispatch } from "common/hooks";
import { useDebounce } from "common/hooks/useDebounce";
import { useNavigate, useParams } from "react-router-dom";
import { myIdSelector } from "features/Packs/packsSelector";
import { isLoggedInSelect } from "app/selectorsApp";
import { cardsSearchParams } from "features/Cards/cards.slice";

export const useCards = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");
  const { id } = useParams();
  const navigate = useNavigate();
  const debounceValue = useDebounce(value, 1000);
  const packName = useAppSelector(packNameSelect);
  const myId = useAppSelector(myIdSelector);
  const userId = useAppSelector(packUserIdSelector);
  const sortCards = useAppSelector(sortCardsSelector);
  const page = useAppSelector(pageQuerySelector);
  const pageCount = useAppSelector(pageCountSelector);
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
  };
};
