import { Card, CardContent} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { format } from "date-fns";
import { BarGraph, AreaGraph, LineGraph, PieGraph, RadialGraph, SpiderGraph } from '@/components/custom/graphs'
import { HardHat, Tractor,TriangleAlert } from "lucide-react";
import ShipmentStatistics from "@/components/custom/shipmentStatistics";
import { DashboardTable } from "@/components/custom/dashboardTable";
import { shiftsData } from "@/lib/dummyShiftData";
import { StatsCard } from "@/components/custom/StatsCard";
import { UtilityCard } from "@/components/custom/utilityCard";
import { SafetyCardContent } from "@/components/custom/safetyCard";

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
    return (
        <section id="dashboad" className="p-2 bg-slate-100 dark:bg-zinc-950 dark:text-foreground">
            {/* Header Section */}
            <div id="dash-header-section" className="flex justify-end items-center">
                {/* <div>
                    <p className="font-medium">Hello Lincoln,</p>
                    <p className="font-semibold text-3xl">Good Morning</p>
                </div> */}
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
                            <Button className="rounded-full leading-tight text-xs shadow-none dark:bg-dull-lavender-400 dark:hover:bg-dull-lavender-500">
                                Add new shipment
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div id="dashboard-section-container" className="grid gap-1 grid-cols-2 mt-4">
                <div>
                    <div className="flex space-x-2 justify-between">
                        <StatsCard
                            icon={<HardHat className="h-7 w-7" />}
                            value={172}
                            percentage={1.92}
                            status="inc"
                            name="Active Workers"
                        />
                        <StatsCard
                            icon={<Tractor className="h-7 w-7" />}
                            value={42}
                            percentage={1.89}
                            status="inc"
                            name="Active Equipments"
                        />
                        <StatsCard
                            icon={<TriangleAlert className="h-7 w-7" />}
                            value={172}
                            percentage={1.92}
                            status="dec"
                            name="Safety Incidents"
                        />
                    </div>
                    <div>
                        <ShipmentStatistics onGraphChanged={onGraphChanged} graphType={graphType} graphList={graphList}></ShipmentStatistics>
                    </div>
                </div>
                <div className="p-2 grid grid-cols-2 grid-rows-2 gap-4">
                    <div className="">
                        <UtilityCard
                            title="Analytic View"
                            subTitle="Total shipping revenue overview"
                            bodyContent={<SpiderGraph />}
                        />
                    </div>
                    <div className=" row-span-2">
                        <UtilityCard
                            title="Tracking Delivery"
                            subTitle="Last viewed delivery history"
                            bodyContent={<SafetyCardContent />}
                        />
                    </div>
                    <div className="">
                        <UtilityCard
                            title="Delivery vehicles"
                            subTitle="vehicles operating on the road"
                            bodyContent={<h1 className="font-bold text-3xl">@Rakhul, What to display here</h1>}
                        />
                    </div>
                </div>
            </div>
            <div id="dashboard-table-container">
                <DashboardTable shiftsData={shiftsData} />
            </div>
        </section>
    )
};

export default NewDashboard;