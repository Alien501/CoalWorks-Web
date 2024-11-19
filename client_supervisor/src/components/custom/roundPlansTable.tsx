import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Ellipsis } from "lucide-react"
import { Star } from "lucide-react"

const plans = [
    {
        "Plan Name": "PDF_Publish_Custom_Text",
        "Status": "Published",
        "Plant": "BERG - Bergen Facility",
        "Last Published By": "Kiran Palani",
        "Last Published": "Today",
        "Created By": "Abhijit Maharana",
        "Actions": ""
    },
    {
        "Plan Name": "EMN T10 External Visual Check V1",
        "Status": "Published",
        "Plant": "PMB - PLQ1",
        "Last Published By": "Mark Vannoy",
        "Last Published": "5 days ago",
        "Created By": "Mark Vannoy",
        "Actions": ""
    },
    {
        "Plan Name": "M0001 Rounds",
        "Status": "Published",
        "Plant": "M0001 - M0001",
        "Last Published By": "Kiran Palani",
        "Last Published": "Today",
        "Created By": "Mohit Ravishankar",
        "Actions": ""
    },
    {
        "Plan Name": "CPChem Bulletin Checklist",
        "Status": "Published",
        "Plant": "BERG - Bergen Facility",
        "Last Published By": "Abhijit Maharana",
        "Last Published": "10 days ago",
        "Created By": "Satyanarayana Madagala",
        "Actions": ""
    },
    {
        "Plan Name": "Maintenance Plan",
        "Status": "Published",
        "Plant": "MEC - Mechanical Plant",
        "Last Published By": "Abhijit Maharana",
        "Last Published": "10 days ago",
        "Created By": "Sailaash Kandiraju",
        "Actions": ""
    },
    {
        "Plan Name": "Chem Inspection",
        "Status": "Published",
        "Plant": "1000 - Hamburg",
        "Last Published By": "Srinivas Mullapudi",
        "Last Published": "15 days ago",
        "Created By": "Srinivas Mullapudi",
        "Actions": ""
    },
    {
        "Plan Name": "Reliance Petro Plant Plan",
        "Status": "Published",
        "Plant": "REL - RELJamnagar",
        "Last Published By": "Sunitha Veerrachaneni",
        "Last Published": "16 days ago",
        "Created By": "Srinivas Mullapudi",
        "Actions": ""
    }
]

export default function RoundPlansTable() {
    return (
        <Table>
            <TableHeader className="bg-black/[0.05]">
                <TableRow className="bg-black/[0.05]">
                    <TableHead className="w-[300px]">Plan Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Plant</TableHead>
                    <TableHead>Last Published By</TableHead>
                    <TableHead>Last Published</TableHead>
                    <TableHead>Created By</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {plans.map((plan, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{plan["Plan Name"]}</TableCell>
                        <TableCell>{plan.Status}</TableCell>
                        <TableCell>{plan.Plant}</TableCell>
                        <TableCell>{plan["Last Published By"]}</TableCell>
                        <TableCell>{plan["Last Published"]}</TableCell>
                        <TableCell>{plan["Created By"]}</TableCell>
                        <TableCell className=""><span className="hover:cursor-pointer flex space-x-2"><Star></Star><Ellipsis className="w-10 rounded-full bg-black/[0.05]"></Ellipsis></span></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
