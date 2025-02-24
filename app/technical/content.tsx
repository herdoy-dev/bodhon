"use client";
import { useGetTechnical } from "@/hooks/programs/useTechnical";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function TechnicalPageContent() {
  const { data: technical } = useGetTechnical();
  return (
    <div className="py-3">
      <h1 className="font-semibold text-4xl mb-10">{technical?.title}</h1>
      <div className="prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {technical?.description || ""}
        </ReactMarkdown>
      </div>
    </div>
  );
}
