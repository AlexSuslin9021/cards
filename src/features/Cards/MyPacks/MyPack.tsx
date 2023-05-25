import React, { useEffect } from "react";
import { PacksTitle } from "features/Packs/commonComponent/PacksTitle/PacksTitle";
import s1 from "features/Packs/style.module.scss";
import Table from "@mui/material/Table/Table";

import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { BackTo } from "features/Packs/commonComponent/BackTo/BackTo";
import { ModalAddCards } from "features/Cards/Modal/ModalAddCards";
import { useCards } from "features/Cards/hook/useCards";
import { getCards } from "features/Cards/cards.slice";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { cardsPack_idSelector } from "features/Cards/selectors";
import { DeleteModalCard } from "features/Cards/Modal/ModalDeleteCards";
import { UpdateModalCard } from "features/Cards/Modal/ModalUpdateCards";
import TableHeader from "features/Packs/PacksList/TableHeader/TableHeader";

const MyPack = () => {
  const { cards } = useCards();
  const dispatch = useAppDispatch();
  const cardsPack_id = useAppSelector(cardsPack_idSelector);
  useEffect(() => {
    dispatch(getCards({ cardsPack_id: cardsPack_id }));
  }, []);
  return (
    <div className={s1.container}>
      <BackTo name={"Back to MyPack List"} link={"/packs/my"} />
      <PacksTitle name={"My Pack"}>
        <ModalAddCards />
      </PacksTitle>
      <TableContainer>
        <Table sx={{ width: "1008px" }}>
          <TableHead>
            <TableRow sx={{ background: "#EFEFEF", height: "48px", fontWeight: "700" }}>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>
                Questions
                <TableHeader headerName={"Questions"} sortName={"question"} />
              </TableCell>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>Answer</TableCell>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>Last updated</TableCell>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>Grade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cards.map((el) => (
              <TableRow key={el._id} sx={{ borderBottom: "1px solid" }}>
                <TableCell sx={{ background: "white" }}>{el.question}</TableCell>
                <TableCell sx={{ background: "white" }}>{el.answer}</TableCell>
                <TableCell sx={{ background: "white" }}>{el.created}</TableCell>
                <TableCell sx={{ background: "white" }}>
                  {
                    <span>
                      {<UpdateModalCard id={el._id} cardsPack_id={el.cardsPack_id} />}
                      {
                        <DeleteModalCard id={el._id} name={el.answer} />
                        // <img
                        //   style={{ marginRight: "10px", cursor: "pointer" }}
                        //   // onClick={() => updatePack(el._id)}
                        //   src={remove}
                        //   alt="delete"
                        // />
                      }
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

export default MyPack;
