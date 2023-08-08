import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Block } from "../Block/Block";

export const DragableBlocks = ({ blocks, setBlocks }: any) => {
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
    setBlocks(newBlocks);
    console.log({ newBlocks });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {Object.keys(blocks)?.map((blockId, index) => (
              <Draggable key={blockId} draggableId={blockId} index={index}>
                {(provided, snapshot) => (
                  <Box
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    key={blockId}
                  >
                    <Block block={blocks[blockId]} />
                  </Box>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
