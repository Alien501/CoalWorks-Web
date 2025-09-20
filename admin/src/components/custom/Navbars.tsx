import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"
import { Book, Calendar, FileTextIcon, FolderCog2Icon, ForkliftIcon, Gauge, LanguagesIcon, PickaxeIcon, ReplaceAll, Settings, SunIcon, Torus, TriangleAlert, UserRoundCog, ClipboardList } from "lucide-react";
import { Box } from "lucide-react"
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
    // {
    //     icon: FolderCog2Icon,
    //     url: '/reports',
    //     title: 'Reports'
    // },
    {
        icon: UserRoundCog,
        url: '/rounds',
        title: 'Round Plans'
    },
    // {
    //     icon: ForkliftIcon,
    //     url: '/scheduler',
    //     title: 'Scheduler'
    // },
    // {
    //     icon: FileTextIcon,
    //     url: '/observations',
    //     title: 'Observations'
    // },
    // {
    //     icon: PickaxeIcon,
    //     url: '/archives',
    //     title: 'Archives'
    // },
    {
        icon: TriangleAlert,
        url: '/risk-matrix',
        title: "Risk Matrix"
    },
    {
        icon: ReplaceAll,
        url: '/shift-handover',
        title: 'Shift Handover'
    },
    {
        icon: Settings,
        url: '/master-data',
        title: 'Master Config'
    },
    {
        icon: Book,
        url: '/dgms',
        title: 'DGMS Guidelines'
    },
    {
        icon: Torus,
        url: '/dem',
        title: 'DEM'
    },
    {
        icon: ClipboardList,
        url: '/action-plans',
        title: 'Action Plans'
    }
]

const SideNavbar = () => {
    const { isDarkMode, toggleTheme } = useTheme()

    return (
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
                                                        text-foreground text-lg font-medium 
                                                        hover:bg-black/10 
                                                        dark:hover:bg-white/10 
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
                        {/* <SidebarMenuButton asChild>
                            <Button variant='ghost' className="flex items-center justify-start">
                                <LanguagesIcon />
                                <span className="text-sm font-medium">Change Language</span>
                            </Button>
                        </SidebarMenuButton> */}
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

const TopNavbar = ({ pageTitle }: { pageTitle: string }) => {
    return (
        <header className="w-full flex justify-between items-center font-poppins bg-background text-foreground">
            <div>
                <span className="text-sm font-bold">{pageTitle}</span>
            </div>
            <div className="flex items-center space-x-2 mr-2">
                <span>Vignesh Chellapandi</span>

                <Popover>
                    <PopoverTrigger>
                        <Avatar>
                            <AvatarImage src="https://media.licdn.com/dms/image/v2/D5603AQG5SClyaWsBMw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714279635112?e=1738195200&v=beta&t=368LklGi1yTDqZsNtV8qSvWoKeQ2VLgINOseR0joHQU" />
                        </Avatar>
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