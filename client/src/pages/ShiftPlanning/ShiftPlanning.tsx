import LBar from "@/components/mine/LBar/Lbar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogDescription, DialogHeader } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PlusIcon } from "@radix-ui/react-icons";
import { ReactNode } from "react";
import { Input } from "@/components/ui/input";
import SelectDate from "@/components/mine/SelectDate/SelectDate";
import { Select } from "@/components/ui/select";
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const AddShift = ({trigger}) => {
  return(
    <div>
      <Dialog>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
          <DialogContent className="h-[80%]">
            <ScrollArea className="h-full w-full rounded-md">
            <DialogHeader>
              <DialogTitle className="text-sm font-semibold text-center">Add New Shift</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <form>
                <div className="p-1">
                  <label className="font-sm font-semibold text-black" htmlFor="shiftId">Shift ID</label>
                  <Input name="shiftId" placeholder="Shift ID" type="text"  />
                </div>
                <div className="p-1">
                  <label className="font-sm font-semibold text-black" htmlFor="">Shift Date</label>
                  <SelectDate />
                </div>
                <div className="p-1">
                  <label className="font-sm font-semibold text-black" htmlFor="">Shift Time</label>
                  <Input name="date" type="time" />
                </div>
                <div className="p-1">
                  <label className="font-sm font-semibold text-black" htmlFor="">Shift Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Shift Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="day">Day</SelectItem>
                      <SelectItem value="night">Night</SelectItem>
                      <SelectItem value="maintainance">Maintenance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="p-1">
                  <label className="font-sm font-semibold text-black" htmlFor="">Task Description</label>
                  <Input name="taskDescription" placeholder="Task Description" type="text"  />
                </div>
                <div className="p-1">
                  <label className="font-sm font-semibold text-black" htmlFor="">Supervisor Name</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Supervisor Name" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="day">Day</SelectItem>
                      <SelectItem value="night">Night</SelectItem>
                      <SelectItem value="maintainance">Maintenance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="p-1">
                  <p className="font-sm font-semibold text-black">Machineries Assigned</p>
                  <div>
                    <Checkbox id="machine-one"/>
                    <label htmlFor="machine-one">Machine One</label>
                    <br />
                    <Checkbox id="machine-two"/>
                    <label htmlFor="machine-two">Machine Two</label>
                    <br />
                    <Checkbox id="machine-three"/>
                    <label htmlFor="machine-three">Machine Three</label>
                  </div>
                </div>
                <div className="p-1">
                  <label className="font-sm font-semibold text-black" htmlFor="">Mine unit</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Mine No" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mine1">Mine 1</SelectItem>
                      <SelectItem value="mine2">Mine 2</SelectItem>
                      <SelectItem value="mine3">Mine 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="p-1">
                  <label className="font-sm font-semibold text-black" htmlFor="">Note</label>
                  <Textarea placeholder="Note to be considered" />
                </div>
                <Button className="mx-auto block my-1">
                  Add
                </Button>
              </form>
            </DialogDescription>
          </ScrollArea>
          </DialogContent>
      </Dialog>
    </div>
  )
}

