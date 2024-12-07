import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { format } from "date-fns";
import { BarGraph, AreaGraph, LineGraph, PieGraph, RadialGraph, SpiderGraph } from '@/components/custom/graphs'
import { HardHat, Tractor, TriangleAlert } from "lucide-react";
import ShipmentStatistics from "@/components/custom/shipmentStatistics";
import { DashboardTable } from "@/components/custom/dashboardTable";
import { shiftsData } from "@/lib/dummyShiftData";
import { StatsCard } from "@/components/custom/StatsCard";
import { UtilityCard } from "@/components/custom/utilityCard";
import { SafetyCardContent } from "@/components/custom/safetyCard";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { DialogModel } from "@/components/custom/dialogModel";
import {
    Factory,
    TrendingUp,
    Clock,
    ShieldCheck,
    AlertTriangle
} from 'lucide-react';
import Map from "./map";
// import PredictionCard from "@/components/custom/predictionCard";
import { PredictionCard } from "./somthing";
import MiningMap from "./map";
import RiskMatrix from "@/components/custom/riskMatrix";
import PriorityActionsSMP from "./somthing";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import OperationalTrendsCard from "./operationalTrend";

const predictions = [
    {
        id: 1,
        headline: "Equipment Breakdown Likely in Zone B",
        incidentType: "Breakdown",
        severity: "Critical",
        probability: 87,
        recommendedAction: "Dispatch a maintenance team to Zone B within 2 hours.",
        reason: "High vibration detected on Conveyor Belt 4",
        workflow: [
            "1. Assess Conveyor Belt 4 for unusual vibrations",
            "2. Check belt tension and alignment",
            "3. Inspect rollers and bearings",
            "4. Lubricate necessary components",
            "5. Report findings and actions taken"
        ],
        personnelAllocation: "Maintenance Team Alpha"
    },
    {
        id: 1,
        headline: "Equipment Breakdown Likely in Zone B",
        incidentType: "Breakdown",
        severity: "Critical",
        probability: 87,
        recommendedAction: "Dispatch a maintenance team to Zone B within 2 hours.",
        reason: "High vibration detected on Conveyor Belt 4",
        workflow: [
            "1. Assess Conveyor Belt 4 for unusual vibrations",
            "2. Check belt tension and alignment",
            "3. Inspect rollers and bearings",
            "4. Lubricate necessary components",
            "5. Report findings and actions taken"
        ],
        personnelAllocation: "Maintenance Team Alpha"
    },
    {
        id: 1,
        headline: "Equipment Breakdown Likely in Zone B",
        incidentType: "Breakdown",
        severity: "Critical",
        probability: 87,
        recommendedAction: "Dispatch a maintenance team to Zone B within 2 hours.",
        reason: "High vibration detected on Conveyor Belt 4",
        workflow: [
            "1. Assess Conveyor Belt 4 for unusual vibrations",
            "2. Check belt tension and alignment",
            "3. Inspect rollers and bearings",
            "4. Lubricate necessary components",
            "5. Report findings and actions taken"
        ],
        personnelAllocation: "Maintenance Team Alpha"
    },
    {
        id: 1,
        headline: "Equipment Breakdown Likely in Zone B",
        incidentType: "Breakdown",
        severity: "Critical",
        probability: 87,
        recommendedAction: "Dispatch a maintenance team to Zone B within 2 hours.",
        reason: "High vibration detected on Conveyor Belt 4",
        workflow: [
            "1. Assess Conveyor Belt 4 for unusual vibrations",
            "2. Check belt tension and alignment",
            "3. Inspect rollers and bearings",
            "4. Lubricate necessary components",
            "5. Report findings and actions taken"
        ],
        personnelAllocation: "Maintenance Team Alpha"
    }
]

const tasks = [
    {
        id: 1,
        title: "Unattended Safety Breach in Zone C",
        prediction: "Will escalate to Critical in 2 hours",
        action: "Assign Safety Team Bravo to investigate",
        type: "safety",
        severity: "High"
    },
    {
        id: 2,
        title: "SHIFT-008 tasks are 60% delayed",
        prediction: "Productivity will drop below 75%",
        action: "Reallocate one team from SHIFT-009 to SHIFT-008",
        type: "delay",
        severity: "Moderate"
    },
    {
        id: 3,
        title: "Excavator #47 overdue for maintenance",
        prediction: "Breakdown risk: High",
        action: "Schedule immediate servicing",
        type: "equipment",
        severity: "High"
    }
]

const PriorityCard = ({prediction}) => {
    return (
        <Dialog>
            <DialogTrigger>
                <Card className="w-full m-2 bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-sm">
                    <CardContent className="p-2 space-y-2">
                        <div className="flex space-x-1 items-center">
                            <AlertTriangle className="text-yellow-400" />
                            <h1 className="text-sm font-medium text-left">{prediction.headline}</h1>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>
                                <Badge variant={prediction.severity === "Critical" ? "destructive" : "default"}>
                                    {prediction.severity}
                                </Badge>
                            </span>
                            <span>
                                {prediction.probability}%
                            </span>
                        </div>
                    </CardContent>
                </Card>
            </DialogTrigger>
            <DialogContent>
                <PredictionCard prediction={prediction} />
            </DialogContent>
        </Dialog>
    )
}

