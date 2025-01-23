import { AppSidebar } from "@/components/app-sidebar";
import SidebarTop from "@/components/sidebar-top";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SidebarTop />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
