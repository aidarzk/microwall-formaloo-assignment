import { ChangeEvent, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Textarea } from "@/components/TextArea/TextArea";
import { TextField } from "@/components/TextField/TextField";
import { IconButton, Typography } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { IconCheck, IconPlus, IconX } from "@tabler/icons-react";
import classes from "./index.module.scss";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { EditorDataModel } from "@/shared/constants/blockTypes";

interface CheckboxValuesModel {
  title: string;
  options: string[];
}
interface CheckboxEditorBlockProps {
  onUpdateBlock: (args: CheckboxValuesModel) => void;
  data?: EditorDataModel;
}

export const CheckboxEditorBlock = ({
  onUpdateBlock,
  data,
}: CheckboxEditorBlockProps) => {
  const [values, setValues] = useState<CheckboxValuesModel>({
    title: "",
    options: [],
  });

  const { title, options } = values;

  const debouncedValue = useDebounce<CheckboxValuesModel>(values, 2000);

  const handleChangeTitle = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({
      ...values,
      title: e?.target.value,
    });
  };

  const handleAddOption = () => {
    setValues({
      ...values,
      options: [...values.options, `option ${values.options.length + 1}`],
    });
  };

  const handleEditOption = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const optionsCopy = [...options];
    if (index !== -1) {
      optionsCopy[index] = e?.target.value;
    }

    setValues({
      ...values,
      options: optionsCopy,
    });
  };

  const handleDeleteOption = (index: number) => {
    const optionsCopy = [...options];

    if (index !== -1) {
      optionsCopy.splice(index, 1);
    }

    setValues({
      ...values,
      options: optionsCopy,
    });
  };

  useEffect(() => {
    if (data?.options?.length && data?.options?.length > 0) {
      setValues({
        ...values,
        options: data?.options,
      });
    }
  }, [data?.options]);

  useEffect(() => {
    onUpdateBlock(values);
  }, [debouncedValue]);

  return (
    <>
      <Box className={classes.container}>
        <Typography mb={1}>{title}</Typography>
        <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
          <FormGroup>
            {options.map((opt) => (
              <FormControlLabel
                key={opt}
                control={<Checkbox name={`${opt}`} />}
                label={opt}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Box>

      <Box className={classes.takeInfoBox}>
        <Typography variant="body2" mb={1}>
          please provide required information:
        </Typography>
        <TextField onChange={handleChangeTitle} label="title" />

        <Box mt={1}>
          <Typography variant="caption">options</Typography>
          {options.map((opt, index) => (
            <Box key={index} className={classes.takeOptionsBox}>
              <TextField
                value={opt}
                onChange={(e) => handleEditOption(e, index)}
              />
              {index > 0 && (
                <IconButton
                  color="error"
                  onClick={() => handleDeleteOption(index)}
                >
                  <IconX />
                </IconButton>
              )}
            </Box>
          ))}
          <IconButton color="primary" onClick={handleAddOption}>
            <IconPlus />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};
