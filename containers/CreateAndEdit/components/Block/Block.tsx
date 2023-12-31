import { BlockModel, blockTypes } from "@/shared/constants/blockTypes";
import dynamic from "next/dynamic";
import { useAppDispatch } from "@/redux/hooks";
import {
  editBlockEditorData,
  removeBlockById,
} from "@/redux/features/wallsSlice";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { Box, IconButton, Typography } from "@mui/material";
import classes from "./block.module.scss";
import { IconTrashX } from "@tabler/icons-react";

const TextEditorBlock = dynamic(() =>
  import("./components").then((res) => res.TextEditorBlock)
);

const CheckboxEditorBlock = dynamic(() =>
  import("./components").then((res) => res.CheckboxEditorBlock)
);

const CalendarEditorBlock = dynamic(() =>
  import("./components").then((res) => res.CalendarEditorBlock)
);

const DropDownEditorBlock = dynamic(() =>
  import("./components").then((res) => res.DropDownEditorBlock)
);

const FileEditorBlock = dynamic(() =>
  import("./components").then((res) => res.FileEditorBlock)
);

const ImageEditorBlock = dynamic(() =>
  import("./components").then((res) => res.ImageEditorBlock)
);

const PhoneNumberEditorBlock = dynamic(() =>
  import("./components").then((res) => res.PhoneNumberEditorBlock)
);

const SliderEditorBlock = dynamic(() =>
  import("./components").then((res) => res.SliderEditorBlock)
);

const InputEditorBlock = dynamic(() =>
  import("./components").then((res) => res.InputEditorBlock)
);

const RadioEditorBlock = dynamic(() =>
  import("./components").then((res) => res.RadioEditorBlock)
);

const MarkupEditorBlock = dynamic(() =>
  import("./components").then((res) => res.MarkupEditorBlock)
);

const HtmlEditorBlock = dynamic(() =>
  import("./components").then((res) => res.HtmlEditorBlock)
);

interface BlockProps {
  block: BlockModel;
  blockId: string;
  wallId: string;
  blockNo: number;
}

export const Block = ({ block, blockId, wallId, blockNo }: BlockProps) => {
  const dispatch = useAppDispatch();

  const handleDeleteBlock = () => {
    dispatch(
      removeBlockById({
        wallId,
        blockId,
      })
    );
  };

  const handleUpdateBlock = useDebounce(
    (values) =>
      dispatch(
        editBlockEditorData({
          wallId,
          blockId,
          data: values,
        })
      ),
    2000
  );

  const getEditorComponent = {
    [blockTypes.text]: (
      <TextEditorBlock
        data={block.editorData}
        onUpdateBlock={handleUpdateBlock}
      />
    ),
    [blockTypes.checkbox]: (
      <CheckboxEditorBlock
        onUpdateBlock={handleUpdateBlock}
        data={block.editorData}
      />
    ),
    [blockTypes.calendar]: (
      <CalendarEditorBlock
        data={block.editorData}
        onUpdateBlock={handleUpdateBlock}
      />
    ),
    [blockTypes.dropDown]: (
      <DropDownEditorBlock
        data={block.editorData}
        onUpdateBlock={handleUpdateBlock}
      />
    ),
    [blockTypes.file]: (
      <FileEditorBlock
        data={block.editorData}
        onUpdateBlock={handleUpdateBlock}
      />
    ),
    [blockTypes.image]: (
      <ImageEditorBlock
        data={block.editorData}
        onUpdateBlock={handleUpdateBlock}
      />
    ),
    [blockTypes.phoneNumber]: (
      <PhoneNumberEditorBlock
        data={block.editorData}
        onUpdateBlock={handleUpdateBlock}
      />
    ),
    [blockTypes.slider]: (
      <SliderEditorBlock
        data={block.editorData}
        onUpdateBlock={handleUpdateBlock}
      />
    ),
    [blockTypes.input]: (
      <InputEditorBlock
        data={block.editorData}
        onUpdateBlock={handleUpdateBlock}
      />
    ),
    [blockTypes.radioButton]: (
      <RadioEditorBlock
        onUpdateBlock={handleUpdateBlock}
        data={block.editorData}
      />
    ),
    [blockTypes.markup]: (
      <MarkupEditorBlock
        onUpdateBlock={handleUpdateBlock}
        data={block.editorData}
      />
    ),
    [blockTypes.html]: (
      <HtmlEditorBlock
        onUpdateBlock={handleUpdateBlock}
        data={block.editorData}
      />
    ),
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <Typography variant="body1" fontWeight={500}>
          Block Type: {block?.type} / block No. {blockNo}
        </Typography>
        <IconButton color="error" onClick={handleDeleteBlock}>
          <IconTrashX />
        </IconButton>
      </Box>
      <Box className={classes.content}>
        <Typography variant="h6" fontWeight={700} mb={1}>
          {block?.editorData?.title}
        </Typography>
        <Box className={classes.blockContainer}>
          {getEditorComponent[block.type]}
        </Box>
      </Box>
    </Box>
  );
};
