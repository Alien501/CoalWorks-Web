import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog"
import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"
import { Label } from "../ui/label"
import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "sonner"

interface User {
  userId: number;
  username: string;
  email: string;
  phone: string;
  isSupervisor: boolean;
}

interface UserResponse {
  userId: number;
  user: User;
}

interface Shift {
  name: string;
  isActive: boolean;
  shiftId: number;
  startTime: string;
  endTime: string;
}

interface ShiftAssignment {
  shift: Shift;
  supervisor: User;
  operators: UserResponse[];
}

export const AssignWorkForce = ({ overAllSelectedSection }: {
  overAllSelectedSection: any
}) => {
  const [supervisors, setSupervisors] = useState<User[]>([])
  const [operators, setOperators] = useState<UserResponse[]>([])
  const [shifts, setShifts] = useState<Shift[]>([])
  const [selectedShift, setSelectedShift] = useState<Shift | null>(null)
  const [selectedSupervisor, setSelectedSupervisor] = useState<User | null>(null)
  const [selectedOperators, setSelectedOperators] = useState<UserResponse[]>([])
  const [shiftAssignments, setShiftAssignments] = useState<Record<number, ShiftAssignment>>({})

  useEffect(() => {
    async function fetchUsers() {
      const supervisorsRes = await axios.get(`/api/data/section/${overAllSelectedSection.id}/supervisors`);
      const operatorsRes = await axios.get(`/api/data/sectionuser/${overAllSelectedSection.id}/users`);
    
      setSupervisors(supervisorsRes.data);
      setOperators(operatorsRes.data);
    }
    async function fetchShifts() {
      const res = await axios.get(`/api/data/shift`)
      setShifts(res.data.data)
    }
    fetchUsers();
    fetchShifts();
  }, [overAllSelectedSection?.id])

  const handleShiftSelection = (shift: Shift) => {
    setSelectedShift(shift)
  }

  const handleSupervisorSelect = (supervisor: User) => {
    setSelectedSupervisor(supervisor)
  }

  const handleOperatorToggle = (operator: UserResponse) => {
    setSelectedOperators(prev => 
      prev.some(op => op.userId === operator.userId)
        ? prev.filter(op => op.userId !== operator.userId)
        : [...prev, operator]
    )
  }

  const handleAssignToShift = () => {
    if (selectedShift && selectedSupervisor) {
      setShiftAssignments(prev => ({
        ...prev,
        [selectedShift.shiftId]: {
          shift: selectedShift,
          supervisor: selectedSupervisor,
          operators: selectedOperators
        }
      }))
      setSelectedShift(null)
      setSelectedSupervisor(null)
      setSelectedOperators([])
    }
  }

  const handleAssignWorkforceShifts = async () => {
    try {
      const assignments = Object.values(shiftAssignments).map(assignment => ({
        shiftId: assignment.shift.shiftId,
        userId: assignment.supervisor.userId,
        operatorIds: assignment.operators.map(op => op.userId)
      }))

      await axios.post('/api/data/shift/assign-shifts', {
        sectionId: overAllSelectedSection.id,
        assignments
      })

      toast.success('Workforce shifts assigned successfully')
      setShiftAssignments({})
    } catch (error) {
      console.error('Error assigning workforce shifts:', error)
      toast.error('Failed to assign workforce shifts')
    }
  }

  return (
    <DialogContent className="w-[95vw] max-w-[95vw] h-[90%] sm:w-[90vw] sm:max-w-[90vw] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Assign Workforce to {overAllSelectedSection?.name}</DialogTitle>
        <DialogDescription>
          Select and assign supervisors and operators to shifts
        </DialogDescription>
      </DialogHeader>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Shifts Selection */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Shifts</h3>
          {shifts.map(shift => (
            <Button
              key={shift.shiftId}
              variant={selectedShift?.shiftId === shift.shiftId ? "default" : "outline"}
              className="w-full mb-2"
              onClick={() => handleShiftSelection(shift)}
            >
              {shift.name}
            </Button>
          ))}
        </div>

        {/* Supervisors Selection */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Supervisors</h3>
          {supervisors.map(supervisor => (
            <div
              key={supervisor.userId}
              className={`p-2 mb-2 cursor-pointer rounded ${
                selectedSupervisor?.userId === supervisor.userId
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent"
              }`}
              onClick={() => handleSupervisorSelect(supervisor)}
            >
              {supervisor.username}
            </div>
          ))}
        </div>

        {/* Operators Selection */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Operators</h3>
          {operators.map(operator => (
            <div key={operator.userId} className="flex items-center space-x-2 mb-2">
              <Checkbox
                id={`operator-${operator.userId}`}
                checked={selectedOperators.some(op => op.userId === operator.userId)}
                onCheckedChange={() => handleOperatorToggle(operator)}
              />
              <Label htmlFor={`operator-${operator.userId}`}>{operator.user.username}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* Assign Button */}
      <div className="mt-4">
        <Button
          onClick={handleAssignToShift}
          disabled={!selectedShift || !selectedSupervisor}
        >
          Assign to Shift
        </Button>
      </div>

      {/* Assigned Shifts Display */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Assigned Shifts</h3>
        {Object.values(shiftAssignments).map(assignment => (
          <div
            key={assignment.shift.shiftId}
            className="border p-4 mb-2 rounded"
          >
            <div className="font-bold">{assignment.shift.name}</div>
            <div className="text-muted-foreground">
              Supervisor: {assignment.supervisor.username}
            </div>
            <div>
              Operators: {assignment.operators.map(op => op.user.username).join(", ")}
            </div>
          </div>
        ))}
      </div>

      {/* Assign Workforce Shifts Button */}
      <div className="mt-6">
        <Button
          onClick={handleAssignWorkforceShifts}
          disabled={Object.keys(shiftAssignments).length === 0}
          className="w-full"
        >
          Assign Workforce Shifts
        </Button>
      </div>
    </DialogContent>
  )
}

