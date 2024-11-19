import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Ellipsis } from "lucide-react";

interface Shift {
    name: string;
    time: string;
    isActive: boolean;
}

const shifts: Shift[] = [
    {
        name: 'A_India_night',
        isActive: true,
        time: '19:00-06:59'
    },
    {
        name: 'B_India_mrng',
        isActive: false,
        time: '07:00-18:59'
    },
]

const MasterShift = () => {
    return(
        <section id="master-shift-section">
            <div className="flex h-16 justify-between p-2 items-center">
                <div>
                    <span className="text-lg font-bold">Shifts</span>
                </div>
                <div className="flex space-x-2">
                    <Input placeholder="Search by shift name"/>
                    <Button>Create New</Button>
                </div>
            </div>
            <div>
                <Table className="bg-black/[0.05]">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Shift Name</TableHead>
                            <TableHead>Start & End Time</TableHead>
                            <TableHead>Active</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>                    
                    </TableHeader>
                    <TableBody>
                        {
                            shifts.map(shift => (
                                <TableRow className="bg-white">
                                    <TableCell>{shift.name}</TableCell>
                                    <TableCell>{shift.time}</TableCell>
                                    <TableCell><Switch checked={shift.isActive} /></TableCell>
                                    <TableCell className="text-right flex justify-end pr-8">
                                        <span className="hover:cursor-pointer"><Ellipsis className="w-5" /></span>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        </section>
    )
}

export default MasterShift;