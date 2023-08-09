import Image from "next/image";
import styles from "./home.module.scss";
import { Container, Typography } from "@mui/material";
import BasicCard from "@/components/BasicCard/BasicCard";
import Link from "next/link";
import { routes } from "@/shared/constants/routes";

export const Home = () => {
  return (
    <Container>
      <Typography variant="h1">Welcome To Microwall!</Typography>
      <Typography>please choose your mode:</Typography>
      <Link href={routes.editor}>
        <BasicCard
          title="Editor"
          description="you can create and edit forms."
        />
      </Link>
      <Link href={routes.viewer}>
        <BasicCard
          title="Viewer"
          description="you can preview and submit created forms."
        />
      </Link>
    </Container>
  );
};
