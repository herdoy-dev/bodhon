import { Container, Flex, Grid } from "@radix-ui/themes";

export default function Gallery() {
  return (
    <Container className="px-3">
      <Flex align="center" className="h-[200px] bg-gray-400" px="4">
        <h1 className="text-5xl font-bold text-white">Gallery</h1>
      </Flex>
      <Grid columns={{ initial: "1", md: "2", lg: "3" }} gap="3" mt="6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Flex
            align="center"
            justify="center"
            className="w-full h-[300px] bg-gray-400"
            key={i}
          ></Flex>
        ))}
      </Grid>
    </Container>
  );
}
