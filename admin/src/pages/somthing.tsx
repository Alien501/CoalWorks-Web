"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, PenToolIcon as Tool, HardHat, ChevronDown, CheckCircle2, UserPlus, AlertOctagon, Check } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock data for predictions and tasks
const predictions = [
  {
    id: 1,
    headline: "Equipment Breakdown Likely in Zone B",
    incidentType: "Breakdown",
    severity: "Critical",
    probability: 87,
    recommendedAction: "Dispatch a maintenance team to Zone B within 2 hours.",
    reason: "High vibration detected on Conveyor Belt 4",
    workflow: [
      "1. Assess Conveyor Belt 4 for unusual vibrations",
      "2. Check belt tension and alignment",
      "3. Inspect rollers and bearings",
      "4. Lubricate necessary components",
      "5. Report findings and actions taken"
    ],
    personnelAllocation: "Maintenance Team Alpha"
  }
]

const tasks = [
  {
    id: 1,
    title: "Unattended Safety Breach in Zone C",
    prediction: "Will escalate to Critical in 2 hours",
    action: "Assign Safety Team Bravo to investigate",
    type: "safety",
    severity: "High"
  },
  {
    id: 2,
    title: "SHIFT-008 tasks are 60% delayed",
    prediction: "Productivity will drop below 75%",
    action: "Reallocate one team from SHIFT-009 to SHIFT-008",
    type: "delay",
    severity: "Moderate"
  },
  {
    id: 3,
    title: "Excavator #47 overdue for maintenance",
    prediction: "Breakdown risk: High",
    action: "Schedule immediate servicing",
    type: "equipment",
    severity: "High"
  }
]

export default function PriorityActionsSMP() {
  const [resolutionProgress, setResolutionProgress] = useState(60)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Priority Actions (Powered by SMP)</CardTitle>
          <CardDescription>Real-time predictions and actionable insights</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {predictions.map((prediction) => (
              <PredictionCard key={prediction.id} prediction={prediction} />
            ))}
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span>Resolution Progress</span>
              <span>{resolutionProgress}%</span>
            </div>
            <Progress value={resolutionProgress} className="w-full" />
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

function PredictionCard({ prediction }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-yellow-500" />
          {prediction.headline}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Incident Type:</span>
            <span className="font-medium">{prediction.incidentType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Severity:</span>
            <Badge variant={prediction.severity === "Critical" ? "destructive" : "default"}>
              {prediction.severity}
            </Badge>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Probability:</span>
            <span className="font-medium">{prediction.probability}%</span>
          </div>
          <div className="pt-2">
            <p className="text-sm font-medium">Recommended Action:</p>
            <p className="text-sm">{prediction.recommendedAction}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2">
        <Button variant="outline" size="sm" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Hide Details" : "View Details"}
          <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
        </Button>
        {isExpanded && (
          <div className="w-full space-y-2 pt-2">
            <p className="text-sm"><strong>Reason for Prediction:</strong> {prediction.reason}</p>
            <div>
              <p className="text-sm font-medium">Recommended Workflow:</p>
              <ul className="list-disc list-inside text-sm pl-2">
                {prediction.workflow.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
            <p className="text-sm"><strong>Personnel Allocation:</strong> {prediction.personnelAllocation}</p>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}

function TaskCard({ task }) {
  const getIcon = (type) => {
    switch (type) {
      case "equipment":
        return <Tool className="h-5 w-5" />
      case "delay":
        return <HardHat className="h-5 w-5" />
      case "safety":
        return <AlertOctagon className="h-5 w-5" />
      default:
        return null
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          {getIcon(task.type)}
          {task.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm"><strong>Prediction:</strong> {task.prediction}</p>
          <p className="text-sm"><strong>Suggested Action:</strong> {task.action}</p>
          <div className="flex justify-between items-center">
            <Badge variant={task.severity === "High" ? "destructive" : "default"}>
              {task.severity}
            </Badge>
            <div className="space-x-2">
              <Button size="icon" variant="outline">
                <CheckCircle2 className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline">
                <UserPlus className="h-4 w-4" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="outline">
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Check className="mr-2 h-4 w-4" /> Acknowledge
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <AlertTriangle className="mr-2 h-4 w-4" /> Escalate
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CheckCircle2 className="mr-2 h-4 w-4" /> Resolve
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


export {
    PredictionCard
}