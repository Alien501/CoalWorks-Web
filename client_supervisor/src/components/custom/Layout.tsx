import React from "react"
import { Outlet } from "react-router-dom"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar"
import { SideNavbar, TopNavbar } from "./Navbars"

const Layout = () => {
    return(
        <SidebarProvider>
            <SideNavbar />
            <SidebarInset>
                <main>
                    <div className="flex items-center p-2 h-16 shadow-lg">
                        <SidebarTrigger />
                        <TopNavbar pageTitle="Rounds" />
                    </div>
                    <Outlet />
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default Layout;