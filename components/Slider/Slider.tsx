import MuiSlider from "@mui/material/Slider";
import { EditorDataModel } from "@/shared/constants/blockTypes";

interface Slider {
  data?: EditorDataModel;
  onChange?: (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => void;
}

export const Slider = ({ data, onChange }: Slider) => {
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
