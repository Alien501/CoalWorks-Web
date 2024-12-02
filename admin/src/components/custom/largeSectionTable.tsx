import React, { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MapView } from "./mapView";
// import type { LargeSection } from "@/types/section";

interface LargeSectionTableProps {
    sortColumn: string;
    sortOrder: "asc" | "desc";
    handleSort: (column: string) => void;
    largeSectionDummyData: LargeSection[];
    deleteSection: (sectionName: string, type: string) => void;
    sectionType: string;
}

export const LargeSectionTable: React.FC<LargeSectionTableProps> = ({
    sortColumn,
    sortOrder,
    handleSort,
    largeSectionDummyData,
    deleteSection,
    sectionType
}) => {
    const [selectedSection, setSelectedSection] = useState<LargeSection | null>(null);

    return (
        <div className="border rounded-lg overflow-hidden">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="cursor-pointer" onClick={() => handleSort("Plant Id")}>
                            Name {sortColumn === "Plant Id" && (sortOrder === "asc" ? "▲" : "▼")}
                        </TableHead>
                        <TableHead className="cursor-pointer" onClick={() => handleSort("Description")}>
                            Description {sortColumn === "Description" && (sortOrder === "asc" ? "▲" : "▼")}
                        </TableHead>
                        <TableHead className="cursor-pointer" onClick={() => handleSort("Area")}>
                            Area {sortColumn === "Area" && (sortOrder === "asc" ? "▲" : "▼")}
                        </TableHead>
                        <TableHead className="cursor-pointer" onClick={() => handleSort("Type")}>
                            Type {sortColumn === "Type" && (sortOrder === "asc" ? "▲" : "▼")}
                        </TableHead>
                        <TableHead>View on Map</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {largeSectionDummyData.map((item) => (
                        <TableRow key={item.sectionId}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.description || "N/A"}</TableCell>
                            <TableCell>{item.area ? parseFloat(item.area.toString()).toFixed(2) : "N/A"}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>
                                <Button onClick={() => setSelectedSection(item)}>View Map</Button>
                            </TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="h-8 w-8 p-0">
                                            <span className="sr-only">Open menu</span>
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                        <DropdownMenuItem>Edit Section</DropdownMenuItem>
                                        <DropdownMenuItem>View Details</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem 
                                            className="text-red-600" 
                                            onClick={() => deleteSection(item.name, sectionType)}
                                        >
                                            Delete Section
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Dialog open={!!selectedSection} onOpenChange={() => setSelectedSection(null)}>
                <DialogContent className="sm:max-w-[800px] sm:max-h-[600px]">
                    <DialogHeader>
                        <DialogTitle>{selectedSection?.itemName}</DialogTitle>
                    </DialogHeader>
                    {selectedSection && <MapView coordinates={selectedSection.coordinates || []} />}
                </DialogContent>
            </Dialog>
        </div>
    );
};