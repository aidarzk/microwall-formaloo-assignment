import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { blockTypes } from "@/shared/constants/blockTypes";
import dynamic from "next/dynamic";

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

// const CalendarEditorBlock = dynamic(() =>
//   import("./components").then((res) => res.CalendarEditorBlock)
// );
// const CalendarEditorBlock = dynamic(() =>
//   import("./components").then((res) => res.CalendarEditorBlock)
// );

interface BlockProps {
  block: any;
}

const getEditorComponent = {
  [blockTypes.text]: <TextEditorBlock />,
  [blockTypes.checkbox]: <CheckboxEditorBlock />,
  [blockTypes.calendar]: <CalendarEditorBlock />,
  [blockTypes.dropDown]: <DropDownEditorBlock />,
  [blockTypes.file]: <FileEditorBlock />,
  [blockTypes.image]: <ImageEditorBlock />,
  [blockTypes.phoneNumber]: <PhoneNumberEditorBlock />,
  [blockTypes.slider]: <SliderEditorBlock />,
  // [blockTypes.phoneNumber]: <PhoneNumberEditorBlock />,
  // [blockTypes.phoneNumber]: <PhoneNumberEditorBlock />,
  // [blockTypes.phoneNumber]: <PhoneNumberEditorBlock />,
};

export const Block = ({ block }: BlockProps) => {
  return (
    <Box>
      <Box>{getEditorComponent[block.type]}</Box>
    </Box>
  );
};
