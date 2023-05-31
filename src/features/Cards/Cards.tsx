import React, { useEffect, useState } from "react";
import { PacksTitle } from "features/Packs/commonComponent/PacksTitle/PacksTitle";
import Search from "common/Search/Search";
import s from "features/Packs/PacksList/PacksList.module.scss";
import s1 from "features/Packs/style.module.scss";
import { MiniTitle } from "features/Packs/commonComponent/MiniTitle/MiniTitle";
import { BackTo } from "common/component/BackTo/BackTo";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { cardsSearchParams, getCards } from "features/Cards/cards.slice";
import { useNavigate, useParams } from "react-router-dom";
import { useDebounce } from "common/hooks/useDebounce";
import { Tables } from "common/Test/Table";
import {
  cardsTotalCountSelector,
  packNameSelect,
  packUserIdSelector,
  pageQuerySelector,
  pageSelector,
  sortCardsSelector,
} from "features/Cards/selectors";
import { ModalAddCards } from "features/Cards/Modal/ModalAddCards";
import { myIdSelector, user_idSelector } from "features/Packs/selector";
import { Pagination } from "common/component/Pagination/Pagination";
import { Button } from "common/component/Button/Button";

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
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCards({ cardsPack_id: id ? id : "", cardAnswer: value }));
  }, [debounceValue, sortCards, page]);

  const linkToPacks = myId === userId ? "my" : "all";
  const onClickHandler = (page: number) => {
    dispatch(cardsSearchParams({ page: page, pageCount: 10 }));
  };
  const onClickLearn = () => {
    navigate(`/learn/${packName}`);
  };
  const onChangeInputHandler = (value: string) => {
    setValue(value);
    dispatch(cardsSearchParams({ cardAnswer: debounceValue }));
  };

  return (
    <div className={s1.container}>
      <BackTo name={"Back to MyPack List"} link={`/packs/${linkToPacks}`} />
      <PacksTitle name={packName}>
        {userId === myId ? <ModalAddCards /> : <Button callback={onClickLearn} name={"Learn"} />}
      </PacksTitle>
      <div className={s.dataCards}>
        <div className={s.search}>
          <MiniTitle name={"Search"} />
          <Search value={value} callback={onChangeInputHandler}></Search>
        </div>
      </div>
      <Tables />
      <Pagination totalCount={cardsTotalCountSelector} pageCurrents={pageSelector} callback={onClickHandler} />
    </div>
  );
};
