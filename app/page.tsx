import AboutUs from "@/components/about-us";
import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";
import { Grid, Skeleton } from "@radix-ui/themes";

export default function App() {
  return (
    <PageLayout pageTop={<Hero />}>
      <AboutUs />
      <section className="mb-10">
        <h1 className="text-3xl mb-5 font-semibold">Our Programs</h1>
        <Grid columns={{ initial: "1", md: "2" }} gap="3">
          <div className="w-full space-y-3">
            <Skeleton className="w-full h-[200px]" />
            <Skeleton className="w-full h-[20px]" />
            <Skeleton className="w-[50%] h-[20px]" />
          </div>
          <div className="w-full space-y-3">
            <Skeleton className="w-full h-[200px]" />
            <Skeleton className="w-full h-[20px]" />
            <Skeleton className="w-[50%] h-[20px]" />
          </div>
          <div className="w-full space-y-3">
            <Skeleton className="w-full h-[200px]" />
            <Skeleton className="w-full h-[20px]" />
            <Skeleton className="w-[50%] h-[20px]" />
          </div>
          <div className="w-full space-y-3">
            <Skeleton className="w-full h-[200px]" />
            <Skeleton className="w-full h-[20px]" />
            <Skeleton className="w-[50%] h-[20px]" />
          </div>
        </Grid>
      </section>
    </PageLayout>
  );
}
