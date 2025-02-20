'use client'
import AboutUs from "@/components/about-us";
import { HomeCarousel } from "@/components/home-carousel";
import PageLayout from "@/components/page-layout";
import ProgramCard from "@/components/program-card";
import { Grid } from "@radix-ui/themes";

const programs = [
  {
    id: 1,
    title: "Bodhon Language Clug",
    image: "/language.jpg",
    caption: "Lorem ipsum dolor sit amet,",
  },
  {
    id: 2,
    title: "Bodhon Sports Clug",
    image: "/sports.jpg",
    caption: "Lorem ipsum dolor sit amet,",
  },
  {
    id: 3,
    title: "Bodhon Technical",
    image: "/language.jpg",
    caption: "Lorem ipsum dolor sit amet,",
  },
];
export default function App() {
  return (
    <PageLayout pageTop={<HomeCarousel />}>
      <AboutUs />
      <section className="mb-10">
        <h1 className="text-3xl mb-5 font-semibold">Our Programs</h1>
        <Grid columns={{ initial: "1", md: "2" }} gap="3">
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              title={program.title}
              caption={program.caption}
              image={program.image}
            />
          ))}
        </Grid>
      </section>
    </PageLayout>
  );
}

export const dynamic = "force-dynamic";
