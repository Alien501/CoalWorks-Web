import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Search } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Template {
    id: string;
    title: string;
    plant: string;
    unit: number;
    position: string | null;
    createdBy: string;
    status: "Ready" | "Draft";
    lastModified: string;
    lastPublished: string;
    lastModifiedBy: string;
}

export function ShiftTemplates() {
    const [search, setSearch] = useState("");
    const [shiftTemplates, setShiftTemplates] = useState<Template[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getAllShiftTemplates() {
            try {
                const res = await axios.get("/api/data/shifttemplate");
                const data = res.data.data.map((item: any) => ({
                    id: item.id,
                    title: item.shiftTemplate.form_name,
                    plant: item.section.name,
                    unit: item.section.area,
                    position: item.role.roleName,
                    createdBy: "N/A", // Placeholder (update as needed)
                    status: "Draft", // Assuming 'isActive' is missing in response
                    lastModified: new Date(item.updatedAt).toLocaleDateString(),
                    lastPublished: new Date(item.createdAt).toLocaleDateString(),
                    lastModifiedBy: "N/A" // Placeholder (update as needed)
                }));
                setShiftTemplates(data);
            } catch (error) {
                console.error("Error fetching shift templates:", error);
            }
        }
        getAllShiftTemplates();
    }, []);

    const filteredTemplates = shiftTemplates.filter((template) =>
        Object.values(template).some((value) =>
            value && value.toString().toLowerCase().includes(search.toLowerCase())
        )
    );

    return (
        <section id="section-log" className="container mx-auto py-6">
            <div className="flex justify-between items-center mb-6 p-2">
                <h1 className="text-2xl font-bold">Log Templates</h1>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search..."
                            className="pl-8"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <Button
                        variant='secondary'
                        className="rounded-full"
                        onClick={() => navigate('/shift-template-create')}
                    >
                        Create New
                    </Button>
                </div>
            </div>

            <div className="border rounded-lg w-[95%] mx-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Plant</TableHead>
                            <TableHead>Unit</TableHead>
                            <TableHead>Position</TableHead>
                            <TableHead>Created By</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Last Modified</TableHead>
                            <TableHead>Last Published</TableHead>
                            <TableHead>Last Modified By</TableHead>
                            <TableHead className="w-[80px]">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredTemplates.map((template) => (
                            <TableRow key={template.id}>
                                <TableCell>{template.title}</TableCell>
                                <TableCell>{template.plant}</TableCell>
                                <TableCell>{template.unit}</TableCell>
                                <TableCell>{template.position}</TableCell>
                                <TableCell>{template.createdBy}</TableCell>
                                <TableCell>
                                    <Badge variant={template.status === "Ready" ? "success" : "warning"}>
                                        {template.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{template.lastModified}</TableCell>
                                <TableCell>{template.lastPublished}</TableCell>
                                <TableCell>{template.lastModifiedBy}</TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger>
                                            <Button variant="ghost" size="icon">
                                                <MoreHorizontal className="h-4 w-4" />
                                                <span className="sr-only">Actions</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>View Details</DropdownMenuItem>
                                            <DropdownMenuItem>Edit & Use</DropdownMenuItem>
                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </section>
    );
}