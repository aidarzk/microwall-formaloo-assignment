import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface CalendarProps {
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement> | null,
    newValue: Date | null
  ) => void;
}

export const Calendar = ({ onChange }: CalendarProps) => {
  const handleDateChange = (newValue: Date | null) => {
    onChange && onChange(null, newValue);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker onChange={handleDateChange} />
    </LocalizationProvider>
  );
};
