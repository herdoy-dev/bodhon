import { Button, Container, Flex, Grid } from "@radix-ui/themes";

export default function App() {
  return (
    <Container className="px-3">
      <Flex
        className="bg-[url('/hero.webp')] bg-no-repeat bg-cover h-[500px] hero"
        align="center"
        justify="center"
      >
        <Flex
          align="center"
          justify="center"
          direction="column"
          gap="4"
          className="text-white z-20 max-w-[600px] text-center"
        >
          <h1 className="text-4xl font-semibold">Bodhon Language Club</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            dolores quo totam, nihil atque porro ullam, dolorem voluptate
            excepturi dolore nesciunt quia magnam maiores fugit inventore labore
            blanditiis obcaecati at.
          </p>
          <Button className="px-8" size="3">
            Join Us
          </Button>
        </Flex>
      </Flex>
      <Grid columns={{ initial: "1", md: "2" }} gapX="6" gapY="9" my="9">
        <div className="h-[300px] bg-gray-400 space-y-3"></div>
        <div>
          <h1 className="text-2xl font-semibold">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
            molestiae eos fugit delectus, exercitationem maxime placeat
            consectetur! Quod aliquam expedita dolorum quam accusamus neque in
            eos rem recusandae adipisci sunt, minus eius inventore blanditiis
            placeat sequi molestias quasi numquam voluptatibus sint molestiae
            distinctio? Beatae ipsum incidunt sed necessitatibus quas cumque
            illum, natus eos ipsa alias a reiciendis provident expedita impedit
            sunt suscipit similique sequi iure dignissimos fuga perferendis
            quam? Ut molestias culpa quos ipsa vero tenetur quo sapiente,
            blanditiis consequatur fugit dicta natus at magnam qui et, neque
            repellendus. Neque, ut. Laborum nesciunt ipsam illum unde
            dignissimos iure saepe beatae.
          </p>
        </div>
      </Grid>
      <Grid columns={{ initial: "1", md: "2" }} gapX="6" gapY="9" my="9">
        <div className="grid-fix">
          <h1 className="text-2xl font-semibold">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
            molestiae eos fugit delectus, exercitationem maxime placeat
            consectetur! Quod aliquam expedita dolorum quam accusamus neque in
            eos rem recusandae adipisci sunt, minus eius inventore blanditiis
            placeat sequi molestias quasi numquam voluptatibus sint molestiae
            distinctio? Beatae ipsum incidunt sed necessitatibus quas cumque
            illum, natus eos ipsa alias a reiciendis provident expedita impedit
            sunt suscipit similique sequi iure dignissimos fuga perferendis
            quam? Ut molestias culpa quos ipsa vero tenetur quo sapiente,
            blanditiis consequatur fugit dicta natus at magnam qui et, neque
            repellendus. Neque, ut. Laborum nesciunt ipsam illum unde
            dignissimos iure saepe beatae.
          </p>
        </div>
        <div className="h-[300px] bg-gray-400 space-y-3"></div>
      </Grid>
      <Grid columns={{ initial: "1", md: "2" }} gapX="6" gapY="9" my="9">
        <div className="h-[300px] bg-gray-400 space-y-3"></div>
        <div>
          <h1 className="text-2xl font-semibold">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
            molestiae eos fugit delectus, exercitationem maxime placeat
            consectetur! Quod aliquam expedita dolorum quam accusamus neque in
            eos rem recusandae adipisci sunt, minus eius inventore blanditiis
            placeat sequi molestias quasi numquam voluptatibus sint molestiae
            distinctio? Beatae ipsum incidunt sed necessitatibus quas cumque
            illum, natus eos ipsa alias a reiciendis provident expedita impedit
            sunt suscipit similique sequi iure dignissimos fuga perferendis
            quam? Ut molestias culpa quos ipsa vero tenetur quo sapiente,
            blanditiis consequatur fugit dicta natus at magnam qui et, neque
            repellendus. Neque, ut. Laborum nesciunt ipsam illum unde
            dignissimos iure saepe beatae.
          </p>
        </div>
      </Grid>
      <Grid columns={{ initial: "1", md: "2" }} gapX="6" gapY="9" my="9">
        <div className="grid-fix">
          <h1 className="text-2xl font-semibold">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
            molestiae eos fugit delectus, exercitationem maxime placeat
            consectetur! Quod aliquam expedita dolorum quam accusamus neque in
            eos rem recusandae adipisci sunt, minus eius inventore blanditiis
            placeat sequi molestias quasi numquam voluptatibus sint molestiae
            distinctio? Beatae ipsum incidunt sed necessitatibus quas cumque
            illum, natus eos ipsa alias a reiciendis provident expedita impedit
            sunt suscipit similique sequi iure dignissimos fuga perferendis
            quam? Ut molestias culpa quos ipsa vero tenetur quo sapiente,
            blanditiis consequatur fugit dicta natus at magnam qui et, neque
            repellendus. Neque, ut. Laborum nesciunt ipsam illum unde
            dignissimos iure saepe beatae.
          </p>
        </div>
        <div className="h-[300px] bg-gray-400 space-y-3"></div>
      </Grid>
    </Container>
  );
}
