//@ts-nocheck
import { Dialog, DialogTitle, DialogContent, DialogHeader, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import SelectDate from "@/components/mine/SelectDate/SelectDate";
import MySelectBox from "@/components/mine/MySelectbox/MySelectbox";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const AddShift = ({ trigger, shift }: {
  trigger: any,
  shift: any
}) => {
  const shiftStatus = [
    {
      text: 'Completed',
      value: 'completed'
    },
    {
      text: 'Scheduled',
      value: 'scheduled'
    },
    {
      text: 'InProgress',
      value: 'InProgress'
    }
  ];
  const supervisorNames = [
    {
      text: 'Super One',
      value: 's1'
    },
    {
      text: 'Super Two',
      value: 's2'
    },
    {
      text: 'Super Three',
      value: 's3'
    }
  ];

  const [date, setDate] = useState(shift.date);
  const [startTime, setStartTime] = useState(shift.start_time);
  const [endTime, setEndTime] = useState(shift.end_time);
  
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="h-[71%]">
          <ScrollArea className="h-full rounded-md">
            <DialogHeader>
              <DialogTitle className="text-sm font-semibold text-center">{`Edit the Shift ${shift && shift.shift_id}`}</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <form>
                <div className="p-1 ">
                  <label className="font-sm font-semibold text-black" htmlFor="shiftId">Shift ID</label>
                  <Input disabled className="mt-2 " name="shiftId" placeholder={`${shift && shift.shift_id}`} type="text" />
                </div>
                <div className="p-1">
                  <label className="font-sm font-semibold text-black mr-3" htmlFor="">Shift Date</label>
                  <br />
                  <SelectDate dateProp={shift && shift.date}/>
                </div>
                <div className="p-1">
                  <label className="font-sm  font-semibold text-black" htmlFor="">Shift Start Time</label>
                  <Input
                    name="date"
                    type="time"
                    className="mt-1"
                    defaultValue={shift ? shift.start_time.split('T')[1].split(':').slice(0, 2).join(':') : ""}
                  />
                </div>
                <div className="p-1">
                  <label className="font-sm  font-semibold text-black" htmlFor="">Shift End Time</label>
                  <Input
                    name="date"
                    type="time"
                    className="mt-1"
                    defaultValue={shift ? shift.end_time.split('T')[1].split(':').slice(0, 2).join(':') : ""}
                  />
                </div>
                <div className="p-1">
                  <div className="mb-1"><label className="font-sm font-semibold text-black" htmlFor="">Supervisor Name</label></div>
                  <MySelectBox key={'sn'} placeholder={`${shift && shift.status}`} content={supervisorNames} />
                </div>
                <div className="p-1">
                  <div className="mb-1"><label className="font-sm font-semibold text-black" htmlFor="">Status</label></div>
                  <MySelectBox key={'sn'} placeholder={`${shift && shift.status}`} content={shiftStatus} />
                </div>
                <Button className="mx-auto block my-1" onClick={()=>modifyShift()}>
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

export default AddShift;