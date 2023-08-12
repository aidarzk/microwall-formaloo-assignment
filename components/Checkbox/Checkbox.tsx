import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MuiCheckbox from "@mui/material/Checkbox";
import { EditorDataModel } from "@/shared/constants/blockTypes";

interface CheckboxProps {
  data?: EditorDataModel;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({ onChange, data }: CheckboxProps) => {
  return (
    <FormControl component="fieldset" variant="standard">
      <FormGroup>
        {data?.options?.map((opt: string) => (
          <>
            <FormControlLabel
              control={<MuiCheckbox onChange={onChange} name={`${opt}`} />}
              label={opt}
            />
          </>
        ))}
      </FormGroup>
    </FormControl>
  );
};
