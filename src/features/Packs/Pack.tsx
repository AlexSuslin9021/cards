import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { packsThunks } from "features/Packs/pack.slice";
import SearchPanel from "features/Packs/SearchPanel";
import { PacksTitle } from "features/Packs/commonComponent/PacksTitle/PacksTitle";
import { PacksList } from "features/Packs/PacksList/PacksList";
import { Pagination } from "features/Packs/commonComponent/Pagination/Pagination";
import { Navigate } from "react-router-dom";
import s from "./style.module.scss";

const Pack = () => {
  const dispatch = useAppDispatch();
  const pack = useAppSelector((state) => state.pack.packList.cardPacks);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const page = useAppSelector((state) => state.pack.queryParams.page);
  const max = useAppSelector((state) => state.pack.queryParams.max);
  const min = useAppSelector((state) => state.pack.queryParams.min);
  const pageCount = useAppSelector((state) => state.pack.queryParams.pageCount);
  const user_id = useAppSelector((state) => state.pack.queryParams.user_id);
  const sortPacks = useAppSelector((state) => state.pack.queryParams.sortPacks);
  const packName = useAppSelector((state) => state.pack.queryParams.packName);

  useEffect(() => {
    dispatch(packsThunks.getPacksTC({}));
    // let [params, SetParams] = useSearchParams();
  }, [page, user_id, max, min, pageCount, sortPacks, packName]);
  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }
  const addPack = (params: string) => {
    dispatch(packsThunks.addPacksTC({ cardsPack: { name: "New pack" } }));
  };

  return (
    <div className={s.container}>
      <PacksTitle name={"PacksList"} buttonName={"Add new pack"} callback={addPack} />
      <SearchPanel />
      <PacksList />
      <Pagination />
    </div>
  );
};

export default Pack;
