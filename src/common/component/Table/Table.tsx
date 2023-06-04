import React from "react";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useCards } from "features/Cards/hook/useCards";
import Table from "@mui/material/Table/Table";
import { UpdateModalCard } from "features/Cards/cardsComponents/Modal/ModalUpdateCards";
import { DeleteModalCard } from "features/Cards/cardsComponents/Modal/ModalDeleteCards";
import { useAppSelector } from "common/hooks";
import TableHeader from "features/Packs/packsComponents/TablePacks/TableHeader/TableHeader";
import { GradesStars } from "features/Cards/cardsComponents/Raiting";
import Icon from "common/component/Icon/Icon";

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
                  <span>
                    {
                      <UpdateModalCard
                        id={el._id}
                        answerUpdate={el.answer}
                        questionUpdate={el.question}
                        cardsPack_id={el.cardsPack_id}
                      />
                    }
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
