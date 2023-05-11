import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { packsThunks } from "features/Packs/pack.slice";
import { Navigate } from "react-router-dom";
import SearchPanel from "features/Packs/SearchPanel";
import { PacksTitle } from "features/Packs/commonComponent/PacksTitle/PacksTitle";
import { PacksList } from "features/Packs/PacksList/PacksList";
import { Pagination } from "features/Packs/commonComponent/Pagination/Pagination";

const Pack = () => {
  const dispatch = useAppDispatch();
  const pack = useAppSelector((state) => state.pack.packList.cardPacks);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const page = useAppSelector((state) => state.pack.queryParams.page);
  const max = useAppSelector((state) => state.pack.queryParams.max);
  const min = useAppSelector((state) => state.pack.queryParams.min);
  const pageCount = useAppSelector((state) => state.pack.queryParams.pageCount);
  const myId = useAppSelector((state) => state.pack.queryParams.user_id);
  const sortPacks = useAppSelector((state) => state.pack.queryParams.sortPacks);
  const packName = useAppSelector((state) => state.pack.queryParams.packName);
  useEffect(() => {
    dispatch(packsThunks.getPacksTC({ user_id: myId }));
    // let [params, SetParams] = useSearchParams();
  }, [max, page, min, max, pageCount, myId, sortPacks, packName]);
  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }

  const addPack = (params: string) => {
    dispatch(packsThunks.addPacksTC({ cardsPack: { name: "test" } }));
  };

  return (
    <div>
      <PacksTitle name={"PacksList"} buttonName={"Add new pack"} callback={addPack} />
      <SearchPanel />
      <PacksList />
      <Pagination />
    </div>
  );
};

export default Pack;
