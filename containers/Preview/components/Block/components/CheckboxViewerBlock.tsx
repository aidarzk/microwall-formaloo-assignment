import { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { EditorDataModel } from "@/shared/constants/blockTypes";
import { useDebounce } from "@/shared/hooks/useDebounce";

interface CheckboxViewerBlockProps {
  data?: EditorDataModel;
  onUpdateBlockByViewer: (args: any) => void;
}

export const CheckboxViewerBlock = ({
  data,
  onUpdateBlockByViewer,
}: CheckboxViewerBlockProps) => {
  const [values, setValues] = useState({
    options: [],
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValues = {
      ...values,
      options: {
        ...values.options,
        [event.target.name]: event.target.checked,
      },
    };
    setValues(newValues);
    onUpdateBlockByViewer(newValues);
  };

  return (
    <FormControl component="fieldset" variant="standard">
      <FormGroup>
        {data?.options?.map((opt: string) => (
          <>
            <FormControlLabel
              control={
                <Checkbox
                  // checked={gilad}
                  onChange={handleChange}
                  name={`${opt}`}
                />
              }
              label={opt}
            />
          </>
        ))}
      </FormGroup>
    </FormControl>
  );
};
