import { useMemo, useState } from "react";
import {AlertCircleIcon} from "lucide-react"
import { Button } from "@/components/ui/button";
import { Card,CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableHead, TableRow, TableCell, TableHeader} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon, ListFilterIcon, } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ShiftDrawer from "./shiftDrawer";

export const DashboardTable = ({shiftsData}: {
    shiftsData: any
}) => {
    const [expandedRow, setExpandedRow] = useState(null);
    const [activeTab, setActiveTab] = useState('all');
    const [selectedShift, setSelectedShift] = useState(null);
    const tabsList = [
        { name: 'All Shifts', value: 'all' },
        { name: 'Active Shifts', value: 'active' },
        { name: 'Completed Shifts', value: 'completed' },
        { name: 'Critical Issues', value: 'critical' }
    ];

    const filteredShifts = useMemo(() => {
        return shiftsData.filter((shift: any) => {
            if (activeTab === 'all') return true;
            return shift.status === activeTab;
        });
    }, [activeTab]);

    const getPriorityIndicator = (incidents: any, pendingTasks: any) => {
        if (incidents > 0) return 'red';
        if (pendingTasks > 0) return 'yellow';
        return 'green';
    };

    const renderPriorityIcon = (color: any) => {
        const icons = {
            red: <AlertCircleIcon color="red" />,
            yellow: <AlertCircleIcon color="orange" />,
            green: <CheckCircleIcon color="green" />
        };
        //@ts-ignore
        return icons[color];
    };

    const toggleRowExpand = (id: any) => {
        setExpandedRow(expandedRow === id ? null : id);
    };

    return (
        <Card className="border-none shadow-none">
            <Tabs
                defaultValue={tabsList[0].value}
                onValueChange={(value) => setActiveTab(value)}
            >
                <CardHeader className="flex flex-row items-center justify-between">
                    <div className="font-bold">
                        <p className="text-sm">Shift Management</p>
                        <p className="text-xs text-gray-600 dark:text-slate-400">Track and manage shift operations</p>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                        <TabsList className="h-14 rounded-full p-2">
                            {tabsList.map(tabItem => (
                                <TabsTrigger
                                    key={tabItem.value}
                                    className="data-[state=active]:bg-black data-[state=active]:text-white h-12 rounded-full text-sm"
                                    value={tabItem.value}
                                >
                                    {tabItem.name}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        <Button variant={'secondary'} className="rounded-full h-12 w-12">
                            <ListFilterIcon />
                        </Button>
                        <p>1-{filteredShifts.length} of {shiftsData.length}</p>
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
                    <TabsContent value={activeTab}>
                        <Table>
                            <TableHeader className="bg-red-200/0 h-14 rounded-full">
                                <TableRow className="rounded-full bg-background">
                                    <TableHead>Priority</TableHead>
                                    <TableHead>Shift ID</TableHead>
                                    <TableHead>Assigned Personnel</TableHead>
                                    <TableHead>Pending Tasks</TableHead>
                                    <TableHead>Critical Incidents</TableHead>
                                    <TableHead>Shift Timing</TableHead>
                                    <TableHead>Productivity</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredShifts.map((shift: any) => (
                                    <TableRow
                                        key={shift.id}
                                        className="cursor-pointer hover:bg-muted/50"
                                        onClick={() => setSelectedShift(shift)}
                                    >
                                        <TableCell>
                                            {renderPriorityIcon(getPriorityIndicator(shift.criticalIncidents, shift.pendingTasks))}
                                        </TableCell>
                                        <TableCell>{shift.id}</TableCell>
                                        <TableCell>{shift.personnel.join(', ')}</TableCell>
                                        <TableCell>{shift.pendingTasks}</TableCell>
                                        <TableCell>{shift.criticalIncidents}</TableCell>
                                        <TableCell>{shift.startTime} - {shift.endTime}</TableCell>
                                        <TableCell>{shift.productivityScore}%</TableCell>
                                        <TableCell>
                                            <Badge
                                                className={`rounded-full text-white ${shift.status === 'active' ? 'bg-blue-400/90' :
                                                    shift.status === 'completed' ? 'bg-green-500' :
                                                        'bg-red-500/90'
                                                    }`}
                                            >
                                                {shift.status.charAt(0).toUpperCase() + shift.status.slice(1)}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TabsContent>
                </CardContent>
            </Tabs>
            <ShiftDrawer selectedShift={selectedShift} setSelectedShift={setSelectedShift}></ShiftDrawer>
        </Card>
    );
};
