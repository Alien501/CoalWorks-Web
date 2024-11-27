import {
    Drawer,
    DrawerTrigger,
    DrawerContent
} from "@/components/ui/drawer"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Boxes, CalendarCheck, Crown, FactoryIcon, MapIcon, Info } from "lucide-react";
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
                    <Link to={'/master-data/plants'} className="block">
                        <Card className="hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2">
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    Plant Configuration
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center h-40">
                                <div className="text-center">
                                    <FactoryIcon className="mx-auto mb-4" size={70} strokeWidth={1.5} />
                                    <p className="text-xl font-semibold text-gray-700 dark:text-slate-500">Manage Plants</p>
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