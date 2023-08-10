import { ChangeEvent, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Textarea } from "@/components/TextArea/TextArea";
import { TextField } from "@/components/TextField/TextField";
import { Typography } from "@mui/material";
import classes from "./index.module.scss";
import { EditorDataModel } from "@/shared/constants/blockTypes";

interface TextEditorBlockProps {
  onUpdateBlock: (args: EditorDataModel) => void;
  data?: EditorDataModel;
}

export const TextEditorBlock = ({
  onUpdateBlock,
  data,
}: TextEditorBlockProps) => {
  const [values, setValues] = useState<EditorDataModel>({
    title: "",
    value: "",
  });

  const { title, value } = values;

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
        <Textarea
          id="value"
          onChange={handleChange}
          minRows={3}
          value={value}
        />
      </Box>

      <Box className={classes.takeInfoBox}>
        <Typography variant="body2" mb={1}>
          please provide information:
        </Typography>
        <TextField
          id="title"
          onChange={handleChange}
          label="title"
          value={title}
        />
      </Box>
    </>
  );
};
