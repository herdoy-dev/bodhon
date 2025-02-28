"use client";
import dynamic from "next/dynamic";
import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";

const LanguagePageContent = dynamic(() => import("./content"), { ssr: false });

const Language = () => {
  return (
    <PageLayout pageTop={<Hero image="/language.jpg" />}>
      <LanguagePageContent />
    </PageLayout>
  );
};

export default Language;
