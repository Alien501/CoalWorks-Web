import ShiftHandoverTable from "@/components/custom/shiftHandoverTable"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Link } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
export const ShiftHandover = () => {
    const navigate = useNavigate();

    return (
        <section id="round-plan" className="h-[88vh] overflow-hidden">
            <div className="h-20 flex items-center justify-center">
                <h1 className="text-3xl font-bold">Manage Shifts</h1>
            </div>
            <div className="h-full grid grid-cols-2 place-content-center place-items-center">
                <Card onClick={() => navigate('/shift-handover')} className="w-60 h-60 hover:cursor-pointer hover:shadow-lg hover:bg-azure-radiance-500">
                    <CardContent className="flex items-center justify-center h-full">
                        <h1 className="font-bold text-2xl text-center">Shift Handover</h1>
                    </CardContent>
                </Card>
                <Card onClick={() => navigate('/shift-templates')} className="w-60 h-60 hover:cursor-pointer hover:shadow-lg hover:bg-azure-radiance-500">
                    <CardContent className="flex items-center justify-center h-full">
                        <h1 className="font-bold text-2xl text-center">Shift-log template</h1>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
// <div id="ShiftHandover-wrapper " className=" font-poppins px-[100px]">
//     <div className="mt-24 pb-2 flex justify-between items-center px-2 h-12 ">
//         <span className="font-semibold text-2xl">Shift Handovers</span>
//         <div className="flex items-center">
//             <span className='pr-4'>
//                 <div className="flex items-center border rounded w-60 p-1 ">
//                     <Search className="text-gray-400 mr-2" size={20} />
//                     <Input
//                         placeholder="Search Shift Handovers"
//                         className="w-full border-none focus:ring-0 focus:outline-none text-sm py-1"
//                     />
//                 </div>
//             </span>
//             <Button onClick={() => navigate("/create-shift-handover")}>Create New</Button>
//         </div>
//     </div>
//     <div className="border mt-3 rounded-lg">
//         <ShiftHandoverTable />
//     </div>
// </div>