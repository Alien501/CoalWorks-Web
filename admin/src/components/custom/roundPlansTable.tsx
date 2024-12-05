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
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { fetchSections } from "@/utils/fetchSections"
import { useEffect, useState } from "react"
import { toast } from "sonner"

interface Section {
    id: number,
    name: string,
    sectionType: number,
    area: number
}
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


export default function RoundPlansTable({ plans }: { plans: any }) {
    const [sections, setSections] = useState<Section[]>([])
    const [selectedSection, setSelectedSection] = useState<number | null>(null)

    useEffect(() => {
        const fetSectionsHandler = async () => {
            setSections(await fetchSections())
        }
        fetSectionsHandler()
    }, [])

    function onScheduleRoundHandler(id:number){
        toast.success(`Round/PlanId ${id} for the scheduled for the section ${selectedSection}`)
    }

    return (
        <Table>
            <TableHeader className="bg-black/[0.05]">
                <TableRow className="bg-black/[0.05]">
                    <TableHead className="w-[300px] py-4">Plan Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Plant</TableHead>
                    <TableHead>Last Published By</TableHead>
                    <TableHead>Last Edited</TableHead>
                    <TableHead>Schedule Round</TableHead>
                    <TableHead>Created By</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {plans.map((plan: any, index: number) => (
                    <TableRow key={plan.planId}>
                        <TableCell className="font-medium py-4">{plan.planName}</TableCell>
                        <TableCell><Badge variant={'secondary'}>{plan.status}</Badge></TableCell>
                        <TableCell>{plan.plantId}</TableCell>
                        <TableCell>{plan["Last Published By"] || 'NA'}</TableCell>
                        <TableCell>{plan.updatedAt}</TableCell>
                        <TableCell>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline">Schedule</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Schedule Round</DialogTitle>
                                        <DialogDescription>
                                            Schedule rounds to the sections
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="section" className="text-right">
                                                Sections
                                            </Label>
                                            <Select
                                                value={selectedSection?.toString() || ''}
                                                onValueChange={(value) => setSelectedSection(value ? Number(value) : null)}
                                            >
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Select a section" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Sections</SelectLabel>
                                                        {sections?.map((section: any) => (
                                                            <SelectItem
                                                                key={section.id}
                                                                value={section.id.toString()}
                                                            >
                                                                {section.name}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>

                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit" onClick={() => onScheduleRoundHandler(plan.planId)}>Save changes</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </TableCell>
                        <TableCell>{plan["Created By"]}</TableCell>
                        <TableCell className=""><span className="hover:cursor-pointer flex space-x-2"><Star></Star><Ellipsis className="w-10 rounded-full bg-black/[0.05]"></Ellipsis></span></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
