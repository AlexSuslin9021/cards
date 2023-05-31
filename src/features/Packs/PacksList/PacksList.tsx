import React from "react";
import s1 from "../style.module.scss";
import Table from "@mui/material/Table/Table";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { packsThunks } from "features/Packs/pack.slice";
import { useAppDispatch } from "common/hooks";
import teach from "../../../common/Image/teacher.svg";
import TableHeader from "features/Packs/PacksList/TableHeader/TableHeader";
import { UpdateModal } from "common/component/Modal/UpdateModal";
import { DeleteModal } from "common/component/Modal/DeleteModal";
import { useNavigate } from "react-router-dom";
import { myIdSelector, packSelector } from "features/Packs/selector";
import { useAppSelector } from "app/store";
import { cardsSearchParams } from "features/Cards/cards.slice";
import cover from "../../../common/Image/Mask.svg";

const styleTableHead = { fontFamily: "Montserrat", fontWeight: "700" };
const styleTableBody = { background: "white" };

export const PacksList = () => {
  const dispatch = useAppDispatch();
  const myId = useAppSelector(myIdSelector);
  const packs = useAppSelector(packSelector);
  const navigate = useNavigate();

  const updatePack = (id: string) => {
    dispatch(packsThunks.updatePackTC({ cardsPack: { _id: id, name: "new pack" } }));
  };

  const onClickNamePack = (id: string, cardId: string) => {
    navigate(`/cards/${cardId}`);
    dispatch(cardsSearchParams({ cardsPack_id: cardId }));
  };

  return (
    <div className={s1.container}>
      <TableContainer>
        <Table sx={{ width: "1008px" }}>
          <TableHead>
            <TableRow sx={{ background: "#EFEFEF", height: "48px", fontWeight: "700" }}>
              <TableCell sx={{ background: "#EFEFEF", height: "48px", fontWeight: "700" }}>Cover</TableCell>
              <TableCell sx={styleTableHead}>
                <TableHeader headerName={"Name"} sortName={"name"} />
              </TableCell>
              <TableCell sx={styleTableHead}>
                <TableHeader headerName={"Cards"} sortName={"cardsCount"} />
              </TableCell>
              <TableCell sx={styleTableHead}>Last updated</TableCell>
              <TableCell sx={styleTableHead}>Created by</TableCell>
              <TableCell sx={styleTableHead}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/*{pack.length ? (*/}
            {packs.map((el) => (
              <TableRow key={el._id} sx={{ borderBottom: "1px solid" }}>
                <TableCell sx={styleTableBody}>
                  {" "}
                  <img style={{ width: "30px", height: "30px" }} src={el.deckCover ? el.deckCover : cover} alt="" />
                </TableCell>
                <TableCell sx={styleTableBody}>
                  <span onClick={() => onClickNamePack(el.user_id, el._id)}> {el.name}</span>
                </TableCell>
                <TableCell sx={styleTableBody}>{el.cardsCount}</TableCell>
                <TableCell sx={styleTableBody}>{el.updated}</TableCell>
                <TableCell sx={styleTableBody}>{el.user_name}</TableCell>
                <TableCell sx={styleTableBody}>
                  {
                    <span>
                      {
                        <img
                          style={{ marginRight: "10px", cursor: "pointer" }}
                          onClick={() => updatePack(el._id)}
                          src={teach}
                          alt="teach"
                        />
                      }
                      {el.user_id === "64527e000415841fd8df2cf3" && <UpdateModal id={el._id} />}
                      {el.user_id === "64527e000415841fd8df2cf3" && <DeleteModal id={el._id} name={el.name} />}
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
