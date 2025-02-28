"use client";
import dynamic from "next/dynamic";
import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";

const CraftsPageContent = dynamic(() => import("./content"), { ssr: false });

const Crafts = () => {
  return (
    <PageLayout pageTop={<Hero image="/language.jpg" />}>
      <CraftsPageContent />
    </PageLayout>
  );
};

export default Crafts;
