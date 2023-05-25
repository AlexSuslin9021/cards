import React, { ReactNode } from "react";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useCards } from "features/Cards/hook/useCards";
import Table from "@mui/material/Table/Table";
import { UpdateModalCard } from "features/Cards/Modal/ModalUpdateCards";
import { DeleteModalCard } from "features/Cards/Modal/ModalDeleteCards";
import { useAppSelector } from "common/hooks";

export const Tables = () => {
  const { cards } = useCards();
  const myId = useAppSelector((state) => state.auth.profile?._id);
  debugger;
  return (
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
                {el.user_id === myId && (
                  <span>
                    {<UpdateModalCard id={el._id} cardsPack_id={el.cardsPack_id} />}
                    {<DeleteModalCard id={el._id} name={el.answer} />}
                  </span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
