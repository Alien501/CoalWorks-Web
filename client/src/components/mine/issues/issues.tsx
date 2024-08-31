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
const issues = [
    {
        "Title": "Issue in the Boiler",
        "description": "description",
        "Location/Asset": "Boiler",
        "Asset ID": "1234534",
        "Raised By": "John Williams",
        "Category": "Observations",
        "Priority": "Low",
        "Status": "In-Progress",
        "Shift": "Shift A",
        "Notification No.": "1234256"
    },
    {
        "Title": "Slippery surface",
        "description": "description",
        "Location/Asset": "-",
        "Asset ID": "-",
        "Raised By": "John Williams",
        "Category": "Incident",
        "Priority": "High",
        "Status": "Open",
        "Shift": "Shift A",
        "Notification No.": "-"
    },
    {
        "Title": "Oil Leakage",
        "description": "description",
        "Location/Asset": "-",
        "Asset ID": "-",
        "Raised By": "John Williams",
        "Category": "Near Miss",
        "Priority": "Emergency",
        "Status": "Open",
        "Shift": "Shift B",
        "Notification No.": "-"
    },
    {
        "Title": "Gas out brust",
        "description": "description",
        "Location/Asset": "-",
        "Asset ID": "-",
        "Raised By": "Jim Cook",
        "Category": "Hazard",
        "Priority": "High",
        "Status": "Open",
        "Shift": "Shift B",
        "Notification No.": "-"
    }
]



export function Issues() {
    return (
        <Table>
            <TableCaption>A list of Issues.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[200px]">Title</TableHead>
                    <TableHead>Location/Asset</TableHead>
                    <TableHead>Raised By</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Shift</TableHead>
                    <TableHead className="text-right">Notification No.</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {issues.map((issue, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{issue.Title} <br /> {issue.description}</TableCell>
                        <TableCell>{issue["Location/Asset"]} <br /> {issue["Asset ID"]}</TableCell>
                        <TableCell>{issue["Raised By"]}</TableCell>
                        <TableCell>{issue.Category}</TableCell>
                        <TableCell><span className={`${issue.Priority === "Low" ? " text-slate-500" : "text-red-500"}`}>{issue.Priority}</span></TableCell>
                        <TableCell><span className={`${issue.Status === "In-Progress" ? "bg-yellow-500 rounded-full px-3 py-1" : "bg-slate-400 rounded-full px-3 py-1"}`}>{issue.Status}</span></TableCell>
                        <TableCell>{issue.Shift}</TableCell>
                        <TableCell className="text-right">{issue["Notification No."]}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
