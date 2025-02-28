import dynamic from "next/dynamic";
import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";

const TechnicalPageContent = dynamic(() => import("./content"), { ssr: false });

const Technical = () => {
  return (
    <PageLayout pageTop={<Hero image="/language.jpg" />}>
      <TechnicalPageContent />
    </PageLayout>
  );
};

export default Technical;
