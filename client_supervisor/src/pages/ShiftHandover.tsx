import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Ellipsis } from "lucide-react"
import ShiftHandoverTable from "@/components/custom/shiftHandovertable"

const ShiftHandover = () => {
    return (
        <div id="ShiftHandover-wrapper" className=" font-poppins">
            <div className="mt-2 border-b pb-2 flex justify-between px-2 h-12">
                <div className="flex space-x-3">
                    <ToggleGroup type="single">
                        <ToggleGroupItem value="a">Last 24 hour</ToggleGroupItem>
                        <ToggleGroupItem value="b">Last Week</ToggleGroupItem>
                        <ToggleGroupItem value="c">Custom</ToggleGroupItem>
                    </ToggleGroup>
                    <Select>
                        <SelectTrigger className="w-[150px]">
                            <SelectValue placeholder="Sector" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Sector 1</SelectItem>
                            <SelectItem value="dark">Sector 2</SelectItem>
                            <SelectItem value="system">Sector 3</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="w-[150px]">
                            <SelectValue placeholder="Unit" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Unit 1</SelectItem>
                            <SelectItem value="dark">Unit 2</SelectItem>
                            <SelectItem value="system">Unit 3</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="w-[150px]">
                            <SelectValue placeholder="Report Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Report Type 1</SelectItem>
                            <SelectItem value="dark">Report Type 2</SelectItem>
                            <SelectItem value="system">Report Type 3</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
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
                    <Button><Ellipsis></Ellipsis></Button>
                </div>
            </div>
            <div>
                <ShiftHandoverTable></ShiftHandoverTable>
            </div>
        </div>
    )
}

export default ShiftHandover;