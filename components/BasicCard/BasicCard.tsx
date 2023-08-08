import NextImage from "next/image";
import classes from "./basicCard.module.scss";
import { Card, Typography } from "@mui/material";
import { ReactNode } from "react";

interface BasicCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  children?: ReactNode;
}

export default function BasicCard({
  title,
  description,
  imageUrl,
  children,
}: BasicCardProps) {
  return (
    <Card className={classes.card}>
      {imageUrl && (
        <NextImage
          src={imageUrl}
          width={128}
          height={128}
          alt={title ? title : "card-image"}
        />
      )}
      <Typography>{title}</Typography>
      <Typography className={classes.description}>{description}</Typography>
      {children}
    </Card>
  );
}
