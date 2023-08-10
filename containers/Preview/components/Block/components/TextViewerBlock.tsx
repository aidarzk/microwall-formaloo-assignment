import { Typography } from "@mui/material";
import { EditorDataModel } from "@/shared/constants/blockTypes";

interface TextViewerBlockProps {
  data?: EditorDataModel;
}

export const TextViewerBlock = ({ data }: TextViewerBlockProps) => {
  return <Typography variant="body1">{data?.value}</Typography>;
};
