import { ChangeEvent, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { TextField } from "@/components/TextField/TextField";
import { Slider, Typography } from "@mui/material";
import classes from "./index.module.scss";
import { EditorDataModel } from "@/shared/constants/blockTypes";

interface SliderEditorBlockProps {
  onUpdateBlock: (args: EditorDataModel) => void;
  data?: EditorDataModel;
}

export const SliderEditorBlock = ({
  onUpdateBlock,
  data,
}: SliderEditorBlockProps) => {
  const [values, setValues] = useState<EditorDataModel>({
    title: "",
    max: 100,
    min: 0,
    defaultValue: 50,
  });

  const { title, defaultValue, max, min } = values;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({
      ...values,
      [e.target.id]: e?.target.value,
    });

    onUpdateBlock({ ...values, [e.target.id]: e?.target.value });
  };

  useEffect(() => {
    if (data) {
      setValues(data);
    }
  }, [data]);

  return (
    <>
      <Box className={classes.container}>
        <Slider
          defaultValue={defaultValue ? +defaultValue : 50}
          min={min ? +min : 0}
          max={max ? +max : 100}
        />
      </Box>

      <Box className={classes.takeInfoBox}>
        <Typography variant="body2" mb={1}>
          please provide information:
        </Typography>
        <TextField
          sx={{ mb: 1 }}
          onChange={handleChange}
          label="title"
          id="title"
          value={title}
        />
        <TextField
          sx={{ mb: 1 }}
          onChange={handleChange}
          label="defaultValue"
          id="defaultValue"
          value={defaultValue}
        />
        <TextField
          sx={{ mb: 1 }}
          onChange={handleChange}
          label="min"
          id="min"
          value={min}
        />
        <TextField onChange={handleChange} label="max" id="max" value={max} />
      </Box>
    </>
  );
};
