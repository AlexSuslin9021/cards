import React from "react";
import s1 from "features/Packs/style.module.scss";
import Table from "@mui/material/Table/Table";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import TableHeader from "features/Packs/packsComponents/TablePacks/TableHeader/TableHeader";
import cover from "common/image/Mask.svg";
import { Icon } from "features/Packs/packsComponents/TablePacks/Icon/Icon";
import { useTable } from "features/Packs/hooks/useTable";

export const TablePacks = () => {
  const { packs, styleTableHead, styleTableBody, onClickNamePack } = useTable();

  return (
    <div className={s1.container}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ background: "#EFEFEF", height: "48px", fontWeight: "700" }}>
              <TableCell sx={styleTableHead}>Cover</TableCell>
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
            {packs.map((el) => (
              <TableRow key={el._id} sx={{ borderBottom: "1px solid" }}>
                <TableCell sx={styleTableBody}>
                  <img style={{ width: "30px", height: "30px" }} src={el.deckCover ? el.deckCover : cover} alt="" />
                </TableCell>
                <TableCell sx={styleTableBody}>
                  <span onClick={() => onClickNamePack(el.cardsCount, el.user_id, el._id)}> {el.name}</span>
                </TableCell>
                <TableCell sx={styleTableBody}>{el.cardsCount}</TableCell>
                <TableCell sx={styleTableBody}>{el.updated}</TableCell>
                <TableCell sx={styleTableBody}>{el.user_name}</TableCell>
                <TableCell sx={styleTableBody}>
                  <Icon
                    name={el.name}
                    user_id={el.user_id}
                    cardsCount={el.cardsCount}
                    deckCover={el.deckCover}
                    _id={el._id}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
