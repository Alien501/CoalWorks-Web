import React, { useState, useEffect } from 'react';
import { format } from "date-fns";
import { io } from "socket.io-client";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { CalendarIcon, HardHat, Tractor, TriangleAlert, AlertTriangle, Thermometer, Wind, MapPin } from 'lucide-react';

import { BarGraph, AreaGraph, LineGraph, PieGraph, RadialGraph, SpiderGraph } from '@/components/custom/graphs'
import { DashboardTable } from "@/components/custom/dashboardTable";
import { StatsCard } from "@/components/custom/StatsCard";
import { UtilityCard } from "@/components/custom/utilityCard";
import { SafetyCardContent } from "@/components/custom/safetyCard";
import { DialogModel } from "@/components/custom/dialogModel";
import PredictionCard from '@/components/custom/predictionCard';
import MiningMap from "./map";
import RiskMatrix from "@/components/custom/riskMatrix";
import OperationalTrendsCard from "./operationalTrend";

import { shiftsData } from "@/lib/dummyShiftData";

interface Prediction {
    Node: number;
    latitude: number;
    longitude: number;
    accelX: number;
    accelY: number;
    accelZ: number;
    temperature: number;
    pressure: number;
    altitude: number;
    methanePPM: number;
    carbonMonoxidePPM: number;
    alert: string;
}

const PriorityCard: React.FC<{ prediction: Prediction }> = ({ prediction }) => {
    const getAlertColor = (alert: string) => {
        switch (alert.toLowerCase()) {
            case 'high':
                return 'bg-red-500'
            case 'medium':
                return 'bg-yellow-500'
            case 'low':
                return 'bg-green-500'
            default:
                return 'bg-blue-500'
        }
    }

    return (
        <Dialog>
            <DialogTrigger className="w-full">
                <Card className="w-full m-2 bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden">
                    <CardContent className="p-4 space-y-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <AlertTriangle className="text-yellow-400" />
                                <h2 className="text-lg font-bold">Node {prediction.Node}</h2>
                            </div>
                            <Badge className={`${getAlertColor(prediction.alert)} text-white px-3 text-sm font-medium uppercase`}>
                                {prediction.alert}
                            </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center space-x-2 text-sm">
                                <Thermometer className="text-red-400" />
                                <span>{prediction.temperature.toFixed(1)}°C</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <Wind className="text-blue-400" />
                                <span>{prediction.pressure.toFixed(1)} hPa</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <AlertTriangle className="text-orange-400" />
                                <span>{prediction.methanePPM} ppm CH₄</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <AlertTriangle className="text-purple-400" />
                                <span>{prediction.carbonMonoxidePPM} ppm CO</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-300">
                            <MapPin className="text-green-400" size={16} />
                            <span>{prediction.latitude.toFixed(4)}, {prediction.longitude.toFixed(4)}</span>
                        </div>
                    </CardContent>
                </Card>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
                <PredictionCard prediction={prediction} />
            </DialogContent>
        </Dialog>
    )
}

const NewDashboard: React.FC = () => {
    const [date, setDate] = useState<Date | undefined>();
    const [graphType, setGraphType] = useState<string>('bar');
    const [iotData, setIotData] = useState<Prediction[]>([]);

    const graphList = {
        'bar': <BarGraph />,
        'area': <AreaGraph />,
        'area-linear': <AreaGraph type="linear" />,
        'area-step': <AreaGraph type="step" />,
        'radar': <SpiderGraph />,
        'pie': <PieGraph />,
        'line': <LineGraph />,
        'line-linear': <LineGraph type="linear" />,
        'line-step': <LineGraph type="step" />,
        'radial': <RadialGraph />
    };

    useEffect(() => {
        const socket = io('ws://localhost:8888');

        socket.on('iot-data', (data: Prediction) => {
            console.log('Received data:', data);
            const parsedData = JSON.parse(data)
            setIotData((prevData) => [...prevData, parsedData]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <section id="dashboard" className="p-2 bg-slate-100 dark:bg-zinc-950 dark:text-foreground">
            <div id="dash-header-section" className="flex justify-between items-center">
                <div>
                    <p className="font-medium">Hello Lincoln,</p>
                    <p className="font-semibold text-3xl">Good Morning</p>
                </div>
                <div>
                    <Card className="h-12 shadow-none flex items-center rounded-full mt-1">
                        <CardContent className="p-1 space-x-2 flex">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: .95 }}>
                                        <Button variant={'secondary'} className="flex rounded-full text-xs font-medium">
                                            <CalendarIcon />
                                            <div className="flex flex-col">
                                                <span>Timeframe</span>
                                                <span>{date ? format(date, "P") : ""}</span>
                                            </div>
                                        </Button>
                                    </motion.button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={(newDate) => setDate(newDate)}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <Button className="rounded-full leading-tight text-xs shadow-none" variant='outline'>
                                Export CSV
                            </Button>
                            <Button className="rounded-full leading-tight dark:text-azure-radiance-500 font-semibold text-xs shadow-none dark:bg-azure-radiance-500/10 dark:hover:bg-azure-radiance-500 dark:border-azure-radiance-500 dark:hover:text-white border-2">
                                Generate Report
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div id="dashboard-section-container" className="grid gap-1 grid-cols-2 mt-4">
                <div>
                    <div className="flex h-[100px] space-x-2 justify-between group">
                        <StatsCard
                            icon={
                                <DialogModel dialogTrigger={
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <HardHat className="h-7 w-7 hover:stroke-azure-radiance-500" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>View More</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                } />
                            }
                            value={172}
                            percentage={1.92}
                            status="inc"
                            name="Active Workers"
                        />
                        <StatsCard
                            icon={
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Tractor className="h-7 w-7 hover:stroke-azure-radiance-500" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>View More</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            }
                            value={42}
                            percentage={1.89}
                            status="inc"
                            name="Active Equipments"
                        />
                        <StatsCard
                            icon={
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <TriangleAlert className="h-7 w-7 hover:stroke-azure-radiance-500" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>View More</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            }
                            value={172}
                            percentage={1.92}
                            status="dec"
                            name="Safety Incidents"
                        />
                    </div>
                    <div className="h-full">
                        <Card className="h-[90%]">
                            <CardContent className="h-[100%] p-4">
                                <MiningMap />
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="p-2 grid grid-cols-2 gap-4">
                    <div className="h-max">
                        <UtilityCard
                            title="Analytic View"
                            subTitle="Key Performance Highlights"
                            bodyContent={<OperationalTrendsCard />}
                        />
                    </div>
                    <div>
                        <UtilityCard
                            title="Priority Alert"
                            subTitle="Real-time predictions and actionable insights"
                            bodyContent={
                                <>
                                    <ScrollArea className="h-[280px]">
                                        {iotData.map((prediction, index) => (
                                            <PriorityCard key={index} prediction={prediction} />
                                        ))}
                                    </ScrollArea>
                                    <div className="h-9 bg-red-300/0 flex items-center">
                                        <Progress value={90} />
                                    </div>
                                </>
                            }
                            visible={false}
                        />
                    </div>
                    <div className="col-span-2">
                        <UtilityCard
                            title="Alerts"
                            subTitle="Track alerts here"
                            bodyContent={<SafetyCardContent />}
                        />
                    </div>
                </div>
            </div>
            <div id="dashboard-table-container">
                <DashboardTable shiftsData={shiftsData} />
            </div>
            <RiskMatrix />
        </section>
    );
};

export default NewDashboard;

