import { useState } from 'react';
import { SchedulerTable } from "@/components/custom/schedulerTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react"
const Scheduler = () => {
    const [activeTab, setActiveTab] = useState('Plans');

    return (
        <div id="Scheduler-wrapper" className="w-full">
            <div className="flex justify-between items-end w-full h-12 font-poppins">
                <div className="flex h-full">
                    <Button
                        variant={"ghost"}
                        className={`h-full w-32 rounded-none hover:bg-inherit ${activeTab === 'Plans' ? 'border-b-2 border-black' : ''}`}
                        onClick={() => setActiveTab('Plans')}
                    >
                        Plans
                    </Button>
                    <Button
                        variant={"ghost"}
                        className={`h-full w-32 rounded-none hover:bg-inherit ${activeTab === 'Rounds' ? 'border-b-2 border-black' : ''}`}
                        onClick={() => setActiveTab('Rounds')}
                    >
                        Rounds
                    </Button>
                </div>
                <div className="flex space-x-5 h-full items-center">
                    <Button className="h-6 py-4 rounded-full">All(255)</Button>
                    <Button className="h-6 py-4 rounded-full">Scheduled(255)</Button>
                    <Button className="h-6 py-4 rounded-full">Unscheduled(255)</Button>
                    <span className='pr-4'>
                        <div className="flex items-center border rounded w-60 p-1">
                            <Search className="text-gray-400 mr-2" size={20} />
                            <input
                                placeholder="Search by description"
                                className="w-full border-none focus:ring-0 focus:outline-none text-sm py-1"
                            />
                        </div>
                    </span>
                </div>
            </div>
            <SchedulerTable></SchedulerTable>
        </div>
    );
}

export default Scheduler;
