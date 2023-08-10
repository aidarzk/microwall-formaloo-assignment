import { ChangeEvent, useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Textarea } from "@/components/TextArea/TextArea";
import { TextField } from "@/components/TextField/TextField";
import { Typography } from "@mui/material";
import classes from "./index.module.scss";
import { EditorDataModel } from "@/shared/constants/blockTypes";

interface InputEditorBlockProps {
  onUpdateBlock: (args: EditorDataModel) => void;
  data?: EditorDataModel;
}

export const InputEditorBlock = ({
  onUpdateBlock,
  data,
}: InputEditorBlockProps) => {
  const [values, setValues] = useState<EditorDataModel>({
    title: "",
    label: "",
    defaultValue: "",
  });

  const { title, label, defaultValue } = values;

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
      <TextField label={label} defaultValue={defaultValue} />
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
          label="label"
          id="label"
          value={label}
        />
        <TextField
          onChange={handleChange}
          label="defaultValue"
          id="defaultValue"
          value={defaultValue}
        />
      </Box>
    </>
  );
};
