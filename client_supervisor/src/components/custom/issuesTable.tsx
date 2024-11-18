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

const issues = [
    {
        "Title": "Feed pump is broken",
        "Location/Asset": "--",
        "Plant": "--",
        "Priority": "Medium",
        "Status": "Open",
        "Due Date": "13 May 2023",
        "Notification No.": "--",
        "Assigned To": "sachinkumar.venkat@innovapptive.com",
        "Actions": "..."
    },
    {
        "Title": "Raised issue for equipment",
        "Location/Asset": "--",
        "Plant": "--",
        "Priority": "Medium",
        "Status": "Open",
        "Due Date": "29 Apr 2023",
        "Notification No.": "--",
        "Assigned To": "--",
        "Actions": "..."
    },
    {
        "Title": "High Temp",
        "Location/Asset": "--",
        "Plant": "UA01",
        "Priority": "Medium",
        "Status": "Resolved",
        "Due Date": "02 May 2023",
        "Notification No.": "--",
        "Assigned To": "--",
        "Actions": "..."
    },
    {
        "Title": "Inconsistent temperature reading",
        "Location/Asset": "--",
        "Plant": "1100",
        "Priority": "Medium",
        "Status": "In-Progress",
        "Due Date": "02 May 2023",
        "Notification No.": "--",
        "Assigned To": "abhijit.maharana@innovapptive.com + 1 more",
        "Actions": "..."
    }
]

export default function IssuesTable() {
    return (
        <Table>
            <TableHeader className="bg-black/[0.05]">
                <TableRow>
                    <TableHead className="w-[200px]">Title</TableHead>
                    <TableHead>Location/Asset</TableHead>
                    <TableHead>Plant</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Notification No.</TableHead>
                    <TableHead>Assigned To</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {issues.map((issue, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{issue.Title}</TableCell>
                        <TableCell>{issue["Location/Asset"]}</TableCell>
                        <TableCell>{issue.Plant}</TableCell>
                        <TableCell>{issue.Priority}</TableCell>
                        <TableCell><span className={`${issue.Status == "Open" ? "bg-red-500" : issue.Status == "Resolved" ? "bg-green-500" : "bg-yellow-300"} px-3 py-1 rounded-full`}>{issue.Status}</span></TableCell>
                        <TableCell>{issue["Due Date"]}</TableCell>
                        <TableCell>{issue["Notification No."]}</TableCell>
                        <TableCell>{issue["Assigned To"]}</TableCell>
                        <TableCell className=""><span className="hover:cursor-pointer"><Ellipsis className="w-5"></Ellipsis></span></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
