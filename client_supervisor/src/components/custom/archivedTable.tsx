import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Ellipsis } from "lucide-react"

const archives = [
    {
        "Recents": "Daily round",
        "Plant": "DAC - Daewoo Chemicals",
        "Archived": "2 days ago",
        "Last Published": "--",
        "Actions": "..."
    },
    {
        "Recents": "PDF_Publish_Custom_Text",
        "Plant": "BERG - Berigen Facility",
        "Archived": "3 days ago",
        "Last Published": "3 days ago",
        "Actions": "..."
    },
    {
        "Recents": "NAFO Daily Round",
        "Plant": "NAFO - Berigen Facility",
        "Archived": "2 days ago",
        "Last Published": "--",
        "Actions": "..."
    },
    {
        "Recents": "CPChem Bulletin Checklist",
        "Plant": "BERG - Berigen Facility",
        "Archived": "3 days ago",
        "Last Published": "13 days ago",
        "Actions": "..."
    }
]

export default function ArchivedTable() {
    return (
        <Table className="font-poppins">
            <TableHeader className="bg-black/[0.05]">
                <TableRow>
                    <TableHead className="w-[300px]">Recents</TableHead>
                    <TableHead>Plant</TableHead>
                    <TableHead>Archived</TableHead>
                    <TableHead>Last Published</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {archives.map((archive, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{archive.Recents}</TableCell>
                        <TableCell>{archive.Plant}</TableCell>
                        <TableCell>{archive.Archived}</TableCell>
                        <TableCell>{archive["Last Published"]}</TableCell>
                        <TableCell className=""><span className="hover:cursor-pointer"><Ellipsis className="w-10 rounded-full bg-black/[0.05] px-3 py-1 rounded-full"></Ellipsis></span></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
