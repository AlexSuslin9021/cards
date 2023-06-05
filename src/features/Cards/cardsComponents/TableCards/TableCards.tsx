import React from "react";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useCards } from "features/Cards/hook/useCards";
import Table from "@mui/material/Table/Table";
import TableHeader from "features/Packs/packsComponents/TablePacks/TableHeader/TableHeader";
import { GradesStars } from "features/Cards/cardsComponents/Raiting";
import Icon from "common/component/Icon/Icon";
import { IconCards } from "features/Cards/cardsComponents/TableCards/Icon/IconCards";

export const TableCards = () => {
  const { cards, myId } = useCards();
  const style = { fontFamily: "Montserrat", fontWeight: "700" };
  const style2 = { background: "white" };

  return (
    <TableContainer>
      <Table sx={{ maxWidth: "1008px" }}>
        <TableHead>
          <TableRow sx={{ background: "#EFEFEF", height: "48px", fontWeight: "700" }}>
            <TableCell sx={style}>
              <TableHeader headerName={"Questions"} sortName={"question"} />
            </TableCell>
            <TableCell sx={style}>Answer</TableCell>
            <TableCell sx={style}>Last updated</TableCell>
            <TableCell sx={style}>Grade</TableCell>
            <TableCell sx={style}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cards.map((el) => (
            <TableRow key={el._id} sx={{ borderBottom: "1px solid" }}>
              <TableCell sx={style2}>
                {el.question.includes("base64") ? <Icon src={el.question} /> : el.question}
              </TableCell>
              <TableCell sx={style2}>{el.answer}</TableCell>
              <TableCell sx={style2}>{el.created}</TableCell>
              <TableCell sx={style2}>
                <GradesStars grade={el.grade} />
              </TableCell>
              <TableCell sx={style2}>
                {el.user_id === myId && (
                  <IconCards _id={el._id} answer={el.answer} question={el.question} cardsPack_id={el.cardsPack_id} />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
