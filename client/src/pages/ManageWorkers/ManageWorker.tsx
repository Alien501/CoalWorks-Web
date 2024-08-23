import { Card } from "@/components/ui/card";
import { useState } from "react";
import { workers as w, Workers } from "@/data/data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/mine/Navbar/Navbar";

const ManageWorker = () => {
  const [workers, setWorkers] = useState<Workers[]>(w);
  const [newWorker, setNewWorker] = useState<Partial<Workers>>({
    workerShift: 1,
    workerType: "Full-Time",
  });

  const handleAddWorker = () => {
    if (newWorker.workerName && newWorker.workerType && newWorker.workerShift) {
      const newId = `w00${workers.length + 1}`;
      setWorkers([
        ...workers,
        { ...newWorker, id: newId, workerWorked: 0, workerSalary: 0, workerStatus: "Active", hireDate: new Date().toLocaleDateString("en-US") } as Workers,
      ]);
      setNewWorker({ workerShift: 1, workerType: "Full-Time" });
    }
  };

  const handleRemoveWorker = (id: string) => {
    setWorkers(workers.filter((worker) => worker.id !== id));
  };

  const handleEditWorker = (id: string, field: keyof Workers, value: any) => {
    setWorkers(
      workers.map((worker) =>
        worker.id === id ? { ...worker, [field]: value } : worker
      )
    );
  };

  return(
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Manage Workers</h1>

        <Card className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Workers Management</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border-b p-3">Name</th>
                  <th className="border-b p-3">Type</th>
                  <th className="border-b p-3">Shift</th>
                  <th className="border-b p-3">Worked Hours</th>
                  <th className="border-b p-3">Salary</th>
                  <th className="border-b p-3">Status</th>
                  <th className="border-b p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {workers.map((worker) => (
                  <tr key={worker.id} className="hover:bg-gray-50">
                    <td className="border-b p-3">
                      <Input
                        value={worker.workerName}
                        onChange={(e) =>
                          handleEditWorker(worker.id, "workerName", e.target.value)
                        }
                        className="w-full"
                      />
                    </td>
                    <td className="border-b p-3">
                      <Select
                        value={worker.workerType}
                        onValueChange={(value) =>
                          handleEditWorker(worker.id, "workerType", value)
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Full-Time">Full-Time</SelectItem>
                          <SelectItem value="Part-Time">Part-Time</SelectItem>
                          <SelectItem value="Contractor">Contractor</SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="border-b p-3">
                      <Select
                        value={String(worker.workerShift)}
                        onValueChange={(value) =>
                          handleEditWorker(worker.id, "workerShift", Number(value))
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select shift" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Morning</SelectItem>
                          <SelectItem value="2">Evening</SelectItem>
                          <SelectItem value="3">Night</SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="border-b p-3">
                      <Input
                        type="number"
                        value={worker.workerWorked}
                        onChange={(e) =>
                          handleEditWorker(worker.id, "workerWorked", Number(e.target.value))
                        }
                        className="w-full"
                      />
                    </td>
                    <td className="border-b p-3">
                      <Input
                        type="number"
                        value={worker.workerSalary}
                        onChange={(e) =>
                          handleEditWorker(worker.id, "workerSalary", Number(e.target.value))
                        }
                        className="w-full"
                      />
                    </td>
                    <td className="border-b p-3">
                      <Select
                        value={worker.workerStatus}
                        onValueChange={(value) =>
                          handleEditWorker(worker.id, "workerStatus", value)
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Active">Active</SelectItem>
                          <SelectItem value="On Leave">On Leave</SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="border-b p-3">
                      <Button variant="destructive" onClick={() => handleRemoveWorker(worker.id)}>Remove</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4">Add New Worker</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input
              placeholder="Name"
              value={newWorker.workerName || ""}
              onChange={(e) => setNewWorker({ ...newWorker, workerName: e.target.value })}
            />
            <Select
              value={newWorker.workerType}
              onValueChange={(value) => setNewWorker({ ...newWorker, workerType: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Full-Time">Full-Time</SelectItem>
                <SelectItem value="Part-Time">Part-Time</SelectItem>
                <SelectItem value="Contractor">Contractor</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={String(newWorker.workerShift)}
              onValueChange={(value) => setNewWorker({ ...newWorker, workerShift: Number(value) })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select shift" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Morning</SelectItem>
                <SelectItem value="2">Evening</SelectItem>
                <SelectItem value="3">Night</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleAddWorker} className="w-full">Add Worker</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ManageWorker;