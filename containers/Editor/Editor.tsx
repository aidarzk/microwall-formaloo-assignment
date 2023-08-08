import Image from "next/image";
import styles from "./home.module.scss";
import { Container, Typography } from "@mui/material";
import BasicCard from "@/components/BasicCard/BasicCard";
import Link from "next/link";

export const Editor = () => {
  return (
    <Container>
      <Typography>choose form:</Typography>
      <Link href="editor/form-1">
        <BasicCard title="form-1"></BasicCard>
      </Link>
    </Container>
  );
};
