import { ChangeEvent, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useDebounce } from "@/shared/hooks/useDebounce";
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

  const debouncedValue = useDebounce(value, 2000);

  useEffect(() => {
    onUpdateBlockByViewer({
      value,
    });
  }, [debouncedValue]);

  return (
    <>
      <Typography variant="h6" fontWeight={700} mb={1}>
        {data?.title}
      </Typography>

      <input type="file" />
    </>
  );
};
