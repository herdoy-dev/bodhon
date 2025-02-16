"use client";
import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";
import { useGetTechnical } from "@/hooks/programs/useTechnical";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Technical = () => {
  const { data: technical } = useGetTechnical();
  return (
    <PageLayout pageTop={<Hero image="/language.jpg" />}>
      <div className="py-3">
        <h1 className="font-semibold text-4xl mb-10">{technical?.title}</h1>
        <div className="prose max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {technical?.description || ""}
          </ReactMarkdown>
        </div>
      </div>
    </PageLayout>
  );
};

export default Technical;
