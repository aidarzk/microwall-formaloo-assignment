import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
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

  const debouncedValue = useDebounce(values, 2000);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      options: {
        ...values.options,
        [event.target.name]: event.target.checked,
      },
    });
  };

  useEffect(() => {
    onUpdateBlockByViewer(values);
  }, [debouncedValue]);

  return (
    <>
      <Typography variant="h6" fontWeight={700} mb={1}>
        {data?.title}
      </Typography>
      <FormControl component="fieldset" variant="standard">
        <FormGroup>
          {data?.options?.map((opt) => (
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
    </>
  );
};
