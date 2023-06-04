import React from "react";
import FormControl from "@mui/material/FormControl";
import { InputLabel } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export const SelectModal: React.FC<SelectModalType> = ({ value, label, option1, option2, handleChange }) => {
  return (
    <FormControl sx={{ marginBottom: "10px" }} fullWidth>
      <InputLabel>Question</InputLabel>
      <Select value={value} label={label} onChange={handleChange}>
        <MenuItem value={option1}>Image</MenuItem>
        <MenuItem value={option2}>Text questions</MenuItem>
      </Select>
    </FormControl>
  );
};
type SelectModalType = {
  value: string;
  label: string;
  option1: string;
  option2: string;
  handleChange: (value: any) => void;
};
