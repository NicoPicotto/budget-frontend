import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
   return (
      <SidebarProvider>
         <AppSidebar />
         <main>
            <SidebarTrigger variant='ghost' className='mt-2' />
            {children}
         </main>
      </SidebarProvider>
   );
}
