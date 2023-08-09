"use client";
import { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import BasicCard from "@/components/BasicCard/BasicCard";
import { IconPlus } from "@tabler/icons-react";
import dynamic from "next/dynamic";
import {
  BlockModel,
  blockTypes,
  blockTypesWithDetails,
} from "@/shared/constants/blockTypes";

import classes from "./block.module.scss";
import { TextField } from "@/components/TextField/TextField";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addBlockToWall,
  editBlockEditorData,
  editBlockViewerData,
  wallState,
} from "@/redux/features/wallsSlice";
import { useParams, useRouter } from "next/navigation";
import { routes } from "@/shared/constants/routes";

const TextViewerBlock = dynamic(() =>
  import("./components").then((res) => res.TextViewerBlock)
);

const CheckboxViewerBlock = dynamic(() =>
  import("./components").then((res) => res.CheckboxViewerBlock)
);

const CalendarViewerBlock = dynamic(() =>
  import("./components").then((res) => res.CalendarViewerBlock)
);

const DropDownViewerBlock = dynamic(() =>
  import("./components").then((res) => res.DropDownViewerBlock)
);

const FileViewerBlock = dynamic(() =>
  import("./components").then((res) => res.FileViewerBlock)
);

const ImageViewerBlock = dynamic(() =>
  import("./components").then((res) => res.ImageViewerBlock)
);

const PhoneNumberViewerBlock = dynamic(() =>
  import("./components").then((res) => res.PhoneNumberViewerBlock)
);

const SliderViewerBlock = dynamic(() =>
  import("./components").then((res) => res.SliderViewerBlock)
);

const InputViewerBlock = dynamic(() =>
  import("./components").then((res) => res.InputViewerBlock)
);

interface BlockProps {
  block: BlockModel;
  blockId: string | number;
  wallId: string;
}

export const Block = ({ block, wallId, blockId }: BlockProps) => {
  const dispatch = useAppDispatch();

  function handleUpdateBlockByViewer<T>(values: T) {
    console.log("--11111111-----", values);
    dispatch(
      editBlockViewerData({
        wallId,
        blockId: blockId,
        data: values,
      })
    );
  }

  const getViewerComponent = {
    [blockTypes.text]: <TextViewerBlock data={block.editorData} />,
    [blockTypes.checkbox]: (
      <CheckboxViewerBlock
        data={block.editorData}
        onUpdateBlockByViewer={handleUpdateBlockByViewer}
      />
    ),
    [blockTypes.calendar]: (
      <CalendarViewerBlock
        data={block.editorData}
        onUpdateBlockByViewer={handleUpdateBlockByViewer}
      />
    ),
    [blockTypes.dropDown]: (
      <DropDownViewerBlock
        data={block.editorData}
        onUpdateBlockByViewer={handleUpdateBlockByViewer}
      />
    ),
    [blockTypes.file]: (
      <FileViewerBlock
        data={block.editorData}
        onUpdateBlockByViewer={handleUpdateBlockByViewer}
      />
    ),
    [blockTypes.image]: <ImageViewerBlock data={block.editorData} />,
    [blockTypes.phoneNumber]: (
      <PhoneNumberViewerBlock
        data={block.editorData}
        onUpdateBlockByViewer={handleUpdateBlockByViewer}
      />
    ),
    [blockTypes.slider]: (
      <SliderViewerBlock
        data={block.editorData}
        onUpdateBlockByViewer={handleUpdateBlockByViewer}
      />
    ),
    [blockTypes.input]: (
      <InputViewerBlock
        data={block.editorData}
        onUpdateBlockByViewer={handleUpdateBlockByViewer}
      />
    ),
  };

  return (
    <Box className={classes.blockContainer} key={block.id}>
      {getViewerComponent[block.type]}
    </Box>
  );
};
