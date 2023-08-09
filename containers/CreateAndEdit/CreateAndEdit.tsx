"use client";
import { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
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
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addBlockToWall, wallState } from "@/redux/features/wallsSlice";
import { useParams, useRouter } from "next/navigation";
import { routes } from "@/shared/constants/routes";

const AddBlockDrawer = dynamic(() =>
  import("./components").then((res) => res.AddBlockDrawer)
);

export const CreateAndEdit = () => {
  const params = useParams();

  const router = useRouter();

  const wallId = (params?.slug as string) || "";

  const dispatch = useAppDispatch();

  const blocks = useAppSelector(wallState)[wallId]?.blocks;

  const wallName = useAppSelector(wallState)[wallId]?.wallName;

  // console.log({ wallId });
  console.log({ blocks });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleAddBlock = (block: any) => {
    const blocksKeys = blocks ? Object.keys(blocks) : [];

    const uniqueId = `${block.type}-${blocksKeys.length}`;
    dispatch(
      addBlockToWall({
        wallId,
        block: { [uniqueId]: block },
      })
    );
  };
  console.log({ blocks });

  return (
    <>
      <Container>
        <BasicCard>
          <Box className={classes.header}>
            <Typography variant="h3">{wallName}</Typography>

            <Button
              variant="contained"
              color="secondary"
              onClick={() => router.push(`${routes.viewer}/${wallId}`)}
            >
              preview
            </Button>
          </Box>
        </BasicCard>

        <BasicCard>
          <DragableBlocks blocks={blocks} wallId={wallId} />
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
