import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";
import SportPageContent from "./content";

export const dynamic = "force-dynamic";

const Sports = () => {
  return (
    <PageLayout pageTop={<Hero image="/sports.jpg" />}>
      <SportPageContent />
    </PageLayout>
  );
};

export default Sports;
