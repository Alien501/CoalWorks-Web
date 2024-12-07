import React, { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Ellipsis, Star } from 'lucide-react';
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { fetchSections } from "@/utils/fetchSections";
import { toast } from "sonner";
import { ScrollArea } from "../ui/scroll-area";
import { Checkbox } from "../ui/checkbox";
import axios from "axios";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface Section {
    id: number;
    name: string;
    sectionType: number;
    area: number;
    activePlans: { planId: number; planName: string }[];
}

export default function ShiftHandoverTable() {
    const [sections, setSections] = useState<Section[]>([]);
    const [selectedSections, setSelectedSections] = useState<{ [key: number]: boolean }>({});
    const [users, setUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState<null | number>(null)
    console.log(sections)

    useEffect(() => {
        const fetchSectionsHandler = async () => {
            const res = await fetchSections();
            if (res) {
                setSections(res);
            }
        };

        const fetchUsers = async () => {
            const res = await axios.get("api/data/user");
            if (res) {
                setUsers(res.data)
            }
        }
        fetchSectionsHandler();
        fetchUsers()
    }, []);

    const handleCheckboxChange = (sectionId: number, checked: boolean) => {
        setSelectedSections(prev => ({
            ...prev,
            [sectionId]: checked
        }));
    };

    const onScheduleRoundHandler = async (id: number, planName: string) => {
        try {
            const sectionIds = Object.entries(selectedSections)
                .filter(([_, isSelected]) => isSelected)
                .map(([sectionId, _]) => parseInt(sectionId));

            const res = await axios.post("/api/data/rounds/active-plan", {
                planId: id,
                planName: planName,
                sectionIds: sectionIds,
                userId: selectedUser
            });

            if (res.status === 201) {
                toast.success("Plan scheduled successfully");
            } else {
                toast.error("Problem with scheduling the plan");
            }
        } catch (error) {
            toast.error("Error while scheduling the plan");
        } finally {
            setSelectedSections({});
        }
    };

    return (
        <Table>
            <TableHeader className="bg-black/[0.05]">
                <TableRow>
                    <TableHead className=" py-4">Title</TableHead>
                    <TableHead>Section</TableHead>
                    <TableHead>Shift</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>

                </TableRow>
            </TableHeader>
            <TableBody>
                <TableCell>Title</TableCell>
                <TableCell>Section</TableCell>
                <TableCell>Plan name</TableCell>
                <TableCell>Plan name</TableCell>
                <TableCell>Plan name</TableCell>
                <TableCell>
                    <TableCell className="text-right">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                    <span className="sr-only">Open menu</span>
                                    <Ellipsis className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>Edit Shift</DropdownMenuItem>
                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600">Delete Shift</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                </TableCell>
            </TableBody>
        </Table>
    );
}
