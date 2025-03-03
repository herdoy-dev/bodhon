import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";
import dynamic from "next/dynamic";

const TechnicalPageContent = dynamic(() => import("./content"));

const Technical = () => {
  return (
    <PageLayout pageTop={<Hero image="/language.jpg" />}>
      <TechnicalPageContent />
    </PageLayout>
  );
};

export default Technical;
