import { ChangeEvent, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Textarea } from "@/components/TextArea/TextArea";
import { TextField } from "@/components/TextField/TextField";
import { Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import classes from "./index.module.scss";
import { EditorDataModel } from "@/shared/constants/blockTypes";
import { useDebounce } from "@/shared/hooks/useDebounce";

interface CalendarViewerBlockProps {
  data?: EditorDataModel;
  onUpdateBlockByViewer: (args: any) => void;
}

export const CalendarViewerBlock = ({
  data,
  onUpdateBlockByViewer,
}: CalendarViewerBlockProps) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e?.target.value);
  };

  const debouncedValue = useDebounce(value, 2000);

  useEffect(() => {
    onUpdateBlockByViewer({
      value,
    });
  }, [debouncedValue]);

  return (
    <>
      <Typography mb={1}>{data?.title}</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker />
      </LocalizationProvider>
    </>
  );
};
