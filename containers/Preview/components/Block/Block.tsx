import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { BlockModel, blockTypes } from "@/shared/constants/blockTypes";

import classes from "./block.module.scss";
import { useAppDispatch } from "@/redux/hooks";
import { editBlockViewerData } from "@/redux/features/wallsSlice";
import { useDebounce } from "@/shared/hooks/useDebounce";

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

const RadioViewerBlock = dynamic(() =>
  import("./components").then((res) => res.RadioViewerBlock)
);

interface BlockProps {
  block: BlockModel;
  blockId: string | number;
  wallId: string;
}

export const Block = ({ block, wallId, blockId }: BlockProps) => {
  const dispatch = useAppDispatch();

  const handleUpdateBlockByViewer = useDebounce(
    (values) =>
      dispatch(
        editBlockViewerData({
          wallId,
          blockId,
          data: values,
        })
      ),
    2000
  );

  const getViewerComponent = {
    [blockTypes.text]: <TextViewerBlock data={block.editorData} />,
    [blockTypes.image]: <ImageViewerBlock data={block.editorData} />,
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
    [blockTypes.radioButton]: (
      <RadioViewerBlock
        data={block.editorData}
        onUpdateBlockByViewer={handleUpdateBlockByViewer}
      />
    ),
  };

  return (
    <Box className={classes.blockContainer} key={block.id}>
      <Typography variant="h6" fontWeight={700} mb={1}>
        {block?.editorData?.title}
      </Typography>
      {getViewerComponent[block.type]}
    </Box>
  );
};
