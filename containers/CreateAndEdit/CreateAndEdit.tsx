import { useState } from "react";
import { Box, Button, Container } from "@mui/material";
import BasicCard from "@/components/BasicCard/BasicCard";
import { IconPlus } from "@tabler/icons-react";
import dynamic from "next/dynamic";
import {
  blockTypes,
  blockTypesWithDetails,
} from "@/shared/constants/blockTypes";
import { DragableBlocks } from "./components/DragableBlocks/DragableBlocks";

import classes from "./createAndEdit.module.scss";
import { TextField } from "@/components/TextField/TextField";

const AddBlockDrawer = dynamic(() =>
  import("./components").then((res) => res.AddBlockDrawer)
);

export const CreateAndEdit = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [blocks, setBlocks] = useState({
    [`${blockTypes.text}-0`]: blockTypesWithDetails[blockTypes.text],
  });

  const blocksKeys = Object.keys(blocks);

  const handleAddBlock = (block: any) => {
    const uniqueId = `${block.type}-${blocksKeys.length}`;
    setBlocks({
      [uniqueId]: block,
      ...blocks,
    });
  };
  console.log({ blocks });

  const getBlockComponent = (id: any) => {};

  return (
    <>
      <Container>
        <BasicCard>
          <Box className={classes.header}>
            <TextField label="form title" />
            <Button variant="contained" color="secondary">
              preview
            </Button>
          </Box>
        </BasicCard>

        <BasicCard>
          <DragableBlocks blocks={blocks} setBlocks={setBlocks} />
        </BasicCard>

        <Button
          className={classes.addButton}
          onClick={() => setIsDrawerOpen(true)}
          variant="contained"
          startIcon={<IconPlus />}
        >
          Add Block
        </Button>
      </Container>
      <AddBlockDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onAddBlock={handleAddBlock}
      />
    </>
  );
};
