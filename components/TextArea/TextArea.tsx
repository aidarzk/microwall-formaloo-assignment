import { CustomTextFieldProps, TextField } from "../TextField/TextField";

export const Textarea = (props: CustomTextFieldProps) => {
  return <TextField multiline {...props} />;
};
