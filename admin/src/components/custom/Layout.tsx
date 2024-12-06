import { useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar"
import { SideNavbar, TopNavbar } from "./Navbars"
import { ThemeProvider } from "./theme";
import { MessageCircle } from "lucide-react";
import ChatBot from "./ChatBot";
import { Button } from "../ui/button";

interface PageTitle {
    url: string;
    title: string;
}

const pageTitles: PageTitle[] = [
    { url: '/', title: 'Dashboard' },
    { url: '/reports', title: 'Reports' },
    { url: '/rounds', title: 'Round Plans' },
    { url: '/scheduler', title: 'Scheduler' },
    { url: '/observations', title: 'Observations' },
    { url: '/archives', title: 'Archives' },
    { url: '/master-data', title: 'Master Config' },
    { url: '/shift-handover', title: 'Shift Handover' },
    { url: '/pdf-generator', title: 'Generate PDF' },
    { url: '/master-data/plants', title: 'Manage Sections'},
    { url: '/master-data/shift', title: 'Manage Shifts'},
    { url: '/master-data/locations', title: 'Manage Locations'},
    { url: '/master-data/assets', title: 'Manage Assets'},
    { url: '/master-data/positions', title: "Manage Positions"},
    { url: '/master-data/permissions', title: "Manage Roles and Permissions"}
]

const Layout = () => {
    const [pageTitle, setPageTitle] = useState('');
    const location = useLocation();
    const [isChatOpen, setIsChatOpen] = useState(false);

    useEffect(() => {
        const currentPage = pageTitles.find(page => page.url === location.pathname);
        setPageTitle(currentPage ? currentPage.title : 'Page Not Found')
    }, [location.pathname])

    return (
        <ThemeProvider>
            <SidebarProvider defaultOpen={false}>
                <SideNavbar />
                <SidebarInset>
                    <div className="flex items-center sticky top-0 z-50 px-2 py-4 h-16 border-b bg-background">
                        <SidebarTrigger className="dark:text-white" />
                        <TopNavbar pageTitle={pageTitle} />
                    </div>
                    <main>
                        <Outlet />
                        <Button
                            className="fixed bottom-4 right-4 rounded-full p-3 shadow-lg"
                            onClick={() => setIsChatOpen(!isChatOpen)}
                        >
                            <MessageCircle className="h-6 w-6" />
                        </Button>
                        <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
                    </main>
                </SidebarInset>
            </SidebarProvider>
        </ThemeProvider>
    )
}

export default Layout;