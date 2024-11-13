import Piechart from "@/components/custom/PieChart";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ChartBar, ChartColumn, ChartPie, ChartSpline, FileText, MailPlus } from "lucide-react";
import { useState } from "react";

const WidgetForm = () => {
    const [chartType, setChartType] = useState<string>('');

    const onChartTypeChanged = (value: string) => {
        setChartType(value)
    }

    return (
        <div>
            <div className="flex items-center">
                <div className="space-y-4">
                    <Input
                        placeholder="Report"
                        name="report"
                        className="bg-gray-300/20 shadow-none focus-visible:ring-slate-500"
                    />
                    <Input
                        placeholder="Widget label"
                        name="widget-label"
                        className="bg-gray-300/20 shadow-none focus-visible:ring-slate-500"
                    />
                    <div>
                        <ToggleGroup onValueChange={onChartTypeChanged} type="single">
                            <ToggleGroupItem className="w-max text-xs ring-1 rounded-full px-4 py-4 h-3 ring-black/10 active:bg-black data-[state=on]:bg-black data-[state=on]:text-white" value="chart-bar"><ChartBar /></ToggleGroupItem>
                            <ToggleGroupItem className="w-max text-xs ring-1 rounded-full px-4 py-4 h-3 ring-black/10 active:bg-black data-[state=on]:bg-black data-[state=on]:text-white" value="chart-column"><ChartColumn /></ToggleGroupItem>
                            <ToggleGroupItem className="w-max text-xs ring-1 rounded-full px-4 py-4 h-3 ring-black/10 active:bg-black data-[state=on]:bg-black data-[state=on]:text-white" value="chart-spline"><ChartSpline /></ToggleGroupItem>
                            <ToggleGroupItem className="w-max text-xs ring-1 rounded-full px-4 py-4 h-3 ring-black/10 active:bg-black data-[state=on]:bg-black data-[state=on]:text-white" value="chart-pie"><ChartPie /></ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                    <div className="grid grid-cols-2 items-center">
                        <Label htmlFor="sliced-by">Sliced by</Label>
                        <Select>
                            <SelectTrigger id="sliced-by" className="w-28">
                                <SelectValue placeholder="Sliced By" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="shift-1">Shift 1</SelectItem>
                                <SelectItem value="shift-2">Shift 2</SelectItem>
                                <SelectItem value="shift-3">Shift 3</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-2 items-center">
                        <Label htmlFor="value">Value</Label>
                        <Select>
                            <SelectTrigger id="value" className="w-28">
                                <SelectValue placeholder="Value" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="shift-1">Shift 1</SelectItem>
                                <SelectItem value="shift-2">Shift 2</SelectItem>
                                <SelectItem value="shift-3">Shift 3</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Input
                        placeholder="Title"
                        name="title"
                        className="bg-gray-300/20 shadow-none focus-visible:ring-slate-500"
                    />
                    <div className="flex items-center space-x-2">
                        <Checkbox id="show-values" />
                        <Label htmlFor="show-values">Show Values</Label>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full h-full">
                    <h1>{chartType}</h1>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <Button>
                    Save
                </Button>
            </div>
        </div>
    )
}

const Dashboard = () => {
    const [dayFilter, setDayFilter] = useState('');

    const onDayFilterChanged = (e: string) => {
        setDayFilter(e);
    }


    return (
        <div id="dashboard-wrapper" className="flex flex-col items-center justify-center">
            <div className="pb-3 mt-3 w-full flex justify-between border-b-2 border-b-black/10" >
                <div className="flex space-x-3 p-1">
                    <ToggleGroup onValueChange={onDayFilterChanged} type="single">
                        <ToggleGroupItem className="w-max text-xs ring-1 rounded-full px-4 py-4 h-3 ring-black/10 active:bg-black data-[state=on]:bg-black data-[state=on]:text-white" value="last-day">Last Day</ToggleGroupItem>
                        <ToggleGroupItem className="w-max text-xs ring-1 rounded-full px-4 py-4 h-3 ring-black/10 active:bg-black data-[state=on]:bg-black data-[state=on]:text-white" value="last-week">Last Week</ToggleGroupItem>
                        <ToggleGroupItem className="w-max text-xs ring-1 rounded-full px-4 py-4 h-3 ring-black/10 active:bg-black data-[state=on]:bg-black data-[state=on]:text-white" value="last-month">Last Month</ToggleGroupItem>
                        <ToggleGroupItem className="w-max text-xs ring-1 rounded-full px-4 py-4 h-3 ring-black/10 active:bg-black data-[state=on]:bg-black data-[state=on]:text-white" value="last-3-month">Last 3 Months</ToggleGroupItem>
                        <ToggleGroupItem className="w-max text-xs ring-1 rounded-full px-4 py-4 h-3 ring-black/10 active:bg-black data-[state=on]:bg-black data-[state=on]:text-white" value="last-6-month">Last 6 Months</ToggleGroupItem>
                        <ToggleGroupItem className="w-max text-xs ring-1 rounded-full px-4 py-4 h-3 ring-black/10 active:bg-black data-[state=on]:bg-black data-[state=on]:text-white" value="custom">Custom</ToggleGroupItem>
                    </ToggleGroup>

                    <Select>
                        <SelectTrigger className="w-28">
                            <SelectValue placeholder="Plant" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="p-1">Plant 1</SelectItem>
                            <SelectItem value="p-2">Plant 2</SelectItem>
                            <SelectItem value="p-3">Plant 3</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="w-28">
                            <SelectValue placeholder="Shift" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="shift-1">Shift 1</SelectItem>
                            <SelectItem value="shift-2">Shift 2</SelectItem>
                            <SelectItem value="shift-3">Shift 3</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="bg-red-300/0 p-1 flex items-center space-x-2">
                    <Button variant="secondary" className="hover:bg-gray-200">
                        <span><MailPlus /></span>
                    </Button>
                    <Button variant="secondary" className="hover:bg-gray-200">
                        <span><FileText /></span>
                    </Button>
                    <Dialog>
                        <DialogTrigger>
                            <Button>
                                <span>Create Widget</span>
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>New Widget</DialogTitle>
                            </DialogHeader>
                            <DialogDescription>
                                <WidgetForm />
                            </DialogDescription>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <div className="grid grid-cols-2 w-full h-full gap-2 p-2">
                <Card>
                    <CardContent>
                        <Piechart />
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Piechart />
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Piechart />
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Piechart />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Dashboard;