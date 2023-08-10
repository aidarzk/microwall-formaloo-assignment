import { useState } from "react";
import { EditorDataModel } from "@/shared/constants/blockTypes";

interface FileViewerBlockProps {
  data?: EditorDataModel;
  onUpdateBlockByViewer: (args: any) => void;
}

export const FileViewerBlock = ({
  data,
  onUpdateBlockByViewer,
}: FileViewerBlockProps) => {
  const [value, setValue] = useState<string>("");

  return <input type="file" />;
};
