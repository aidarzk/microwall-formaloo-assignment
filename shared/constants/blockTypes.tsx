import { Textarea } from "@/components/TextArea/TextArea";
import {
  IconAdjustmentsHorizontal,
  IconAlignBoxLeftMiddle,
  IconCalendarEvent,
  IconCheckbox,
  IconFileUpload,
  IconPhoneCalling,
  IconPhotoPlus,
  IconSelect,
  IconSourceCode,
} from "@tabler/icons-react";

export const blockTypes = {
  text: "text",
  image: "image",
  calendar: "calendar",
  phoneNumber: "phoneNumber",
  slider: "slider",
  dropDown: "dropDown",
  checkbox: "checkbox",
  file: "file",
  markup: "markup",
};

export const blockTypesWithDetails = {
  [blockTypes.text]: {
    type: blockTypes.text,
    id: 0,
    title: "Text",
    icon: <IconAlignBoxLeftMiddle />,
    requiredInformation: [],
  },
  [blockTypes.checkbox]: {
    type: blockTypes.checkbox,
    id: 1,
    title: "Checkbox",
    icon: <IconCheckbox />,
    requiredInformation: [],
  },
  [blockTypes.calendar]: {
    type: blockTypes.calendar,
    id: 2,
    title: "Calendar",
    icon: <IconCalendarEvent />,
    requiredInformation: [],
  },
  [blockTypes.dropDown]: {
    type: blockTypes.dropDown,
    id: 3,
    title: "DropDown",
    icon: <IconSelect />,
    requiredInformation: [],
  },
  [blockTypes.file]: {
    type: blockTypes.file,
    id: 4,
    title: "File",
    icon: <IconFileUpload />,
    requiredInformation: [],
  },
  [blockTypes.image]: {
    type: blockTypes.image,
    id: 5,
    title: "Image",
    icon: <IconPhotoPlus />,
    requiredInformation: [],
  },
  [blockTypes.markup]: {
    type: blockTypes.markup,
    id: 6,
    title: "Markup",
    icon: <IconSourceCode />,
    requiredInformation: [],
  },
  [blockTypes.phoneNumber]: {
    type: blockTypes.phoneNumber,
    id: 7,
    title: "PhoneNumber",
    icon: <IconPhoneCalling />,
    requiredInformation: [],
  },
  [blockTypes.slider]: {
    type: blockTypes.slider,
    id: 8,
    title: "Slider",
    icon: <IconAdjustmentsHorizontal />,
    requiredInformation: [],
  },
};

export const blockDetails = [
  {
    type: blockTypes.text,
    id: 0,
    title: "Text",
    icon: <IconAlignBoxLeftMiddle />,
    requiredInformation: [],
  },
];
