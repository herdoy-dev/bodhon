<<<<<<< HEAD
'use client'
=======
"use client";
>>>>>>> 4b257a82a20c2b3b0ffd09c644bfb92a4e0d86ed
import AboutUs from "@/components/about-us";
import { HomeCarousel } from "@/components/home-carousel";
import PageLayout from "@/components/page-layout";
import ProgramCard from "@/components/program-card";
import { useGetLatestPrograms } from "@/hooks/programs/usePrograms";
import { Grid } from "@radix-ui/themes";

export default function Home() {
  const { latestPrograms } = useGetLatestPrograms();
  return (
    <PageLayout pageTop={<HomeCarousel />}>
      <AboutUs />
      <section className="mb-10">
        <h1 className="text-3xl mb-5 font-semibold">Our Programs</h1>
        <Grid columns={{ initial: "1", md: "2" }} gap="3">
          {latestPrograms.map((program) => (
            <ProgramCard
              key={program.id}
              title={program.title || ""}
              caption={program.description || ""}
              image={program.thumbnail}
            />
          ))}
        </Grid>
      </section>
    </PageLayout>
  );
}
