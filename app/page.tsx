"use client";
import dynamic from "next/dynamic";
const AboutUs = dynamic(() => import("@/components/about-us"), { ssr: false });
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
