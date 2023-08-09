import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { EditorDataModel } from "@/shared/constants/blockTypes";

interface TextViewerBlockProps {
  data?: EditorDataModel;
}

export const TextViewerBlock = ({ data }: TextViewerBlockProps) => {
  return (
    <>
      <Typography variant="h6" fontWeight={700} mb={1}>
        {data?.title}
      </Typography>
      <Typography variant="body1">{data?.value}</Typography>
    </>
  );
};
