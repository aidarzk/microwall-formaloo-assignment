import { ChangeEvent, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Textarea } from "@/components/TextArea/TextArea";
import { TextField } from "@/components/TextField/TextField";
import { Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import classes from "./index.module.scss";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { EditorDataModel } from "@/shared/constants/blockTypes";

interface CalendarEditorBlockProps {
  onUpdateBlock: (args: { title: string }) => void;
  data?: EditorDataModel;
}

export const CalendarEditorBlock = ({
  onUpdateBlock,
  data,
}: CalendarEditorBlockProps) => {
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
      <Box className={classes.container}>
        <Typography mb={1}>{title}</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker />
        </LocalizationProvider>
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
