import { ChangeEvent, useEffect, useState } from "react";
import { TextField } from "@/components/TextField/TextField";
import { Typography } from "@mui/material";
import { EditorDataModel } from "@/shared/constants/blockTypes";
import { useDebounce } from "@/shared/hooks/useDebounce";

interface PhoneNumberViewerBlockProps {
  data?: EditorDataModel;
  onUpdateBlockByViewer: (args: any) => void;
}

export const PhoneNumberViewerBlock = ({
  data,
  onUpdateBlockByViewer,
}: PhoneNumberViewerBlockProps) => {
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
      <Typography mb={1} variant="h6" fontWeight={700}>
        {data?.title}
      </Typography>
      <TextField
        label={data?.label}
        onChange={handleChange}
        value={value}
        defaultValue={data?.defaultValue}
      />
    </>
  );
};
