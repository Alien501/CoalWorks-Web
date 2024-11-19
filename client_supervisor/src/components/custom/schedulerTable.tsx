import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {Ellipsis} from "lucide-react"

const plansData = [
    {
        "Name": "Test Plan 14",
        "Plant": "7201 - OPCO Petro 2 (LC)",
        "Shift": "2307_4, 2307_3, 2307_2",
        "Location": "1",
        "Assets": "1",
        "Tasks": "6",
        "Schedule": "Daily",
        "Rounds Generated": "6",
        "Actions": "..."
    },
    {
        "Name": "AVO Rounds",
        "Plant": "7201 - OPCO Petro 2 (LC)",
        "Shift": null,
        "Location": "2",
        "Assets": "3",
        "Tasks": "20",
        "Schedule": "Ad-Hoc",
        "Rounds Generated": "--",
        "Actions": "..."
    },
    {
        "Name": "CNC Rounds",
        "Plant": "BEL3000 - Belgian",
        "Shift": null,
        "Location": "1",
        "Assets": "0",
        "Tasks": "5",
        "Schedule": "Custom Dates",
        "Rounds Generated": "1",
        "Actions": "..."
    },
    {
        "Name": "Rounds Test Android",
        "Plant": "PMB - PLT-01",
        "Shift": null,
        "Location": "1",
        "Assets": "4",
        "Tasks": "38",
        "Schedule": "Schedule",
        "Rounds Generated": "--",
        "Actions": "..."
    },
    {
        "Name": "Shop Floor Inspection 3",
        "Plant": "BEL3000 - Belgian",
        "Shift": "2307_4, 2307_3, 2307_2",
        "Location": "1",
        "Assets": "0",
        "Tasks": "9",
        "Schedule": "Daily",
        "Rounds Generated": "14",
        "Actions": "..."
    },
    {
        "Name": "ROOM 5 - Checklists",
        "Plant": "PMB - PLT-01",
        "Shift": null,
        "Location": "1",
        "Assets": "4",
        "Tasks": "37",
        "Schedule": "Schedule",
        "Rounds Generated": "--",
        "Actions": "..."
    },
    {
        "Name": "Shop Floor Inspection 2",
        "Plant": "BEL3000 - Belgian",
        "Shift": null,
        "Location": "1",
        "Assets": "0",
        "Tasks": "9",
        "Schedule": "Daily",
        "Rounds Generated": "30",
        "Actions": "..."
    }
]


export function SchedulerTable() {
    return (
        <Table className="font-poppins mt-1">
            <TableHeader className="bg-black/[0.05]">
                <TableRow>
                    <TableHead className="w-[200px]">Name</TableHead>
                    <TableHead>Sector</TableHead>
                    <TableHead>Shift</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Assets</TableHead>
                    <TableHead>Tasks</TableHead>
                    <TableHead>Schedule</TableHead>
                    <TableHead>Rounds Generated</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {plansData.map((plan, index) => (
                    <TableRow key={index} className="h-14">
                        <TableCell className="font-medium">{plan.Name}</TableCell>
                        <TableCell>{plan.Plant}</TableCell>
                        <TableCell>{plan.Shift}</TableCell>
                        <TableCell>{plan.Location}</TableCell>
                        <TableCell>{plan.Assets}</TableCell>
                        <TableCell>{plan.Tasks}</TableCell>
                        <TableCell>{plan.Schedule}</TableCell>
                        <TableCell>{plan["Rounds Generated"]}</TableCell>
                        <TableCell className=""><span className="hover:cursor-pointer"><Ellipsis className="w-5"></Ellipsis></span></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
