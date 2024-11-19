import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Ellipsis } from "lucide-react"

const templates = [
    {
        "Name": "plan NF duplicate action Copy(S)",
        "F.Loc": "1",
        "Assets": "1",
        "Tasks": "1",
        "Status": "Ready",
        "Used in Round Plans": "--",
        "Modified By": "Durga prasad Gembali",
        "Created By": "Durga prasad Gembali",
        "Actions": "..."
    },
    {
        "Name": "plan NF duplicate action",
        "F.Loc": "1",
        "Assets": "0",
        "Tasks": "1",
        "Status": "Ready",
        "Used in Round Plans": "--",
        "Modified By": "Durga prasad Gembali",
        "Created By": "Durga prasad Gembali",
        "Actions": "..."
    },
    {
        "Name": "plan NF duplicate action",
        "F.Loc": "1",
        "Assets": "0",
        "Tasks": "0",
        "Status": "Draft",
        "Used in Round Plans": "--",
        "Modified By": "Durga prasad Gembali",
        "Created By": "Durga prasad Gembali",
        "Actions": "..."
    },
    {
        "Name": "Control Valve Maintenance",
        "F.Loc": "1",
        "Assets": "1",
        "Tasks": "3",
        "Status": "Ready",
        "Used in Round Plans": "1",
        "Modified By": "Sachin Venkataraman",
        "Created By": "Sachin Venkataraman",
        "Actions": "..."
    },
    {
        "Name": "Test template",
        "F.Loc": "1",
        "Assets": "0",
        "Tasks": "0",
        "Status": "Ready",
        "Used in Round Plans": "--",
        "Modified By": "Durga prasad Gembali",
        "Created By": "Durga prasad Gembali",
        "Actions": "..."
    },
    {
        "Name": "Before Migration 3 Ready",
        "F.Loc": "1",
        "Assets": "0",
        "Tasks": "0",
        "Status": "Ready",
        "Used in Round Plans": "--",
        "Modified By": "Durga prasad Gembali",
        "Created By": "Durga prasad Gembali",
        "Actions": "..."
    },
    {
        "Name": "Before Migration 3 Draft",
        "F.Loc": "1",
        "Assets": "0",
        "Tasks": "1",
        "Status": "Draft",
        "Used in Round Plans": "--",
        "Modified By": "Durga prasad Gembali",
        "Created By": "Durga prasad Gembali",
        "Actions": "..."
    }
]

export default function TemplatesTable() {
    return (
        <Table>
            <TableHeader className="bg-black/[0.05]">
                <TableRow>
                    <TableHead className="w-[250px]">Name</TableHead>
                    <TableHead>F.Loc</TableHead>
                    <TableHead>Assets</TableHead>
                    <TableHead>Tasks</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Used in Round Plans</TableHead>
                    <TableHead>Modified by</TableHead>
                    <TableHead>Created by</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {templates.map((template, index) => (
                    <TableRow key={index} className="h-14">
                        <TableCell className="font-medium flex items-center">
                            <span className="mr-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="30px"
                                    width="30px"
                                    viewBox="0 -960 960 960"
                                    fill="#000000"
                                >
                                    <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
                                </svg>
                            </span>
                            {template.Name}
                        </TableCell>

                        <TableCell>{template["F.Loc"]}</TableCell>
                        <TableCell>{template.Assets}</TableCell>
                        <TableCell>{template.Tasks}</TableCell>
                        <TableCell><span className={`${template.Status == "Ready" ? "bg-green-400" : "bg-yellow-300"} px-3 py-1 rounded-full`}>{template.Status}</span></TableCell>
                        <TableCell>{template["Used in Round Plans"]}</TableCell>
                        <TableCell>{template["Modified By"]}</TableCell>
                        <TableCell>{template["Created By"]}</TableCell>
                        <TableCell className=""><span className="hover:cursor-pointer"><Ellipsis className="w-10 rounded-full bg-black/[0.05]"></Ellipsis></span></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
