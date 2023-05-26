import React, { useEffect, useState } from "react";
import { PacksTitle } from "features/Packs/commonComponent/PacksTitle/PacksTitle";
import Search from "features/Packs/commonComponent/Search/Search";
import s from "features/Packs/PacksList/PacksList.module.scss";
import s1 from "features/Packs/style.module.scss";
import { MiniTitle } from "features/Packs/commonComponent/MiniTitle/MiniTitle";
import Table from "@mui/material/Table/Table";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { BackTo } from "features/Packs/commonComponent/BackTo/BackTo";
import { useCards } from "features/Cards/hook/useCards";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { cardsSearchParams, getCards } from "features/Cards/cards.slice";
import { useParams } from "react-router-dom";
import { useDebounce } from "common/hooks/useDebounce";

const FriendsPack = () => {
  const [value, setValue] = useState<string>("");
  const { cards } = useCards();
  const dispatch = useAppDispatch();
  const debounceValue = useDebounce(value, 1000);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCards({ cardsPack_id: id, cardAnswer: value }));
  }, [debounceValue]);

  const onChangeInputHandler = (value: string) => {
    setValue(value);
    dispatch(cardsSearchParams({ cardAnswer: debounceValue }));
  };

  return (
    <div className={s1.container}>
      <BackTo name={"Back to MyPack List"} link={"/packs/all"} />
      <PacksTitle name={"Friends packs"}>
        <h1></h1>
      </PacksTitle>
      <div className={s.dataCards}>
        <div className={s.search}>
          <MiniTitle name={"Search"} />
          <Search value={value} callback={onChangeInputHandler}></Search>
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
