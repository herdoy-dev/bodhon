import { Container, Flex } from "@radix-ui/themes";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import Link from "next/link";

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
                <FiPhone className="text-2xl" /> <span>+8801622465404</span>
              </Flex>
              <Flex align="center" gap="2">
                <LuMail className="text-2xl" />{" "}
                <span>herdoy.dev@gmail.com</span>
              </Flex>
              <Flex align="center" gap="2">
                <FaWhatsapp className="text-2xl" /> <span>+8801622465404</span>
              </Flex>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Latest Programs</h2>
            <div className="flex flex-col gap-2">
              <Link href="/language">Language</Link>
              <Link href="/crafts">Crafts</Link>
              <Link href="/technical">Technical</Link>
              <Link href="/sports">Sports</Link>
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
                className="w-10 h-10 rounded-full bg-black shadow hover:shadow-white transition-all cursor-pointer"
              >
                <FaFacebook className="text-xl" />
              </Flex>
              <Flex
                align="center"
                justify="center"
                className="w-10 h-10 rounded-full bg-black shadow hover:shadow-white transition-all cursor-pointer"
              >
                <FaInstagram className="text-xl" />
              </Flex>
              <Flex
                align="center"
                justify="center"
                className="w-10 h-10 rounded-full bg-black shadow hover:shadow-white transition-all cursor-pointer"
              >
                <FaLinkedin className="text-xl" />
              </Flex>
              <Flex
                align="center"
                justify="center"
                className="w-10 h-10 rounded-full bg-black shadow hover:shadow-white transition-all cursor-pointer"
              >
                <FaGithub className="text-xl" />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}
