import { ChangeEvent, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { TextField } from "@/components/TextField/TextField";
import { Typography } from "@mui/material";
import classes from "./index.module.scss";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { EditorDataModel } from "@/shared/constants/blockTypes";

interface PhoneNumberEditorBlockProps {
  onUpdateBlock: (args: EditorDataModel) => void;
  data?: EditorDataModel;
}

export const PhoneNumberEditorBlock = ({
  onUpdateBlock,
  data,
}: PhoneNumberEditorBlockProps) => {
  const [values, setValues] = useState<EditorDataModel>({
    title: "",
    label: "",
  });

  const { title, label } = values;

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
          value={title}
        />
        <TextField
          sx={{ mb: 1 }}
          onChange={handleChange}
          label="label"
          id="label"
          value={label}
        />
      </Box>
    </>
  );
};
