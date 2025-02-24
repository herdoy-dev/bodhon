"use client";
import { useGetCrafts } from "@/hooks/programs/useCrafts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function CraftsPageContent() {
  const { data: crafts } = useGetCrafts();
  return (
    <div className="py-3">
      <h1 className="font-semibold text-4xl mb-10">{crafts?.title}</h1>
      <div className="prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {crafts?.description || ""}
        </ReactMarkdown>
      </div>
    </div>
  );
}
