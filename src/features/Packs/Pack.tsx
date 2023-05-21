import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { packsThunks } from "features/Packs/pack.slice";
import SearchPanel from "features/Packs/SearchPanel";
import { PacksTitle } from "features/Packs/commonComponent/PacksTitle/PacksTitle";
import { PacksList } from "features/Packs/PacksList/PacksList";
import { Pagination } from "features/Packs/commonComponent/Pagination/Pagination";
import { Navigate } from "react-router-dom";
import s from "./style.module.scss";
import { AddModal } from "common/component/Modal/AddModal";
import { isLoggedIn, page, max, min, pageCount, user_id, sortPacks, packName } from "features/Packs/selector";

const Pack = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(packsThunks.getPacksTC({}));
  }, [page, user_id, max, min, pageCount, sortPacks, packName]);

  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div className={s.container}>
      <PacksTitle name={"Pack list"}>
        <AddModal />
      </PacksTitle>
      <SearchPanel />
      <PacksList />
      <Pagination />
    </div>
  );
};

export default Pack;
