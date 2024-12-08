import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

export default function OperatorTable() {
    const operatorData = [
        {
            name: "John 1",
            position: "Internal Operator",
            rounds: "3/3",
            group: "Lorem ipsum",
            email: "Lorem ipsum",
        },
        {
            name: "John 2",
            position: "Internal Operator",
            rounds: "6/7",
            group: "Lorem ipsum",
            email: "Lorem ipsum",
        },
        {
            name: "John 3",
            position: "External Operator",
            rounds: "5/7",
            group: "Lorem ipsum",
            email: "Lorem ipsum",
        },
        {
            name: "John 4",
            position: "External Operator",
            rounds: "2/8",
            group: "Lorem ipsum",
            email: "Lorem ipsum",
        },
        {
            name: "John 5",
            position: "External Operator",
            rounds: "6/6",
            group: "Lorem ipsum",
            email: "Lorem ipsum",
        },
    ];

    return (
        <div className="p-5">
            <h2 className="text-lg font-semibold mb-4">Operator Table</h2>
            <Table className="w-full border rounded-lg">
                <TableHeader>
                    <TableRow>
                        <TableHead className="py-4">
                            <Checkbox />
                        </TableHead>
                        <TableHead>Operator Name</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Rounds Submitted</TableHead>
                        <TableHead>User Group</TableHead>
                        <TableHead>Email ID</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {operatorData.map((operator, index) => (
                        <TableRow key={index}>
                            <TableCell className="py-4">
                                <Checkbox />
                            </TableCell>
                            <TableCell>
                                <div className="font-medium">{operator.name}</div>
                            </TableCell>
                            <TableCell>{operator.position}</TableCell>
                            <TableCell>{operator.rounds}</TableCell>
                            <TableCell>{operator.group}</TableCell>
                            <TableCell>{operator.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
