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

interface Plan {
    planId: number;
    planName: string;
    status: string;
    plantId: string;
    lastPublishedBy: string | null;
    updatedAt: string;
    createdBy: string;
}

interface Section {
    id: number;
    name: string;
    sectionType: number;
    area: number;
    activePlans: { planId: number; planName: string }[];
}

export default function RoundPlansTable({ plans }: { plans: Plan[] }) {
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
                    <TableHead className=" py-4">Plan Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Scheduled Sections</TableHead>
                    <TableHead>Created On</TableHead>
                    <TableHead>Schedule Round</TableHead>
                    <TableHead>Created By</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {plans.map((plan) => (
                    <TableRow key={plan.planId}>
                        <TableCell className="font-medium py-4">{plan.planName}</TableCell>
                        <TableCell>
                            <Badge variant="secondary">{plan.status}</Badge>
                        </TableCell>
                        <TableCell className="pl-7">
                            <DropdownMenu>
                                <DropdownMenuTrigger><Button>Open</Button></DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>Scheduled Sections</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    {sections
                                        .filter(section => section.activePlans.some(ap => ap.planId === plan.planId))
                                        .map(section => (
                                            <DropdownMenuItem key={section.id}>{section.name}</DropdownMenuItem>
                                        ))
                                    }
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                        <TableCell>{plan.updatedAt}</TableCell>
                        <TableCell>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline">Schedule</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[500px]">
                                    <DialogHeader>
                                        <DialogTitle>Schedule Round</DialogTitle>
                                        <DialogDescription>Schedule rounds to the sections</DialogDescription>
                                    </DialogHeader>
                                    <DialogDescription>
                                        <ScrollArea className="max-h-[350px] space-y-2">
                                            {sections?.map((section) => (
                                                <div className="flex items-center space-x-2 mt-2" key={section.id}>
                                                    <Checkbox
                                                        id={`section-${section.id}`}
                                                        checked={selectedSections[section.id] || false}
                                                        onCheckedChange={(checked) =>
                                                            handleCheckboxChange(section.id, !!checked)
                                                        }
                                                    />
                                                    <Label htmlFor={`section-${section.id}`}>{section.name}</Label>
                                                </div>
                                            ))}

                                            <div className=" flex space-x-3 mt-7">
                                            <Label>
                                            Select the supervisor
                                            </Label>
                                                <div>
                                                    <Select onValueChange={(value) => setSelectedUser(parseInt(value))}>
                                                        <SelectTrigger className="w-[180px]">
                                                            <SelectValue placeholder="Select a Supervisor/Worker" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                {/* <SelectLabel>Select</SelectLabel> */}
                                                                {
                                                                    users?.data?.map(user => (
                                                                        <SelectItem value={user.userId}><span className="font-semibold mr-2">{user.userRole.roleName}:</span>{user.username}</SelectItem>
                                                                    ))
                                                                }
                                                            </SelectGroup>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                        </ScrollArea>
                                    </DialogDescription>
                                    <DialogFooter>
                                        <Button
                                            type="submit"
                                            onClick={() => onScheduleRoundHandler(plan.planId, plan.planName)}
                                        >
                                            Save changes
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </TableCell>
                        <TableCell>Me</TableCell>
                        <TableCell>
                            <span className="hover:cursor-pointer flex space-x-2">
                                <Star />
                                <Ellipsis className="w-10 rounded-full bg-black/[0.05]" />
                            </span>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

