"use client";

import {
  Bookmark,
  BookOpen,
  Frame,
  Home,
  LayoutGrid,
  Map,
  PieChart,
  Settings2,
} from "lucide-react";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { NavProjects } from "./nav-projects";
import { SidebarMenu } from "./sidebar-menu";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Home",
      url: "/dashboard/about",
      icon: Home,
      items: [
        {
          title: "About Us",
          url: "/dashboard/about",
        },
        {
          title: "Latest Programs",
          url: "/dashboard/programs",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Programs",
      url: "/dashboard/programs",
      icon: Bookmark,
      items: [
        {
          title: "Language",
          url: "/dashboard/programs/language",
        },
        {
          title: "Sports",
          url: "/dashboard/programs/sports",
        },
        {
          title: "Technical",
          url: "/dashboard/programs/technical",
        },
        {
          title: "Crafts",
          url: "/dashboard/programs/crafts",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link href="/dashboard">
          <LayoutGrid />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
