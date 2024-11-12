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
const exceptions = [
    {
        "Value": "99 Pa",
        "Location/Asset": "Boiler",
        "Asset ID": "1234534",
        "Normal Range": "20 - 90 Pa",
        "Status": "Warning",
        "Round": "Safety Check of Boilers",
        "Trend": "View"
    },
    {
        "Value": "145 F",
        "Location/Asset": "Boiler",
        "Asset ID": "1234534",
        "Normal Range": "100 - 120 F",
        "Status": "Warning",
        "Round": "Safety Check of Boilers",
        "Trend": "View"
    },
    {
        "Value": "1800 RPM",
        "Location/Asset": "Turbine",
        "Asset ID": "567890",
        "Normal Range": "1600 - 1800 RPM",
        "Status": "Normal",
        "Round": "Routine Inspection",
        "Trend": "Stable"
    },
    {
        "Value": "78%",
        "Location/Asset": "Condenser",
        "Asset ID": "345678",
        "Normal Range": "70 - 80%",
        "Status": "Normal",
        "Round": "Monthly Check",
        "Trend": "View"
    },
    {
        "Value": "95 dB",
        "Location/Asset": "Compressor",
        "Asset ID": "789012",
        "Normal Range": "80 - 100 dB",
        "Status": "Normal",
        "Round": "Noise Level Audit",
        "Trend": "Stable"
    },
    {
        "Value": "60%",
        "Location/Asset": "Cooling Tower",
        "Asset ID": "890123",
        "Normal Range": "50 - 65%",
        "Status": "Normal",
        "Round": "Quarterly Inspection",
        "Trend": "View"
    }
]


export function Exceptions() {
    return (
        <Table>
            <TableCaption>A list of Exceptions.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Value</TableHead>
                    <TableHead>Location/Asset</TableHead>
                    <TableHead>Normal Range</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Round</TableHead>
                    <TableHead className="text-right">Trend</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {exceptions.map((exception, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium flex space-x-3">
                            <span>{exception.Status === 'Warning' && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-octagon-alert"
                                >
                                    <path d="M12 16h.01" />
                                    <path d="M12 8v4" />
                                    <path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z" />
                                </svg>
                            )}
                            </span>
                            <span>{exception.Value}</span>
                        </TableCell>
                        <TableCell>{exception["Location/Asset"]} <br /> {exception["Asset ID"]}</TableCell>
                        <TableCell>{exception["Normal Range"]}</TableCell>
                        <TableCell><span className={`${exception.Status === "Warning" ? "bg-red-500 rounded-full px-3 py-1" : "bg-transparent px-3 py-1"}`}>{exception.Status}</span></TableCell>
                        <TableCell>{exception.Round}</TableCell>
                        <TableCell className="text-right">
                            {
                                exception.Trend === 'Stable' ?
                                    (
                                        <span className="px-4">Stable</span>
                                    ) :
                                    (
                                        <Button variant="link" className="text-blue-600">{exception.Trend}</Button>
                                    )
                            }
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
