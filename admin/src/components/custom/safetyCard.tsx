import Map from "@/pages/map"
import { SirenIcon } from "lucide-react"
import AlertsCard from "./alertTimeLine"

export const SafetyCardContent = () => {
    return (
        <div className="h-full w-full">
            {/* <div className="w-full h-[200px] p-1">
                <Map
                    isEditable={false}
                />
            </div> */}
            <div>
                {/* <div className="flex justify-between items-center">
                    <div>
                        <SirenIcon className="text-red-500" />
                    </div>
                </div> */}
                <div>
                    <AlertsCard />
                </div>
            </div>
        </div>
    )
}
