
import Piechart from "@/components/custom/PieChart";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FileText, MailPlus } from "lucide-react";
import { useState } from "react";



const Dashboard = () => {
    const [dayFilter, setDayFilter] = useState('');

    const onDayFilterChanged = (e: string) => {
        setDayFilter(e);
    }
    

    return(
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
                    <Button>
                        <span>Create Widget</span>
                    </Button>
                </div>
            </div>
            <div>
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