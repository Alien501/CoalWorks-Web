import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {toast} from "sonner"

export function CreateReport({
  setReportName,
  setDescription,
  setCreatedBy,
  setReportsData,
  reportName,
  description,
  createdBy,
}: {
  setReportName: any;
  setDescription: any;
  setCreatedBy: any;
  setReportsData: any;
  reportName: string;
  description: string;
  createdBy: string;
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false); 

  const handleCreateReport = () => {
    setReportsData((prev: any) => [
      {
        Name: reportName,
        Description: description,
        "Created By": createdBy,
        "Created On": new Intl.DateTimeFormat("en-US", {
          dateStyle: "short",
          timeStyle: "short",
        }).format(new Date()),
      },
      ...prev
    ]);

    setIsDialogOpen(false);
    toast.success("Report created sucessfully")
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsDialogOpen(true)}>Create Report</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Report</DialogTitle>
          <DialogDescription>Enter the report details</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              placeholder="report name"
              className="col-span-3"
              onChange={(e) => setReportName(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              placeholder="Enter a brief description"
              className="col-span-3"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="createdBy" className="text-right">
              Created By
            </Label>
            <Input
              id="createdBy"
              className="col-span-3"
              onChange={(e) => setCreatedBy(e.target.value)}
              required
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleCreateReport}>
            Create Report
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
