import React, { useEffect, useState } from "react";
import { PacksTitle } from "features/Packs/commonComponent/PacksTitle/PacksTitle";
import Search from "features/Packs/commonComponent/Search/Search";
import s from "features/Packs/PacksList/PacksList.module.scss";
import s1 from "../style.module.scss";
import { MiniTitle } from "features/Packs/commonComponent/MiniTitle/MiniTitle";
import Table from "@mui/material/Table/Table";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Range } from "features/Packs/PacksList/Range/Range";
import { useAppDispatch } from "app/hooks";
import { packsThunks } from "features/Packs/pack.slice";
import { useAppSelector } from "app/store";
import remove from "../../../common/Image/trash.svg";
import pencil from "../../../common/Image/pencil.svg";

const PacksList = () => {
  const [mode, setMode] = useState(false);
  const onClickAllPack = () => {
    dispatch(packsThunks.getPacksTC({ page: 1, pageCount: 5 }));
    setMode(!mode);
  };
  const onClickMyPack = () => {
    setMode(!mode);
    dispatch(packsThunks.getPacksTC({ page: 1, pageCount: 8, user_id: "64527e000415841fd8df2cf3" }));
  };
  const addPack = () => {
    dispatch(packsThunks.addPacksTC({ cardsPack: { name: "test" } }));
  };
  const RemovePack = (id: string) => {
    dispatch(packsThunks.removePackTC(id));
  };
  const UpdatePack = (id: string) => {
    dispatch(packsThunks.updatePackTC({ cardsPack: { _id: id, name: "stock" } }));
  };
  const pack = useAppSelector((state) => state.pack.packList.cardPacks);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(packsThunks.getPacksTC({ page: 1, pageCount: 8 }));
  }, []);

  return (
    <div className={s1.container}>
      <PacksTitle name={"PacksList"} buttonName={"Add new pack"} callback={addPack} />
      <div className={s.dataCards}>
        <div className={s.search}>
          <MiniTitle name={"Search"} />
          <Search></Search>
        </div>
        <div className={s.choiceCards}>
          <MiniTitle name={" Show packs cards"} />
          <div>
            <button onClick={onClickMyPack} className={mode ? s.myCards : s.allCards}>
              My
            </button>
            <button onClick={onClickAllPack} className={!mode ? s.myCards : s.allCards}>
              All
            </button>
          </div>
        </div>
        <div className={s.sliderCont}>
          <MiniTitle name={" Number of cards"} />
          <Range />
        </div>
        <div className={s.icon}>icon</div>
      </div>
      <TableContainer>
        <Table sx={{ width: "1008px" }}>
          <TableHead>
            <TableRow sx={{ background: "#EFEFEF", height: "48px", fontWeight: "700" }}>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>Name</TableCell>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>Cards</TableCell>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>Last updated</TableCell>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>Created by</TableCell>
              <TableCell sx={{ fontFamily: "Montserrat", fontWeight: "700" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pack.map((el) => (
              <TableRow sx={{ borderBottom: "1px solid" }}>
                <TableCell sx={{ background: "white" }}>{el.name}</TableCell>
                <TableCell sx={{ background: "white" }}>{el.cardsCount}</TableCell>
                <TableCell sx={{ background: "white" }}>{el.updated}</TableCell>
                <TableCell sx={{ background: "white" }}>{el.user_name}</TableCell>
                <TableCell sx={{ background: "white" }}>
                  {
                    <span>
                      {/*<img src={lear} alt="lea" />*/}
                      {el.user_id === "64527e000415841fd8df2cf3" && (
                        <img onClick={() => UpdatePack(el._id)} src={pencil} alt="change name" />
                      )}
                      {el.user_id === "64527e000415841fd8df2cf3" && (
                        <img onClick={() => RemovePack(el._id)} src={remove} alt="delete" />
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
let data = [
  {
    id: 1,
    name: "Товар 1",
    cards: "Card1",
    lastUpdated: 162,
    createdBy: "16-02-22",
    actions: "sasas",
  },
  {
    id: 2,
    name: "Товар 1",
    cards: "Card2",
    lastUpdated: 1322,
    createdBy: "1-05-23",
    actions: "sasas",
  },
  {
    id: 3,
    name: "Товар 3",
    cards: "Card3",
    lastUpdated: 162323,
    createdBy: "14-03-23",
    actions: "sasas",
  },
];
export default PacksList;
