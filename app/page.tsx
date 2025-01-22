import Hero from "@/components/hero";
import PageLayout from "@/components/page-layout";
import { Grid, Skeleton } from "@radix-ui/themes";

export default function App() {
  return (
    <div>
      <Hero />
      <PageLayout>
        <section className="mb-10">
          <h1 className="text-3xl mb-5 font-semibold">About Us</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
            minus? Corporis aliquam necessitatibus dicta nobis laborum provident
            magni quasi delectus, culpa illo nesciunt dolore quod odio autem!
            Dolores, fugit! Illo fuga accusantium vel ex voluptatibus, molestias
            temporibus, ad, tempore veritatis neque quisquam nemo rerum. Esse
            atque neque repudiandae? Dicta, voluptates perferendis!
            Exercitationem ex architecto ipsa quasi voluptate enim commodi
            eveniet sapiente, consectetur sit eaque placeat, soluta suscipit
            optio harum quaerat similique laudantium. Sequi, asperiores quidem
            quia reiciendis culpa necessitatibus ut libero veritatis cupiditate
            laborum sint molestias similique. Dolores ducimus cupiditate
            excepturi beatae ipsam explicabo sed inventore veniam sit a
            voluptatibus, doloribus ipsum eius quod odit atque eligendi autem
            vero voluptates id? Delectus perferendis quam nihil corrupti sed
            mollitia consequatur qui sequi, itaque provident id maxime minus
            blanditiis obcaecati tempora quos adipisci? Nulla enim facere
            voluptate obcaecati, dolorem rem cumque distinctio ex quas tempora!
            Deleniti, aliquid magnam veniam itaque omnis dolores.
          </p>
        </section>
        <section className="mb-10">
          <h1 className="text-3xl mb-5 font-semibold">Our Programs</h1>
          <Grid columns={{ initial: "1", md: "2" }} gap="3">
            <div className="w-full space-y-3">
              <Skeleton className="w-full h-[200px]" />
              <Skeleton className="w-full h-[20px]" />
              <Skeleton className="w-[50%] h-[20px]" />
            </div>
            <div className="w-full space-y-3">
              <Skeleton className="w-full h-[200px]" />
              <Skeleton className="w-full h-[20px]" />
              <Skeleton className="w-[50%] h-[20px]" />
            </div>
            <div className="w-full space-y-3">
              <Skeleton className="w-full h-[200px]" />
              <Skeleton className="w-full h-[20px]" />
              <Skeleton className="w-[50%] h-[20px]" />
            </div>
            <div className="w-full space-y-3">
              <Skeleton className="w-full h-[200px]" />
              <Skeleton className="w-full h-[20px]" />
              <Skeleton className="w-[50%] h-[20px]" />
            </div>
          </Grid>
        </section>
      </PageLayout>
    </div>
  );
}
