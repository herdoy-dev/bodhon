import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";
import LanguagePageContent from "./content";

export const dynamic = "force-dynamic";

const Language = () => {
  return (
    <PageLayout pageTop={<Hero image="/language.jpg" />}>
      <LanguagePageContent />
    </PageLayout>
  );
};

export default Language;
