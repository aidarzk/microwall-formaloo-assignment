import { ChangeEvent, useEffect, useState } from "react";
import { TextField } from "@/components/TextField/TextField";
import { Slider, Typography } from "@mui/material";
import { EditorDataModel } from "@/shared/constants/blockTypes";
import { useDebounce } from "@/shared/hooks/useDebounce";

interface SliderViewerBlockProps {
  data?: EditorDataModel;
  onUpdateBlockByViewer: (args: any) => void;
}

export const SliderViewerBlock = ({
  data,
  onUpdateBlockByViewer,
}: SliderViewerBlockProps) => {
  const [value, setValue] = useState<number | string | Array<number | string>>(
    30
  );
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue);
  };

  const debouncedValue = useDebounce(value, 2000);

  useEffect(() => {
    onUpdateBlockByViewer({
      value,
    });
  }, [debouncedValue]);

  return (
    <>
      <Typography variant="h6" fontWeight={700} mb={1}>
        {data?.title}
      </Typography>
      <Slider
        valueLabelDisplay="auto"
        onChange={handleChange}
        value={typeof value === "number" ? value : 0}
        defaultValue={data?.defaultValue ? +data?.defaultValue : 0}
        min={data?.min ? +data?.min : 0}
        max={data?.max ? +data?.max : 100}
      />
    </>
  );
};
