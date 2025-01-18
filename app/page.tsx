import { Button, Container, Flex } from "@radix-ui/themes";

export default function App() {
  return (
    <Container>
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
    </Container>
  );
}
