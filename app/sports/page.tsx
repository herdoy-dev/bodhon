import dynamic from "next/dynamic";
import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";

const SportPageContent = dynamic(() => import("./content"), { ssr: false });

const Sports = () => {
  return (
    <PageLayout pageTop={<Hero image="/sports.jpg" />}>
      <SportPageContent />
    </PageLayout>
  );
};

export default Sports;
