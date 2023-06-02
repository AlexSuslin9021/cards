import React, { useEffect, useState } from "react";
import { PacksTitle } from "features/Packs/packsComponents/PacksTitle/PacksTitle";
import Search from "common/component/Search/Search";
import s1 from "features/Packs/style.module.scss";
import { BackTo } from "common/component/BackTo/BackTo";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { cardsSearchParams, getCards } from "features/Cards/cards.slice";
import { useNavigate, useParams } from "react-router-dom";
import { useDebounce } from "common/hooks/useDebounce";
import { TableCards } from "common/component/Table/Table";
import {
  cardsTotalCountSelector,
  packNameSelect,
  packUserIdSelector,
  pageCountSelector,
  pageQuerySelector,
  pageSelector,
  sortCardsSelector,
} from "features/Cards/cardsSelectors";
import { ModalAddCards } from "features/Cards/cardsComponents/Modal/ModalAddCards";
import { myIdSelector } from "features/Packs/packsSelector";
import { Pagination } from "common/component/Pagination/Pagination";
import { Button } from "common/component/Button/Button";
import { useCards } from "features/Cards/hook/useCards";
import { ValueNotFound } from "features/Packs/packsComponents/ValueNotFound/ValueNotFound";

export const Cards = () => {
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
  const { cards } = useCards();

  useEffect(() => {
    dispatch(getCards({ cardsPack_id: id ? id : "", cardAnswer: value }));
  }, [debounceValue, sortCards, page]);

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

  return (
    <div className={s1.container}>
      <BackTo name={"Back to MyPack List"} link={`/packs/${linkToPacks}`} />
      <PacksTitle name={packName}>
        {userId === myId ? <ModalAddCards /> : <Button callback={onClickLearn} name={"Learn"} />}
      </PacksTitle>
      <Search value={value} callback={SearchCards}></Search>
      {cards.length ? (
        <TableCards />
      ) : (
        <ValueNotFound value={"Карточки с введенным название не найдены 🙈. Измените параметры запроса!"} />
      )}
      <Pagination
        name={"card"}
        totalCount={cardsTotalCountSelector}
        pageCurrents={pageSelector}
        callback={onClickPageNumber}
      />
    </div>
  );
};