const PlanShift = () => {
  return(
    <div className="w-[95%] h-full">
      <div className="flex p-1 justify-between items-center">
        <p className="text-sm font-medium">Mange Shifts</p>
        <AddShift trigger={
          <Button>
            <PlusIcon />
            Create New Shift
          </Button>
        }/>
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Shift ID</TableHead>
              <TableHead>Shift Date</TableHead>
              <TableHead>Shift Time</TableHead>
              <TableHead>Supervisor Name</TableHead>
              <TableHead>Mine No</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Edit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>S001</TableCell>
              <TableCell>24/8/24</TableCell>
              <TableCell>8:00 pm</TableCell>
              <TableCell>Nesamani</TableCell>
              <TableCell>0</TableCell>
              <TableCell>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Shift Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="notstarted">
                        <Badge variant={'default'}>
                          Not Started
                        </Badge>
                      </SelectItem>
                      <SelectItem value="ongoing">
                        <Badge variant={"secondary"}>
                          On Going
                        </Badge>
                      </SelectItem>
                      <SelectItem value="completed">
                        <Badge className="bg-green-500">
                          Completed
                        </Badge>
                      </SelectItem>
                      <SelectItem value="overdue">
                        <Badge variant={'destructive'}>
                          Over Due
                        </Badge>
                      </SelectItem>
                    </SelectContent>
                  </Select>

              </TableCell>
              <TableCell>
                <Button variant={'secondary'}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>S002</TableCell>
              <TableCell>23/8/24</TableCell>
              <TableCell>8:00 pm</TableCell>
              <TableCell>Nesamani</TableCell>
              <TableCell>0</TableCell>
              <TableCell>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Shift Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="notstarted">
                        <Badge variant={'default'}>
                          Not Started
                        </Badge>
                      </SelectItem>
                      <SelectItem value="ongoing">
                        <Badge variant={"secondary"}>
                          On Going
                        </Badge>
                      </SelectItem>
                      <SelectItem value="completed">
                        <Badge className="bg-green-500">
                          Completed
                        </Badge>
                      </SelectItem>
                      <SelectItem value="overdue">
                        <Badge variant={'destructive'}>
                          Over Due
                        </Badge>
                      </SelectItem>
                    </SelectContent>
                  </Select>

              </TableCell>
              <TableCell>
                <Button variant={'secondary'}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>S003</TableCell>
              <TableCell>24/8/24</TableCell>
              <TableCell>8:00 pm</TableCell>
              <TableCell>Nesamani</TableCell>
              <TableCell>0</TableCell>
              <TableCell>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Shift Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="notstarted">
                        <Badge variant={'default'}>
                          Not Started
                        </Badge>
                      </SelectItem>
                      <SelectItem value="ongoing">
                        <Badge variant={"secondary"}>
                          On Going
                        </Badge>
                      </SelectItem>
                      <SelectItem value="completed">
                        <Badge className="bg-green-500">
                          Completed
                        </Badge>
                      </SelectItem>
                      <SelectItem value="overdue">
                        <Badge variant={'destructive'}>
                          Over Due
                        </Badge>
                      </SelectItem>
                    </SelectContent>
                  </Select>

              </TableCell>
              <TableCell>
                <Button variant={'secondary'}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>S004</TableCell>
              <TableCell>24/8/24</TableCell>
              <TableCell>8:00 pm</TableCell>
              <TableCell>Nesamani</TableCell>
              <TableCell>0</TableCell>
              <TableCell>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Shift Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="notstarted">
                        <Badge variant={'default'}>
                          Not Started
                        </Badge>
                      </SelectItem>
                      <SelectItem value="ongoing">
                        <Badge variant={"secondary"}>
                          On Going
                        </Badge>
                      </SelectItem>
                      <SelectItem value="completed">
                        <Badge className="bg-green-500">
                          Completed
                        </Badge>
                      </SelectItem>
                      <SelectItem value="overdue">
                        <Badge variant={'destructive'}>
                          Over Due
                        </Badge>
                      </SelectItem>
                    </SelectContent>
                  </Select>

              </TableCell>
              <TableCell>
                <Button variant={'secondary'}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

const ShiftPlanning = () => {
  return(
    <div className="min-h-screen overflow-hidden">
      <LBar />
      <div className="my-14 min-h-screen flex justify-center items-center" style={{
        width: 'calc(100% - 60px)',
        left: '60px',
        position: 'relative'
      }}>
        <Tabs defaultValue="plan" className="w-[90%] mx-auto block p-1">
          <TabsList className="block mx-auto w-max">
            <TabsTrigger value="plan">Plan</TabsTrigger>
            <TabsTrigger value="rounds">Rounds</TabsTrigger>
          </TabsList>
          <TabsContent value="plan" className="min-h-screen">
            <PlanShift />
          </TabsContent>
          <TabsContent value="rounds" className="min-h-screen">
            Plan rounds herer
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default ShiftPlanning;