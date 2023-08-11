import { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MuiCheckbox from "@mui/material/Checkbox";

interface CheckboxProps {
  data?: any;
  onChange?: (args: any) => void;
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
