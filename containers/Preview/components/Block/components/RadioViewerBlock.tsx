import { ChangeEvent, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { TextField } from "@/components/TextField/TextField";
import { IconButton, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { IconPlus, IconX } from "@tabler/icons-react";
import classes from "./index.module.scss";
import { EditorDataModel } from "@/shared/constants/blockTypes";

interface RadioViewerBlockProps {
  onUpdateBlockByViewer: (args: EditorDataModel) => void;
  data?: EditorDataModel;
}

export const RadioViewerBlock = ({
  onUpdateBlockByViewer,
  data,
}: RadioViewerBlockProps) => {
  const [values, setValues] = useState<EditorDataModel>({
    title: "",
    options: ["option 1"],
  });

  const { title, options } = values;

  useEffect(() => {
    if ((data?.options?.length && data?.options?.length > 0) || data?.title) {
      setValues(data);
    }
  }, [data]);

  return (
    <>
      <Box className={classes.container}>
        <FormControl>
          <RadioGroup
            aria-labelledby="radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            {options.map((opt: string, index: number) => (
              <FormControlLabel
                key={opt}
                control={<Radio />}
                label={opt}
                value={index}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  );
};
