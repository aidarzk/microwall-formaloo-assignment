import { useState } from "react";
import Slider from "@mui/material/Slider";
import { EditorDataModel } from "@/shared/constants/blockTypes";

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
    onUpdateBlockByViewer({
      value: newValue,
    });
  };

  return (
    <Slider
      valueLabelDisplay="auto"
      onChange={handleChange}
      value={typeof value === "number" ? value : 0}
      defaultValue={data?.defaultValue ? +data?.defaultValue : 0}
      min={data?.min ? +data?.min : 0}
      max={data?.max ? +data?.max : 100}
    />
  );
};
