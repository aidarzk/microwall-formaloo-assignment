"use client";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
//ui
import { Button, Container, Grid, Typography } from "@mui/material";
import { IconPlus, IconSettings } from "@tabler/icons-react";
import { SimpleDialog } from "@/components/SimpleDialog/SimpleDialog";
import { TextField } from "@/components/TextField/TextField";
import classes from "./editor.module.scss";
//redux
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addWall, wallState } from "@/redux/features/wallsSlice";
//shared
import { routes } from "@/shared/constants/routes";

export const Editor = () => {
  const dispatch = useAppDispatch();

  const walls = useAppSelector(wallState);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const [wallName, setWallName] = useState<string>("");

  const [wallNameError, setWallNameError] = useState<boolean>(false);

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
        <Typography variant="h5" fontWeight={700} mb={2}>
          create a wall
        </Typography>
        <Grid container>
          {Object.values(walls)?.map((wall) => (
            <Link key={wall.id} href={`${routes.editor}/${wall.id}`}>
              <Grid
                className={`${classes.createBox} ${classes.wallBox}`}
                item
                xl={3}
              >
                <Typography>{wall.wallName}</Typography>
                <IconSettings />
              </Grid>
            </Link>
          ))}
          <Grid
            onClick={() => setIsDialogOpen(true)}
            className={classes.createBox}
            item
            xl={3}
          >
            <Typography>create new wall</Typography>
            <IconPlus />
          </Grid>
        </Grid>
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
          inputProps={{
            maxLength: 10,
          }}
          helperText={wallNameError && "wall name is required"}
        />
      </SimpleDialog>
    </>
  );
};
