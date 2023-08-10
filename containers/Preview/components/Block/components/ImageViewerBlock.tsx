import { EditorDataModel } from "@/shared/constants/blockTypes";
import Image from "next/image";

interface ImageViewerBlockProps {
  data?: EditorDataModel;
}

export const ImageViewerBlock = ({ data }: ImageViewerBlockProps) => {
  return <Image width={100} height={100} alt="" src={data?.value as string} />;
};
