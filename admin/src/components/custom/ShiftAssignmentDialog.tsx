import React, { useState, useMemo, useEffect } from 'react'
import axios from 'axios'
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from 'sonner'
import { ScrollArea } from '../ui/scroll-area'

// Existing interfaces + new ones
interface ShiftTemplate {
  id: number
  name: string
  startTime: string
  endTime: string
  description?: string
}

interface User {
  userId: number
  name: string
  role: 'SUPERVISOR' | 'OPERATOR'
}

interface ShiftAssignmentDialogProps {
  section: Section
  isOpen: boolean
  onClose: () => void
}

function ShiftAssignmentDialog({ 
  section, 
  isOpen, 
  onClose 
}: ShiftAssignmentDialogProps) {
  const [shiftTemplates, setShiftTemplates] = useState<ShiftTemplate[]>([])
  const [supervisors, setSupervisors] = useState<User[]>([])
  const [operators, setOperators] = useState<User[]>([])

  const [morningShiftData, setMorningShiftData] = useState({
    supervisor: null,
    operators: [],
    templates: []
  })
  const [afternoonShiftData, setAfternoonShiftData] = useState({
    supervisor: null,
    operators: [],
    templates: []
  })
  const [nightShiftData, setNightShiftData] = useState({
    supervisor: null,
    operators: [],
    templates: []
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [templatesRes, supervisorsRes, operatorsRes] = await Promise.all([
          axios.get('/api/data/shifttemplate'),
          axios.get('/api/data/user'),
          axios.get('/api/data/user')
        ])
        console.log("See here bruh")
        console.log(templatesRes.data)
        setShiftTemplates(templatesRes.data.data)
        setSupervisors(supervisorsRes.data.data)
        setOperators(operatorsRes.data.data)
      } catch (error) {
        toast.error("Failed to load shift assignment data")
      }
    }

    if (isOpen) {
      fetchData()
    }
  }, [isOpen])

  const handleSupervisorSelect = (shift: 'morning' | 'afternoon' | 'night', supervisor: User) => {
    const setShiftData = {
      'morning': setMorningShiftData,
      'afternoon': setAfternoonShiftData,
      'night': setNightShiftData
    }[shift]

    setShiftData(prev => ({
      ...prev,
      supervisor: supervisor
    }))
  }

  const handleOperatorToggle = (shift: 'morning' | 'afternoon' | 'night', operator: User) => {
    const setShiftData = {
      'morning': setMorningShiftData,
      'afternoon': setAfternoonShiftData,
      'night': setNightShiftData
    }[shift]

    setShiftData(prev => ({
      ...prev,
      operators: prev.operators.some(op => op.id === operator.id)
        ? prev.operators.filter(op => op.id !== operator.id)
        : [...prev.operators, operator]
    }))
  }

  const handleTemplateToggle = (shift: 'morning' | 'afternoon' | 'night', template: ShiftTemplate) => {
    const setShiftData = {
      'morning': setMorningShiftData,
      'afternoon': setAfternoonShiftData,
      'night': setNightShiftData
    }[shift]

    setShiftData(prev => ({
      ...prev,
      templates: prev.templates.some(t => t.id === template.id)
        ? prev.templates.filter(t => t.id !== template.id)
        : [...prev.templates, template]
    }))
  }

  const handleSaveShiftAssignment = async () => {
    try {
      const payload = {
        sectionId: section.id,
        shifts: {
          morning: morningShiftData,
          afternoon: afternoonShiftData,
          night: nightShiftData
        }
      }

      await axios.post('/api/section-shift-assignments', payload)
      toast.success("Shift assignments saved successfully")
      onClose()
    } catch (error) {
      toast.error("Failed to save shift assignments")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90%]">
        <ScrollArea>
            <DialogHeader>
            <DialogTitle>Assign Shifts for {section.name}</DialogTitle>
            <DialogDescription>
                Configure shift templates, supervisors, and operators
            </DialogDescription>
            </DialogHeader>

            {/* Shift Configuration Sections */}
            {['morning', 'afternoon', 'night'].map((shift) => (
            <div key={shift} className="border p-4 rounded-lg mb-4">
                <h3 className="text-lg font-semibold capitalize">{shift} Shift</h3>
                
                {/* Supervisor Selection */}
                <div className="mb-4">
                <label>Supervisor</label>
                <Select 
                    value={morningShiftData.supervisor?.id.toString()} 
                    onValueChange={(value) => {
                    const supervisor = supervisors.find(s => s.id === parseInt(value))
                    handleSupervisorSelect(shift as any, supervisor)
                    }}
                >
                    <SelectTrigger>
                    <SelectValue placeholder="Select Supervisor" />
                    </SelectTrigger>
                    <SelectContent>
                    {supervisors.map(supervisor => (
                        <SelectItem 
                        key={supervisor.userId} 
                        value={supervisor.userId.toString()}
                        >
                        {supervisor.username}
                        </SelectItem>
                    ))}
                    </SelectContent>
                </Select>
                </div>

                {/* Operators Selection */}
                <div className="mb-4">
                <label>Operators</label>
                <div className="grid grid-cols-3 gap-2">
                    {operators.map(operator => (
                    <div key={operator.userId} className="flex items-center space-x-2">
                        <Checkbox
                        checked={morningShiftData.operators.some(op => op.userId === operator.userId)}
                        onCheckedChange={() => handleOperatorToggle(shift as any, operator)}
                        />
                        <span>{operator.username}</span>
                    </div>
                    ))}
                </div>
                </div>

                {/* Shift Templates Selection */}
                <div>
                <label>Shift Templates</label>
                <div className="grid grid-cols-3 gap-2">
                    {shiftTemplates.map(template => (
                    <div key={template.id} className="flex items-center space-x-2">
                        <Checkbox
                        checked={morningShiftData.templates.some(t => t.id === template.id)}
                        onCheckedChange={() => handleTemplateToggle(shift as any, template)}
                        />
                        <span>{template.shiftTemplate.form_name}</span>
                    </div>
                    ))}
                </div>
                </div>
            </div>
            ))}

            <Button onClick={handleSaveShiftAssignment}>
            Save Shift Assignments
            </Button>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

export default ShiftAssignmentDialog