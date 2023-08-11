import { useState } from "react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { EditorDataModel } from "@/shared/constants/blockTypes";

interface DropDown {
  data?: any;
  onChange?: (args: any) => void;
}

export const DropDown = ({ data, onChange }: DropDown) => {
  return (
    <FormControl fullWidth>
      <Select
        labelId="select-label"
        id="select"
        // value={selectedOption || data?.options[0]}
        onChange={onChange}
      >
        {data?.options?.map((opt: string) => (
          <MenuItem key={opt} value={opt}>
            {opt}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
