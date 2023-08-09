import { ChangeEvent, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { TextField } from "@/components/TextField/TextField";
import {
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { IconPlus, IconX } from "@tabler/icons-react";
import classes from "./index.module.scss";
import { EditorDataModel } from "@/shared/constants/blockTypes";
import { useDebounce } from "@/shared/hooks/useDebounce";

interface DropDownValuesModel {
  title: string;
  options: string[];
}

interface DropDownEditorBlockProps {
  onUpdateBlock: (args: DropDownValuesModel) => void;
  data?: EditorDataModel;
}

export const DropDownEditorBlock = ({
  onUpdateBlock,
  data,
}: DropDownEditorBlockProps) => {
  const [values, setValues] = useState<DropDownValuesModel>({
    title: "",
    options: ["option1"],
  });

  const { title, options } = values;

  const debouncedValue = useDebounce<DropDownValuesModel>(values, 2000);

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

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value as string);
  };

  return (
    <>
      <Box className={classes.container}>
        <Typography mb={1}>{title}</Typography>

        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedOption}
            onChange={handleChangeSelect}
          >
            {options.map((opt) => (
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
