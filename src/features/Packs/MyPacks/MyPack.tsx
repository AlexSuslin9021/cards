import React from "react";
import { PacksTitle } from "features/Packs/commonComponent/PacksTitle/PacksTitle";
import Search from "features/Packs/commonComponent/Search/Search";
import s from "features/Packs/PacksList/PacksList.module.scss";
import s1 from "../style.module.scss";
import { MiniTitle } from "features/Packs/commonComponent/MiniTitle/MiniTitle";
import Table from "@mui/material/Table/Table";
import star from "../../../common/Image/Star 5.svg";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const MyPack = () => {
  return (
    <div className={s1.container}>
      <PacksTitle name={"MyPack"} buttonName={"Add new pack"} callback={() => {}} />
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
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>Questions</TableCell>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>Answer</TableCell>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>Last updated</TableCell>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>Grade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((el) => (
              <TableRow sx={{ borderBottom: "1px solid" }}>
                <TableCell sx={{ background: "white" }}>{el.name}</TableCell>
                <TableCell sx={{ background: "white" }}>{el.cards}</TableCell>
                <TableCell sx={{ background: "white" }}>{el.createdBy}</TableCell>
                <TableCell sx={{ background: "white" }}>
                  {" "}
                  {
                    <>
                      <img src={el.url} /> <img src={el.url} />
                      <img src={el.url} />
                      <img src={el.url} />
                      <img src={el.url} />
                    </>
                  }{" "}
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
    name: "How 'This' works in JavaScript?",
    cards: 'This is how "This" works in JavaScript',
    createdBy: "19.03.2021",
    url: star,
  },
  {
    name: "How 'This' works in JavaScript?",
    cards: 'This is how "This" works in JavaScript',
    createdBy: "18.03.2021",
    url: star,
  },
  {
    name: "How 'This' works in JavaScript?",
    cards: 'This is how "This" works in JavaScript',
    createdBy: "20.03.2021",
    url: star,
  },
];
export default MyPack;
