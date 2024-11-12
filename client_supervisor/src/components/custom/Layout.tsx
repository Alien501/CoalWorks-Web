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
    { url: '/templates', title: 'Templates' },
    { url: '/shift-handover', title: 'Shift Handover' }
]

const Layout = () => {
    const [pageTitle, setPageTitle] = useState('');
    const location = useLocation();

    useEffect(() => {
        const currentPage = pageTitles.find(page => page.url === location.pathname);
        setPageTitle(currentPage? currentPage.title: 'Page Not Found')
    }, [location.pathname])
    
    return(
        <SidebarProvider>
            <SideNavbar />
            <SidebarInset>
                <main>
                    <div className="flex items-center p-2 h-16 shadow-md">
                        <SidebarTrigger />
                        <TopNavbar pageTitle={pageTitle} />
                    </div>
                    <Outlet />
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default Layout;