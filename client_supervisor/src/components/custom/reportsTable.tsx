import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Ellipsis } from "lucide-react";
import { Star } from "lucide-react";

export default function ReportsTable({ reports, setFavouritesReportsData, favouritesReportsData, activeToggleItem }: { reports: any, setFavouritesReportsData: any, favouritesReportsData: any, activeToggleItem: any }) {
    console.log(favouritesReportsData)
    const [clickedStars, setClickedStars] = useState<{ [key: number]: boolean }>(
        {}
    );

    const toggleStar = (index: number) => {
        setFavouritesReportsData((prev: any) => [reports[index], ...prev])
        setClickedStars((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <Table>
            <TableHeader className="bg-black/[0.05]">
                <TableRow className="bg-black/[0.05]">
                    <TableHead className="w-[300px]">Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Created By</TableHead>
                    <TableHead>Created On</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            {activeToggleItem === "recent" || "" ? (
                <TableBody>
                    {reports?.map((report: any, index: number) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{report.Name}</TableCell>
                            <TableCell>{report.Description}</TableCell>
                            <TableCell>{report["Created By"]}</TableCell>
                            <TableCell>{report["Created On"]}</TableCell>
                            <TableCell className="">
                                <span className="hover:cursor-pointer flex space-x-2">
                                    <Star
                                        fill={`${clickedStars[index] ? "#FFE31A" : "white"
                                            }`}
                                        stroke={`${clickedStars[index] ? "#FFE31A" : "gray"
                                            }`}
                                        onClick={() => toggleStar(index)}
                                    />
                                    <Ellipsis className="w-10 rounded-full bg-black/[0.05]" />
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            ) : activeToggleItem === "favourite" ? (
                <TableBody>
                    {favouritesReportsData?.map((report: any, index: number) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{report.Name}</TableCell>
                            <TableCell>{report.Description}</TableCell>
                            <TableCell>{report["Created By"]}</TableCell>
                            <TableCell>{report["Created On"]}</TableCell>
                            <TableCell className="">
                                <span className="hover:cursor-pointer flex space-x-2">
                                    {/* <Star
                  fill={`${
                    clickedStars[index] ? "#FFE31A" : "white"
                  }`}
                  stroke={`${
                    clickedStars[index] ? "#FFE31A" : "gray"
                  }`}
                  onClick={() => toggleStar(index)}
                /> */}
                                    <Ellipsis className="w-10 rounded-full bg-black/[0.05]" />
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            ) : activeToggleItem === "all" ? (
                <TableBody>
                    {reports?.map((report: any, index: number) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{report.Name}</TableCell>
                            <TableCell>{report.Description}</TableCell>
                            <TableCell>{report["Created By"]}</TableCell>
                            <TableCell>{report["Created On"]}</TableCell>
                            <TableCell className="">
                                <span className="hover:cursor-pointer flex space-x-2">
                                    {/* <Star
                  fill={`${
                    clickedStars[index] ? "#FFE31A" : "white"
                  }`}
                  stroke={`${
                    clickedStars[index] ? "#FFE31A" : "gray"
                  }`}
                  onClick={() => toggleStar(index)}
                /> */}
                                    <Ellipsis className="w-10 rounded-full bg-black/[0.05]" />
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            ) : null
            }
        </Table>
    );
}
