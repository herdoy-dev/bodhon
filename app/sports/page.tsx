"use client";
import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";
import { useGetSports } from "@/hooks/programs/useSports";

const Sports = () => {
  const { data: sports } = useGetSports();
  return (
    <PageLayout pageTop={<Hero image="/sports.jpg" />}>
      <div className="py-3">
        <h1 className="font-semibold text-2xl">{sports?.title}</h1>
        <p>{sports?.description}</p>
      </div>
    </PageLayout>
  );
};

export default Sports;
