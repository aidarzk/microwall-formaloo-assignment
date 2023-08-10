import { ChangeEvent, useState } from "react";
import { TextField } from "@/components/TextField/TextField";
import { EditorDataModel } from "@/shared/constants/blockTypes";

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
    onUpdateBlockByViewer({
      value: e?.target.value,
    });
  };

  return (
    <TextField
      label={data?.label}
      onChange={handleChange}
      value={value}
      defaultValue={data?.defaultValue}
    />
  );
};
