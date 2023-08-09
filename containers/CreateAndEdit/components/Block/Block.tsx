import * as React from "react";
import { BlockModel, blockTypes } from "@/shared/constants/blockTypes";
import dynamic from "next/dynamic";
import { BlockBox } from "@/components/BlockBox/BlockBox";
import { useAppDispatch } from "@/redux/hooks";
import {
  editBlockEditorData,
  removeBlockById,
} from "@/redux/features/wallsSlice";

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

interface BlockProps {
  block: BlockModel;
  blockId: string;
  wallId: string;
}

export const Block = ({ block, blockId, wallId }: BlockProps) => {
  const dispatch = useAppDispatch();

  const handleDeleteBlock = () => {
    dispatch(
      removeBlockById({
        wallId,
        blockId,
      })
    );
  };

  function handleUpdateBlock<T>(values: T) {
    dispatch(
      editBlockEditorData({
        wallId,
        blockId,
        data: values,
      })
    );
  }

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
  };

  return (
    <BlockBox onDelete={handleDeleteBlock}>
      {getEditorComponent[block.type]}
    </BlockBox>
  );
};
