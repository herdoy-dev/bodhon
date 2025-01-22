import { Container, Flex } from "@radix-ui/themes";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <div className="py-6 px-3 bg-gray-800 text-white mt-10">
      <Container>
        <Flex
          align={{ initial: "start", md: "center" }}
          justify="between"
          direction={{ initial: "column", md: "row" }}
          gap={{ initial: "8", md: "0" }}
        >
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <div className="space-y-3">
              <Flex align="center" gap="2">
                <Phone /> <span>+8801408127781</span>
              </Flex>
              <Flex align="center" gap="2">
                <Mail /> <span>herdoy200@outlook.com</span>
              </Flex>
              <Flex align="center" gap="2">
                <i>W</i> <span>+8801408127781</span>
              </Flex>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <div className="space-y-3">
              <Flex align="center" gap="2">
                <Phone /> <span>+8801408127781</span>
              </Flex>
              <Flex align="center" gap="2">
                <Mail /> <span>herdoy200@outlook.com</span>
              </Flex>
              <Flex align="center" gap="2">
                <i>W</i> <span>+8801408127781</span>
              </Flex>
            </div>
          </div>
          <Flex
            align="center"
            justify="center"
            direction="column"
            gap="4"
            className="w-full md:w-auto"
          >
            <h2 className="text-2xl font-semibold">Follow Us</h2>
            <Flex align="center" justify="center" gap="4">
              <Flex
                align="center"
                justify="center"
                className="w-12 h-12 rounded-full bg-black shadow hover:shadow-white transition-all cursor-pointer"
              >
                <Facebook />
              </Flex>
              <Flex
                align="center"
                justify="center"
                className="w-12 h-12 rounded-full bg-black shadow hover:shadow-white transition-all cursor-pointer"
              >
                <Instagram />
              </Flex>
              <Flex
                align="center"
                justify="center"
                className="w-12 h-12 rounded-full bg-black shadow hover:shadow-white transition-all cursor-pointer"
              >
                <Linkedin />
              </Flex>
              <Flex
                align="center"
                justify="center"
                className="w-12 h-12 rounded-full bg-black shadow hover:shadow-white transition-all cursor-pointer"
              >
                <Github />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}
