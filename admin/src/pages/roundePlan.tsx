import RoundPlansTable from "@/components/custom/roundPlansTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fetchRounds } from "@/utils/fetchRounds";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const RoundPlan = () => {
    const [plans, setPlans] = useState([]);
    const getRounds = async () => {
        const res = await fetchRounds();
        if(!res) {
            setPlans([]);
            toast.success("No plans found!")
            return;
        }
        console.log(res)
        setPlans(prev => res);
    }

    useEffect(() => {
        getRounds();
    }, []);


    return (
        <section id="round-plan">
            <div id="ShiftHandover-wrapper " className=" font-poppins px-[100px]">
                <div className="mt-24 pb-2 flex justify-between items-center px-2 h-12 ">
                    <span className="font-semibold text-2xl">RoundPlans</span>
                    <div className="flex items-center">
                        <span className='pr-4'>
                            <div className="flex items-center border rounded w-60 p-1 ">
                                <Search className="text-gray-400 mr-2" size={20} />
                                <Input
                                    placeholder="Search Round Plans"
                                    className="w-full border-none focus:ring-0 focus:outline-none text-sm py-1"
                                />
                            </div>
                        </span>
                        <Link to={'/rounds-create'}>
                            <Button>Create New</Button>
                        </Link>
                    </div>
                </div>
                <div className="border mt-3 rounded-lg">
                    <RoundPlansTable plans={plans} />
                </div>
            </div>
        </section>
    )
}

export default RoundPlan;