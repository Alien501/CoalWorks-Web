"use client"

import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ChevronDownIcon, ChevronUpIcon, AlertTriangle } from 'lucide-react'
import { Worker } from '@/lib/workerData'
import {Phone} from "lucide-react"

interface WorkerTableProps {
  workers: Worker[],
  onWorkerClicked: (a: number) => void;
}

export default function WorkerTable({ workers, onWorkerClicked }: WorkerTableProps) {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const TableContent = () => {
    return(
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Role/Department</TableHead>
          <TableHead>Shift Timing</TableHead>
          <TableHead>Current Task</TableHead>
          <TableHead>Zone/Location</TableHead>
          <TableHead>Contact</TableHead>
          {/* <TableHead></TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {workers.map((worker) => (
          <>
            <TableRow key={worker.id} onClick={() => onWorkerClicked(worker.id)} className='hover:cursor-pointer'>
              <TableCell>{worker.name}</TableCell>
              <TableCell>{`${worker.role} / ${worker.department}`}</TableCell>
              <TableCell>{`${worker.shiftStart} - ${worker.shiftEnd}`}</TableCell>
              <TableCell>{worker.currentTask}</TableCell>
              <TableCell>{worker.location}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm"><Phone /><span className=''>Contact</span></Button>
              </TableCell>
              {/* <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleRowExpansion(worker.id)}
                >
                  {expandedRows.includes(worker.id) ? (
                    <ChevronUpIcon className="h-4 w-4" />
                  ) : (
                    <ChevronDownIcon className="h-4 w-4" />
                  )}
                </Button>
              </TableCell> */}
            </TableRow>
            {/* {expandedRows.includes(worker.id) && (
              <TableRow>
                <TableCell colSpan={7}>
                  <div className="p-4 bg-muted rounded-md">
                    <p><strong>Task Progress:</strong> {worker.taskProgress}%</p>
                    <p><strong>Last Three Tasks:</strong> {worker.lastTasks.join(", ")}</p>
                    {worker.fatigueRisk && (
                      <p className="text-red-500 flex items-center mt-2">
                        <AlertTriangle className="mr-2 h-4 w-4" />
                        Fatigue Risk Alert: Extended work hours detected
                      </p>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            )} */}
          </>
        ))}
      </TableBody>
    </Table>
    )
  }

  const toggleRowExpansion = (workerId: number) => {
    setExpandedRows(prev =>
      prev.includes(workerId)
        ? prev.filter(id => id !== workerId)
        : [...prev, workerId]
    )
  }

  return (
    <>
      <TableContent />
    </>
  )
}

