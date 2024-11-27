import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Boxes, CalendarCheck, Crown, FactoryIcon, MapIcon } from "lucide-react";
import { Link } from "react-router-dom";

const MasterData = () => {
    return (
        <section className="p-4 bg-gray-50 dark:bg-background min-h-screen">
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-6 flex items-center">
                    <Crown className="mr-3" /> Master Data Configuration
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
                                    <p className="text-xl font-semibold text-gray-700 dark:text-slate-500">Manage Plants</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link to={'/master-data/locations'} className="block">
                        <Card className="hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2">
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    Loaction
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