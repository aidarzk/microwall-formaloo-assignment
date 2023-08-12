import Link from "next/link";
//ui
import { Container, Grid, Typography } from "@mui/material";
import { IconEye } from "@tabler/icons-react";
import classes from "./viewer.module.scss";
//redux
import { useAppSelector } from "@/redux/hooks";
import { wallState } from "@/redux/features/wallsSlice";
//shared
import { routes } from "@/shared/constants/routes";

export const Viewer = () => {
  const walls = useAppSelector(wallState);

  return (
    <>
      <Container>
        <Typography variant="h5" fontWeight={700} mb={2}>
          welcome dear Viewer
        </Typography>

        {Object.values(walls)?.length > 0 ? (
          <Grid container>
            {Object.values(walls)?.map((wall) => (
              <Link key={wall.id} href={`${routes.viewer}/${wall.id}`}>
                <Grid className={classes.wallBox} item xl={3} md={4} xs={6}>
                  <IconEye />
                  <Typography>{wall.wallName}</Typography>
                </Grid>
              </Link>
            ))}
          </Grid>
        ) : (
          <Typography>sorry. no wall exists!</Typography>
        )}
      </Container>
    </>
  );
};
