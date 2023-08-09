import { ChangeEvent, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Textarea } from "@/components/TextArea/TextArea";
import { TextField } from "@/components/TextField/TextField";
import { Typography } from "@mui/material";
import classes from "./index.module.scss";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { EditorDataModel } from "@/shared/constants/blockTypes";

interface TextEditorBlockProps {
  onUpdateBlock: (args: TextEditorValuesModel) => void;
  data?: EditorDataModel;
}

interface TextEditorValuesModel {
  title: string;
  value: string;
}

export const TextEditorBlock = ({
  onUpdateBlock,
  data,
}: TextEditorBlockProps) => {
  const [values, setValues] = useState<TextEditorValuesModel>({
    title: "",
    value: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({
      ...values,
      [e.target.id]: e?.target.value,
    });
  };

  const debouncedValue = useDebounce<TextEditorValuesModel>(values, 2000);

  useEffect(() => {
    onUpdateBlock(values);
  }, [debouncedValue]);

  return (
    <>
      <Box className={classes.container}>
        <Typography mb={1}>{values.title}</Typography>
        <Textarea id="value" onChange={handleChange} minRows={3} />
      </Box>

      <Box className={classes.takeInfoBox}>
        <Typography variant="body2" mb={1}>
          please provide information:
        </Typography>
        <TextField id="title" onChange={handleChange} label="title" />
      </Box>
    </>
  );
};
