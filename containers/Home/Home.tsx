import Image from "next/image";
import classes from "./home.module.scss";
import { Box, Container, Typography } from "@mui/material";
import BasicCard from "@/components/BasicCard/BasicCard";
import Link from "next/link";
import { routes } from "@/shared/constants/routes";
import { IconEdit, IconEye, IconWallpaper } from "@tabler/icons-react";
import { colorPalette } from "@/shared/styles/colorPalette";

export const Home = () => {
  return (
    <Container className={classes.container}>
      <Box className={classes.titleBox}>
        <IconWallpaper color={colorPalette.primary} width="100" height="100" />
        <Typography variant="h1">Welcome To Microwall!</Typography>
      </Box>
      <Box className={classes.modeBox}>
        <Link href={routes.editor}>
          <BasicCard
            icon={<IconEdit />}
            title="Editor"
            description="you can create and edit forms."
          />
        </Link>
        <Link href={routes.viewer}>
          <BasicCard
            icon={<IconEye />}
            title="Viewer"
            description="you can preview and submit created forms."
          />
        </Link>
      </Box>
    </Container>
  );
};
