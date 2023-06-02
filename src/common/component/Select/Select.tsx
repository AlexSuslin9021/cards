import * as React from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { searchParamsAc } from "features/Packs/pack.slice";
import { cardsSearchParams } from "features/Cards/cards.slice";

type SelectVariantsType = {
  name: string;
};
export const SelectCountElement: React.FC<SelectVariantsType> = ({ name }) => {
  const pageCount = useAppSelector((state) => state.pack.queryParams.pageCount);
  const [countPack, setCountPack] = React.useState(pageCount?.toString());
  const dispatch = useAppDispatch();
  const handleChange = (event: SelectChangeEvent) => {
    setCountPack(event.target.value);
    name === "pack" && dispatch(searchParamsAc({ pageCount: Number(event.target.value) }));
    name === "card" && dispatch(cardsSearchParams({ pageCount: Number(event.target.value) }));
  };

  return (
    <>
      <FormControl variant="standard" sx={{ minWidth: 30 }}>
        {/*<div>Show pack </div>*/}
        <div>
          <span style={{ margin: "0 10px" }}>Show pack</span>

          <Select
            sx={{ minWidth: 30 }}
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            defaultValue={countPack}
            onChange={handleChange}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
          </Select>
        </div>
      </FormControl>
    </>
  );
};
