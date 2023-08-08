import { ChangeEvent, useState } from "react";
import Box from "@mui/material/Box";
import { Textarea } from "@/components/TextArea/TextArea";
import { TextField } from "@/components/TextField/TextField";
import BlockBox from "@/components/BlockBox/BlockBox";
import { IconButton, Typography } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { IconCheck, IconPlus, IconX } from "@tabler/icons-react";
import classes from "./index.module.scss";

interface CheckboxEditorBlockProps {
  onDelete?: any;
}

export const CheckboxEditorBlock = ({ onDelete }: CheckboxEditorBlockProps) => {
  const [information, setInformation] = useState({
    title: "",
    options: ["option1"],
  });

  const { title, options } = information;

  const handleChangeTitle = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInformation({
      ...information,
      title: e?.target.value,
    });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInformation({
      ...information,
      title: e?.target.value,
    });
  };
  console.log({ title });

  const handleAddOption = () => {
    setInformation({
      ...information,
      options: [
        ...information.options,
        `option ${information.options.length + 1}`,
      ],
    });
  };

  const handleEditOption = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    if (index !== -1) {
      options[index] = e?.target.value;
    }

    setInformation({
      ...information,
    });
  };

  const handleDeleteOption = (index: number) => {
    if (index !== -1) {
      options.splice(index, 1);
    }

    setInformation({
      ...information,
    });
  };
  return (
    <BlockBox onDelete={onDelete}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "start",
        }}
      >
        <Typography mb={1}>{title}</Typography>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">{information.title}</FormLabel>
          <FormGroup>
            {information.options.map((opt) => (
              <>
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={gilad}
                      // onChange={handleChange}
                      name="gilad"
                    />
                  }
                  label={opt}
                />
              </>
            ))}
          </FormGroup>
        </FormControl>
      </Box>

      <Box className={classes.takeInfoBox}>
        <Typography variant="body2" mb={1}>
          please provide required information:
        </Typography>
        <TextField onChange={handleChangeTitle} label="title" required />

        <Box mt={1}>
          <Typography variant="caption">options</Typography>
          {information.options.map((opt, index) => (
            <Box key={index} display="flex">
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
    </BlockBox>
  );
};
