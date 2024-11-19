import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Ellipsis } from "lucide-react";
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Factory } from "lucide-react"
const Plants = () => {
    const plants = [
        {
            "Name": "DTY Plant",
            "Plant Id": "DTY Plant",
            "Country": "IN",
            "State": "Maharashtra",
            "Zip Code": "400324"
        },
        {
            "Name": "Hershey",
            "Plant Id": "HER",
            "Country": "USA",
            "State": "USA",
            "Zip Code": "940404"
        },
        {
            "Name": "RELJamNagar",
            "Plant Id": "REL",
            "Country": "REL",
            "State": "Gujarat",
            "Zip Code": "500006"
        },
        {
            "Name": "JK Cement",
            "Plant Id": "112909",
            "Country": "India",
            "State": "Rajasthan",
            "Zip Code": "400983"
        },
        {
            "Name": "Cement Production Plant",
            "Plant Id": "1008",
            "Country": "IN",
            "State": "Maharashtra",
            "Zip Code": "440023"
        },
        {
            "Name": "Chems Plant",
            "Plant Id": "1100",
            "Country": "USA",
            "State": "Texas",
            "Zip Code": "462132"
        },
        {
            "Name": "Pasadena Plastics",
            "Plant Id": "UA01",
            "Country": "US",
            "State": "CA",
            "Zip Code": "010020"
        }
    ]

    return (
        <div id="ShiftHandover-wrapper" className=" font-poppins">
            <div className="mt-2 border-b pb-2 flex justify-between items-center px-2 h-12">
                <span className="font-semibold">Plants</span>
                <div className="flex">
                    <span className='pr-4'>
                        <div className="flex items-center border rounded w-60 p-1">
                            <Search className="text-gray-400 mr-2" size={20} />
                            <input
                                placeholder="Search"
                                className="w-full border-none focus:ring-0 focus:outline-none text-sm py-1"
                            />
                        </div>
                    </span>
                    <Button>Create New</Button>
                </div>
            </div>
            <div>
                <Table>
                    <TableHeader className="bg-black/[0.05]">
                        <TableRow>
                            <TableHead className="w-[200px]">Name</TableHead>
                            <TableHead>Plant Id</TableHead>
                            <TableHead>Country</TableHead>
                            <TableHead>State</TableHead>
                            <TableHead>Zip Code</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {plants.map((plant, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium flex space-x-2"><span className="mr-2"><Factory></Factory></span><span>{plant.Name}</span></TableCell>
                                <TableCell>{plant["Plant Id"]}</TableCell>
                                <TableCell>{plant.Country}</TableCell>
                                <TableCell>{plant.State}</TableCell>
                                <TableCell>{plant["Zip Code"]}</TableCell>
                                <TableCell className="text-right flex justify-end pr-8">
                                    <span className="hover:cursor-pointer"><Ellipsis className="w-5" /></span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        </div>
    )
}

export default Plants;