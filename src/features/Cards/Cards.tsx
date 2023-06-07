import React, { useEffect } from "react";
import { PacksTitle } from "features/Packs/packsComponents/PacksTitle/PacksTitle";
import Search from "common/component/Search/Search";
import s1 from "features/Packs/style.module.scss";
import { BackTo } from "common/component/BackTo/BackTo";
import { getCards } from "features/Cards/cards.slice";
import { TableCards } from "features/Cards/cardsComponents/TableCards/TableCards";
import { cardsTotalCountSelector, pageSelector } from "features/Cards/cardsSelectors";
import { ModalAddCards } from "features/Cards/cardsComponents/Modal/ModalAddCards";
import { Pagination } from "common/component/Pagination/Pagination";
import { Button } from "common/component/Button/Button";
import { useCards } from "features/Cards/hook/useCards";
import { ValueNotFound } from "features/Packs/packsComponents/ValueNotFound/ValueNotFound";
import { Loader } from "common/component/Loader/Loader";
import { Table } from "common/component/Table/Table";

export const Cards = () => {
  const {
    cards,
    value,
    packName,
    myId,
    userId,
    linkToPacks,
    onClickPageNumber,
    onClickLearn,
    SearchCards,
    dispatch,
    id,
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
      <Table
        elementCount={cards.length}
        valueNotFound={"Карточки с введенным название не найдены 🙈. Измените параметры запроса!"}
      >
        <TableCards />
      </Table>
      <Pagination
        name={"card"}
        totalCount={cardsTotalCountSelector}
        pageCurrents={pageSelector}
        callback={onClickPageNumber}
      />
    </div>
  );
};
