
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Plus } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox"

export function AddHazardModal() {
  const [controlRows, setControlRows] = useState([
    { type: '', details: '', person: '', dueDate: '', completed: false }
  ])

  const addControlRow = () => {
    setControlRows([...controlRows, { type: '', details: '', person: '', dueDate: '', completed: false }])
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mb-4">
          <Plus className="mr-2 h-4 w-4" />
          Add New Hazard
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Risk Assessment</DialogTitle>
          <DialogDescription>Add a new hazard assessment record</DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="mainActivity">Main Activity</Label>
              <Input
                type="text"
                id="mainActivity"
                placeholder="Enter activity "
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Section</Label>
              <Select>
                <SelectTrigger id="section">
                  <SelectValue placeholder="Select Section" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="workshop">Maintenance Workshop</SelectItem>
                  <SelectItem value="site">Construction Site</SelectItem>
                  <SelectItem value="office">Office</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="hazard">Hazard</Label>
              <Input id="hazard" placeholder="Enter hazard" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mechanism">Mechanism</Label>
              <Input id="mechanism" placeholder="Enter mechanism" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="exposedGroup">Exposed Group</Label>
              <Select>
                <SelectTrigger id="exposedGroup">
                  <SelectValue placeholder="Select group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="production">Production</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                  <SelectItem value="visitors">Visitors</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Brief Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the hazard and potential risks"
              className="min-h-[100px]"
            />
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="consequences">Consequences</Label>
              <Select>
                <SelectTrigger id="consequences">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <SelectItem key={n} value={n.toString()}>
                      {n}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="exposure">Exposure</Label>
              <Select>
                <SelectTrigger id="exposure">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <SelectItem key={n} value={n.toString()}>
                      {n}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="probability">Probability</Label>
              <Select>
                <SelectTrigger id="probability">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <SelectItem key={n} value={n.toString()}>
                      {n}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="riskLevel">Risk Level</Label>
              <Input id="riskLevel" readOnly />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Risk Control Plan</Label>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Control Type</TableHead>
                  <TableHead>Control Details</TableHead>
                  <TableHead>Person</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Completed</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {controlRows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ppe">Personal Protective Equipment</SelectItem>
                          <SelectItem value="training">Training</SelectItem>
                          <SelectItem value="engineering">Engineering Controls</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Input placeholder="Enter details" />
                    </TableCell>
                    <TableCell>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select person" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="supervisor">Supervisor</SelectItem>
                          <SelectItem value="manager">Manager</SelectItem>
                          <SelectItem value="worker">Worker</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Input type="date" />
                    </TableCell>
                    <TableCell>
                        <Checkbox />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button variant="outline" onClick={addControlRow} className="mt-2">
              <Plus className="mr-2 h-4 w-4" />
              Add Control Measure
            </Button>
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="outline">Cancel</Button>
            <Button>Save Assessment</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

