import React, { ChangeEvent, useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import { EditorDataModel } from "@/shared/constants/blockTypes";
import Box from "@mui/material/Box";
import { TextField } from "@/components/TextField/TextField";
import { Typography } from "@mui/material";
import classes from "./index.module.scss";
import { PhoneNumberInput } from "@/components/PhoneNumberInput/PhoneNumberInput";
interface PhoneNumberEditorBlock {
  onUpdateBlock: (args: EditorDataModel) => void;
  data?: EditorDataModel;
}

export const PhoneNumberEditorBlock = ({
  onUpdateBlock,
  data,
}: PhoneNumberEditorBlock) => {
  const [values, setValues] = useState<EditorDataModel>({
    title: "",
  });

  const { title } = values;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({
      ...values,
      [e.target.id]: e?.target.value,
    });
    onUpdateBlock({ ...values, [e.target.id]: e?.target.value });
  };

  useEffect(() => {
    if (data) {
      setValues(data);
    }
  }, [data]);

  return (
    <>
      <PhoneNumberInput />
      <Box className={classes.takeInfoBox}>
        <Typography variant="body2" mb={1}>
          please provide information:
        </Typography>
        <TextField
          sx={{ mb: 1 }}
          onChange={handleChange}
          label="title"
          id="title"
          value={title}
        />
      </Box>
    </>
  );
};

const countryCodes = ["+1", "+44", "+49", "+81", "+98"]; // Example country codes
