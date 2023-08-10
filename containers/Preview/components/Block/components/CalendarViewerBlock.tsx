import { ChangeEvent, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { EditorDataModel } from "@/shared/constants/blockTypes";

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
    onUpdateBlockByViewer({ value: e.target.value });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider>
  );
};
