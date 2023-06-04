import React, { useEffect } from "react";
import { packsThunks } from "features/Packs/pack.slice";
import { SearchPanel } from "features/Packs/packsComponents/SearchPanel/SearchPanel";
import { PacksTitle } from "features/Packs/packsComponents/PacksTitle/PacksTitle";
import { TablePacks } from "features/Packs/packsComponents/TablePacks/TablePacks";
import { Pagination } from "common/component/Pagination/Pagination";
import { Navigate } from "react-router-dom";
import s from "./style.module.scss";
import { AddPackModal } from "features/Packs/packsComponents/Modal/AddPackModal";
import { cardPacksTotalCountSelector, packSelector, pageCurrentSelector } from "features/Packs/packsSelector";
import { usePack } from "features/Packs/hooks/usePack";
import { useAppSelector } from "app/store";
import { ValueNotFound } from "features/Packs/packsComponents/ValueNotFound/ValueNotFound";
import { isLoggedInSelect } from "app/selectorsApp";
import { Loader } from "common/component/Loader/Loader";
import { Table } from "common/component/Table/Table";

export const Pack = () => {
  const {
    onClickHandler,
    page,
    user_id,
    max,
    min,
    pageCount,
    sortPacks,
    packName,
    isLoggedIn,
    dispatch,
    packs,
    loading,
  } = usePack();
  useEffect(() => {
    dispatch(packsThunks.getPacksTC({ user_id, min, max }));
  }, [page, user_id, max, min, pageCount, sortPacks, packName]);

  if (!isLoggedIn) {
    debugger;
    return <Navigate to={"/login"} />;
  }
  return (
    <div className={s.container}>
      <PacksTitle name={"Pack list"}>
        <AddPackModal />
      </PacksTitle>
      <SearchPanel />
      <Table
        elementCount={packs.length}
        valueNotFound={"Колоды с введенным название не найдены 🙈. Измените параметры запроса!"}
      >
        <TablePacks />
      </Table>
      <Pagination
        name={"pack"}
        callback={onClickHandler}
        totalCount={cardPacksTotalCountSelector}
        pageCurrents={pageCurrentSelector}
      />
    </div>
  );
};
