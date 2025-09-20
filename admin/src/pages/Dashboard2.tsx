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

import { CalendarIcon, HardHat, Tractor, TriangleAlert, AlertTriangle, Thermometer, Wind, MapPin, Mail, CheckCircle2, Clock } from 'lucide-react';

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

interface ActionPlanAlert {
    id: number;
    title: string;
    description: string;
    severity: string;
    status: string;
    triggeredAt: string;
    actionPlan: {
        id: number;
        name: string;
        priority: string;
        smps: Array<{
            id: number;
            name: string;
            order: number;
            tasks: Array<{
                id: number;
                title: string;
                assignedTo: number;
                assignee: {
                    username: string;
                    email: string;
                };
            }>;
        }>;
    };
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

// Priority Mail Card Component
const PriorityMailCard: React.FC<{ 
    title: string; 
    description: string; 
    priority: string; 
    emailsSent: number; 
    lastSent: string;
    onClick: () => void;
}> = ({ title, description, priority, emailsSent, lastSent, onClick }) => {
    const getPriorityColor = (priority: string) => {
        switch (priority.toLowerCase()) {
            case 'critical': return 'bg-red-600';
            case 'high': return 'bg-orange-500';
            case 'medium': return 'bg-yellow-500';
            case 'low': return 'bg-green-500';
            default: return 'bg-gray-500';
        }
    };

    return (
        <Card 
            className="w-full m-2 bg-gradient-to-br from-blue-900 to-blue-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden cursor-pointer"
            onClick={onClick}
        >
            <CardContent className="p-4 space-y-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <Mail className="text-blue-400" />
                        <h2 className="text-lg font-bold">{title}</h2>
                    </div>
                    <Badge className={`${getPriorityColor(priority)} text-white px-3 text-sm font-medium uppercase`}>
                        {priority}
                    </Badge>
                </div>
                
                <p className="text-sm text-gray-300">{description}</p>
                
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                        <Mail className="text-green-400" />
                        <span className="font-medium">Emails Sent: {emailsSent}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <Clock className="text-blue-400" />
                        <span>Last Sent: {new Date(lastSent).toLocaleString()}</span>
                    </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                    <span className="text-xs text-gray-400">
                        Click to view details
                    </span>
                    <Button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                        <Mail className="h-4 w-4 mr-2" />
                        View Details
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

const ActionPlanAlertCard: React.FC<{ alert: ActionPlanAlert }> = ({ alert }) => {
    const [isExecuting, setIsExecuting] = useState(false);

    const getSeverityColor = (severity: string) => {
        switch (severity.toLowerCase()) {
            case 'critical':
                return 'bg-red-600'
            case 'high':
                return 'bg-orange-500'
            case 'medium':
                return 'bg-yellow-500'
            case 'low':
                return 'bg-green-500'
            default:
                return 'bg-blue-500'
        }
    }

    const getPriorityColor = (priority: string) => {
        switch (priority.toLowerCase()) {
            case 'critical':
                return 'bg-red-600'
            case 'high':
                return 'bg-orange-500'
            case 'medium':
                return 'bg-yellow-500'
            case 'low':
                return 'bg-green-500'
            default:
                return 'bg-gray-500'
        }
    }

    const handleExecuteActionPlan = async () => {
        setIsExecuting(true);
        try {
            // Collect all unique users from tasks
            const users = new Set();
            alert.actionPlan.smps.forEach(smp => {
                smp.tasks.forEach(task => {
                    if (task.assignee.email) {
                        users.add({
                            email: task.assignee.email,
                            username: task.assignee.username,
                            taskTitle: task.title
                        });
                    }
                });
            });

            // Send emails to all assigned users
            const emailPromises = Array.from(users).map((user: any) => 
                fetch('http://localhost:3000/api/v1/action-plans/send-task-notification', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        to: user.email,
                        username: user.username,
                        taskTitle: user.taskTitle,
                        actionPlanName: alert.actionPlan.name,
                        priority: alert.actionPlan.priority
                    }),
                })
            );

            await Promise.all(emailPromises);
            
            // Show success message
            alert('Action plan executed! All assigned users have been notified via email.');
        } catch (error) {
            console.error('Error executing action plan:', error);
            alert('Failed to execute action plan. Please try again.');
        } finally {
            setIsExecuting(false);
        }
    };

