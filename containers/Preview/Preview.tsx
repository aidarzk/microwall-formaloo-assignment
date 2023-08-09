"use client";
import { Container, Typography } from "@mui/material";
import BasicCard from "@/components/BasicCard/BasicCard";

import { useAppSelector } from "@/redux/hooks";
import { wallState } from "@/redux/features/wallsSlice";
import { useParams } from "next/navigation";
import { Block } from "./components/Block/Block";

export const Preview = () => {
  const params = useParams();

  const wallId = (params?.slug as string) || "";

  const blocks = useAppSelector(wallState)[wallId]?.blocks;

  const wallName = useAppSelector(wallState)[wallId]?.wallName;

  console.log({ blocks });

  return (
    <>
      <Container>
        <BasicCard>
          <Typography variant="h3">{wallName}</Typography>
          {Object.keys(blocks)?.length > 0 ? (
            Object.keys(blocks)?.map((block: string, index) => (
              <Block
                block={blocks[block]}
                blockId={block}
                key={block}
                wallId={wallId}
              />
            ))
          ) : (
            <Typography>there is no block to show!</Typography>
          )}
        </BasicCard>
      </Container>
    </>
  );
};
