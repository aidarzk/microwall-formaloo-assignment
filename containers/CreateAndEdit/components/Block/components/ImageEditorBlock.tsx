import { ChangeEvent, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { TextField } from "@/components/TextField/TextField";
import { Typography } from "@mui/material";
import classes from "./index.module.scss";
import { EditorDataModel } from "@/shared/constants/blockTypes";
import { useStateCallback } from "@/shared/hooks/useStateCallback";
import { validateImageUrl } from "@/shared/utilities/validations";

interface ImageEditorBlockProps {
  onUpdateBlock: (args: EditorDataModel) => void;
  data?: EditorDataModel;
}

export const ImageEditorBlock = ({
  onUpdateBlock,
  data,
}: ImageEditorBlockProps) => {
  const [values, setValues] = useStateCallback<EditorDataModel>({
    title: "",
    value: "",
  });

  const [error, setError] = useState<boolean>(false);

  const { title, value } = values;

  const validateField = (name: string, value: string) => {
    if (name === "value") {
      const validation = validateImageUrl(value);
      !validation && setError(true);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues(
      {
        ...values,
        [e.target.id]: e?.target.value,
      },
      validateField(e.target.id, e?.target.value)
    );

    onUpdateBlock({ ...values, [e.target.id]: e?.target.value });
  };

  useEffect(() => {
    if (data) {
      setValues(data);
    }
  }, [data]);

  return (
    <>
      <TextField
        id="value"
        placeholder="please add a varified image url"
        onChange={handleChange}
        value={value}
        error={error}
        helperText={error ? "image url is not valid" : ""}
      />

      <Box className={classes.takeInfoBox}>
        <Typography variant="body2" mb={1}>
          please provide information:
        </Typography>
        <TextField
          onChange={handleChange}
          label="title"
          id="title"
          value={title}
        />
      </Box>
    </>
  );
};
