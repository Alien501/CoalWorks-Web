//@ts-nocheck
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon, Ellipsis, ListFilterIcon, MoveDownLeftIcon, MoveUpRightIcon, PackageIcon, RouteIcon, SirenIcon, TargetIcon, UserRoundIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";
import { format } from "date-fns";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Map from "./map";
import AlertsCard from "@/components/custom/alertTimeLine";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {BarGraph, AreaGraph, LineGraph, PieGraph, RadialGraph, SpiderGraph} from '@/components/custom/graphs'

const StatsCard = ({ icon, value, percentage, status, name }: { icon: React.JSX.Element, value: number, percentage: number, status: string, name: string }) => {
    return (
        <Card className="w-max bg-transparent border-none shadow-none">
            <CardContent className="p-1">
                <div className="flex items-center gap-2">
                    <div className="mt-1 w-16 h-16 flex items-center justify-center bg-white dark:bg-slate-500/10 p-1 rounded-full">
                        {icon}
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-semibold tracking-tight">
                                {value}
                            </span>
                            <span className={`text-sm font-medium flex items-center gap-1 ${(status == 'inc') ? 'text-green-500' : 'text-red-500'}`}>
                                {(status == 'inc') ? '+' : ''}{percentage}%
                                {(status == 'inc') ? <MoveUpRightIcon className="h-3 inline-block" /> : <MoveDownLeftIcon className="h-3 inline-block" />}
                            </span>
                        </div>
                        <p className="text-sm font-medium text-muted-foreground">
                            {name}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

const UtilityCard = ({ title, subTitle, bodyContent }: { title: string, subTitle: string, bodyContent: React.JSX.Element }) => {
    return (
        <Card className="border-none shadow-none w-full h-full dark:bg-zinc-900/50">
            <CardHeader className="flex flex-row items-center justify-between p-2">
                <div className="font-medium">
                    <p className="text-sm">{title}</p>
                    <p className="text-xs text-gray-800 dark:text-slate-400">{subTitle}</p>
                </div>
                <div>
                    <Button className="rounded-full h-12 w-12" variant={'secondary'}>
                        <Ellipsis />
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                {bodyContent}
            </CardContent>
        </Card>
    )
}

const SafetyCardContent = () => {
    return (
        <div className="h-full w-full">
            <div className="w-full h-[200px] p-1">
                <Map
                    isEditable={false}
                />
            </div>
            <div>
                <div className="flex justify-between items-center">
                    <div className="font-medium h-14 bg-red-200/0 mt-2">
                        <p className="text-base">Alerts</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">Track alerts here</p>
                    </div>
                    <div>
                        <SirenIcon className="text-red-500" />
                    </div>
                </div>
                <div>
                    <AlertsCard />
                </div>
            </div>
        </div>
    )
}

const DashboardTable = () => {
    return (
        <Card className="border-none shadow-none">
            <Tabs defaultValue="all">
                <CardHeader className="flex flex-row items-center justify-between">
                    <div className="font-bold">
                        <p className="text-sm">Shipment Activities</p>
                        <p className="text-xs text-gray-600 dark:text-slate-400">keep track of recent shipping activities</p>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                        <TabsList className="h-14 rounded-full p-2">
                            <TabsTrigger className="data-[state=active]:bg-black data-[state=active]:text-white h-12 rounded-full text-sm" value="all">All Shipments</TabsTrigger>
                            <TabsTrigger className="data-[state=active]:bg-black data-[state=active]:text-white h-12 rounded-full text-sm" value="del">Delivered</TabsTrigger>
                            <TabsTrigger className="data-[state=active]:bg-black data-[state=active]:text-white h-12 rounded-full text-sm" value="transit">In transit</TabsTrigger>
                            <TabsTrigger className="data-[state=active]:bg-black data-[state=active]:text-white h-12 rounded-full text-sm" value="pending">Pending</TabsTrigger>
                            <TabsTrigger className="data-[state=active]:bg-black data-[state=active]:text-white h-12 rounded-full text-sm" value="processing">Processing</TabsTrigger>
                        </TabsList>
                        <Button variant={'secondary'} className="rounded-full h-12 w-12">
                            <ListFilterIcon />
                        </Button>
                        <p>1-10 of 60</p>
                        <div>
                            <Button className="rounded-full h-10 w-10 border-none" variant={'outline'}>
                                <ChevronLeftIcon />
                            </Button>
                            <Button className="rounded-full h-10 w-10 border-none" variant={'outline'}>
                                <ChevronRightIcon />
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    {/* TODO: Need to convert it into data table (if possible) */}
                    <TabsContent value="all">
                        <Table>
                            <TableHeader className="bg-red-200/0 h-14 rounded-full">
                                <TableRow className="rounded-full bg-background">
                                    <TableHead>Order ID</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead>Company</TableHead>
                                    <TableHead>Arrival time</TableHead>
                                    <TableHead>Route</TableHead>
                                    <TableHead>Price</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>1</TableCell>
                                    <TableCell>Electronic</TableCell>
                                    <TableCell>Exetron Co</TableCell>
                                    <TableCell>24 Dec 2024</TableCell>
                                    <TableCell>London - Prague</TableCell>
                                    <TableCell>$5,867.90</TableCell>
                                    <TableCell>Delivered</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>1</TableCell>
                                    <TableCell>Electronic</TableCell>
                                    <TableCell>Exetron Co</TableCell>
                                    <TableCell>24 Dec 2024</TableCell>
                                    <TableCell>London - Prague</TableCell>
                                    <TableCell>$5,867.90</TableCell>
                                    <TableCell>Delivered</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>1</TableCell>
                                    <TableCell>Electronic</TableCell>
                                    <TableCell>Exetron Co</TableCell>
                                    <TableCell>24 Dec 2024</TableCell>
                                    <TableCell>London - Prague</TableCell>
                                    <TableCell>$5,867.90</TableCell>
                                    <TableCell>Delivered</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>1</TableCell>
                                    <TableCell>Electronic</TableCell>
                                    <TableCell>Exetron Co</TableCell>
                                    <TableCell>24 Dec 2024</TableCell>
                                    <TableCell>London - Prague</TableCell>
                                    <TableCell>$5,867.90</TableCell>
                                    <TableCell>Delivered</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>1</TableCell>
                                    <TableCell>Electronic</TableCell>
                                    <TableCell>Exetron Co</TableCell>
                                    <TableCell>24 Dec 2024</TableCell>
                                    <TableCell>London - Prague</TableCell>
                                    <TableCell>$5,867.90</TableCell>
                                    <TableCell>Delivered</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TabsContent>
                </CardContent>
            </Tabs>
        </Card>
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
    return (
        <section id="dashboad" className="p-2 bg-slate-100 dark:bg-zinc-950 dark:text-foreground">
            {/* Header Section */}
            <div id="dash-header-section" className="flex justify-between items-center">
                <div>
                    <p className="font-medium">Hello Lincoln,</p>
                    <p className="font-semibold text-3xl">Good Morning</p>
                </div>
                <div>
                    <Card className="h-12 shadow-none flex items-center rounded-full">
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
                            <Button className="rounded-full leading-tight text-xs shadow-none">
                                Add new shipment
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
            {/* Grid section starts here */}
            <div id="dashboard-section-container" className="grid gap-1 grid-cols-2 mt-4">
                <div>
                    <div className="flex space-x-2 justify-between">
                        <StatsCard
                            icon={<TargetIcon className="h-7 w-7" />}
                            value={172}
                            percentage={1.92}
                            status="inc"
                            name="Total Shipments"
                        />
                        <StatsCard
                            icon={<PackageIcon className="h-7 w-7" />}
                            value={42}
                            percentage={1.89}
                            status="inc"
                            name="Pending Package"
                        />
                        <StatsCard
                            icon={<RouteIcon className="h-7 w-7" />}
                            value={172}
                            percentage={1.92}
                            status="dec"
                            name="Delivery Shipments"
                        />
                    </div>
                    <div>
                        <Card className="border-none shadow-none mt-6 dark:bg-zinc-900/50">
                            <CardHeader className="flex flex-row justify-between">
                                <div className="font-medium">
                                    <p className="text-base">Shipment Statistics</p>
                                    <p className="text-xs text-gray-800 dark:text-slate-400">Total number of deliveries 72.8k</p>
                                </div>
                                <div className="flex space-x-2">
                                    <Select onValueChange={onGraphChanged}>
                                        <SelectTrigger defaultValue={'bar'} className="rounded-full bg-secondary h-10 shadow-none border-none">
                                            <SelectValue placeholder='Graph Type' />
                                        </SelectTrigger>
                                        <SelectContent className="border-none">
                                            <SelectItem value="bar">Bar</SelectItem>
                                            <SelectItem value="pie">Pie</SelectItem>
                                            <SelectItem value="area">Area</SelectItem>
                                            <SelectItem value="area-linear">Area Linear</SelectItem>
                                            <SelectItem value="area-step">Area Step</SelectItem>
                                            <SelectItem value="line">Line</SelectItem>
                                            <SelectItem value="line-linear">Line Linear</SelectItem>
                                            <SelectItem value="line-step">Line Step</SelectItem>
                                            <SelectItem value="radar">Radar</SelectItem>
                                            <SelectItem value="radial">Radial</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Select>
                                        <SelectTrigger className="rounded-full bg-secondary h-10 shadow-none border-none">
                                            <SelectValue placeholder='Time' />
                                        </SelectTrigger>
                                        <SelectContent className="border-none">
                                            <SelectItem value="daily">Daily</SelectItem>
                                            <SelectItem value="weekly">Weekly</SelectItem>
                                            <SelectItem value="monthly">Monthly</SelectItem>
                                            <SelectItem value="yearly">Yearly</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </CardHeader>
                            <CardContent key={graphType}>
                                {graphList[graphType]}
                            </CardContent>
                        </Card>
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
                <DashboardTable />
            </div>
        </section>
    )
};

export default NewDashboard;