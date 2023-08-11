import { useState } from "react";
import MuiSlider from "@mui/material/Slider";
import { EditorDataModel } from "@/shared/constants/blockTypes";

interface Slider {
  data?: EditorDataModel;
  onChange?: (args: any) => void;
}

export const Slider = ({ data, onChange }: Slider) => {
  //   const [value, setValue] = useState<number | string | Array<number | string>>(
  //     30
  //   );
  //   const handleChange = (event: Event, newValue: number | number[]) => {
  //     setValue(newValue);
  //     onUpdateBlockByViewer({
  //       value: newValue,
  //     });
  //   };

  return (
    <MuiSlider
      valueLabelDisplay="auto"
      onChange={onChange}
      defaultValue={data?.defaultValue ? +data?.defaultValue : 0}
      min={data?.min ? +data?.min : 0}
      max={data?.max ? +data?.max : 100}
    />
  );
};
