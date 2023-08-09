import { Typography } from "@mui/material";
import { EditorDataModel } from "@/shared/constants/blockTypes";
import Image from "next/image";

interface ImageViewerBlockProps {
  data?: EditorDataModel;
}

export const ImageViewerBlock = ({ data }: ImageViewerBlockProps) => {
  return (
    <>
      <Typography variant="h6" fontWeight={700} mb={1}>
        {data?.title}
      </Typography>
      <Image width={100} height={100} alt="" src={data?.value as string} />
    </>
  );
};
