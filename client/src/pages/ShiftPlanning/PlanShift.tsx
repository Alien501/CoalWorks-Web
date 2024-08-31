//@ts-nocheck
import { Badge } from "@/components/ui/badge";
import AddShift from "./AddShift";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { Table, TableBody, TableHeader, TableCell, TableRow, TableHead } from "@/components/ui/table";
import MySelectBox from "@/components/mine/MySelectbox/MySelectbox";
import { useEffect, useState } from "react";
import { EditShift } from "./editShift";
import axios from "axios"

const PlanShift = () => {
  const [shiftDetails, setShiftDetails] = useState([]);
  useEffect(() => {
    const getAllShiftDetail = (async () => {
      const res = await axios.get("http://localhost:3000/api/v1/shift/all");
      console.log(res.data);
      setShiftDetails(prev => res.data);
    })
    getAllShiftDetail();
  },[])
  const shiftStatus = [
    {
      text: <Badge variant={'default'}>Not Started</Badge>,
      value: 'notstarted'
    },
    {
      text: <Badge variant={'secondary'}>Started</Badge>,
      value: 'ongoing'
    },
    {
      text: <Badge className="bg-green-500">Completed</Badge>,
      value: 'completed'
    },
    {
      text: <Badge variant={'destructive'}>Not Completed</Badge>,
      value: 'overdue'
    }
  ];

  return (
    <div className="w-[95%] h-full">
      <div className="flex p-1 justify-between items-center">
        <p className="text-sm font-medium">Mange Shifts</p>
        <AddShift trigger={
          <Button>
            <PlusIcon />
            Create New Shift
          </Button>
        } />
      </div>
      <div>
        <Table className="border">
          <TableHeader>
            <TableRow>
              <TableHead>Shift ID</TableHead>
              <TableHead>Shift Date</TableHead>
              <TableHead>Shift Start Time</TableHead>
              <TableHead>Shift End Time</TableHead>
              <TableHead>Supervisor Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Edit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              shiftDetails.map((shift, index) => (
                <TableRow key={index} className="text-black">
                  <TableCell>{shift.shift_id}</TableCell>
                  <TableCell> {shift.date.split('T')[0]}</TableCell>
                  <TableCell>{shift.start_time.split('T')[1].split(':').slice(0, 2).join(':')}</TableCell>
                  <TableCell>{shift.end_time.split('T')[1].split(':').slice(0, 2).join(':')}</TableCell>
                  <TableCell>{shift.supervisor.username}</TableCell>
                  <TableCell ><span className={`${shift.status.toLowerCase()==='completed'?"bg-green-500": shift.status.toLowerCase()==="inprogress"?"bg-yellow-500" :"bg-slate-400 "} rounded-full px-3 py-2 my-1`}>{shift.status}</span></TableCell>
                  {/* <TableCell><MySelectBox placeholder={'Shift Status'} content={shiftStatus} /></TableCell> */}
                  <TableCell>
                    <EditShift trigger={
                      <Button variant={'secondary'}>
                        Edit
                      </Button>
                    } shift={shift} />
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default PlanShift;