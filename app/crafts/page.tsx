import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";
import CraftsPageContent from "./content";

export const dynamic = "force-dynamic";

const Crafts = () => {
  return (
    <PageLayout pageTop={<Hero image="/language.jpg" />}>
      <CraftsPageContent />
    </PageLayout>
  );
};

export default Crafts;
