import ShiftHandoverTable from "@/components/custom/shiftHandoverTable"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Link } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
export const ShiftHandover = () => {

    const navigate = useNavigate();
    return (
        <section id="round-plan">
            <div id="ShiftHandover-wrapper " className=" font-poppins px-[100px]">
                <div className="mt-24 pb-2 flex justify-between items-center px-2 h-12 ">
                    <span className="font-semibold text-2xl">Shift Handovers</span>
                    <div className="flex items-center">
                        <span className='pr-4'>
                            <div className="flex items-center border rounded w-60 p-1 ">
                                <Search className="text-gray-400 mr-2" size={20} />
                                <Input
                                    placeholder="Search Shift Handovers"
                                    className="w-full border-none focus:ring-0 focus:outline-none text-sm py-1"
                                />
                            </div>
                        </span>
                        <Button onClick={() => navigate("/create-shift-handover")}>Create New</Button>
                    </div>
                </div>
                <div className="border mt-3 rounded-lg">
                    <ShiftHandoverTable />
                </div>
            </div>
        </section>
    )
}