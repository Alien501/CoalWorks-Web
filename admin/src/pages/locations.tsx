import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Ellipsis } from "lucide-react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const locations = [
    {
        Name: "Mine Site 1",
        Description: "N/A",
        Model: "GM",
        Parent: "California Mine",
    },
    {
        Name: "Mine Site 2",
        Description: "N/A",
        Model: "N/A",
        Parent: "California Mine",
    },
    {
        Name: "California Mine",
        Description: "N/A",
        Model: "N/A",
        Parent: "N/A",
    },
    {
        Name: "Excavators",
        Description: "N/A",
        Model: "GE",
        Parent: "California Mine",
    },
    {
        Name: "Pump House",
        Description: "N/A",
        Model: "N/A",
        Parent: "Fukushima Nuclear Power Plant",
    },
    {
        Name: "Reactor Room",
        Description: "N/A",
        Model: "N/A",
        Parent: "Fukushima Nuclear Power Plant",
    },
    {
        Name: "Turbine Room",
        Description: "N/A",
        Model: "N/A",
        Parent: "Turbine Room",
    },
    {
        Name: "Power Plant (Area_001)",
        Description: "N/A",
        Model: "N/A",
        Parent: "N/A",
    },
    {
        Name: "Fukushima Nuclear Power Plant",
        Description: "N/A",
        Model: "N/A",
        Parent: "N/A",
    },
];

export default function Locations() {
    return (
        <div>
            <div className="mt-2 border-b pb-2 flex justify-between items-center px-2 h-12">
                <span className="font-semibold">Locations</span>
                <div className="flex space-x-3">
                    <span className=''>
                        <div className="flex items-center border rounded w-60">
                            <Search className="text-gray-400 mr-2" size={20} />
                            <input
                                placeholder="Search"
                                className="w-full border-none focus:ring-0 focus:outline-none text-sm py-2"
                            />
                        </div>
                    </span>
                    <Button>Create New</Button>
                    <Button><Ellipsis></Ellipsis></Button>
                </div>
            </div>
            <Table>
                <TableHeader className="bg-black/[0.05]">
                    <TableRow>
                        <TableHead className="w-[200px]">Name</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Model</TableHead>
                        <TableHead>Parent</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {locations.map((location, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{location.Name}</TableCell>
                            <TableCell>{location.Description}</TableCell>
                            <TableCell>{location.Model}</TableCell>
                            <TableCell>{location.Parent}</TableCell>
                            <TableCell className="flex justify-end pr-7">
                                <span className="hover:cursor-pointer">
                                    <Ellipsis className="w-5" />
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
