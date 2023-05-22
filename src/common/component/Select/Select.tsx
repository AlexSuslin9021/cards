import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { packsThunks, searchParamsAc } from "features/Packs/pack.slice";

export function SelectVariants() {
  const pageCount = useAppSelector((state) => state.pack.queryParams.pageCount);
  const [countPack, setCountPack] = React.useState(pageCount?.toString());
  const dispatch = useAppDispatch();
  const handleChange = (event: SelectChangeEvent) => {
    setCountPack(event.target.value);
    dispatch(searchParamsAc({ pageCount: Number(event.target.value) }));
  };

  return (
    <>
      <FormControl variant="standard" sx={{ minWidth: 30 }}>
        {/*<InputLabel id="demo-simple-select-standard-label">Age</InputLabel>*/}
        <div>Show pack </div>
        <div>
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
}
