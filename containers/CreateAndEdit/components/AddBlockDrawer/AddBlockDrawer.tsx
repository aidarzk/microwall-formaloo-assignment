import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { blockTypesWithDetails } from "@/shared/constants/blockTypes";

import classes from "./addBlockDrawer.module.scss";
import { IconButton, Typography } from "@mui/material";
import { IconChevronRight } from "@tabler/icons-react";

interface AddBlockDrawerProps {
  open: boolean;
  onClose: () => void;
  onAddBlock: (id: any) => void;
}

export const AddBlockDrawer = ({
  open,
  onClose,
  onAddBlock,
}: AddBlockDrawerProps) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box p={1}>
        <IconButton onClick={onClose}>
          <IconChevronRight />
        </IconButton>
      </Box>
      <Divider />
      <Box className={classes.container} role="presentation">
        <List className={classes.list}>
          <Typography variant="body1">please select your block type</Typography>
          {Object.values(blockTypesWithDetails).map((block, index) => (
            <Button
              onClick={() => {
                onAddBlock(block);
                onClose();
              }}
              key={block.id}
              variant="outlined"
              startIcon={block.icon}
            >
              {block.title}
            </Button>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
