import React, { useEffect } from "react";
import { PacksTitle } from "features/Packs/packsComponents/PacksTitle/PacksTitle";
import Search from "common/component/Search/Search";
import s1 from "features/Packs/style.module.scss";
import { BackTo } from "common/component/BackTo/BackTo";
import { getCards } from "features/Cards/cards.slice";
import { TableCards } from "common/component/Table/Table";
import { cardsTotalCountSelector, pageSelector } from "features/Cards/cardsSelectors";
import { ModalAddCards } from "features/Cards/cardsComponents/Modal/ModalAddCards";
import { Pagination } from "common/component/Pagination/Pagination";
import { Button } from "common/component/Button/Button";
import { useCards } from "features/Cards/hook/useCards";
import { ValueNotFound } from "features/Packs/packsComponents/ValueNotFound/ValueNotFound";
import { Loader } from "common/component/Loader/Loader";

export const Cards = () => {
  const {
    cards,
    value,
    packName,
    myId,
    userId,
    loading,
    linkToPacks,
    onClickPageNumber,
    onClickLearn,
    SearchCards,
    id,
    dispatch,
    debounceValue,
    sortCards,
    page,
  } = useCards();
  useEffect(() => {
    dispatch(getCards({ cardsPack_id: id ? id : "", cardAnswer: value }));
  }, [debounceValue, sortCards, page]);

  return (
    <div className={s1.container}>
      <BackTo name={"Back to MyPack List"} link={`/packs/${linkToPacks}`} />
      <PacksTitle name={packName}>
        {userId === myId ? <ModalAddCards /> : <Button callback={onClickLearn} name={"Learn"} />}
      </PacksTitle>
      <Search value={value} callback={SearchCards}></Search>
      {loading ? (
        <Loader />
      ) : cards.length ? (
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
