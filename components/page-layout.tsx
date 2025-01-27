import { Container, Grid } from "@radix-ui/themes";
import { ReactNode } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

interface Props {
  pageTop?: ReactNode;
  children: ReactNode;
}

export default function PageLayout({ pageTop, children }: Props) {
  return (
    <>
      <Navbar />
      {pageTop}
      <Container className="px-3 py-10">
        <Grid columns={{ initial: "1", md: "1fr 400px" }}>
          <div className="px-3">{children}</div>
          <Sidebar />
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
