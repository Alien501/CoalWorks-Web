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
    { url: '/home', title: 'Dashboard' },
    { url: '/reports', title: 'Reports' },
    { url: '/rounds', title: 'Round Plans' },
    { url: '/rounds-create', title: 'Create Rounds' },
    { url: '/scheduler', title: 'Scheduler' },
    { url: '/observations', title: 'Observations' },
    { url: '/archives', title: 'Archives' },
    { url: '/master-data', title: 'Master Config' },
    { url: '/shift-handover', title: 'Shift Handover' },
    { url: '/shift-handover2', title: 'Shift Handover' },
    { url: '/create-shift-handover', title: 'Create Shift Handover' },
    { url: '/shift-templates', title: 'View Shift Templates' },
    { url: '/shift-template-create', title: 'Create Shift Template' },
    { url: '/risk-matrix', title: 'Risk Matrix' },
    { url: '/control-plan/:id   ', title: 'Edit Control Plan' },
    { url: '/software-integration', title: 'Integrate Softwares' },
    { url: '/pdf-generator', title: 'Generate PDF' },
    { url: '/master-data/plants', title: 'Manage Sections'},
    { url: '/master-data/shift', title: 'Manage Shifts'},
    { url: '/master-data/locations', title: 'Manage Locations'},
    { url: '/master-data/assets', title: 'Manage Assets'},
    { url: '/master-data/positions', title: "Manage Positions"},
    { url: '/master-data/permissions', title: "Manage Roles and Permissions"},
    { url: '/master-data/mine', title: "Manage Mines"},
    { url: '/master-data/user', title: "Manage Users"},
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
                            className="fixed bottom-4 right-4 rounded-full p-3 shadow-lg h-16 w-16"
                            onClick={() => setIsChatOpen(!isChatOpen)}
                        >
                            <svg className="block h-[90%] w-[90%]" viewBox="0 0 24 24" stroke-width="1.2" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 6.5C16.1338 6.5 17.5 5.18153 17.5 2C17.5 5.18153 18.8567 6.5 22 6.5C18.8567 6.5 17.5 7.85669 17.5 11C17.5 7.85669 16.1338 6.5 13 6.5Z" stroke="#000000" stroke-width="1.2" stroke-linejoin="round"></path></svg>
                        </Button>
                        <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
                    </main>
                </SidebarInset>
            </SidebarProvider>
        </ThemeProvider>
    )
}

export default Layout;