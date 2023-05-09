import React, { useEffect, useState } from "react";
import { PacksTitle } from "features/Packs/commonComponent/PacksTitle/PacksTitle";
import Search from "features/Packs/commonComponent/Search/Search";
import s from "features/Packs/PacksList/PacksList.module.scss";
import s1 from "../style.module.scss";
import { MiniTitle } from "features/Packs/commonComponent/MiniTitle/MiniTitle";
import Table from "@mui/material/Table/Table";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Range } from "features/Packs/PacksList/Range/Range";
import { useAppDispatch } from "app/hooks";
import { packsThunks } from "features/Packs/pack.slice";
import { useAppSelector } from "app/store";

const PacksList = () => {
  const [mode, setMode] = useState(false);
  const onClickHandler = () => {
    setMode(!mode);
  };
  const addPack = () => {
    dispatch(packsThunks.addPacksTC({ cardsPack: { name: "test" } }));
  };
  const pack = useAppSelector((state) => state.pack.packList.cardPacks);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(packsThunks.getPacksTC({ page: 1, pageCount: 5 }));
  }, []);

  return (
    <div className={s1.container}>
      <PacksTitle name={"PacksList"} buttonName={"Add new pack"} callback={addPack} />
      {/*<button onClick={packsThunks.getPacksTC}>TEST</button>*/}
      <div className={s.dataCards}>
        <div className={s.search}>
          <MiniTitle name={"Search"} />
          <Search></Search>
        </div>
        <div className={s.choiceCards}>
          <MiniTitle name={" Show packs cards"} />
          <div>
            <button onClick={onClickHandler} className={mode ? s.myCards : s.allCards}>
              My
            </button>
            <button onClick={onClickHandler} className={!mode ? s.myCards : s.allCards}>
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
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>Name</TableCell>
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
                <TableCell sx={{ background: "white" }}>{el.created}</TableCell>
                <TableCell sx={{ background: "white" }}>{el.user_id}</TableCell>
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
