/* eslint-disable no-unused-vars */
import { ChangeEvent, ReactNode, Ref, useEffect, useState } from "react";
import { IconButton, InputAdornment, InputProps } from "@mui/material";
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
