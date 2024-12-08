import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function ControlPlanTable() {
  const data = [
    {
      round: "T1 Liquefaction Safety Shower Checks",
      description: "Every week inspection to control...",
      status: "Overdue",
      shift: "Shift A 8:00 AM",
      position: "Internal Operator",
      schedule: "8:00 AM - 9:00 AM",
      tasksCompleted: "23/100",
      progress: "23%",
    },
    {
      round: "T1 Liquefaction Safety Shower Checks",
      description: "Every week inspection to control...",
      status: "Overdue",
      shift: "Shift A 6:00 AM",
      position: "Internal Operator",
      schedule: "9:00 AM - 10:00 AM",
      tasksCompleted: "0/42",
      progress: "0%",
    },
    {
      round: "T1 Liquefaction Safety Shower Checks",
      description: "Every week inspection to control...",
      status: "Submitted",
      shift: "Shift A 6:00 AM",
      position: "External Operator",
      schedule: "9:00 AM - 10:00 AM",
      tasksCompleted: "0/42",
      progress: "0%",
    },
    {
      round: "T1 Liquefaction Safety Shower Checks",
      description: "Every week inspection to control...",
      status: "Submitted",
      shift: "Shift A 6:00 AM",
      position: "External Operator",
      schedule: "9:00 AM - 10:00 AM",
      tasksCompleted: "0/42",
      progress: "0%",
    },
  ];

  return (
    <div className="p-6">
      {/* Filters */}
      <div className="flex items-center space-x-4 mb-6">
        <Button className="bg-blue-500 text-white">All (4)</Button>
        <Button className="text-blue-500 border border-blue-500">Overdue (2)</Button>
        <Button className="text-blue-500 border border-blue-500">Submitted (2)</Button>
        <Button className="text-blue-500 border border-blue-500">Skipped (0)</Button>
        <Button className="text-blue-500 border border-blue-500">Open (0)</Button>
        <Button className="text-blue-500 border border-blue-500">Inprogress (0)</Button>
      </div>

      {/* Table */}
      <Table className="w-full border rounded-lg shadow-sm">
        <TableHeader>
          <TableRow>
            <TableHead className="py-4">Round</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Shift</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Starts - Ends</TableHead>
            <TableHead>Tasks Completed</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <div>
                  <div className="font-medium">{item.round}</div>
                  <div className="text-gray-500 text-sm">{item.description}</div>
                </div>
              </TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded text-white ${
                    item.status === "Overdue" ? "bg-red-500" : "bg-green-500"
                  }`}
                >
                  {item.status}
                </span>
              </TableCell>
              <TableCell>{item.shift}</TableCell>
              <TableCell>{item.position}</TableCell>
              <TableCell>{item.schedule}</TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <span>{item.tasksCompleted}</span>
                  <span
                    className={`text-sm ${
                      parseInt(item.progress) > 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {item.progress}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
