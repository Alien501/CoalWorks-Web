import { Table, TableBody, TableRow, TableCell, TableHeader, TableHead } from "../ui/table"
import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuSeparator } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { MoreHorizontal } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"
import { MapView } from "./mapView"

export const LargeSectionTable = ({ sortColumn, sortOrder, handleSort, largeSectionDummyData, deleteSection, sectionType }: {
    sortColumn: any,
    sortOrder: any,
    handleSort: any,
    largeSectionDummyData: any,
    deleteSection: (sectionName: string, type: string) => void;
    sectionType: string
}) => {

    const [selectedSection, setSelectedSection] = useState(null)

    return (
        <div className="border rounded-lg overflow-hidden">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[200px] cursor-pointer" onClick={() => handleSort("Name")}>
                            Section Id {sortColumn === "Name" && (sortOrder === "asc" ? "▲" : "▼")}
                        </TableHead>
                        <TableHead className="cursor-pointer" onClick={() => handleSort("Plant Id")}>
                            Name {sortColumn === "Plant Id" && (sortOrder === "asc" ? "▲" : "▼")}
                        </TableHead>
                        <TableHead className="cursor-pointer" onClick={() => handleSort("Country")}>
                            Description {sortColumn === "Country" && (sortOrder === "asc" ? "▲" : "▼")}
                        </TableHead>
                        <TableHead className="cursor-pointer" onClick={() => handleSort("State")}>
                            Area {sortColumn === "State" && (sortOrder === "asc" ? "▲" : "▼")}
                        </TableHead>
                        <TableHead className="cursor-pointer" onClick={() => handleSort("Zip Code")}>
                            Mine {sortColumn === "Zip Code" && (sortOrder === "asc" ? "▲" : "▼")}
                        </TableHead>
                        <TableHead className="cursor-pointer" onClick={() => handleSort("Zip Code")}>
                            Type {sortColumn === "Zip Code" && (sortOrder === "asc" ? "▲" : "▼")}
                        </TableHead>
                        <TableHead>View on Map</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {largeSectionDummyData.map((item: any) => (
                        <TableRow key={item.sectionId}>
                            <TableCell>{item.sectionId}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.description || "N/A"}</TableCell>
                            <TableCell>{item.area ? parseFloat(item.area).toFixed(2) : "N/A"}</TableCell>
                            <TableCell>{item.mine}</TableCell>
                            <TableCell>{item.type}</TableCell>
                            <TableCell>
                                <Button onClick={() => setSelectedSection(item)}>View Map</Button>
                            </TableCell>
                            {/* <TableCell>{item.sectionType.typeName}</TableCell> */}
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
                                        <DropdownMenuItem className="text-red-600" onClick={() => deleteSection(item.name, sectionType)}>Delete Section</DropdownMenuItem>
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
                        <DialogTitle>{selectedSection?.name}</DialogTitle>
                    </DialogHeader>
                    {selectedSection && <MapView coordinates={selectedSection.coordinates} />}
                </DialogContent>
            </Dialog>
        </div>
    )
}