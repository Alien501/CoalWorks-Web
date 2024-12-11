import {
    Drawer,
    DrawerTrigger,
    DrawerContent
} from "@/components/ui/drawer"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Boxes, CalendarCheck, Crown, FactoryIcon, MapIcon, Info, Pickaxe } from "lucide-react";
import { Link } from "react-router-dom";
import MasterConfigDrawer from "@/components/own/masterConfigDrawer";

const MasterData = () => {
    return (
        <section className="p-4 bg-gray-50 dark:bg-background min-h-screen">
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-6 flex items-center space-x-3">
                    <Crown className="mr-3" /> Master Data Configuration
                    <Drawer>
                        <DrawerTrigger asChild>
                            <span className="p-1 cursor-pointer"><Info /></span>
                        </DrawerTrigger>
                        <DrawerContent className="">
                            <MasterConfigDrawer></MasterConfigDrawer>
                        </DrawerContent>
                    </Drawer>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link to={'/master-data/mine'} className="block">
                        <Card className="hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2">
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    Mine Configuration
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center h-40">
                                <div className="text-center">
                                    <Pickaxe className="mx-auto mb-4" size={70} strokeWidth={1.5} />
                                    <p className="text-xl font-semibold text-gray-700 dark:text-slate-500">Manage Mines</p>
                                </div>
                        </CardContent>
                        </Card>
                    </Link>
                    <Link to={'/master-data/plants'} className="block">
                        <Card className="hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2">
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    Section Configuration
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center h-40">
                                <div className="text-center">
                                    <FactoryIcon className="mx-auto mb-4" size={70} strokeWidth={1.5} />
                                    <p className="text-xl font-semibold text-gray-700 dark:text-slate-500">Manage Sections</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to={'/master-data/shift'} className="block">
                        <Card className="hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2">
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    Shift Configuration
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center h-40">
                                <div className="text-center">
                                    <CalendarCheck className="mx-auto mb-4" size={70} strokeWidth={1.5} />
                                    <p className="text-xl font-semibold text-gray-700 dark:text-slate-500">Manage Shifts</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link to={'/master-data/locations'} className="block">
                        <Card className="hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2">
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    Location
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center h-40">
                                <div className="text-center">
                                    <MapIcon className="mx-auto mb-4" size={70} strokeWidth={1.5} />
                                    <p className="text-xl font-semibold text-gray-700 dark:text-slate-500">Manage Locations</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link to={'/master-data/assets'} className="block">
                        <Card className="hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2">
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    Assets
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center h-40">
                                <div className="text-center">
                                    <Boxes className="mx-auto mb-4" size={70} strokeWidth={1.5} />
                                    <p className="text-xl font-semibold text-gray-700 dark:text-slate-500">Manage Assets</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to={'/master-data/positions'} className="block">
                        <Card className="hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2">
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    Position
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center h-40">
                                <div className="text-center flex flex-col justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-[70px] mb-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>

                                    <p className="text-xl font-semibold text-gray-700">Manage Positions</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to={'/master-data/permissions'} className="block">
                        <Card className="hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2">
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    Roles and Permissions
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center h-40">
                                <div className="text-center flex flex-col justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-[70px] mb-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>

                                    <p className="text-xl font-semibold text-gray-700">Manage Roles and Permissions</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to={'/master-data/user'} className="block">
                        <Card className="hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2">
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    Users
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center h-40">
                                <div className="text-center flex flex-col justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="size-[70px] lucide lucide-user-round-pen"><path d="M2 21a8 8 0 0 1 10.821-7.487"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="8" r="5"/></svg>
                                    <p className="text-xl font-semibold text-gray-700">Manage Users</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to={'/software-integration'} className="block">
                        <Card className="hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2">
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    Software Integration
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center h-40">
                                <div className="text-center flex flex-col justify-center items-center">
                                <svg width="64px" height="64px" viewBox="0 0 24 24" stroke-width="1.2" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff"><path d="M3 23C1.89543 23 1 22.1046 1 21C1 19.8954 1.89543 19 3 19C4.10457 19 5 19.8954 5 21C5 22.1046 4.10457 23 3 23Z" stroke="#fff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 23C19.8954 23 19 22.1046 19 21C19 19.8954 19.8954 19 21 19C22.1046 19 23 19.8954 23 21C23 22.1046 22.1046 23 21 23Z" stroke="#fff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 5C1.89543 5 1 4.10457 1 3C1 1.89543 1.89543 1 3 1C4.10457 1 5 1.89543 5 3C5 4.10457 4.10457 5 3 5Z" stroke="#fff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 5C19.8954 5 19 4.10457 19 3C19 1.89543 19.8954 1 21 1C22.1046 1 23 1.89543 23 3C23 4.10457 22.1046 5 21 5Z" stroke="#fff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 12.0002C13 10.7536 11.8415 9.5 10.4285 9.5H9.5715C8.1515 9.5 7 10.6196 7 12.0002C7 13.1898 7.855 14.1853 9 14.438C9.18769 14.4793 9.37932 14.5001 9.5715 14.5" stroke="#fff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 12.0003C11 13.2464 12.1585 14.5 13.5715 14.5H14.4285C15.8485 14.5 17 13.3809 17 12.0003C17 10.8102 16.145 9.81416 15 9.56203C14.8123 9.5207 14.6207 9.4999 14.4285 9.5" stroke="#fff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 19L21 5" stroke="#fff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 19L3 5" stroke="#fff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 3L19 3" stroke="#fff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 21L19 21" stroke="#fff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    <p className="text-xl font-semibold text-gray-700">Manage Users</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>

                    <div className="opacity-50 pointer-events-none">
                        <Card className="h-full">
                            <CardContent className="flex items-center justify-center h-full">
                                <p className="text-gray-500 dark:text-slate-500">More configurations coming soon</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MasterData;