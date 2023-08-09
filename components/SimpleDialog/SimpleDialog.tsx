import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { ReactNode } from "react";
import { DialogActions } from "@mui/material";

export interface SimpleDialogProps {
  open: boolean;
  title: string;
  onClose: (value: string) => void;
  children: ReactNode;
  actions?: ReactNode;
}

export const SimpleDialog = ({
  onClose,
  title,
  open,
  children,
  actions,
}: SimpleDialogProps) => {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
};
