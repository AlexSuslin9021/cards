import React from "react";
import s1 from "../style.module.scss";
import Table from "@mui/material/Table/Table";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { packsThunks } from "features/Packs/pack.slice";
import { useAppDispatch, useAppSelector } from "common/hooks";
import remove from "../../../common/Image/trash.svg";
import pencil from "../../../common/Image/pencil.svg";
import teach from "../../../common/Image/teacher.svg";
import TableHeader from "features/Packs/PacksList/TableHeader/TableHeader";
import { ValueNotFound } from "features/Packs/commonComponent/ValueNitFound/ValueNotFound";

export const PacksList = () => {
  const dispatch = useAppDispatch();
  const pack = useAppSelector((state) => state.pack.packList.cardPacks);
  const removePack = (id: string) => {
    dispatch(packsThunks.removePackTC(id));
  };
  const updatePack = (id: string) => {
    dispatch(packsThunks.updatePackTC({ cardsPack: { _id: id, name: "stock" } }));
  };

  return (
    <div className={s1.container}>
      <TableContainer>
        <Table sx={{ width: "1008px" }}>
          <TableHead>
            <TableRow sx={{ background: "#EFEFEF", height: "48px", fontWeight: "700" }}>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>
                <TableHeader headerName={"Name"} sortName={"name"} />
              </TableCell>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>
                <TableHeader headerName={"Cards"} sortName={"cardsCount"} />
              </TableCell>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>Last updated</TableCell>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>Created by</TableCell>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/*{pack.length ? (*/}
            {pack.map((el) => (
              <TableRow sx={{ borderBottom: "1px solid" }} key={el._id}>
                <TableCell sx={{ background: "white" }}>{el.name}</TableCell>
                <TableCell sx={{ background: "white" }}>{el.cardsCount}</TableCell>
                <TableCell sx={{ background: "white" }}>{el.updated}</TableCell>
                <TableCell sx={{ background: "white" }}>{el.user_name}</TableCell>
                <TableCell sx={{ background: "white" }}>
                  {
                    <span>
                      {el.user_id === "64527e000415841fd8df2cf3" && (
                        <img onClick={() => updatePack(el._id)} src={pencil} alt="change name" />
                      )}
                      {
                        <img
                          style={{ marginLeft: "10px", marginRight: "10px" }}
                          onClick={() => updatePack(el._id)}
                          src={teach}
                          alt="teach"
                        />
                      }
                      {el.user_id === "64527e000415841fd8df2cf3" && (
                        <img onClick={() => removePack(el._id)} src={remove} alt="delete" />
                      )}
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
