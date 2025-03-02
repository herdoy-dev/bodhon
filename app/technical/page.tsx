import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";
import TechnicalPageContent from "./content";

export const dynamic = "force-dynamic";

const Technical = () => {
  return (
    <PageLayout pageTop={<Hero image="/language.jpg" />}>
      <TechnicalPageContent />
    </PageLayout>
  );
};

export default Technical;
