"use client";
import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";
import { useGetTechnical } from "@/hooks/programs/useTechnical";

const Technical = () => {
  const { data: technical } = useGetTechnical();
  return (
    <PageLayout pageTop={<Hero image="/language.jpg" />}>
      <div className="py-3">
        <h1 className="font-semibold text-2xl">{technical?.title}</h1>
        <p>{technical?.description}</p>
      </div>
    </PageLayout>
  );
};

export default Technical;
