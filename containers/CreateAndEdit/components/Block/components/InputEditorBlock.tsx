import { ChangeEvent, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Textarea } from "@/components/TextArea/TextArea";
import { TextField } from "@/components/TextField/TextField";
import { Typography } from "@mui/material";
import classes from "./index.module.scss";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { EditorDataModel } from "@/shared/constants/blockTypes";

interface InputValuesModel {
  title: string;
  defaultValue: string;
  label: string;
}

interface InputEditorBlockProps {
  onUpdateBlock: (args: InputValuesModel) => void;
  data?: EditorDataModel;
}

export const InputEditorBlock = ({ onUpdateBlock }: InputEditorBlockProps) => {
  const [values, setValues] = useState<InputValuesModel>({
    title: "",
    label: "",
    defaultValue: "",
  });

  const { title, label } = values;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({
      ...values,
      [e.target.id]: e?.target.value,
    });
  };

  const debouncedValue = useDebounce<InputValuesModel>(values, 2000);

  useEffect(() => {
    onUpdateBlock(values);
  }, [debouncedValue]);

  return (
    <>
      <Box className={classes.container}>
        <Typography mb={1}>{title}</Typography>
        <TextField label={label} />
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
          label="label"
          id="label"
        />
        <TextField
          onChange={handleChange}
          label="defaultValue"
          id="defaultValue"
        />
      </Box>
    </>
  );
};
