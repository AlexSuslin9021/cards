import React, { useEffect, useState } from "react";
import { PacksTitle } from "features/Packs/commonComponent/PacksTitle/PacksTitle";

import s1 from "../style.module.scss";

import Table from "@mui/material/Table/Table";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import { packsThunks, searchParamsAc } from "features/Packs/pack.slice";
import { useAppDispatch, useAppSelector } from "common/hooks";
import remove from "../../../common/Image/trash.svg";
import pencil from "../../../common/Image/pencil.svg";

import SearchPanel from "features/Packs/SearchPanel";

export const PacksList = () => {
  const [mode, setMode] = useState(false);
  const [changeFilter, setChangeFilter] = useState(false);
  const dispatch = useAppDispatch();
  const pack = useAppSelector((state) => state.pack.packList.cardPacks);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  const searchHandler = (search: string, params: string) => {
    dispatch(searchParamsAc({}));
  };
  const onClickAllPack = () => {
    dispatch(packsThunks.getPacksTC({}));
    setMode(!mode);
  };
  const onClickMyPack = () => {
    setMode(!mode);
    dispatch(packsThunks.getPacksTC({ user_id: "64527e000415841fd8df2cf3" }));
  };
  const addPack = (params: string) => {
    dispatch(packsThunks.addPacksTC({ cardsPack: { name: "test" } }));
  };
  const removePack = (id: string) => {
    dispatch(packsThunks.removePackTC(id));
  };
  const updatePack = (id: string) => {
    dispatch(packsThunks.updatePackTC({ cardsPack: { _id: id, name: "stock" } }));
  };
  const sortHandler = (name: string) => {
    setChangeFilter(!changeFilter);
    dispatch(searchParamsAc({ sortPacks: changeFilter ? `0${name}` : `1${name}` }));
  };

  // useEffect(() => {
  //   // dispatch(packsThunks.getPacksTC({}));
  // }, []);

  return (
    <div className={s1.container}>
      <TableContainer>
        <Table sx={{ width: "1008px" }}>
          <TableHead>
            <TableRow sx={{ background: "#EFEFEF", height: "48px", fontWeight: "700" }}>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>
                <span onClick={() => sortHandler("name")}>
                  Name <span className={s1.arrow}>{changeFilter ? "↓" : "↑"}</span>
                </span>
              </TableCell>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>
                <span onClick={() => sortHandler("cardsCount")}>
                  Cards
                  <span className={s1.arrow}>{changeFilter ? "↓" : "↑"}</span>
                </span>
              </TableCell>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>Last updated</TableCell>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>Created by</TableCell>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pack.map((el) => (
              <TableRow sx={{ borderBottom: "1px solid" }} key={el._id}>
                <TableCell sx={{ background: "white" }}>{el.name}</TableCell>
                <TableCell sx={{ background: "white" }}>{el.cardsCount}</TableCell>
                <TableCell sx={{ background: "white" }}>{el.updated}</TableCell>
                <TableCell sx={{ background: "white" }}>{el.user_name}</TableCell>
                <TableCell sx={{ background: "white" }}>
                  {
                    <span>
                      {/*<img src={lear} alt="lea" />*/}
                      {el.user_id === "64527e000415841fd8df2cf3" && (
                        <img onClick={() => updatePack(el._id)} src={pencil} alt="change name" />
                      )}
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
