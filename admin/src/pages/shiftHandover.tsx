import { useNavigate } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ClipboardList, FileText } from 'lucide-react'

export const ShiftHandover = () => {
  const navigate = useNavigate()

  return (
    <section className="container mx-auto px-4 py-8 h-screen flex flex-col">
      <h1 className="text-4xl font-bold text-center mb-12">Manage Shifts</h1>
      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="w-72 h-72 transition-all duration-300 hover:shadow-xl group">
            <CardContent className="p-6 h-full flex flex-col items-center justify-center space-y-4">
              <ClipboardList className="w-16 h-16 text-primary transition-colors duration-300" />
              <h2 className="text-2xl font-semibold text-center transition-colors duration-300">Shift Handover</h2>
              <Button 
                variant="outline" 
                className="mt-4 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                onClick={() => navigate('/shift-handover')}
              >
                View Handovers
              </Button>
            </CardContent>
          </Card>
          <Card className="w-72 h-72 transition-all duration-300 hover:shadow-xl group">
            <CardContent className="p-6 h-full flex flex-col items-center justify-center space-y-4">
              <FileText className="w-16 h-16 text-primary transition-colors duration-300" />
              <h2 className="text-2xl font-semibold text-center transition-colors duration-300">Shift-log Template</h2>
              <Button 
                variant="outline" 
                className="mt-4 w-full transition-all duration-300 hover:text-black hover:bg-white"
                onClick={() => navigate('/shift-templates')}
              >
                Manage Templates
              </Button>
            </CardContent>
          </Card>
        </div>
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