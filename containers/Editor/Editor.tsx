"use client";

import { Button, Container, Typography } from "@mui/material";
import BasicCard from "@/components/BasicCard/BasicCard";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addWall, wallState } from "@/redux/features/wallsSlice";
import { IconPlus } from "@tabler/icons-react";
import { SimpleDialog } from "@/components/SimpleDialog/SimpleDialog";
import { ChangeEvent, useState } from "react";
import { TextField } from "@/components/TextField/TextField";
import { routes } from "@/shared/constants/routes";

export const Editor = () => {
  const dispatch = useAppDispatch();

  const walls = useAppSelector(wallState);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const [wallName, setWallName] = useState<string>("");

  const [wallNameError, setWallNameError] = useState<boolean>(false);

  console.log({ walls });

  const handleClose = () => {
    setIsDialogOpen(false);
    setWallNameError(false);
    setWallName("");
  };

  const handleAddWall = () => {
    if (!wallName) {
      setWallNameError(true);
    } else {
      dispatch(addWall(wallName));
      handleClose();
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setWallNameError(false);
    setWallName(e?.target.value);
  };

  return (
    <>
      <Container>
        <Typography>choose wall:</Typography>
        {Object.values(walls)?.map((wall) => (
          <Link key={wall.id} href={`${routes.editor}/${wall.id}`}>
            <BasicCard title={wall.wallName}></BasicCard>
          </Link>
        ))}
        <Button
          onClick={() => setIsDialogOpen(true)}
          variant="contained"
          startIcon={<IconPlus />}
        >
          create new wall
        </Button>
      </Container>
      <SimpleDialog
        open={isDialogOpen}
        onClose={handleClose}
        title="Wall Name"
        actions={
          <>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" onClick={handleAddWall}>
              Add
            </Button>
          </>
        }
      >
        <Typography mb={1} variant="body1">
          please add a name for your wall
        </Typography>
        <TextField
          required
          onChange={handleChange}
          autoFocus
          margin="dense"
          id="name"
          label="Wall Name"
          fullWidth
          error={wallNameError}
          helperText={wallNameError && "wall name is required"}
        />
      </SimpleDialog>
    </>
  );
};
