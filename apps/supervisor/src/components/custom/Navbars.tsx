import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"
import { Archive, Calendar, CalendarCheck2, Eye, FileChartColumn, Gauge, GroupIcon, Handshake, Home, LayoutPanelTop, PartyPopperIcon, Route } from "lucide-react";

interface MenuItems {
    title: string;
    url: string;
    icon: typeof Calendar
}

const menuItems: MenuItems[] = [
    {
        icon: Gauge,
        url: '/',
        title: "Dashboard"
    },
    {
        icon: FileChartColumn,
        url: '/reports',
        title: 'Reports'
    },
    {
        icon: Route,
        url: '/rounds',
        title: 'Round Plans'
    },
    {
        icon: CalendarCheck2,
        url: '/scheduler',
        title: 'Scheduler'
    },
    {
        icon: Eye,
        url: '/observations',
        title: 'Observations'
    },
    {
        icon: Archive,
        url: '/archives',
        title: 'Archives'
    },
    {
        icon: LayoutPanelTop,
        url: '/templates',
        title: 'Templates'
    },
    {
        icon: Handshake,
        url: '/shift-handover',
        title: 'Shift Handover'
    }
]

const SideNavbar = () => {
    return(
        <Sidebar collapsible="icon" variant="sidebar">
            <SidebarHeader className="flex justify-center items-center">
                <span><PartyPopperIcon /></span>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((menu) => (
                                <SidebarMenuItem key={menu.title} className="h-10">
                                    <SidebarMenuButton asChild>
                                        <Link className="text-black bg-gray-200/20 hover:bg-gray-200/80 text-sm font-medium" to={menu.url}>
                                            <menu.icon />
                                            <span>{menu.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}

const TopNavbar = ({pageTitle}: { pageTitle: string }) => {
    return(
        <header className="w-full flex justify-between items-center">
            <div>
                <span className="text-sm font-bold">{pageTitle}</span>                
            </div>
            <div>
                <Popover>
                    <PopoverTrigger>
                        <Button variant='ghost' className="border-2 h-[70%] rounded-full">
                            <span>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                </Avatar>
                            </span>
                            <span>User Name</span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-max">
                        <Button className="bg-red-300/30 text-red-500 hover:bg-red-300 hover:text-white">Logout</Button>
                    </PopoverContent>
                </Popover>
            </div>
        </header>
    )
}

export {
    SideNavbar,
    TopNavbar
};