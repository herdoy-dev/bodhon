"use client";
import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";
import { useGetLanguage } from "@/hooks/programs/useLanguage";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Language = () => {
  const { data: language } = useGetLanguage();
  return (
    <PageLayout pageTop={<Hero image="/language.jpg" />}>
      <div className="py-3">
        <h1 className="font-semibold text-4xl mb-10">{language?.title}</h1>
        <div className="prose max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {language?.description || ""}
          </ReactMarkdown>
        </div>
      </div>
    </PageLayout>
  );
};

export default Language;
