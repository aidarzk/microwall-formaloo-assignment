"use client";
import { createElement, useState } from "react";
import dynamic from "next/dynamic";
import { Box, Typography } from "@mui/material";
import { BlockModel } from "@/shared/constants/blockTypes";

import classes from "./block.module.scss";
import { useAppDispatch } from "@/redux/hooks";
import { editBlockViewerData } from "@/redux/features/wallsSlice";
import { useDebounce } from "@/shared/hooks/useDebounce";

const TextViewerBlock = dynamic(() =>
  import("./components").then((res) => res.TextViewerBlock)
);

const ImageViewerBlock = dynamic(() =>
  import("./components").then((res) => res.ImageViewerBlock)
);

const HtmlViewerBlock = dynamic(() =>
  import("./components").then((res) => res.HtmlViewerBlock)
);

const Textarea = dynamic(() =>
  import("@/components/TextArea/TextArea").then((res) => res.Textarea)
);

const TextField = dynamic(() =>
  import("@/components/TextField/TextField").then((res) => res.TextField)
);

const Calendar = dynamic(() =>
  import("@/components/Calendar/Calendar").then((res) => res.Calendar)
);

const RadioButton = dynamic(() =>
  import("@/components/RadioButton/RadioButton").then((res) => res.RadioButton)
);

const Checkbox = dynamic(() =>
  import("@/components/Checkbox/Checkbox").then((res) => res.Checkbox)
);

const DropDown = dynamic(() =>
  import("@/components/DropDown/DropDown").then((res) => res.DropDown)
);

const Slider = dynamic(() =>
  import("@/components/Slider/Slider").then((res) => res.Slider)
);

const File = dynamic(() =>
  import("@/components/File/File").then((res) => res.File)
);

const PhoneNumberInput = dynamic(() =>
  import("@/components/PhoneNumberInput/PhoneNumberInput").then(
    (res) => res.PhoneNumberInput
  )
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

  const [values, setValues] = useState<any>({});

  const handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (
    event: React.ChangeEvent<HTMLInputElement>,
    newValue?: string
  ) => {
    const { name, value, type, checked, files } = event.target;

    let newValues = {};
    switch (type) {
      case "checkbox":
        newValues = {
          [name]: checked,
        };
        setValues({
          ...values,
          ...newValues,
        });
        handleUpdateBlockByViewer({
          ...values,
          ...newValues,
        });
        break;

      case "file":
        newValues = {
          [name]: checked,
        };
        if (files) {
          setValues(files[0]);
          handleUpdateBlockByViewer({ value: files[0] });
        }

        break;

      case "tel":
        handleUpdateBlockByViewer({ value: newValue });
        break;

      default:
        setValues(value);
        handleUpdateBlockByViewer({ value });
        break;
    }
  };

  const ViewerComponent: { [key: string]: any } = {
    //presentational
    text: TextViewerBlock,
    image: ImageViewerBlock,
    html: HtmlViewerBlock,
    //interactive
    input: TextField,
    calendar: Calendar,
    phoneNumber: PhoneNumberInput,
    slider: Slider,
    dropDown: DropDown,
    checkbox: Checkbox,
    file: File,
    markup: Textarea,
    radioButton: RadioButton,
  };

  function componentRenderer(block: BlockModel) {
    if (typeof ViewerComponent[block.type] !== "undefined") {
      return createElement(ViewerComponent[block.type], {
        onChange: handleChange,
        data: block.editorData,
      });
    }
  }

  return (
    <Box className={classes.blockContainer} key={block.id}>
      <Typography variant="h6" fontWeight={700} mb={1}>
        {block?.editorData?.title}
      </Typography>
      {componentRenderer(block)}
    </Box>
  );
};
