import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Block } from "../Block/Block";
import { reorderBlocks } from "@/redux/features/wallsSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useDynamicRefs } from "@/shared/hooks/useDynamicRefs";

export const DragableBlocks = ({ blocks, wallId, scrollTo }: any) => {
  const dispatch = useAppDispatch();

  const [items, setItems] = useState([]);

  const itemRefs = useDynamicRefs(items.length);

  const scrollToItem = (index: number) => {
    if (itemRefs.current[index]?.current) {
      itemRefs.current[index]?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    if (scrollTo) {
      scrollToItem(scrollTo);
    }
  }, [scrollTo]);

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
                <div key={blockId} ref={itemRefs.current[index]}>
                  <Draggable key={blockId} draggableId={blockId} index={index}>
                    {(provided, snapshot) => (
                      <Box
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        key={blockId}
                      >
                        <Block
                          blockNo={index + 1}
                          blockId={blockId}
                          block={blocks[blockId]}
                          wallId={wallId}
                        />
                      </Box>
                    )}
                  </Draggable>
                </div>
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
