"use client";
import { useGetLanguage } from "@/hooks/programs/useLanguage";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function LanguagePageContent() {
  const { data: language } = useGetLanguage();
  return (
    <div className="py-3">
      <h1 className="font-semibold text-4xl mb-10">{language?.title}</h1>
      <div className="prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {language?.description || ""}
        </ReactMarkdown>
      </div>
    </div>
  );
}
