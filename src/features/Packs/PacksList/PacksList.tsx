import React, { useEffect, useState } from "react";
import { PacksTitle } from "features/Packs/commonComponent/PacksTitle/PacksTitle";
import Search from "features/Packs/commonComponent/Search/Search";
import s from "features/Packs/PacksList/PacksList.module.scss";
import s1 from "../style.module.scss";
import { MiniTitle } from "features/Packs/commonComponent/MiniTitle/MiniTitle";
import Table from "@mui/material/Table/Table";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Range } from "features/Packs/PacksList/Range/Range";

import { packsThunks, searchParamsAc } from "features/Packs/pack.slice";
import { useAppDispatch, useAppSelector } from "common/hooks";
import remove from "../../../common/Image/trash.svg";
import pencil from "../../../common/Image/pencil.svg";
import { Navigate } from "react-router-dom";

const PacksList = () => {
  const [mode, setMode] = useState(false);
  const dispatch = useAppDispatch();
  const pack = useAppSelector((state) => state.pack.packList.cardPacks);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const page = useAppSelector((state) => state.pack.queryParams.page);
  const max = useAppSelector((state) => state.pack.queryParams.max);
  const min = useAppSelector((state) => state.pack.queryParams.min);
  const pageCount = useAppSelector((state) => state.pack.queryParams.pageCount);
  const myId = useAppSelector((state) => state.pack.queryParams.user_id);
  const sortPacks = useAppSelector((state) => state.pack.queryParams.sortPacks);

  useEffect(() => {
    dispatch(packsThunks.getPacksTC({ user_id: myId }));
  }, [max, page, min, max, pageCount, myId, sortPacks]);
  const searchHandler = (search: string, params: string) => {
    dispatch(searchParamsAc({}));
  };
  const onClickAllPack = () => {
    dispatch(packsThunks.getPacksTC({}));
    setMode(!mode);
  };
  const onClickMyPack = () => {
    setMode(!mode);
    dispatch(packsThunks.getPacksTC({ user_id: "64527e000415841fd8df2cf3" }));
  };
  const addPack = (params: string) => {
    dispatch(packsThunks.addPacksTC({ cardsPack: { name: "test" } }));
  };
  const removePack = (id: string) => {
    dispatch(packsThunks.removePackTC(id));
  };
  const updatePack = (id: string) => {
    dispatch(packsThunks.updatePackTC({ cardsPack: { _id: id, name: "stock" } }));
  };
  const sortHandler = (name: string) => {
    dispatch(packsThunks.getPacksTC({ sortPacks: name }));
  };

  useEffect(() => {
    dispatch(packsThunks.getPacksTC({}));
  }, []);
  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div className={s1.container}>
      <PacksTitle name={"PacksList"} buttonName={"Add new pack"} callback={addPack} />
      <div className={s.dataCards}>
        <div className={s.search}>
          <MiniTitle name={"Search"} />
          <Search></Search>
        </div>
        <div className={s.choiceCards}>
          <MiniTitle name={" Show packs cards"} />
          <div>
            <button onClick={onClickMyPack} className={mode ? s.myCards : s.allCards}>
              My
            </button>
            <button onClick={onClickAllPack} className={!mode ? s.myCards : s.allCards}>
              All
            </button>
          </div>
        </div>
        <div className={s.sliderCont}>
          <MiniTitle name={" Number of cards"} />
          <Range />
        </div>
        <div className={s.icon}>icon</div>
      </div>
      <TableContainer>
        <Table sx={{ width: "1008px" }}>
          <TableHead>
            <TableRow sx={{ background: "#EFEFEF", height: "48px", fontWeight: "700" }}>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>
                <span onClick={() => sortHandler("name")}>Name</span>
              </TableCell>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>Cards</TableCell>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>Last updated</TableCell>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>Created by</TableCell>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pack.map((el) => (
              <TableRow sx={{ borderBottom: "1px solid" }}>
                <TableCell sx={{ background: "white" }}>{el.name}</TableCell>
                <TableCell sx={{ background: "white" }}>{el.cardsCount}</TableCell>
                <TableCell sx={{ background: "white" }}>{el.updated}</TableCell>
                <TableCell sx={{ background: "white" }}>{el.user_name}</TableCell>
                <TableCell sx={{ background: "white" }}>
                  {
                    <span>
                      {/*<img src={lear} alt="lea" />*/}
                      {el.user_id === "64527e000415841fd8df2cf3" && (
                        <img onClick={() => updatePack(el._id)} src={pencil} alt="change name" />
                      )}
                      {el.user_id === "64527e000415841fd8df2cf3" && (
                        <img onClick={() => removePack(el._id)} src={remove} alt="delete" />
                      )}
                    </span>
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
let data = [
  {
    id: 1,
    name: "Товар 1",
    cards: "Card1",
    lastUpdated: 162,
    createdBy: "16-02-22",
    actions: "sasas",
  },
  {
    id: 2,
    name: "Товар 1",
    cards: "Card2",
    lastUpdated: 1322,
    createdBy: "1-05-23",
    actions: "sasas",
  },
  {
    id: 3,
    name: "Товар 3",
    cards: "Card3",
    lastUpdated: 162323,
    createdBy: "14-03-23",
    actions: "sasas",
  },
];
export default PacksList;
