import { useState } from "react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { EditorDataModel } from "@/shared/constants/blockTypes";

interface DropDownViewerBlockProps {
  data?: EditorDataModel;
  onUpdateBlockByViewer: (args: any) => void;
}

export const DropDownViewerBlock = ({
  data,
  onUpdateBlockByViewer,
}: DropDownViewerBlockProps) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value);
    onUpdateBlockByViewer({
      value: selectedOption,
    });
  };

  return (
    <FormControl fullWidth>
      <Select
        labelId="select-label"
        id="select"
        value={selectedOption || data?.options[0]}
        onChange={handleChangeSelect}
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
