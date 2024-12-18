import {
   Calendar,
   LayoutDashboard,
   Search,
   Settings,
   FolderOpen,
} from "lucide-react";

import {
   Sidebar,
   SidebarContent,
   SidebarGroup,
   SidebarGroupContent,
   SidebarGroupLabel,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ModeToggle } from "./ModeToggle/mode-toggle";

// Menu items.
const items = [
   {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
   },
   {
      title: "Projects",
      url: "/projects",
      icon: FolderOpen,
   },
   {
      title: "Calendar",
      url: "#",
      icon: Calendar,
   },
   {
      title: "Search",
      url: "#",
      icon: Search,
   },
   {
      title: "Settings",
      url: "#",
      icon: Settings,
   },
];

export function AppSidebar() {
   return (
      <Sidebar variant='floating' collapsible='icon'>
         <SidebarContent>
            <SidebarGroup>
               <SidebarGroupLabel>Budget Calculator</SidebarGroupLabel>
               <SidebarGroupContent>
                  <SidebarMenu>
                     {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                           <SidebarMenuButton asChild>
                              <a href={item.url}>
                                 <item.icon />
                                 <span>{item.title}</span>
                              </a>
                           </SidebarMenuButton>
                        </SidebarMenuItem>
                     ))}
                  </SidebarMenu>
               </SidebarGroupContent>
            </SidebarGroup>
         </SidebarContent>
         <div className='flex justify-between items-center w-full p-2 '>
            <ModeToggle />
         </div>
      </Sidebar>
   );
}
