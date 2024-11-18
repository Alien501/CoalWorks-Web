import ArchivedTable from "@/components/custom/archivedTable";
import { Search } from "lucide-react"
const Archives = () => {
    return (
        <div id="Archives-wrapper" className=" font-poppins">
            <div className="flex justify-between items-center border-b h-12">
                <div className="pl-2 font-semibold">Archived</div>
                <div className="flex space-x-2 justify-center items-center">
                    <div className="h-full text-sm">62 Archived</div>
                    <div className="h-full flex items-center">
                        <span className='pr-4'>
                        <div className="flex items-center border rounded w-60 p-1">
                            <Search className="text-gray-400 mr-2" size={20} />
                            <input
                                placeholder="Search by description"
                                className="w-full border-none focus:ring-0 focus:outline-none text-sm py-1"
                            />
                        </div>
                    </span></div>
                </div>
            </div>
            <ArchivedTable></ArchivedTable>
        </div>
    )
}

export default Archives;