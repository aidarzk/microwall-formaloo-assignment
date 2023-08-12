import { EditorDataModel } from "@/shared/constants/blockTypes";
import Image from "next/image";

interface ImageViewerBlockProps {
  data?: EditorDataModel;
}

export const ImageViewerBlock = ({ data }: ImageViewerBlockProps) => {
  return (
    <Image
      width={data?.width ? data?.width : 100}
      height={data?.height ? data?.height : 100}
      alt={data?.alt ? data?.alt : "selected image by editor"}
      src={data?.value as string}
      // since we do not have a certain host we have to put unoptimized prop here which is not recommended
      unoptimized
    />
  );
};
