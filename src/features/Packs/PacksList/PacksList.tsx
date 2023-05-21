import React from "react";
import s1 from "../style.module.scss";
import Table from "@mui/material/Table/Table";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { packsThunks } from "features/Packs/pack.slice";
import { useAppDispatch, useAppSelector } from "common/hooks";
import remove from "../../../common/Image/trash.svg";
import teach from "../../../common/Image/teacher.svg";
import TableHeader from "features/Packs/PacksList/TableHeader/TableHeader";
import { UpdateModal } from "common/component/Modal/UpdateModal";
import { DeleteModal } from "common/component/Modal/DeleteModal";
const styleTableHead = { fontFamily: "Montserrat", fontWeight: "700" };
const styleTableBody = { background: "white" };

export const PacksList = () => {
  const dispatch = useAppDispatch();
  const pack = useAppSelector((state) => state.pack.packList.cardPacks);
  const removePack = (id: string) => {
    dispatch(packsThunks.removePackTC(id));
  };
  const updatePack = (id: string) => {
    dispatch(packsThunks.updatePackTC({ cardsPack: { _id: id, name: "new pack" } }));
  };

  return (
    <div className={s1.container}>
      <TableContainer>
        <Table sx={{ width: "1008px" }}>
          <TableHead>
            <TableRow sx={{ background: "#EFEFEF", height: "48px", fontWeight: "700" }}>
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
            {pack.map((el) => (
              <TableRow sx={{ borderBottom: "1px solid" }} key={el._id}>
                <TableCell sx={styleTableBody}>{el.name}</TableCell>
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
