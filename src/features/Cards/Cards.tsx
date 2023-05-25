import React, { useEffect, useState } from "react";
import { PacksTitle } from "features/Packs/commonComponent/PacksTitle/PacksTitle";
import Search from "features/Packs/commonComponent/Search/Search";
import s from "features/Packs/PacksList/PacksList.module.scss";
import s1 from "features/Packs/style.module.scss";
import { MiniTitle } from "features/Packs/commonComponent/MiniTitle/MiniTitle";
import { BackTo } from "features/Packs/commonComponent/BackTo/BackTo";
import { useAppDispatch } from "common/hooks";
import { cardsSearchParams, getCards } from "features/Cards/cards.slice";
import { useParams } from "react-router-dom";
import { useDebounce } from "common/hooks/useDebounce";
import { Tables } from "common/Test/Table";

const FriendsPack = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useAppDispatch();
  const debounceValue = useDebounce(value, 1000);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCards({ cardsPack_id: id, cardAnswer: value }));
  }, [debounceValue]);

  const onChangeInputHandler = (value: string) => {
    debugger;
    setValue(value);
    dispatch(cardsSearchParams({ cardAnswer: debounceValue }));
  };
  debugger;
  return (
    <div className={s1.container}>
      <BackTo name={"Back to MyPack List"} link={"/packs/all"} />
      <PacksTitle name={"Friends packs"}>
        <h1></h1>
      </PacksTitle>
      <div className={s.dataCards}>
        <div className={s.search}>
          <MiniTitle name={"Search"} />
          <Search value={value} callback={onChangeInputHandler}></Search>
        </div>
      </div>
      <Tables />
    </div>
  );
};

export default FriendsPack;
