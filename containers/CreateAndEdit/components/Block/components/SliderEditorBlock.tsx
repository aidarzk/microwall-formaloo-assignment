import { ChangeEvent, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { TextField } from "@/components/TextField/TextField";
import { Slider, Typography } from "@mui/material";
import classes from "./index.module.scss";
import { EditorDataModel } from "@/shared/constants/blockTypes";
import { useDebounce } from "@/shared/hooks/useDebounce";

interface SliderValuesModel {
  title: string;
  defaultValue: number;
  min: number;
  max: number;
}
interface SliderEditorBlockProps {
  onUpdateBlock: (args: SliderValuesModel) => void;
  data?: EditorDataModel;
}

export const SliderEditorBlock = ({
  onUpdateBlock,
}: SliderEditorBlockProps) => {
  const [values, setValues] = useState<SliderValuesModel>({
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
  };

  const debouncedValue = useDebounce<SliderValuesModel>(values, 2000);

  useEffect(() => {
    onUpdateBlock(values);
  }, [debouncedValue]);

  return (
    <>
      <Box className={classes.container}>
        <Typography mb={1}>{title}</Typography>
        <Slider defaultValue={defaultValue} min={min} max={max} />
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
        />
        <TextField
          sx={{ mb: 1 }}
          onChange={handleChange}
          label="defaultValue"
          id="defaultValue"
        />
        <TextField
          sx={{ mb: 1 }}
          onChange={handleChange}
          label="min"
          id="min"
        />
        <TextField onChange={handleChange} label="max" id="max" />
      </Box>
    </>
  );
};
