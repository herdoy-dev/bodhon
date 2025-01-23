import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PageLayout from "@/components/page-layout";
import { Flex, Grid } from "@radix-ui/themes";

export default function Gallery() {
  return (
    <>
      <Navbar />
      <PageLayout>
        <Grid columns={{ initial: "1", md: "2" }} gap="3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Flex
              align="center"
              justify="center"
              className="w-full h-[200px] bg-gray-400"
              key={i}
            ></Flex>
          ))}
        </Grid>
      </PageLayout>
      <Footer />
    </>
  );
}
