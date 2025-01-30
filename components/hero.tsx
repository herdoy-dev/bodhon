import { Container } from "@radix-ui/themes";
import Image from "next/image";

interface Props {
  image: string;
}

export default function Hero({ image }: Props) {
  return (
    <Container>
      <Image
        height={600}
        width={1920}
        src={image}
        alt="image"
        className="w-full h-auto"
      />
    </Container>
  );
}
