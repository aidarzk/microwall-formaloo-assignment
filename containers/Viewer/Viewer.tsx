import { Container, Typography } from "@mui/material";
import BasicCard from "@/components/BasicCard/BasicCard";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { wallState } from "@/redux/features/wallsSlice";
import { routes } from "@/shared/constants/routes";

export const Viewer = () => {
  const walls = useAppSelector(wallState);

  return (
    <>
      <Container>
        <Typography>welcome dear Viewer</Typography>
        {Object.values(walls)?.length > 0 ? (
          <>
            <Typography>choose wall:</Typography>
            {Object.values(walls)?.map((wall) => (
              <Link key={wall.id} href={`${routes.viewer}/${wall.id}`}>
                <BasicCard title={wall.wallName}></BasicCard>
              </Link>
            ))}
          </>
        ) : (
          <Typography>sorry. no wall exists!</Typography>
        )}
      </Container>
    </>
  );
};
