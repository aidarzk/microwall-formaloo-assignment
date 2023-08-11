import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { EditorDataModel } from "@/shared/constants/blockTypes";

interface RadioButtonProps {
  onChange?: (args: any) => void;
  data?: EditorDataModel;
}

export const RadioButton = ({ onChange, data }: RadioButtonProps) => {
  return (
    <>
      <FormControl>
        <RadioGroup
          onChange={onChange}
          aria-labelledby="radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          {data?.options.map((opt: string, index: number) => (
            <FormControlLabel
              key={opt}
              control={<Radio />}
              label={opt}
              value={index}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
};
