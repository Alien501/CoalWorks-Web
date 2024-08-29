import { Badge } from "@/components/ui/badge";
import AddShift from "./AddShift";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { Table, TableBody, TableHeader, TableCell, TableRow, TableHead } from "@/components/ui/table";
import MySelectBox from "@/components/mine/MySelectbox/MySelectbox";

const PlanShift = () => {
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
        <Table className="border">
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
              <TableCell><MySelectBox placeholder={'Shift Status'} content={shiftStatus} /></TableCell>
              <TableCell>
                <AddShift trigger={
                  <Button variant={'secondary'}>
                    Edit
                  </Button>
                } />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>S002</TableCell>
              <TableCell>23/8/24</TableCell>
              <TableCell>8:00 pm</TableCell>
              <TableCell>Nesamani</TableCell>
              <TableCell>0</TableCell>
              <TableCell><MySelectBox placeholder={'Shift Status'} content={shiftStatus} /></TableCell>
              <TableCell>
                <AddShift trigger={
                  <Button variant={'secondary'}>
                    Edit
                  </Button>
                } />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>S003</TableCell>
              <TableCell>24/8/24</TableCell>
              <TableCell>8:00 pm</TableCell>
              <TableCell>Nesamani</TableCell>
              <TableCell>0</TableCell>
              <TableCell><MySelectBox placeholder={'Shift Status'} content={shiftStatus} /></TableCell>
              <TableCell>
                <AddShift trigger={
                  <Button variant={'secondary'}>
                    Edit
                  </Button>
                } />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>S004</TableCell>
              <TableCell>24/8/24</TableCell>
              <TableCell>8:00 pm</TableCell>
              <TableCell>Nesamani</TableCell>
              <TableCell>0</TableCell>
              <TableCell><MySelectBox placeholder={'Shift Status'} content={shiftStatus} /></TableCell>
              <TableCell>
                <AddShift trigger={
                  <Button variant={'secondary'}>
                    Edit
                  </Button>
                } />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default PlanShift;