import { Badge } from "@/components/ui/badge"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Map from "@/pages/map"
import { ProductionGraph } from "./areaChart"
const shift =
    [
        {
            "Name": "John Doe",
            "ShiftCompleted": 8,
            "IncidentsLog": 2,
            "CoalProduced": 1500,
            "AvgHandoverDelay": "5 mins"
        },
        {
            "Name": "Jane Smith",
            "ShiftCompleted": 6,
            "IncidentsLog": 0,
            "CoalProduced": 1200,
            "AvgHandoverDelay": "3 mins"
        },
        {
            "Name": "Alice Johnson",
            "ShiftCompleted": 10,
            "IncidentsLog": 1,
            "CoalProduced": 1800,
            "AvgHandoverDelay": "7 mins"
        },
        {
            "Name": "Bob Brown",
            "ShiftCompleted": 7,
            "IncidentsLog": 3,
            "CoalProduced": 1400,
            "AvgHandoverDelay": "6 mins"
        },
        {
            "Name": "Charlie Green",
            "ShiftCompleted": 9,
            "IncidentsLog": 1,
            "CoalProduced": 1600,
            "AvgHandoverDelay": "4 mins"
        }
    ]

export default function Dashboard() {
    return (
        <div className="h-full w-full font-satoshi">
            <h3 className="pl-6 pt-5 font-semibold text-xl ">Overview Dashboard</h3>
            <div className="grid grid-cols-[55%_45%] py-3 px-5 gap-4">
                <div className="rounded-2xl border border-gray-300 h-[420px]">
                    <div className="flex flex-col h-full">
                        <div className="h-[65%] flex px-5">
                            <div className="w-[40%]">
                                <p className="font-semibold text-gray-700 pt-3 ">Total Productivity overview</p>
                                <p className="font-semibold text-gray-500 text-sm">12-Jan-2023 - 12-Jan-2024</p>
                                <div className="flex space-x-2 mt-10 items-center">
                                    <svg width="40px" height="40px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M21 7.35304L21 16.647C21 16.8649 20.8819 17.0656 20.6914 17.1715L12.2914 21.8381C12.1102 21.9388 11.8898 21.9388 11.7086 21.8381L3.30861 17.1715C3.11814 17.0656 3 16.8649 3 16.647L2.99998 7.35304C2.99998 7.13514 3.11812 6.93437 3.3086 6.82855L11.7086 2.16188C11.8898 2.06121 12.1102 2.06121 12.2914 2.16188L20.6914 6.82855C20.8818 6.93437 21 7.13514 21 7.35304Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.52844 7.29357L11.7086 11.8381C11.8898 11.9388 12.1102 11.9388 12.2914 11.8381L20.5 7.27777" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 21L12 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    <span className="text-4xl font-bold">100/200</span>
                                </div>
                                <Badge variant={"outline"} className="mt-3">You have a great performance 💪</Badge>
                            </div>
                            <div className="w-[60%]">
                                <ProductionGraph></ProductionGraph>
                            </div>
                        </div>
                        <div className="h-[35%] flex space-x-4 py-4">
                            <div className="border-r flex-1 px-5 flex flex-col justify-between items-center">
                                <div className="flex space-x-3 justify-center items-center">
                                    <span className="p-3 border rounded-full bg-slate-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                                        </svg>
                                    </span>
                                    <p className=" leading-tight">Avg Shift Compl. time</p>
                                </div>
                                <span className="font-bold text-3xl">30 min</span>
                            </div>
                            <div className="border-r flex-1 px-5 flex flex-col justify-between items-center">
                                <div className="flex space-x-3 justify-center items-center">
                                    <span className="p-3 border rounded-full bg-slate-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </span>
                                    <p className=" leading-tight">Total Delay</p>
                                </div>
                                <span className="font-bold text-3xl">22 min</span>
                            </div>
                            <div className="border-r flex-1 px-5 flex flex-col justify-between items-center">
                                <div className="flex space-x-3 justify-center items-center">
                                    <span className="p-3 border rounded-full bg-slate-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                        </svg>
                                    </span>
                                    <p className=" leading-tight">Flagged incidents</p>
                                </div>
                                <span className="font-bold text-3xl">43</span>
                            </div>
                            <div className="border-r flex-1 px-5 flex flex-col justify-between items-center">
                                <div className="flex space-x-3 justify-center items-center">
                                    <span className="p-3 border rounded-full bg-slate-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                                        </svg>
                                    </span>
                                    <p className=" leading-tight">Handover efficiency</p>
                                </div>
                                <span className="font-bold text-3xl">75%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rounded-2xl border border-gray-300 h-[420px] flex">
                    <div className="w-[55%] rounded-2xl h-full pl-3 py-3">
                        <h3 className="font-semibold mb-2">Resource utilisation overview</h3>
                        <div className="w-full flex gap-2 h-[calc(100%-40px)]">
                            <div className="rounded-2xl flex-1 overflow-hidden flex flex-col gap-2">
                                <div className="flex-1 border rounded-2xl border-gray-300 px-5 pt-3">
                                    <h3 className="font-semibold ">Coal Transpile</h3>
                                </div>
                                <div className="flex-1 border rounded-2xl border-gray-300 px-5 pt-3">
                                    <h3 className="font-semibold">Equipment Utilization</h3>
                                </div>
                            </div>
                            <div className="rounded-2xl flex-1 overflow-hidden flex flex-col gap-2">
                                <div className="flex-1 border rounded-2xl border-gray-300 px-5 pt-3">
                                    <h3 className="font-semibold ">Coal in Transit</h3>
                                </div>
                                <div className="flex-1 border rounded-2xl border-gray-300 px-5 pt-3">
                                    <h3 className="font-semibold">Attendance</h3>
                                </div>
                                <div className="flex-1 border rounded-2xl border-gray-300 px-5 pt-3">
                                    <h3 className="font-semibold">Need Attention</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[45%] rounded-2xl flex flex-col p-3 gap-2">
                        <div className="border border-gray-300 flex-1 rounded-2xl px-5 pt-3 flex flex-col ">
                            <h3 className=" font-semibold text-lg">Critical Issues (24h)</h3>
                            <span className="text-4xl text-red-500 font-bold mt-5">12</span>
                        </div>
                        <div className="border border-gray-300 flex-1 rounded-2xl">
                            <h3 className="px-5 pt-3 font-semibold">Safety Trends</h3>
                        </div>

                    </div>

                </div>
                <div className="rounded-2xl border border-gray-300 h-[420px] px-5 pt-3">
                    <h3 className="font-semibold">Mine Division Overview</h3>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Name</TableHead>
                                <TableHead>Shift Completed</TableHead>
                                <TableHead>Incidents log</TableHead>
                                <TableHead>Coal Produced</TableHead>
                                <TableHead className="text-right">Avg Handover delay</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {shift.map((shift, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{shift.Name}</TableCell>
                                    <TableCell>{shift.ShiftCompleted}</TableCell>
                                    <TableCell>{shift.IncidentsLog}</TableCell>
                                    <TableCell>{shift.CoalProduced}</TableCell>
                                    <TableCell className="text-right">{shift.AvgHandoverDelay}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="rounded-2xl border border-gray-300 h-[420px] p-3"><Map></Map></div>
            </div>
        </div>
    )
}

