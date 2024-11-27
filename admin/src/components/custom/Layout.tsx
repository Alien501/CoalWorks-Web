import React, { useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar"
import { SideNavbar, TopNavbar } from "./Navbars"

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
    { url: '/pdf-generator', title: 'Generate PDF' }
]

const Layout = () => {
    const [pageTitle, setPageTitle] = useState('');
    const location = useLocation();

    useEffect(() => {
        const currentPage = pageTitles.find(page => page.url === location.pathname);
        setPageTitle(currentPage? currentPage.title: 'Page Not Found')
    }, [location.pathname])
    
    return(
        <SidebarProvider defaultOpen={false}>
            <SideNavbar />
            <SidebarInset>
                    <div className="flex items-center sticky top-0 z-50 px-2 py-4 h-16 border-b bg-white">
                        <SidebarTrigger />
                        <TopNavbar pageTitle={pageTitle} />
                    </div>
                <main>
                    <Outlet />
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default Layout;