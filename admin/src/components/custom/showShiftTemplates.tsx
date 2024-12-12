import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectTrigger, SelectItem, SelectValue, SelectContent } from "@/components/ui/select";
import { toast } from "sonner";

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

export function ShowShiftTemplates() {
    const [search, setSearch] = useState("");
    const [shiftTemplates, setShiftTemplates] = useState<Template[]>([]);
    const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(null);
    const [shifts, setShifts] = useState([])
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
        async function getAllShifts() {
            const d = await axios.get("/api/data/shift")
            setShifts(d.data.data)
        }
        getAllShifts();
        getAllShiftTemplates();
    }, []);

    console.log(shifts)

    const filteredTemplates = shiftTemplates.filter((template) =>
        Object.values(template).some((value) =>
            value && value.toString().toLowerCase().includes(search.toLowerCase())
        )
    );

    const handleCheckboxChange = (templateId: string) => {
        // Ensure only one checkbox can be selected at a time
        setSelectedTemplateId(prevId => prevId === templateId ? null : templateId);
    };

    const [selectedShift, setSelectedShift] = useState<string | null>(null);

    const handleSubmit = () => {
        if (selectedTemplateId && selectedShift) {
            async function updateShiftTemplate() {
                console.log("Selected Shift Template ID:", selectedTemplateId);
                console.log(selectedShift);
                const res = await axios.patch(`/api/data/shifttemplate/${selectedTemplateId}`)
                if(res.status === 200){
                    toast.success("Shift Template assigned Successfully")
                }
                else{
                    toast.error("There is some problem with assingning shifts")
                }
            }
            updateShiftTemplate();

        } else {
            console.log("No template selected");
        }
    };

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
                    {/* <Button
                        variant='secondary'
                        className="rounded-full"
                        onClick={() => navigate('/shift-template-create')}
                    >
                        Create New
                    </Button> */}
                </div>
            </div>

            <div className="border rounded-lg w-[95%] mx-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Select</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Section</TableHead>
                            <TableHead>Unit</TableHead>
                            <TableHead>Position</TableHead>
                            <TableHead>Created By</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Last Modified</TableHead>
                            <TableHead>Last Published</TableHead>
                            <TableHead>Last Modified By</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredTemplates.map((template) => (
                            <TableRow key={template.id}>
                                <TableCell>
                                    <Checkbox
                                        checked={selectedTemplateId === template.id}
                                        onCheckedChange={() => handleCheckboxChange(template.id)}
                                    />
                                </TableCell>
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
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="mt-4">
                <h1 className="text-2xl font-bold mb-4">Select the shift</h1>
                <Select
                    value={selectedShift || undefined}
                    onValueChange={(value) => setSelectedShift(value)}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Choose a shift" />
                    </SelectTrigger>
                    <SelectContent>
                        {shifts.map((shift) => (
                            <SelectItem
                                key={shift.shiftId}
                                value={shift.shiftId}
                            >
                                {shift.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="mt-4 flex justify-end">
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
        </section>
    );
}