import { ChangeEvent, useState } from "react";
import Box from "@mui/material/Box";
import { Textarea } from "@/components/TextArea/TextArea";
import { TextField } from "@/components/TextField/TextField";
import BlockBox from "@/components/BlockBox/BlockBox";
import { Typography } from "@mui/material";
import classes from "./index.module.scss";

interface PhoneNumberEditorBlockProps {
  onDelete?: any;
}

export const PhoneNumberEditorBlock = ({
  onDelete,
}: PhoneNumberEditorBlockProps) => {
  const [title, setTitle] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTitle(e?.target.value);
  };
  console.log({ title });
  return (
    <BlockBox onDelete={onDelete}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "start",
        }}
      >
        <Typography mb={1}>{title}</Typography>
        <TextField label={title} minRows={3} />
      </Box>

      <Box className={classes.takeInfoBox}>
        <Typography variant="body2" mb={1}>
          please provide required information:
        </Typography>
        <TextField onChange={handleChange} label="title" required />
      </Box>
    </BlockBox>
  );
};
