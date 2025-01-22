import { Container, Grid } from "@radix-ui/themes";
import { PropsWithChildren } from "react";
import Sidebar from "./sidebar";

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <Container className="px-3 py-10">
      <Grid columns={{ initial: "1", md: "1fr 400px" }}>
        <div className="px-3">{children}</div>
        <Sidebar />
      </Grid>
    </Container>
  );
}
