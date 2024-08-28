import LBar from "@/components/mine/LBar/Lbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import PlanRounds from "./PlanRounds";
import PlanShift from "./PlanShift";

const ShiftPlanning = () => {
  return(
    <div className="min-h-screen overflow-hidden">
      <LBar />
      <div className="my-14 min-h-screen flex justify-center items-center" style={{
        width: 'calc(100% - 60px)',
        left: '60px',
        position: 'relative'
      }}>
        <Tabs defaultValue="plan" className="w-[90%] mx-auto block p-1">
          <TabsList className="block mx-auto w-max">
            <TabsTrigger value="plan">Plan</TabsTrigger>
            <TabsTrigger value="rounds">Rounds</TabsTrigger>
          </TabsList>
          <TabsContent value="plan" className="min-h-screen">
            <PlanShift />
          </TabsContent>
          <TabsContent value="rounds" className="min-h-screen">
            <PlanRounds />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default ShiftPlanning;