import AboutUs from "@/components/about-us";
import { HomeCarousel } from "@/components/home-carousel";
import LatestPrograms from "@/components/latest-programs";
import PageLayout from "@/components/page-layout";

export default function Home() {
  return (
    <PageLayout pageTop={<HomeCarousel />}>
      <AboutUs />
      <LatestPrograms />
    </PageLayout>
  );
}
