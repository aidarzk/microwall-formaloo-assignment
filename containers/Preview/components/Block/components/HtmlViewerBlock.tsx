import { EditorDataModel } from "@/shared/constants/blockTypes";

interface HtmlViewerBlockProps {
  data?: EditorDataModel;
}

export const HtmlViewerBlock = ({ data }: HtmlViewerBlockProps) => {
  return <div dangerouslySetInnerHTML={{ __html: data?.value as string }} />;
};
