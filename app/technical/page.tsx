import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";
import TechnicalPageContent from "./content";

const Technical = () => {
  return (
    <PageLayout pageTop={<Hero image="/language.jpg" />}>
      <TechnicalPageContent />
    </PageLayout>
  );
};

export default Technical;

export const dynamic = "force-dynamic";
