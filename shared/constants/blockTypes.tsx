import { ReactNode } from "react";

import {
  IconAdjustmentsHorizontal,
  IconAlignBoxLeftMiddle,
  IconCalendarEvent,
  IconCheckbox,
  IconFileUpload,
  IconInputSearch,
  IconPhoneCalling,
  IconPhotoPlus,
  IconSelect,
  IconSourceCode,
} from "@tabler/icons-react";

export const blockTypes = {
  text: "text",
  input: "input",
  image: "image",
  calendar: "calendar",
  phoneNumber: "phoneNumber",
  slider: "slider",
  dropDown: "dropDown",
  checkbox: "checkbox",
  file: "file",
  markup: "markup",
  radioButton: "radioButton",
};

export interface EditorDataModel {
  title?: string;
  defaultValue?: string | number;
  min?: string | number;
  max?: string | number;
  value?: string | number;
  options?: [] | any;
  label?: string;
}

export interface BlockModel {
  type: string;
  id: number | string;
  title: string;
  icon: ReactNode;
  editorData?: EditorDataModel;
  viewerData?: {};
}

export const blockTypesWithDetails: {
  [key: string]: BlockModel;
} = {
  [blockTypes.text]: {
    type: blockTypes.text,
    id: 0,
    title: "Text",
    icon: <IconAlignBoxLeftMiddle />,
  },
  [blockTypes.checkbox]: {
    type: blockTypes.checkbox,
    id: 1,
    title: "Checkbox",
    icon: <IconCheckbox />,
  },
  [blockTypes.calendar]: {
    type: blockTypes.calendar,
    id: 2,
    title: "Calendar",
    icon: <IconCalendarEvent />,
  },
  [blockTypes.dropDown]: {
    type: blockTypes.dropDown,
    id: 3,
    title: "DropDown",
    icon: <IconSelect />,
  },
  [blockTypes.file]: {
    type: blockTypes.file,
    id: 4,
    title: "File",
    icon: <IconFileUpload />,
  },
  [blockTypes.image]: {
    type: blockTypes.image,
    id: 5,
    title: "Image",
    icon: <IconPhotoPlus />,
  },
  [blockTypes.markup]: {
    type: blockTypes.markup,
    id: 6,
    title: "Markup",
    icon: <IconSourceCode />,
  },
  [blockTypes.phoneNumber]: {
    type: blockTypes.phoneNumber,
    id: 7,
    title: "PhoneNumber",
    icon: <IconPhoneCalling />,
  },
  [blockTypes.slider]: {
    type: blockTypes.slider,
    id: 8,
    title: "Slider",
    icon: <IconAdjustmentsHorizontal />,
  },
  [blockTypes.input]: {
    type: blockTypes.input,
    id: 9,
    title: "Input",
    icon: <IconInputSearch />,
  },
  [blockTypes.radioButton]: {
    type: blockTypes.radioButton,
    id: 10,
    title: "Radio(single Check)",
    icon: <IconCheckbox />,
  },
};
