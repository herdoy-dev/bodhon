import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";
import dynamic from "next/dynamic";

const CraftsPageContent = dynamic(() => import("./content"));

const Crafts = () => {
  return (
    <PageLayout pageTop={<Hero image="/language.jpg" />}>
      <CraftsPageContent />
    </PageLayout>
  );
};

export default Crafts;
