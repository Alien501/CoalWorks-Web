'use client'

import React, { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface User {
  userId: string
  username: string
}

interface ShiftTemplate {
  shiftTemplateId: string
  form_name: string
}

interface ShiftData {
  supervisor: string | null
  workers: string[]
  selectedTemplates: string[]
}

export default function ShiftAssignmentDialog() {
  const [users, setUsers] = useState<User[]>([])
  const [shiftTemplates, setShiftTemplates] = useState<ShiftTemplate[]>([])
  const [shiftData, setShiftData] = useState<Record<string, ShiftData>>({
    morning: { supervisor: null, workers: [], selectedTemplates: [] },
    afternoon: { supervisor: null, workers: [], selectedTemplates: [] },
    night: { supervisor: null, workers: [], selectedTemplates: [] },
  })

  useEffect(() => {
    // Simulating API calls
    setUsers([
      { userId: "1", username: "John Doe" },
      { userId: "2", username: "Jane Smith" },
      { userId: "3", username: "Bob Johnson" },
    ])
    setShiftTemplates([
      { shiftTemplateId: "1", form_name: "Standard Shift" },
      { shiftTemplateId: "2", form_name: "Extended Shift" },
      { shiftTemplateId: "3", form_name: "Special Operations" },
    ])
  }, [])

  const handleSupervisorChange = (shift: string, userId: string) => {
    setShiftData((prev) => ({
      ...prev,
      [shift]: { ...prev[shift], supervisor: userId },
    }))
  }

  const handleWorkerChange = (shift: string, userId: string) => {
    setShiftData((prev) => {
      const currentWorkers = prev[shift].workers
      const updatedWorkers = currentWorkers.includes(userId)
        ? currentWorkers.filter((id) => id !== userId)
        : [...currentWorkers, userId]
      return {
        ...prev,
        [shift]: { ...prev[shift], workers: updatedWorkers },
      }
    })
  }

  const handleTemplateChange = (shift: string, templateId: string) => {
    setShiftData((prev) => {
      const currentTemplates = prev[shift].selectedTemplates
      const updatedTemplates = currentTemplates.includes(templateId)
        ? currentTemplates.filter((id) => id !== templateId)
        : [...currentTemplates, templateId]
      return {
        ...prev,
        [shift]: { ...prev[shift], selectedTemplates: updatedTemplates },
      }
    })
  }

  const handleSave = () => {
    console.log("Saving shift data:", shiftData)
    // Implement your save logic here
  }

  return (
    <Dialog>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Assign Shifts</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="morning">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="morning">Morning Shift</TabsTrigger>
            <TabsTrigger value="afternoon">Afternoon Shift</TabsTrigger>
            <TabsTrigger value="night">Night Shift</TabsTrigger>
          </TabsList>
          {Object.entries(shiftData).map(([shift, data]) => (
            <TabsContent key={shift} value={shift}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor={`${shift}-supervisor`}>Supervisor</Label>
                  <Select
                    value={data.supervisor || ""}
                    onValueChange={(value) => handleSupervisorChange(shift, value)}
                  >
                    <SelectTrigger id={`${shift}-supervisor`}>
                      <SelectValue placeholder="Select Supervisor" />
                    </SelectTrigger>
                    <SelectContent>
                      {users.map((user) => (
                        <SelectItem key={user.userId} value={user.userId}>
                          {user.username}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Workers</Label>
                  <ScrollArea className="h-[200px] w-full border rounded-md p-4">
                    {users.map((user) => (
                      <div key={user.userId} className="flex items-center space-x-2 mb-2">
                        <Checkbox
                          id={`${shift}-worker-${user.userId}`}
                          checked={data.workers.includes(user.userId)}
                          onCheckedChange={() => handleWorkerChange(shift, user.userId)}
                        />
                        <Label
                          htmlFor={`${shift}-worker-${user.userId}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {user.username}
                        </Label>
                      </div>
                    ))}
                  </ScrollArea>
                </div>
                <div>
                  <Label>Shift Templates</Label>
                  <ScrollArea className="h-[150px] w-full border rounded-md p-4">
                    {shiftTemplates.map((template) => (
                      <div key={template.shiftTemplateId} className="flex items-center space-x-2 mb-2">
                        <Checkbox
                          id={`${shift}-template-${template.shiftTemplateId}`}
                          checked={data.selectedTemplates.includes(template.shiftTemplateId)}
                          onCheckedChange={() => handleTemplateChange(shift, template.shiftTemplateId)}
                        />
                        <Label
                          htmlFor={`${shift}-template-${template.shiftTemplateId}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {template.form_name}
                        </Label>
                      </div>
                    ))}
                  </ScrollArea>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <DialogFooter>
          <Button onClick={handleSave}>Save Assignments</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}   