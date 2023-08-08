import Box from "@mui/material/Box";
import MuiSlider from "@mui/material/Slider";

export default function Slider() {
  return (
    <MuiSlider
      defaultValue={50}
      aria-label="Default"
      valueLabelDisplay="auto"
    />
  );
}
