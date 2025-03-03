import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";
import dynamic from "next/dynamic";

const SportPageContent = dynamic(() => import("./content"));

const Sports = () => {
  return (
    <PageLayout pageTop={<Hero image="/sports.jpg" />}>
      <SportPageContent />
    </PageLayout>
  );
};

export default Sports;
