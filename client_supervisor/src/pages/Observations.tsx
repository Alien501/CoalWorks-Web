import ActionsChart from "@/components/custom/actionsChart";
import IssuesChart from "@/components/custom/issuesChart";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {Search} from "lucide-react"
import IssuesTable from "@/components/custom/issuesTable";

const Observations = () => {
    const [activeTab, setActiveTab] = useState('Issues');
    return (
        <div id="Observations-wrapper" className="w-full font-poppins">
            <div className="flex items-center justify-center w-full space-x-6 px-6 mt-4">
                <div className=" flex w-1/2 border rounded-lg p-2">
                    <div className="w-[40%]">
                        <h3 className="font-bold text-3xl">Total Issues</h3>
                        <div className="font-bold text-5xl">432</div>
                    </div>
                    <div className=" flex w-[60%] ">
                        <IssuesChart></IssuesChart>
                    </div>
                </div>
                <div className="w-1/2 flex border rounded-lg p-2">
                    <div className="w-[40%] ">
                        <h3 className="font-bold text-3xl text-nowrap">Total Actions</h3>
                        <div className="font-bold text-5xl">57</div>
                    </div>
                    <div className=" flex w-[60%]">
                        <ActionsChart></ActionsChart>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-end w-full h-12 mt-6 border-t">
                <div className="flex h-full">
                    <Button
                        variant={"ghost"}
                        className={`h-full w-32 rounded-none hover:bg-inherit ${activeTab === 'Issues' ? 'border-b-2 border-black' : ''}`}
                        onClick={() => setActiveTab('Issues')}
                    >
                        Issues
                    </Button>
                    <Button
                        variant={"ghost"}
                        className={`h-full w-32 rounded-none hover:bg-inherit ${activeTab === 'Actions' ? 'border-b-2 border-black' : ''}`}
                        onClick={() => setActiveTab('Actions')}
                    >
                        Actions
                    </Button>
                </div>
                <div className="flex space-x-5 h-full items-center">
                    <span className='pr-4'>
                        <div className="flex items-center border rounded w-60 p-1">
                            <Search className="text-gray-400 mr-2" size={20} />
                            <input
                                placeholder="Search"
                                className="w-full border-none focus:ring-0 focus:outline-none text-sm py-1"
                            />
                        </div>
                    </span>
                </div>
            </div>
            <div className="mt-1">
                <IssuesTable></IssuesTable>
            </div>
        </div>
    )
}

export default Observations;