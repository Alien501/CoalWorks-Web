import React from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table"
import { Button } from "../../ui/button"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
const logs = [
  {
    "Shift": "Aug 10, 2023 / Morning",
    "time": "8.00AM - 4.00PM",
    "Unit": "1000-Berk",
    "Shift Status": "Completed",
    "Shift Supervisor": "James",
    "Handover Status": "Submitted",
    "Submitted on": "03:38 PM, Aug 12",
    "Accepted By": "Smith",
    "Accepted on": "03:50 PM, Aug 12"
  },
  {
    "time": "8.00AM - 4.00PM",
    "Shift": "Aug 10, 2023 / Evening",
    "Unit": "1000-Berk",
    "Shift Status": "Completed",
    "Shift Supervisor": "--",
    "Handover Status": "Draft",
    "Submitted on": "--",
    "Accepted By": "Smith",
    "Accepted on": "--"
  },
  {
    "time": "8.00AM - 4.00PM",
    "Shift": "Aug 9, 2023 / Evening",
    "Unit": "1000-Berk",
    "Shift Status": "Completed",
    "Shift Supervisor": "Aaron",
    "Handover Status": "Submitted",
    "Submitted on": "--",
    "Accepted By": "Smith",
    "Accepted on": "--"
  },
  {
    "time": "8.00AM - 4.00PM",
    "Shift": "Aug 9, 2023 / Evening",
    "Unit": "1000-Berk",
    "Shift Status": "Completed",
    "Shift Supervisor": "James",
    "Handover Status": "Submitted",
    "Submitted on": "--",
    "Accepted By": "Smith",
    "Accepted on": "--"
  },
  {
    "time": "8.00AM - 4.00PM",
    "Shift": "Aug 8, 2023 / Evening",
    "Unit": "1000-Berk",
    "Shift Status": "Ongoing",
    "Shift Supervisor": "--",
    "Handover Status": "Draft",
    "Submitted on": "--",
    "Accepted By": "Smith",
    "Accepted on": "--"
  },
  {
    "time": "8.00AM - 4.00PM",
    "Shift": "Aug 8, 2023 / Evening",
    "Unit": "1000-Berk",
    "Shift Status": "Ongoing",
    "Shift Supervisor": "--",
    "Handover Status": "Draft",
    "Submitted on": "--",
    "Accepted By": "Smith",
    "Accepted on": "--"
  },
  {
    "time": "8.00AM - 4.00PM",
    "Shift": "Aug 10, 2023 / Morning",
    "Unit": "1000-Berk",
    "Shift Status": "Completed",
    "Shift Supervisor": "James",
    "Handover Status": "Submitted",
    "Submitted on": "03:38 PM, Aug 12",
    "Accepted By": "Smith",
    "Accepted on": "03:50 PM, Aug 12"
  },
  {
    "time": "8.00AM - 4.00PM",
    "Shift": "Aug 10, 2023 / Evening",
    "Unit": "1000-Berk",
    "Shift Status": "Completed",
    "Shift Supervisor": "--",
    "Handover Status": "Draft",
    "Submitted on": "--",
    "Accepted By": "Smith",
    "Accepted on": "--"
  },
  {
    "time": "8.00AM - 4.00PM",
    "Shift": "Aug 9, 2023 / Evening",
    "Unit": "1000-Berk",
    "Shift Status": "Completed",
    "Shift Supervisor": "Aaron",
    "Handover Status": "Submitted",
    "Submitted on": "--",
    "Accepted By": "Smith",
    "Accepted on": "--"
  },
  {
    "time": "8.00AM - 4.00PM",
    "Shift": "Aug 9, 2023 / Evening",
    "Unit": "1000-Berk",
    "Shift Status": "Completed",
    "Shift Supervisor": "James",
    "Handover Status": "Submitted",
    "Submitted on": "--",
    "Accepted By": "Smith",
    "Accepted on": "--"
  },
  {
    "time": "8.00AM - 4.00PM",
    "Shift": "Aug 8, 2023 / Evening",
    "Unit": "1000-Berk",
    "Shift Status": "Ongoing",
    "Shift Supervisor": "--",
    "Handover Status": "Draft",
    "Submitted on": "--",
    "Accepted By": "Smith",
    "Accepted on": "--"
  },
  {
    "time": "8.00AM - 4.00PM",
    "Shift": "Aug 8, 2023 / Evening",
    "Unit": "1000-Berk",
    "Shift Status": "Ongoing",
    "Shift Supervisor": "--",
    "Handover Status": "Draft",
    "Submitted on": "--",
    "Accepted By": "Smith",
    "Accepted on": "--"
  }
]




export function ShiftLogsTable() {
  return (
    <Table>
      <TableCaption>A list of Issues.</TableCaption>
      <TableHeader>
        <TableRow className="bg-blue-100">
          <TableHead className="w-[200px] ">Shift</TableHead>
          <TableHead>Unit</TableHead>
          <TableHead>Shift Status</TableHead>
          <TableHead>Shift Supervisor</TableHead>
          <TableHead>Handover Status</TableHead>
          <TableHead>Submitted on</TableHead>
          <TableHead>Accepted By</TableHead>
          <TableHead>Accepted on</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {logs.map((log, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{log.Shift} <br /> <span className="text-slate-500 text-[13px]">{log.time}</span></TableCell>
            <TableCell>{log.Unit}</TableCell>
            <TableCell><span className={`${log["Shift Status"] === "Completed" ? "text-green-500" : "text-yellow-400"} font-semibold`}>{log["Shift Status"]}</span></TableCell>
            <TableCell className="flex space-x-3 items-center">
              <span>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </span>
              <span>
                {log["Shift Supervisor"]}
              </span>
            </TableCell>
            <TableCell><span className={`${log["Handover Status"]==="Submitted"? "px-3 py-1 rounded-full bg-green-500":"px-3 py-1 rounded-full bg-yellow-500"}`}>{log["Handover Status"]}</span></TableCell>
            <TableCell><span>{log["Submitted on"]}</span></TableCell>
            <TableCell className="flex items-center space-x-3">
              <span>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </span>
              <span>
                {log["Accepted By"]}
              </span>
            </TableCell>
            <TableCell>{log["Accepted on"]}</TableCell>
            <TableCell className="text-right">. . .</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
