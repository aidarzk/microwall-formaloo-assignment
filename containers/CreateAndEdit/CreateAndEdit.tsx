"use client";
import { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import BasicCard from "@/components/BasicCard/BasicCard";
import { IconEye, IconPlus } from "@tabler/icons-react";
import dynamic from "next/dynamic";
import { DragableBlocks } from "./components/DragableBlocks/DragableBlocks";

import classes from "./createAndEdit.module.scss";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addBlockToWall, wallState } from "@/redux/features/wallsSlice";
import { useParams } from "next/navigation";
import { routes } from "@/shared/constants/routes";
import Link from "next/link";
import { uuidGenerator } from "@/shared/utilities/uuidGenerator";

const AddBlockDrawer = dynamic(() =>
  import("./components").then((res) => res.AddBlockDrawer)
);

export const CreateAndEdit = () => {
  const params = useParams();

  const wallId = (params?.slug as string) || "";

  const dispatch = useAppDispatch();

  const blocks = useAppSelector(wallState)[wallId]?.blocks;

  const wallName = useAppSelector(wallState)[wallId]?.wallName;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleAddBlock = (block: any) => {
    const uniqueId = `${block.type}-${uuidGenerator()}`;
    dispatch(
      addBlockToWall({
        wallId,
        block: { [uniqueId]: block },
      })
    );
  };
  console.log({ blocks });

  const [scrollTo, setScrollTo] = useState(0);

  return (
    <>
      <Container>
        <BasicCard className={classes.headerContainer}>
          <Box className={classes.header}>
            <Typography variant="h3">{wallName}</Typography>

            <Link href={`${routes.viewer}/${wallId}`} target="_blank">
              <Button
                variant="contained"
                color="secondary"
                startIcon={<IconEye />}
              >
                preview
              </Button>
            </Link>
          </Box>
          <Box className={classes.scrollBox}>
            {Object.keys(blocks)?.map((block, index) => (
              <Button
                variant="outlined"
                key={block}
                onClick={() => setScrollTo(index)}
              >
                block No. {index + 1}
              </Button>
            ))}
          </Box>
        </BasicCard>

        <BasicCard>
          <DragableBlocks blocks={blocks} wallId={wallId} scrollTo={scrollTo} />
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
