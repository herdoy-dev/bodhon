"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  X,
  Users,
  Dumbbell,
  Laptop,
  Palette,
  Languages,
  BookOpen,
  Heart,
  Calendar,
} from "lucide-react";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Programs",
    href: "/programs",
    submenu: [
      { name: "Sporting Club", href: "/programs/sports", icon: Dumbbell },
      { name: "Technical Skills", href: "/programs/technical", icon: Laptop },
      { name: "Crafts", href: "/programs/crafts", icon: Palette },
      { name: "Language Club", href: "/programs/language", icon: Languages },
      { name: "Debating Club", href: "/programs/debating", icon: Languages },
      { name: "Library", href: "/programs/library", icon: BookOpen },
    ],
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm">
              <Heart className="h-6 w-6 text-black" />
            </div>
            <div>
              <span className="text-xl font-bold text-foreground">BODHON</span>
              <span className="block text-xs text-muted-foreground -mt-1">
                Since 2008
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.submenu ? (
                      <>
                        <NavigationMenuTrigger className="text-foreground hover:text-white">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.submenu.map((subItem) => (
                              <NavigationMenuLink asChild key={subItem.name}>
                                <Link
                                  href={subItem.href}
                                  className="flex items-center space-x-3 rounded-md p-3 transition-colors hover:bg-accent hover:text-white"
                                >
                                  <subItem.icon className="text-inherit" />
                                  <span className="font-medium text-inherit">
                                    {subItem.name}
                                  </span>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                          pathname === item.href
                            ? "text-white bg-accent"
                            : "text-foreground hover:text-white hover:bg-accent"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="default" asChild>
              <Link href="/volunteer">
                <Users className="w-4 h-4 mr-2" />
                Volunteer
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            {/* SheetTrigger now only contains the Menu icon */}
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="md:hidden"
                // The onClick prop is removed from the Button since SheetTrigger handles opening
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              {/* SheetContent has a built-in close button, so we remove the explicit X button to prevent doubling. */}
              {/* We keep the brand and use a simple div or flex container for layout. */}
              <div className="flex items-center justify-between mb-8">
                <Link
                  href="/"
                  className="flex items-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  {/* Logo: Changed bg-primary to bg-white and text-primary-foreground to text-black */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm">
                    <Heart className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <span className="text-xl font-bold text-foreground">
                      BODHON
                    </span>
                    <span className="block text-xs text-muted-foreground -mt-1">
                      Since 2008
                    </span>
                  </div>
                </Link>
                {/* REMOVED THE DOUBLE CLOSE BUTTON HERE:
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                </Button> 
                The Sheet component provides its own close button.
                */}
              </div>

              {/* Mobile Navigation */}
              <div className="flex flex-col space-y-3">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div className="space-y-2">
                        <div className="font-semibold text-foreground px-2">
                          {item.name}
                        </div>
                        <div className="space-y-1 border-l border-border ml-2 pl-4">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center space-x-3 px-2 py-2 text-sm text-muted-foreground rounded-md hover:bg-accent hover:text-foreground transition-colors"
                            >
                              <subItem.icon className="h-4 w-4 text-primary" />
                              <span>{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-3 px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                          pathname === item.href
                            ? "text-primary bg-accent"
                            : "text-foreground hover:text-primary hover:bg-accent"
                        }`}
                      >
                        {item.icon && <item.icon className="h-4 w-4" />}
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile CTA */}
                <div className="pt-4 border-t border-border">
                  <Button variant="default" className="w-full" asChild>
                    <Link href="/volunteer" onClick={() => setIsOpen(false)}>
                      <Users className="w-4 h-4 mr-2" />
                      Volunteer
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
