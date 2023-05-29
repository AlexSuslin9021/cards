import React from "react";
import s from "./PagePack.module.scss";
import s1 from "../style.module.scss";
import { Button } from "common/component/Button/Button";
import { Hint } from "common/component/Hint/Hint";
import { MiniTitle } from "features/Packs/commonComponent/MiniTitle/MiniTitle";
import { BackTo } from "common/component/BackTo/BackTo";

export const PagePack = () => {
  return (
    <div className={s1.container}>
      <BackTo name={"Back to MyPack List"} link={"/packs"} />
      <MiniTitle name={"Name Pack"} />
      <div className={s.buttonCont}>
        <Hint description={"This pack is empty. Click add new card to fill this pack"} />
        <Button name={"Add new card"}></Button>
      </div>
    </div>
  );
};
