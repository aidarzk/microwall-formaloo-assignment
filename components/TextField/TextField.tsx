import { ChangeEvent } from "react";
import MuiTextField, { OutlinedTextFieldProps } from "@mui/material/TextField";

export interface CustomTextFieldProps
  extends Omit<OutlinedTextFieldProps, "variant"> {
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const TextField = (props: CustomTextFieldProps) => {
  return (
    <MuiTextField variant="outlined" fullWidth id="outlined-basic" {...props} />
  );
};
