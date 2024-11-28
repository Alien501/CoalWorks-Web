import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { filterWorkers, Worker, workerData } from '../../lib/workerData'
import { useState } from "react"
import { Input } from "../ui/input"
import WorkerTable from "./workersTable"
import { BarGraph, PieGraph } from "./graphs"
import { ScrollArea } from "../ui/scroll-area"
import WorkerDetails from "./wrokerDetails"

export function DialogModel({ dialogTrigger }: {
    dialogTrigger: any
}) {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedDepartment, setSelectedDepartment] = useState('All')
    const filteredWorkers = filterWorkers(workerData, searchTerm, selectedDepartment)
    const [expandedRows, setExpandedRows] = useState<number[]>([])

    const toggleRowExpansion = (workerId: number) => {
        setExpandedRows(prev =>
            prev.includes(workerId)
                ? prev.filter(id => id !== workerId)
                : [...prev, workerId]
        )
    }
    const DefaultItem = () => {
        return (
            <>
                <div className="h-[200px] grid grid-cols-2 gap-2 place-content-center mt-6">
                    <div className="place-self- w-full h-full">
                        <BarGraph />
                    </div>
                    <div className="place-self-center w-full h-full">
                        <PieGraph />
                    </div>
                </div>
                <div className="flex mt-7 space-x-4 mb-4">
                    <Input
                        placeholder="Search workers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-grow"
                    />
                    <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Department" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="All">All Departments</SelectItem>
                            <SelectItem value="Operations">Operations</SelectItem>
                            <SelectItem value="Safety">Safety</SelectItem>
                            <SelectItem value="Mining">Mining</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <ScrollArea className="h-full">
                    <WorkerTable onWorkerClicked={onWorkerClicked} workers={filteredWorkers} />
                </ScrollArea>
            </>
        )
    }

    const [currentItem, setCurrentItem] = useState(<DefaultItem />)

    const onBackButtonClicked = () => {
        setCurrentItem(<DefaultItem />)
    }

    const onWorkerClicked = (workerId: number) => {
        const workerDetails: Worker = workerData.find(worker => worker.id == workerId);
        setCurrentItem(prev => <WorkerDetails onBackButtonPressed={onBackButtonClicked} workerData={workerDetails} />)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                {dialogTrigger}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px] h-max">
                <DialogContent className="max-w-4xl max-h-[80vh] h-[80vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>
                            Active Workers Overview
                        </DialogTitle>
                    </DialogHeader>
                    {currentItem}
                </DialogContent>
            </DialogContent>
        </Dialog>
    )
}