import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {Select, SelectTrigger, SelectValue, SelectItem, SelectContent } from "@/components/ui/select";
export default function ShipmentStatistics({onGraphChanged, graphType, graphList}: {
    onGraphChanged: any,
    graphType: any,
    graphList: any
}){
    return(
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
    )
}