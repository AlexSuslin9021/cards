import React, { useEffect } from "react";
import { PacksTitle } from "features/Packs/commonComponent/PacksTitle/PacksTitle";
import Search from "features/Packs/commonComponent/Search/Search";
import s from "features/Packs/PacksList/PacksList.module.scss";
import s1 from "features/Packs/style.module.scss";
import { MiniTitle } from "features/Packs/commonComponent/MiniTitle/MiniTitle";
import Table from "@mui/material/Table/Table";
import star from "common/Image/Star 5.svg";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { BackTo } from "features/Packs/commonComponent/BackTo/BackTo";
import { useCards } from "features/Cards/hook/useCards";
import { useAppDispatch } from "common/hooks";
import { getCards } from "features/Cards/cards.slice";
import { useParams } from "react-router-dom";

const FriendsPack = () => {
  const { cards } = useCards();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getCards({ cardsPack_id: id }));
  }, []);
  return (
    <div className={s1.container}>
      <BackTo name={"Back to MyPack List"} link={"/packs/all"} />
      <PacksTitle name={"Friend's Pack"}>
        <h1></h1>
      </PacksTitle>
      <div className={s.dataCards}>
        <div className={s.search}>
          <MiniTitle name={"Search"} />
          {/*<Search></Search>*/}
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
            </TableRow>
          </TableHead>
          <TableBody>
            {cards.map((el) => (
              <TableRow sx={{ borderBottom: "1px solid" }}>
                <TableCell sx={{ background: "white" }}>{el.question}</TableCell>
                <TableCell sx={{ background: "white" }}>{el.answer}</TableCell>
                <TableCell sx={{ background: "white" }}>{el.created}</TableCell>
                <TableCell sx={{ background: "white" }}>
                  {
                    <>
                      {/*<img src={el.url} /> <img src={el.url} />*/}
                      {/*<img src={el.url} />*/}
                      {/*<img src={el.url} />*/}
                      {/*<img src={el.url} />*/}
                    </>
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

export default FriendsPack;
