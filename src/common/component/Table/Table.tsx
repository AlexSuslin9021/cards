import { Loader } from "common/component/Loader/Loader";
import { ValueNotFound } from "features/Packs/packsComponents/ValueNotFound/ValueNotFound";
import React, { ReactNode } from "react";
import { useAppSelector } from "common/hooks";
import { isLoggedInSelect } from "app/selectorsApp";
import { packSelector } from "features/Packs/packsSelector";

export const Table: React.FC<TableType> = ({ valueNotFound, children, elementCount }) => {
  const loading = useAppSelector(isLoggedInSelect);

  return <>{loading ? <Loader /> : elementCount ? children : <ValueNotFound value={valueNotFound} />}</>;
};

export type TableType = {
  valueNotFound: string;
  children: ReactNode;
  elementCount: number;
};
