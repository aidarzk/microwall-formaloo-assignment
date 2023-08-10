import { Container, Grid, Typography } from "@mui/material";
import BasicCard from "@/components/BasicCard/BasicCard";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { wallState } from "@/redux/features/wallsSlice";
import { routes } from "@/shared/constants/routes";

import classes from "./viewer.module.scss";
import { IconEye } from "@tabler/icons-react";

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
