import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShiftTemplateBasicDetails } from "@/components/custom/shiftTemplateBasicDetails"
import { ShiftTemplateCard } from "@/components/custom/shiftTemplateCard"
import { useState } from "react"

export const CreateShiftHandover = () => {
    const [selectedPositions, setSelectedPositions] = useState([])
    const [shiftName, setShiftName] = useState("")
  return (
    <div className="flex justify-center min-h-screen p-4">
      <div className="w-full max-w-4xl">
        <Tabs defaultValue="basic-details" className="space-y-6">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="basic-details">Basic Details</TabsTrigger>
              <TabsTrigger value="template">Template</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="basic-details" className="flex justify-center">
            <ShiftTemplateBasicDetails selectedPositions={selectedPositions} setSelectedPositions={setSelectedPositions} setShiftName = {setShiftName} shiftName= {shiftName}/>
          </TabsContent>
          <TabsContent value="template" className="flex justify-center">
            <ShiftTemplateCard />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

