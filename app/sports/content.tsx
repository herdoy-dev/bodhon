"use client";
import { useGetSports } from "@/hooks/programs/useSports";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function SportPageContent() {
  const { data: sports } = useGetSports();
  return (
    <div className="py-3">
      <h1 className="font-semibold text-4xl mb-10">{sports?.title}</h1>
      <div className="prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {sports?.description || ""}
        </ReactMarkdown>
      </div>
    </div>
  );
}
