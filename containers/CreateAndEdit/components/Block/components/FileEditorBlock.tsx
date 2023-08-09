import { ChangeEvent, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { TextField } from "@/components/TextField/TextField";
import { Typography } from "@mui/material";
import classes from "./index.module.scss";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { EditorDataModel } from "@/shared/constants/blockTypes";

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
  };

  const debouncedValue = useDebounce<string>(title, 2000);

  useEffect(() => {
    onUpdateBlock({
      title,
    });
  }, [debouncedValue]);

  useEffect(() => {
    if (data?.title) {
      setTitle(data?.title);
    }
  }, [data?.title]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "start",
        }}
      >
        <Typography mb={1}>{title}</Typography>

        <input type="file" />
      </Box>

      <Box className={classes.takeInfoBox}>
        <Typography variant="body2" mb={1}>
          please provide required information:
        </Typography>
        <TextField onChange={handleChange} label="title" required />
      </Box>
    </>
  );
};
