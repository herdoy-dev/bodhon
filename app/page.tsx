import dynamic from "next/dynamic";
import { HomeCarousel } from "@/components/home-carousel";
import LatestPrograms from "@/components/latest-programs";
import PageLayout from "@/components/page-layout";

const AboutUs = dynamic(() => import("@/components/about-us"));

export default function Home() {
  return (
    <PageLayout pageTop={<HomeCarousel />}>
      <AboutUs />
      <LatestPrograms />
    </PageLayout>
  );
}
