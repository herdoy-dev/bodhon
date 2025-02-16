"use client";
import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";
import { useGetSports } from "@/hooks/programs/useSports";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Sports = () => {
  const { data: sports } = useGetSports();
  return (
    <PageLayout pageTop={<Hero image="/sports.jpg" />}>
      <div className="py-3">
        <h1 className="font-semibold text-4xl mb-10">{sports?.title}</h1>
        <div className="prose max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {sports?.description || ""}
          </ReactMarkdown>
        </div>
      </div>
    </PageLayout>
  );
};

export default Sports;
