import React from "react";
import { PacksTitle } from "features/Packs/commonComponent/PacksTitle/PacksTitle";
import Search from "features/Packs/commonComponent/Search/Search";
import s from "features/Packs/PacksList/PacksList.module.scss";
import s1 from "../style.module.scss";
import { MiniTitle } from "features/Packs/commonComponent/MiniTitle/MiniTitle";
import Table from "@mui/material/Table/Table";
import star from "../../../common/Image/Star 5.svg";
import pencil from "../../../common/Image/Vector (Stroke).svg";
import trash from "../../../common/Image/trash.svg";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { BackTo } from "features/Packs/commonComponent/BackTo/BackTo";

const MyPack = () => {
  return (
    <div className={s1.container}>
      <BackTo name={"Back to MyPack List"} link={"/packs"} />
      <PacksTitle name={"MyPack"} buttonName={"Add new card"} callback={() => {}} />
      <div className={s.dataCards}>
        <div className={s.search}>
          <MiniTitle name={"Search"} />
          <Search></Search>
        </div>
      </div>
      <TableContainer>
        <Table sx={{ width: "1008px" }}>
          <TableHead>
            <TableRow sx={{ background: "#EFEFEF", height: "48px", fontWeight: "700" }}>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>Questions</TableCell>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>Answer</TableCell>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>Last updated</TableCell>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>Grade</TableCell>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((el) => (
              <TableRow sx={{ borderBottom: "1px solid" }}>
                <TableCell sx={{ background: "white" }}>{el.name}</TableCell>
                <TableCell sx={{ background: "white" }}>{el.cards}</TableCell>
                <TableCell sx={{ background: "white" }}>{el.createdBy}</TableCell>
                <TableCell sx={{ background: "white" }}>
                  {
                    <>
                      <img src={el.url} />
                      <img src={el.url} />
                      <img src={el.url} />
                      <img src={el.url} />
                      <img src={el.url} />
                    </>
                  }
                </TableCell>
                <TableCell sx={{ background: "white" }}>
                  <>
                    <img src={el.url2} alt="change" />
                    <img src={el.url3} alt="delete" />
                  </>
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
    url2: pencil,
    url3: trash,
  },
  {
    name: "How 'This' works in JavaScript?",
    cards: 'This is how "This" works in JavaScript',
    createdBy: "18.03.2021",
    url: star,
    url2: pencil,
    url3: trash,
  },
  {
    name: "How 'This' works in JavaScript?",
    cards: 'This is how "This" works in JavaScript',
    createdBy: "20.03.2021",
    url: star,
    url2: pencil,
    url3: trash,
  },
];
export default MyPack;
