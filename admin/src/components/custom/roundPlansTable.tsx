import React, { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Ellipsis, Star } from "lucide-react";
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

interface Section {
    id: number;
    name: string;
    sectionType: number;
    area: number;
    activePlans: { plantId: number }[];
}

interface Plan {
    planId: number;
    planName: string;
    status: string;
    plantId: string;
    updatedAt: string;
    createdBy: string;
    lastPublishedBy: string;
}

export default function RoundPlansTable({ plans }: { plans: Plan[] }) {
    const [sections, setSections] = useState<Section[]>([]);
    const [activeSections, setActiveSections] = useState<{ sectionId: number; activeSections: number[] }[]>([]);
    const [selectedSection, setSelectedSection] = useState<number | null>(null);

    useEffect(() => {
        const fetchSectionsHandler = async () => {
            const res = await fetchSections();
            if (res) {
                const shapedActiveSections = res.map((section: Section) => ({
                    sectionId: section.id,
                    activeSections: section.activePlans.map((ap) => ap.plantId),
                }));
                setSections(res);
                setActiveSections(shapedActiveSections);
            }
        };
        fetchSectionsHandler();
    }, []);

    const handleCheckboxChange = (sectionId: number, checked: boolean) => {
        setActiveSections((prev) =>
            prev.map((item) =>
                item.sectionId === sectionId
                    ? {
                          ...item,
                          activeSections: checked
                              ? [...item.activeSections, sectionId]
                              : item.activeSections.filter((id) => id !== sectionId),
                      }
                    : item
            )
        );
    };

    const onScheduleRoundHandler = (id: number) => {
        toast.success(`Round/PlanId ${id} scheduled for section ${selectedSection}`);
    };

    return (
        <Table>
            <TableHeader className="bg-black/[0.05]">
                <TableRow>
                    <TableHead className="w-[300px] py-4">Plan Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Plant</TableHead>
                    <TableHead>Last Published By</TableHead>
                    <TableHead>Last Edited</TableHead>
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
                        <TableCell>{plan.plantId}</TableCell>
                        <TableCell>{plan.lastPublishedBy || "NA"}</TableCell>
                        <TableCell>{plan.updatedAt}</TableCell>
                        <TableCell>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline">Schedule</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Schedule Round</DialogTitle>
                                        <DialogDescription>Schedule rounds to the sections</DialogDescription>
                                    </DialogHeader>
                                    <DialogDescription>
                                        <ScrollArea className="max-h-[350px] space-y-2">
                                            {sections.map((section) => (
                                                <div className="flex items-center space-x-2 mt-2" key={section.id}>
                                                    <Checkbox
                                                        id={`section-${section.id}`}
                                                        checked={activeSections.some(
                                                            (item) =>
                                                                item.sectionId === section.id &&
                                                                item.activeSections.includes(section.id)
                                                        )}
                                                        onCheckedChange={(checked) =>
                                                            handleCheckboxChange(section.id, !!checked)
                                                        }
                                                    />
                                                    <Label htmlFor={`section-${section.id}`}>{section.name}</Label>
                                                </div>
                                            ))}
                                        </ScrollArea>
                                    </DialogDescription>
                                    <DialogFooter>
                                        <Button
                                            type="submit"
                                            onClick={() => onScheduleRoundHandler(plan.planId)}
                                        >
                                            Save changes
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </TableCell>
                        <TableCell>{plan.createdBy}</TableCell>
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