const NewDashboard = () => {
    const [date, setDate] = useState();
    const [graphType, setGraphType] = useState<string>('bar')
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
    }

    const onGraphChanged = (value: string) => {
        console.log(value)
        setGraphType(value)
    }


    // const predictions = [
    //     {
    //         title: "Equipment Breakdown Likely in Zone B",
    //         type: "Breakdown" as const,
    //         severity: "Critical" as const,
    //         probability: 87,
    //         timeframe: "Next 2-4 hours",
    //         recommendation: "Dispatch maintenance team to Zone B for immediate inspection of conveyor belt system."
    //     },
    //     // {
    //     //     title: "Potential Safety Risk in Shaft 3",
    //     //     type: "Safety" as const,
    //     //     severity: "Moderate" as const,
    //     //     probability: 75,
    //     //     timeframe: "Next 6 hours",
    //     //     recommendation: "Conduct emergency ventilation check and adjust air flow parameters."
    //     // },
    //     // {
    //     //     title: "Production Delay Risk in Section C",
    //     //     type: "Delay" as const,
    //     //     severity: "Moderate" as const,
    //     //     probability: 82,
    //     //     timeframe: "Next shift",
    //     //     recommendation: "Reallocate resources to prevent bottleneck in coal extraction process."
    //     // }
    // ];


    return (
        <section id="dashboad" className="p-2 bg-slate-100 dark:bg-zinc-950 dark:text-foreground">
            {/* Header Section */}
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
                                    <Button variant={'secondary'} className="flex rounded-full text-xs font-medium">
                                        <span><CalendarIcon /></span>
                                        <div className="flex flex-col">
                                            <span>Timeframe</span>
                                            <span>{date ? format(date, "P") : ""}</span>
                                        </div>
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
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
                                    <span>
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
                                    </span>
                                } />

                            }
                            value={172}
                            percentage={1.92}
                            status="inc"
                            name="Active Workers"
                        />
                        <StatsCard
                            icon={<TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Tractor className="h-7 w-7 hover:stroke-azure-radiance-500" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>View More</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>}
                            value={42}
                            percentage={1.89}
                            status="inc"
                            name="Active Equipments"
                        />
                        <StatsCard
                            icon={<TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <TriangleAlert className="h-7 w-7 hover:stroke-azure-radiance-500" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>View More</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>}
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
                        {/* <UtilityCard
                            title="Map"
                            subTitle="See alll things here"
                            bodyContent={<div className="h-[470px] bg-white w-full rounded-sm"><Map isEditable={false} /></div>}
                        /> */}
                        {/* <ShipmentStatistics onGraphChanged={onGraphChanged} graphType={graphType} graphList={graphList}></ShipmentStatistics> */}
                    </div>
                </div>
                <div className="p-2 grid grid-cols-2 gap-4">
                    <div className="h-max">
                        <UtilityCard
                            title="Analytic View"
                            subTitle="Key Performance Highlights"
                            bodyContent={
                                // <div className="flex flex-col space-y-3">
                                //     <div>
                                //         <SpiderGraph />
                                //     </div>
                                //     <div className="rounded-lg border h-[120px] p-2 w-full ">
                                //         <div className="flex items-center justify-center">
                                //             <h3 className="text-lg font-semibold text-nowrap ">
                                //                 Operational Performance Metrics
                                //             </h3>
                                //         </div>
                                //         <div className="grid grid-cols-2 gap-3 mt-3 justify-center items-center ml-4">
                                //             <div className="flex space-x-3 items-center">
                                //                 <span className="p-2 rounded-full border">
                                //                     <Clock size={30}></Clock>
                                //                 </span>
                                //                 <span>
                                //                     Operational Efficiency
                                //                 </span>
                                //                 <span className="text-2xl text-green-500 flex justify-center items-center space-x-3">
                                //                     <span>
                                //                         96%
                                //                     </span>
                                //                     <span>
                                //                         <TrendingUp></TrendingUp>
                                //                     </span>
                                //                 </span>
                                //             </div>
                                //         </div>
                                //     </div>
                                // </div>
                                <OperationalTrendsCard />
                            }
                        />
                    </div>
                    <div className="">
                        <UtilityCard
                            title="Priority Alert"
                            subTitle="Real-time predictions and actionable insights"
                            bodyContent={
                                <>
                                            <div>
                                                <ScrollArea className="h-[280px]">
                                                    {
                                                        predictions.map(prediction => <PriorityCard prediction={prediction} />)
                                                    }
                                                </ScrollArea>
                                            </div>
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
    )
};

export default NewDashboard;