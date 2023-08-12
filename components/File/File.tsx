import { InputHTMLAttributes } from "react";

interface FileProps {
  onChange?: (e: InputHTMLAttributes<HTMLInputElement>) => void;
}

export const File = ({ onChange }: FileProps) => {
  return <input type="file" onChange={onChange} />;
};
