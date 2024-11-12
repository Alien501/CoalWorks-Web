import { useState } from "react";
import Navbar from "@/components/mine/Navbar/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { workers, Workers } from "@/data/data";
import LBar from "@/components/mine/LBar/Lbar";

const AssignWorks = () => {
  const [workerList, setWorkerList] = useState<Workers[]>(workers);
  const [selectedWorker, setSelectedWorker] = useState("");
  const [workAssignment, setWorkAssignment] = useState("");

  const handleAssignWork = () => {
    if (selectedWorker && workAssignment) {
      setWorkerList(workerList.map(worker =>
        worker.id === selectedWorker ? { ...worker, currentWork: workAssignment } : worker
      ));
      setSelectedWorker("");
      setWorkAssignment("");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <LBar />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Assign Works</h1>

        <Card className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Work Assignment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Select
              value={selectedWorker}
              onValueChange={setSelectedWorker}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select worker" />
              </SelectTrigger>
              <SelectContent>
                {workerList.map(worker => (
                  <SelectItem key={worker.id} value={worker.id}>{worker.workerName}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              placeholder="Work assignment"
              value={workAssignment}
              onChange={(e) => setWorkAssignment(e.target.value)}
            />
            <Button onClick={handleAssignWork}>Assign Work</Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border-b p-3">Name</th>
                  <th className="border-b p-3">Type</th>
                  <th className="border-b p-3">Shift</th>
                  <th className="border-b p-3">Status</th>
                  <th className="border-b p-3">Current Work</th>
                </tr>
              </thead>
              <tbody>
                {workerList.map((worker) => (
                  <tr key={worker.id} className="hover:bg-gray-50">
                    <td className="border-b p-3">{worker.workerName}</td>
                    <td className="border-b p-3">{worker.workerType}</td>
                    <td className="border-b p-3">
                      {worker.workerShift === 1 ? "Morning" :
                       worker.workerShift === 2 ? "Evening" : "Night"}
                    </td>
                    <td className="border-b p-3">{worker.workerStatus}</td>
                    <td className="border-b p-3">{(worker as any).currentWork || "No work assigned"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AssignWorks;