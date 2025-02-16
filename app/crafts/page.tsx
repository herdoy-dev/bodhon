"use client";
import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";
import { useGetCrafts } from "@/hooks/programs/useCrafts";

const Crafts = () => {
  const { data: crafts } = useGetCrafts();
  return (
    <PageLayout pageTop={<Hero image="/language.jpg" />}>
      <div className="py-3">
        <h1 className="font-semibold text-2xl">{crafts?.title}</h1>
        <p>{crafts?.description}</p>
      </div>
    </PageLayout>
  );
};

export default Crafts;
