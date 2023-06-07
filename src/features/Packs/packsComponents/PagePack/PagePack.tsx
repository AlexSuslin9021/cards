import React from "react";
import s from "features/Packs/packsComponents/PagePack/PagePack.module.scss";
import s1 from "features/Packs/style.module.scss";
import { Button } from "common/component/Button/Button";
import { Hint } from "common/component/Hint/Hint";
import { MiniTitle } from "features/Packs/packsComponents/MiniTitle/MiniTitle";
import { BackTo } from "common/component/BackTo/BackTo";
import { useParams } from "react-router-dom";
import { ModalAddCards } from "features/Cards/cardsComponents/Modal/ModalAddCards";

export const PagePack = () => {
  const params = useParams();
  const packName = params.name;
  return (
    <div className={s1.container}>
      <div className={s.back}>
        <BackTo name={"Back to MyPack List"} link={""} />
      </div>
      <div className={s.packName}>
        <MiniTitle name={packName ? packName : "My pack"} />
      </div>
      <div className={s.buttonCont}>
        <Hint description={"This pack is empty. Click add new card to fill this pack"} />
        <ModalAddCards />
      </div>
    </div>
  );
};
