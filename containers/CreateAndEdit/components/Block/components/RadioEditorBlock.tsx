import { ChangeEvent, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { TextField } from "@/components/TextField/TextField";
import { IconButton, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { IconPlus, IconX } from "@tabler/icons-react";
import classes from "./index.module.scss";
import { EditorDataModel } from "@/shared/constants/blockTypes";

interface RadioEditorBlockProps {
  onUpdateBlock: (args: EditorDataModel) => void;
  data?: EditorDataModel;
}

export const RadioEditorBlock = ({
  onUpdateBlock,
  data,
}: RadioEditorBlockProps) => {
  const [values, setValues] = useState<EditorDataModel>({
    title: "",
    options: ["option 1"],
  });

  const { title, options } = values;

  const handleChangeTitle = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({
      ...values,
      title: e?.target.value,
    });
    onUpdateBlock({ ...values, title: e?.target.value });
  };

  const handleAddOption = () => {
    setValues({
      ...values,
      options: [...values.options, `option ${values.options.length + 1}`],
    });

    onUpdateBlock({
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

    onUpdateBlock({
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

    onUpdateBlock({
      ...values,
      options: optionsCopy,
    });
  };

  useEffect(() => {
    if ((data?.options?.length && data?.options?.length > 0) || data?.title) {
      setValues(data);
    }
  }, [data]);

  return (
    <>
      <Box className={classes.container}>
        <FormControl>
          <RadioGroup
            aria-labelledby="radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            {options.map((opt: string, index: number) => (
              <FormControlLabel
                key={opt}
                control={<Radio />}
                label={opt}
                value={index}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>

      <Box className={classes.takeInfoBox}>
        <Typography variant="body2" mb={1}>
          please provide required information:
        </Typography>
        <TextField onChange={handleChangeTitle} label="title" value={title} />

        <Box mt={1}>
          <Typography variant="caption">options</Typography>
          {options.map((opt: string, index: number) => (
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
