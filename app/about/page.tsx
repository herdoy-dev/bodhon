import { Container, Flex } from "@radix-ui/themes";

export default function About() {
  return (
    <Container>
      <Flex align="center" className="h-[200px] bg-gray-400" px="4">
        <h1 className="text-5xl font-bold text-white">About Us</h1>
      </Flex>
      <Flex direction="column" gap="3" mt="6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div className="space-y-2" key={i}>
            <h3 className="text-xl font-semibold">
              Lorem ipsum dolor sit amet.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              corrupti facilis ex non nesciunt! Vel similique perferendis
              dolorum modi dolorem vitae quas sed voluptatibus exercitationem
              odio cupiditate quo minima officiis necessitatibus quam, eveniet
              facere nisi et, assumenda distinctio saepe non? Sapiente earum
              architecto eligendi doloribus illo a necessitatibus qui, molestias
              sed, blanditiis pariatur temporibus. Incidunt quas facilis
              doloribus soluta repellat corrupti asperiores distinctio rerum
              recusandae vitae, autem odio impedit sequi. Dicta labore impedit
              suscipit tempore! Praesentium omnis soluta porro alias fugiat,
              illum dignissimos odio consequuntur voluptates ducimus tenetur
              laborum in quod assumenda beatae quia itaque veritatis magnam iure
              maiores eos!
            </p>
          </div>
        ))}
      </Flex>
    </Container>
  );
}
