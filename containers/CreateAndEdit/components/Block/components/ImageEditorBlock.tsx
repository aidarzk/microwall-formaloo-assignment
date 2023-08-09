import { ChangeEvent, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { TextField } from "@/components/TextField/TextField";
import { Typography } from "@mui/material";
import classes from "./index.module.scss";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { EditorDataModel } from "@/shared/constants/blockTypes";

interface ImageEditorBlockProps {
  onUpdateBlock: (args: ImageEditorValuesModel) => void;
  data?: EditorDataModel;
}

interface ImageEditorValuesModel {
  title: string;
  value: string;
}

export const ImageEditorBlock = ({
  onUpdateBlock,
  data,
}: ImageEditorBlockProps) => {
  const [values, setValues] = useState<ImageEditorValuesModel>({
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

  const debouncedValue = useDebounce<ImageEditorValuesModel>(values, 2000);

  useEffect(() => {
    onUpdateBlock(values);
  }, [debouncedValue]);

  return (
    <>
      <Box className={classes.container}>
        <Typography mb={1}>{data?.title}</Typography>
        <TextField id="value" placeholder="please add a varified image url" />
      </Box>

      <Box className={classes.takeInfoBox}>
        <Typography variant="body2" mb={1}>
          please provide information:
        </Typography>
        <TextField onChange={handleChange} label="title" id="title" />
      </Box>
    </>
  );
};
