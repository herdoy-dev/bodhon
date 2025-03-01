import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";
import LanguagePageContent from "./content";

const Language = () => {
  return (
    <PageLayout pageTop={<Hero image="/language.jpg" />}>
      <LanguagePageContent />
    </PageLayout>
  );
};

export default Language;

export const dynamic = "force-dynamic";
