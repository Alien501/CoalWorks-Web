import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"
import { Calendar, FileTextIcon, FolderCog2Icon, ForkliftIcon, Gauge, PickaxeIcon, Settings, SunIcon, UserRoundCog } from "lucide-react";
import {Box} from "lucide-react"
import { useTheme } from "./theme";

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
        icon: FolderCog2Icon,
        url: '/reports',
        title: 'Reports'
    },
    {
        icon: UserRoundCog,
        url: '/rounds',
        title: 'Round Plans'
    },
    {
        icon: ForkliftIcon,
        url: '/scheduler',
        title: 'Scheduler'
    },
    {
        icon: FileTextIcon,
        url: '/observations',
        title: 'Observations'
    },
    {
        icon: PickaxeIcon,
        url: '/archives',
        title: 'Archives'
    },
    {
        icon: Settings,
        url: '/master-data',
        title: 'Master Config'
    },
]

const SideNavbar = () => {
    const {isDarkMode, toggleTheme} = useTheme()
    const location = useLocation();

    return(
        <Sidebar collapsible="icon" variant="sidebar" className="font-poppins">
            <SidebarHeader className="flex justify-center items-center border-b h-[64px]">
                <span className="flex font-bold space-x-1 justify-center text-xl items-center w-full h-[23px]"><Box /></span>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((menu) => (
                                <SidebarMenuItem key={menu.title} className="h-10">
                                    <SidebarMenuButton asChild>
                                        <Link 
                                            className={`
                                                text-black text-lg font-medium 
                                                hover:bg-black/10
                                                dark:text-white
                                                hover:dark:bg-white/10
                                                ${location.pathname === menu.url 
                                                    ? 'bg-black text-white dark:bg-white dark:text-black' 
                                                    : 'hover:bg-gray-200/80'
                                                }
                                                h-9 w-9
                                                
                                            `} 
                                            to={menu.url}
                                        >
                                            <menu.icon />
                                            <span>{menu.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup></SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Button onClick={toggleTheme} variant={'ghost'} className="flex items-center justify-start">
                                <SunIcon />
                                <span className="text-sm font-medium">Change Theme</span>
                            </Button>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}

const TopNavbar = ({pageTitle}: { pageTitle: string }) => {
    return(
        <header className="w-full flex justify-between items-center font-poppins bg-background text-foreground">
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