    return (
        <Card className="w-full m-2 bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden">
            <CardContent className="p-4 space-y-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <AlertTriangle className="text-yellow-400" />
                        <h2 className="text-lg font-bold">{alert.title}</h2>
                    </div>
                    <div className="flex gap-2">
                        <Badge className={`${getSeverityColor(alert.severity)} text-white px-3 text-sm font-medium uppercase`}>
                            {alert.severity}
                        </Badge>
                        <Badge className={`${getPriorityColor(alert.actionPlan.priority)} text-white px-3 text-sm font-medium uppercase`}>
                            {alert.actionPlan.priority}
                        </Badge>
                    </div>
                </div>
                
                <p className="text-sm text-gray-300">{alert.description}</p>
                
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="text-green-400" />
                        <span className="font-medium">Action Plan: {alert.actionPlan.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <Clock className="text-blue-400" />
                        <span>SMPs: {alert.actionPlan.smps.length}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <Mail className="text-purple-400" />
                        <span>Assigned Users: {new Set(alert.actionPlan.smps.flatMap(smp => smp.tasks.map(task => task.assignee.email))).size}</span>
                    </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                    <span className="text-xs text-gray-400">
                        Triggered: {new Date(alert.triggeredAt).toLocaleString()}
                    </span>
                    <Button
                        onClick={handleExecuteActionPlan}
                        disabled={isExecuting}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                        {isExecuting ? (
                            <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                Executing...
                            </>
                        ) : (
                            <>
                                <Mail className="h-4 w-4 mr-2" />
                                Execute Action Plan
                            </>
                        )}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

const NewDashboard: React.FC = () => {
    const [date, setDate] = useState<Date | undefined>();
    const [graphType, setGraphType] = useState<string>('bar');
    const [iotData, setIotData] = useState<Prediction[]>([]);
    
    // Static priority mail data for demonstration
    const [priorityMailData] = useState([
        {
            id: 1,
            title: "Safety Protocol Updates",
            description: "Critical safety protocol updates have been sent to all mining personnel",
            priority: "critical",
            emailsSent: 156,
            lastSent: new Date().toISOString()
        },
        {
            id: 2,
            title: "Equipment Maintenance Schedule",
            description: "Monthly equipment maintenance schedules distributed to maintenance teams",
            priority: "high",
            emailsSent: 23,
            lastSent: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
        },
        {
            id: 3,
            title: "Shift Handover Reports",
            description: "Daily shift handover reports sent to supervisors and managers",
            priority: "medium",
            emailsSent: 45,
            lastSent: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString()
        },
        {
            id: 4,
            title: "Training Reminders",
            description: "Safety training reminders sent to all employees",
            priority: "low",
            emailsSent: 89,
            lastSent: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
        }
    ]);

    // Static action plan alert data for demonstration
    const [actionPlanAlerts] = useState<ActionPlanAlert[]>([
        {
            id: 1,
            title: "High Methane Level Detected",
            description: "Methane concentration has exceeded safe limits in Section A. Immediate action required to prevent potential explosion risk.",
            severity: "critical",
            status: "active",
            triggeredAt: new Date().toISOString(),
            actionPlan: {
                id: 1,
                name: "Emergency Ventilation Protocol",
                priority: "critical",
                smps: [
                    {
                        id: 1,
                        name: "Immediate Evacuation",
                        order: 1,
                        tasks: [
                            {
                                id: 1,
                                title: "Evacuate all personnel from Section A",
                                assignedTo: 1,
                                assignee: {
                                    username: "John Smith",
                                    email: "john.smith@coalworks.com"
                                }
                            },
                            {
                                id: 2,
                                title: "Secure all equipment and machinery",
                                assignedTo: 2,
                                assignee: {
                                    username: "Mike Johnson",
                                    email: "mike.johnson@coalworks.com"
                                }
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "Ventilation System Activation",
                        order: 2,
                        tasks: [
                            {
                                id: 3,
                                title: "Activate emergency ventilation system",
                                assignedTo: 3,
                                assignee: {
                                    username: "Sarah Wilson",
                                    email: "sarah.wilson@coalworks.com"
                                }
                            },
                            {
                                id: 4,
                                title: "Monitor gas levels continuously",
                                assignedTo: 4,
                                assignee: {
                                    username: "David Brown",
                                    email: "david.brown@coalworks.com"
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]);

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
                                        {/* Priority Mail Cards */}
                                        {priorityMailData.map((mailData, index) => (
                                            <PriorityMailCard 
                                                key={`mail-${index}`} 
                                                title={mailData.title}
                                                description={mailData.description}
                                                priority={mailData.priority}
                                                emailsSent={mailData.emailsSent}
                                                lastSent={mailData.lastSent}
                                                onClick={() => console.log('View mail details:', mailData)}
                                            />
                                        ))}
                                        {/* Action Plan Alerts */}
                                        {actionPlanAlerts.map((alert, index) => (
                                            <ActionPlanAlertCard key={`alert-${index}`} alert={alert} />
                                        ))}
                                        {/* IoT Data Predictions */}
                                        {iotData.map((prediction, index) => (
                                            <PriorityCard key={`prediction-${index}`} prediction={prediction} />
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

