import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Block } from "../Block/Block";
import { reorderBlocks } from "@/redux/features/wallsSlice";
import { useAppDispatch } from "@/redux/hooks";

export const DragableBlocks = ({ blocks, wallId }: any) => {
  const dispatch = useAppDispatch();

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (blocks) {
      setItems(Object.keys(blocks));
    }
  }, [blocks]);

  const onDragEnd = (result) => {
    const newItems = Array.from(items);
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);
    const newBlocks: object = {};
    setItems(newItems);
    newItems.forEach((element) => {
      newBlocks[element] = blocks[element];
    });

    console.log({ newBlocks });
    dispatch(
      reorderBlocks({
        wallId,
        blocks: newBlocks,
      })
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {blocks && Object.keys(blocks)?.length > 0 ? (
              Object.keys(blocks)?.map((blockId, index) => (
                <Draggable key={blockId} draggableId={blockId} index={index}>
                  {(provided, snapshot) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      key={blockId}
                    >
                      <Block
                        blockId={blockId}
                        block={blocks[blockId]}
                        wallId={wallId}
                      />
                    </Box>
                  )}
                </Draggable>
              ))
            ) : (
              <Typography>
                It is so empty here please add some blocks
              </Typography>
            )}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
