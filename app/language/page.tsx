"use client";
import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";
import { useGetLanguage } from "@/hooks/programs/useLanguage";

const Language = () => {
  const { data: language } = useGetLanguage();
  return (
    <PageLayout pageTop={<Hero image="/language.jpg" />}>
      <div className="py-3">
        <h1 className="font-semibold text-2xl">{language?.title}</h1>
        <p>{language?.description}</p>
      </div>
    </PageLayout>
  );
};

export default Language;
