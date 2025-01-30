import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Container } from "@radix-ui/themes";
import Image from "next/image";

const sliders = [
  { id: 1, image: "/language.jpg" },
  { id: 2, image: "/sports.jpg" },
  { id: 3, image: "/language.jpg" },
];

export function HomeCarousel() {
  return (
    <Container className="px-3">
      <div className="flex items-center justify-center">
        <Carousel className="w-full">
          <CarouselContent>
            {sliders.map((slider) => (
              <CarouselItem key={slider.id}>
                <Image
                  src={slider.image}
                  width={1920}
                  height={1080}
                  alt={"slider" + slider.id}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute left-14 top-[50%]">
            <CarouselPrevious />
          </div>
          <div className="absolute right-14 top-[50%]">
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </Container>
  );
}
