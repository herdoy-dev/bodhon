import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";
import SportPageContent from "./content";

const Sports = () => {
  return (
    <PageLayout pageTop={<Hero image="/sports.jpg" />}>
      <SportPageContent />
    </PageLayout>
  );
};

export default Sports;

export const dynamic = "force-dynamic";
