import Image from "next/image";
import classes from "./basicCard.module.scss";
import { Box, Card, Typography } from "@mui/material";
import { ReactNode } from "react";

interface BasicCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  children?: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export default function BasicCard({
  title,
  description,
  imageUrl,
  children,
  icon,
  className,
}: BasicCardProps) {
  return (
    <Card className={`${classes.card} ${className}`}>
      {imageUrl && (
        <Image
          src={imageUrl}
          width={128}
          height={128}
          alt={title ? title : "card-image"}
        />
      )}
      <Box display="flex" justifyContent="center">
        {icon}
        {title && <Typography ml={1}>{title}</Typography>}
      </Box>
      {description && (
        <Typography className={classes.description}>{description}</Typography>
      )}
      {children}
    </Card>
  );
}
