import { ChangeEvent, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { TextField } from "@/components/TextField/TextField";
import { Typography } from "@mui/material";
import classes from "./index.module.scss";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { EditorDataModel } from "@/shared/constants/blockTypes";
import { File } from "@/components/File/File";

interface FileEditorBlockProps {
  onUpdateBlock: (args: any) => void;
  data?: EditorDataModel;
}

export const FileEditorBlock = ({
  onUpdateBlock,
  data,
}: FileEditorBlockProps) => {
  const [title, setTitle] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTitle(e?.target.value);
    onUpdateBlock({ title: e?.target.value });
  };

  useEffect(() => {
    if (data?.title) {
      setTitle(data?.title);
    }
  }, [data?.title]);

  return (
    <>
      <File />

      <Box className={classes.takeInfoBox}>
        <Typography variant="body2" mb={1}>
          please provide information:
        </Typography>
        <TextField onChange={handleChange} label="title" value={title} />
      </Box>
    </>
  );
};
