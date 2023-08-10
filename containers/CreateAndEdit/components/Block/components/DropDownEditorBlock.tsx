import { ChangeEvent, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { TextField } from "@/components/TextField/TextField";
import {
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { IconPlus, IconX } from "@tabler/icons-react";
import classes from "./index.module.scss";
import { EditorDataModel } from "@/shared/constants/blockTypes";

interface DropDownEditorBlockProps {
  onUpdateBlock: (args: EditorDataModel) => void;
  data?: EditorDataModel;
}

export const DropDownEditorBlock = ({
  onUpdateBlock,
  data,
}: DropDownEditorBlockProps) => {
  const [values, setValues] = useState<EditorDataModel>({
    title: "",
    options: ["option1"],
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

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value as string);
  };

  return (
    <>
      <Box className={classes.container}>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedOption}
            onChange={handleChangeSelect}
          >
            {options.map((opt: string) => (
              <MenuItem key={opt} value={opt}>
                {opt}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box className={classes.takeInfoBox}>
        <Typography variant="body2" mb={1}>
          please provide required information:
        </Typography>
        <TextField onChange={handleChangeTitle} label="title" />

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
