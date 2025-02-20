"use client";
import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";
import { useGetCrafts } from "@/hooks/programs/useCrafts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Crafts = () => {
  const { data: crafts } = useGetCrafts();
  return (
    <PageLayout pageTop={<Hero image="/language.jpg" />}>
      <div className="py-3">
        <h1 className="font-semibold text-4xl mb-10">{crafts?.title}</h1>
        <div className="prose max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {crafts?.description || ""}
          </ReactMarkdown>
        </div>
      </div>
    </PageLayout>
  );
};

export default Crafts;
