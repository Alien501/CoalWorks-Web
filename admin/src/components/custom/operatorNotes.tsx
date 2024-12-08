import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function OperatorNotes() {
    const notesData = [
        {
            title: "Floor can't be inspected because the water logging was there. Couldn't clear out the drainage pipe at the moment.",
            location: "Water Treatment Plant",
            task: "Check Slippery Floor",
            position: "Internal Operator",
            raisedBy: "Amy Krista",
        },
        {
            title: "Item were in a bad condition",
            location: "Water Treatment Plant",
            task: "Scan the image",
            position: "Internal Operator",
            raisedBy: "William",
        },
        {
            title: "Completed inspection",
            location: "Water Treatment Plant",
            task: "Temperature Check",
            position: "Internal Operator",
            raisedBy: "Amy Krista",
        },
        {
            title: "Slippery surface",
            location: "Water Treatment Plant",
            task: "John Paul",
            position: "Internal Operator",
            raisedBy: "Amy Krista",
        },
        {
            title: "Actions 1",
            location: "Water Treatment Plant",
            task: "John Paul",
            position: "Internal Operator",
            raisedBy: "Amy Krista",
        },
    ];

    return (
        <div className="flex">
            <main className="flex-1 pt-3 px-5">
                {/* Notes Section */}
                <h2 className="font-medium text-lg mb-2">Notes</h2>
                <Table className="w-full border rounded-lg">
                    <TableHeader>
                        <TableRow>
                            <TableHead>
                                <Checkbox />
                            </TableHead>
                            <TableHead className="py-4">Title</TableHead>
                            <TableHead>Location / Asset</TableHead>
                            <TableHead>Task</TableHead>
                            <TableHead>Position</TableHead>
                            <TableHead>Raised by</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {notesData.map((note, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                                <TableCell>
                                    <div className="font-medium">{note.title}</div>
                                </TableCell>
                                <TableCell>{note.location}</TableCell>
                                <TableCell>{note.task}</TableCell>
                                <TableCell>{note.position}</TableCell>
                                <TableCell>{note.raisedBy}</TableCell>
                                <TableCell>
                                    <button className="text-gray-500 hover:text-gray-700">•••</button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </main>
        </div>
    );
}
