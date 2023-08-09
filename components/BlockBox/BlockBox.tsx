import classes from "./blockBox.module.scss";
import { Box, IconButton } from "@mui/material";
import { ReactNode } from "react";
import { IconCheck, IconTrashX } from "@tabler/icons-react";

interface BlockBoxProps {
  children?: ReactNode;
  onDelete: () => void;
}

export const BlockBox = ({ children, onDelete }: BlockBoxProps) => {
  return (
    <Box className={classes.container}>
      {children}
      <IconButton color="error" onClick={onDelete}>
        <IconTrashX />
      </IconButton>
    </Box>
  );
};
