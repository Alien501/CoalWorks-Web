import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Search } from "lucide-react"
import ReportsTable from "@/components/custom/reportsTable"
import { CreateReport } from "@/components/custom/createReport"
import { useState } from "react"
const Reports = () => {

    const reports = [
        {
            "Name": "Round Submissions",
            "Description": "A report containing round submission transactions",
            "Created By": "Manoj Tadikonda",
            "Created On": "10/11/23, 4:54 PM",
            "Actions": ""
        },
        {
            "Name": "Round Submissions",
            "Description": "A report containing round submission transactions",
            "Created By": "Kiran Palani",
            "Created On": "10/11/23, 6:47 PM",
            "Actions": "★"
        },
        {
            "Name": "Round Submissions",
            "Description": "A report containing round submission transactions",
            "Created By": "Kiran Palani",
            "Created On": "10/11/23, 6:49 PM",
            "Actions": ""
        },
        {
            "Name": "Round Overview - Sansa",
            "Description": "A report containing round submission transactions",
            "Created By": "Sanskar Jain",
            "Created On": "10/11/23, 7:49 PM",
            "Actions": ""
        },
        {
            "Name": "Round Compliance Sansa",
            "Description": "A report containing round submission transactions",
            "Created By": "Sanskar Jain",
            "Created On": "10/11/23, 8:14 PM",
            "Actions": ""
        },
        {
            "Name": "Issues Report Sansa",
            "Description": "A report containing issues raised in mRounds",
            "Created By": "Sanskar Jain",
            "Created On": "10/11/23, 8:34 PM",
            "Actions": "★"
        },
        {
            "Name": "Actions Report",
            "Description": "A report containing actions raised in mRounds",
            "Created By": "Manoj Tadikonda",
            "Created On": "10/11/23, 8:45 PM",
            "Actions": ""
        },
        {
            "Name": "Issues Report-11.10",
            "Description": "A report containing issues raised in mRounds",
            "Created By": "Manoj Tadikonda",
            "Created On": "10/11/23, 8:45 PM",
            "Actions": ""
        }
    ]    

    const [reportName, setReportName] = useState<string>("");
    const [description, setDescription] = useState<string>("")
    const [createdBy, setCreatedBy] = useState<string>("")
    const [reportsData, setReportsData] = useState(reports);
    const [favouritesReportsData, setFavouritesReportsData] = useState([])
    const [activeToggleItem, setActiveToggleItem] = useState("recent")

    return(
        <div id="ShiftHandover-wrapper" className=" font-poppins">
            <div className="mt-2 border-b pb-2 flex justify-between px-2 h-12">
                <div className="flex space-x-3">
                    <ToggleGroup type="single" value = {activeToggleItem} onValueChange={setActiveToggleItem}>
                        <ToggleGroupItem value="recent">Recent</ToggleGroupItem>
                        <ToggleGroupItem value="favourite">Favourite</ToggleGroupItem>
                        <ToggleGroupItem value="all">All</ToggleGroupItem>
                    </ToggleGroup>
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
                    <CreateReport setReportName = {setReportName} setDescription = {setDescription} setCreatedBy = {setCreatedBy} setReportsData = {setReportsData} reportName={reportName} description={description} createdBy={createdBy}></CreateReport>
                </div>
            </div>
            <div>
                <ReportsTable reports={reportsData} setFavouritesReportsData = {setFavouritesReportsData} favouritesReportsData = {favouritesReportsData} activeToggleItem = {activeToggleItem}></ReportsTable>
            </div>
        </div>
    )
}

export default Reports;