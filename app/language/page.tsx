import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";
import dynamic from "next/dynamic";

const LanguagePageContent = dynamic(() => import("./content"));

const Language = () => {
  return (
    <PageLayout pageTop={<Hero image="/language.jpg" />}>
      <LanguagePageContent />
    </PageLayout>
  );
};

export default Language;
