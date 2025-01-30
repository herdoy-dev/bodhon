import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";

const Sports = () => {
  return (
    <PageLayout pageTop={<Hero image="/sports.jpg" />}>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="py-3">
          <h1 className="font-semibold text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            doloremque nostrum fugiat facere pariatur voluptatem magnam
            blanditiis minus est eius, nemo molestiae rerum nihil, ducimus dicta
            cupiditate delectus nulla dolor. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Doloremque culpa soluta laboriosam
            consequatur, beatae est ratione, cupiditate perferendis facilis
            quibusdam nemo sit magnam excepturi dolor rem, amet at laudantium
            non.
          </p>
        </div>
      ))}
    </PageLayout>
  );
};

export default Sports;
