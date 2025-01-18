"use client";
import { navItems } from "@/data";
import { cn } from "@/lib/utils";
import { Container, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  const currentPath = usePathname();
  return (
    <div className="bg-secondary border-b py-5 mb-4">
      <Container>
        <Flex justify="between" align="center">
          <Link className="uppercase font-semibold" href="/">
            Kathulia
          </Link>
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  className={cn(
                    item.link === currentPath && "font-semibold",
                    "hover:font-semibold transition-all"
                  )}
                  href={item.link}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-6">
            {authPages.map((item) => (
              <li key={item.id}>
                <Link
                  className={cn(
                    item.link === currentPath && "font-semibold",
                    "hover:font-semibold transition-all"
                  )}
                  href={item.link}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <ThemeToggle />
          </ul>
        </Flex>
      </Container>
    </div>
  );
}

const authPages = [
  { id: 1, label: "Login", link: "/login" },
  { id: 2, label: "Sign Up", link: "/signup" },
];
