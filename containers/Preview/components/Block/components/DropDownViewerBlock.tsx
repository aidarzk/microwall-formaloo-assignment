import { useEffect, useState } from "react";
import { MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { EditorDataModel } from "@/shared/constants/blockTypes";
import { useDebounce } from "@/shared/hooks/useDebounce";

interface DropDownViewerBlockProps {
  data?: EditorDataModel;
  onUpdateBlockByViewer: (args: any) => void;
}

export const DropDownViewerBlock = ({
  data,
  onUpdateBlockByViewer,
}: DropDownViewerBlockProps) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const debouncedValue = useDebounce<string>(selectedOption, 2000);

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    onUpdateBlockByViewer({
      value: selectedOption,
    });
  }, [debouncedValue]);

  return (
    <>
      <Typography variant="h6" fontWeight={700} mb={1}>
        {data?.title}
      </Typography>

      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedOption || data?.options[0]}
          onChange={handleChangeSelect}
        >
          {data?.options?.map((opt) => (
            <MenuItem key={opt} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
