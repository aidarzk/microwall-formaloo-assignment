import { useState } from "react";
import { EditorDataModel } from "@/shared/constants/blockTypes";

interface FileProps {
  data?: EditorDataModel;
  onChange?: (args: any) => void;
}

export const File = ({ data, onChange }: FileProps) => {
  return <input type="file" onChange={onChange} />;
};
