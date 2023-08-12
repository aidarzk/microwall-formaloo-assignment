import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { EditorDataModel } from "@/shared/constants/blockTypes";

interface DropDown {
  data?: EditorDataModel;
  onChange?: (e: SelectChangeEvent<string>) => void;
}

export const DropDown = ({ data, onChange }: DropDown) => {
  return (
    <FormControl fullWidth>
      <Select labelId="select-label" id="select" onChange={onChange}>
        {data?.options?.map((opt: string) => (
          <MenuItem key={opt} value={opt}>
            {opt}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
