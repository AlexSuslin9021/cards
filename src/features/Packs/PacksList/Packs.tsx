import React from "react";
import { PacksTitle } from "features/Packs/commonComponent/PacksTitle/PacksTitle";
import Search from "features/Packs/commonComponent/Search/Search";
import s from "features/Packs/PacksList/Packs.module.scss";
import s1 from "../style.module.scss";
import { MiniTitle } from "features/Packs/commonComponent/MiniTitle/MiniTitle";
import Table from "@mui/material/Table/Table";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const Packs = () => {
  return (
    <div className={s1.container}>
      <PacksTitle name={"Packs"} buttonName={"Add new pack"} callback={() => {}} />
      <div className={s.dataCards}>
        <div className={s.search}>
          <MiniTitle name={"Search"} />
          <Search></Search>
        </div>
        <div className={s.choiceCards}>
          <MiniTitle name={" Show packs cards"} />
          <div>
            <button className={s.myCards}>My</button>
            <button className={s.allCards}>All</button>
          </div>
        </div>
        <div className={s.sliderCont}>
          <MiniTitle name={" Number of cards"} />
          <div className={s.slider}>
            <div> 2</div>
            <div> slider</div>
            <div> 3</div>
          </div>
        </div>
        <div>icon</div>
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
            {data.map((el) => (
              <TableRow sx={{ borderBottom: "1px solid" }}>
                <TableCell sx={{ background: "white" }}>{el.name}</TableCell>
                <TableCell sx={{ background: "white" }}>{el.cards}</TableCell>
                <TableCell sx={{ background: "white" }}>{el.lastUpdated}</TableCell>
                <TableCell sx={{ background: "white" }}>{el.createdBy}</TableCell>
                <TableCell sx={{ background: "white" }}>{el.actions}</TableCell>
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
    name: "Товар 1",
    cards: "Card1",
    lastUpdated: 162,
    createdBy: "16-02-22",
    actions: "sasas",
  },
  {
    name: "Товар 1",
    cards: "Card2",
    lastUpdated: 1322,
    createdBy: "1-05-23",
    actions: "sasas",
  },
  {
    name: "Товар 3",
    cards: "Card3",
    lastUpdated: 162323,
    createdBy: "14-03-23",
    actions: "sasas",
  },
];
export default Packs;
