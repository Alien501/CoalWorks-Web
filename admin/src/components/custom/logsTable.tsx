import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "../ui/button";

export default function LogsTable() {
  const data = [
    { position: "Designer", loggedBy: "William" },
    { position: "Designer", loggedBy: "John" },
    { position: "Developer", loggedBy: "Harry" },
    { position: "Developer", loggedBy: "Paula" },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Logs</h2>
        <Button className="">
          Enter My Log
        </Button>
      </div>
      <Table className="w-full border ">
        <TableHeader>
          <TableRow>
            <TableHead className="py-4">Position</TableHead>
            <TableHead>Logged by</TableHead>
            <TableHead className="text-right pr-3">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((log, index) => (
            <TableRow key={index}>
              <TableCell className="text-blue-500 py-4">{log.position}</TableCell>
              <TableCell>{log.loggedBy}</TableCell>
              <TableCell className="text-right pr-5">
                <button className="text-gray-500 hover:text-gray-700">•••</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
