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
import { Ellipsis } from "lucide-react"

const shiftHandovers = [
    {
        "Shift": "Mar 19, 2024 / SHR 13:25 to 13:40",
        "Plant": "NEW_SHR_PLANT_11",
        "Unit": "--",
        "Shift Status": "Completed",
        "Position": "--",
        "Handover Status": "Accepted",
        "Submitted By": "--",
        "Submitted On": "01:59 PM, Mar 19",
        "Actions": "Innovapptive Inc"
    },
    {
        "Shift": "Mar 19, 2024 / SHR END 13:05 to 13:20",
        "Plant": "NEW_SHR_PLANT_11",
        "Unit": "--",
        "Shift Status": "Completed",
        "Position": "--",
        "Handover Status": "Auto-Submitted",
        "Submitted By": "--",
        "Submitted On": "01:53 PM, Mar 19",
        "Actions": "Innovapptive Inc"
    },
    {
        "Shift": "Mar 19, 2024 / SHR END 12:35 to 12:50",
        "Plant": "NEW_SHR_PLANT_11",
        "Unit": "--",
        "Shift Status": "Completed",
        "Position": "--",
        "Handover Status": "Submitted",
        "Submitted By": "Innovapptive Inc",
        "Submitted On": "01:03 PM, Mar 19",
        "Actions": "Innovapptive Inc"
    },
    {
        "Shift": "Mar 19, 2024 / SHR END 12:35 to 12:50",
        "Plant": "NEW_SHR_PLANT_11",
        "Unit": "--",
        "Shift Status": "Completed",
        "Position": "Loc:4 NEW-SHR-11",
        "Handover Status": "Submitted",
        "Submitted By": "Innovapptive Inc",
        "Submitted On": "12:59 PM, Mar 19",
        "Actions": "Innovapptive Inc"
    },
    {
        "Shift": "Mar 18, 2024 / 18:30 - 18:50",
        "Plant": "NEW_SHR_PLANT_11",
        "Unit": "--",
        "Shift Status": "Completed",
        "Position": "Loc:4-NEW-SHIFT-1",
        "Handover Status": "Submitted",
        "Submitted By": "Innovapptive Inc",
        "Submitted On": "06:45 PM, Mar 18",
        "Actions": "Innovapptive Inc"
    },
    {
        "Shift": "Mar 18, 2024 / 16:35 - 17:00",
        "Plant": "NEW_SHR_PLANT_11",
        "Unit": "--",
        "Shift Status": "Completed",
        "Position": "--",
        "Handover Status": "Accepted",
        "Submitted By": "Innovapptive Inc",
        "Submitted On": "05:07 PM, Mar 18",
        "Actions": "Sac"
    }
]

export default function ShiftHandoverTable() {
    return (
        <Table>
            <TableHeader className="bg-black/[0.05]">
                <TableRow>
                    <TableHead className="w-[300px]">Shift</TableHead>
                    <TableHead>Plant</TableHead>
                    <TableHead>Unit</TableHead>
                    <TableHead>Shift Status</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Handover Status</TableHead>
                    <TableHead>Submitted By</TableHead>
                    <TableHead>Submitted On</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {shiftHandovers.map((shift, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{shift.Shift}</TableCell>
                        <TableCell>{shift.Plant}</TableCell>
                        <TableCell>{shift.Unit}</TableCell>
                        <TableCell>{shift["Shift Status"]}</TableCell>
                        <TableCell>{shift.Position}</TableCell>
                        <TableCell>{shift["Handover Status"]}</TableCell>
                        <TableCell>{shift["Submitted By"]}</TableCell>
                        <TableCell>{shift["Submitted On"]}</TableCell>
                        <TableCell className=""><span className="hover:cursor-pointer"><Ellipsis className="w-10 rounded-full bg-black/[0.05]"></Ellipsis></span></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
