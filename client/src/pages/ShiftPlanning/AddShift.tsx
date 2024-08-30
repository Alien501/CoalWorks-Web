//@ts-nocheck
import { Dialog, DialogTitle, DialogContent, DialogHeader, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import SelectDate from "@/components/mine/SelectDate/SelectDate";
import MySelectBox from "@/components/mine/MySelectbox/MySelectbox";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { submitNewShift } from "@/utils/submitNewShift";
import { useEffect } from "react";
import { editShift } from "@/utils/submitNewShift";
import { toast } from "sonner";
import axios from "axios"

const AddShift = ({ trigger }) => {
  const shiftTypes = [
    { text: 'Day', value: 'day' },
    { text: 'Night', value: 'night' },
    { text: 'Maintenance', value: 'maintenance' }
  ];
  const supervisorNames = [
    { text: 'Super One', value: 1 },
    { text: 'Super Two', value: 2 },
    { text: 'Super Three', value: 3 }
  ];
  const statusOptions = [
    { text: 'Not Started', value: 'notStarted' },
    { text: 'Started', value: 'started' },
    { text: 'Overdue', value: 'overDue' }
  ];

  const formRef = useRef();

  const [date, setDate] = useState('');
  const [supervisorId, setSupervisorId] = useState('');
  const [shiftStatus, setShiftStatus] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  // useEffect(() => {
  //   if (shift) {
  //     setDate(shift.date.split('T')[0]);
  //     setStartTime(shift.start_time.split('T')[1].split(':').slice(0, 2).join(':'));
  //     setEndTime(shift.end_time.split('T')[1].split(':').slice(0, 2).join(':'));
  //     setSupervisorId(shift.supervisor_id);
  //     setShiftStatus(shift.status);
  //   }
  // }, [shift]);

  // const editShiftHandler = (async (shiftId)=>{
  //   const formData = {
  //     date: date,
  //     start_time: startTime,
  //     end_time: endTime,
  //     supervisor_id: parseInt(supervisorId),
  //     status: shiftStatus,
  //   };
  //   console.log(formData)
  //   const editedOrNot = await editShift(formData, shiftId);
  //   if (editedOrNot) {
  //     toast(' Shift edited Successfully!');
  //   } else {
  //     toast('Something went wrong while editing the shift, try again later!')
  //   }
  // })
  const handleFormSubmit = async (e) => {
    console.log("runs")
    e.preventDefault();
    const formData = {
      date: date,
      start_time: startTime,
      end_time: endTime,
      supervisor_id: parseInt(supervisorId),
      status: shiftStatus,
    };
    console.log(formData)

    if (supervisorId.trim() == '' || shiftStatus.trim() == '')
      return

    const submittedOrNot = await submitNewShift(formData);
    if (submittedOrNot) {
      toast('Created New Shift Successfully!');
    } else {
      toast('Something went wrong while creating new shift, try again later!')
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="min-h-fit max-h-[80%]">
          <ScrollArea className="h-full w-full rounded-md">
            <DialogHeader>
              <DialogTitle className="text-sm font-semibold text-center"></DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <form ref={formRef} onSubmit={handleFormSubmit}>
                <div className="p-1">
                  <label className="font-sm font-semibold text-black" htmlFor="shiftDate">Shift Date</label>
                  <Input
                    required
                    className="w-fit"
                    name="date"
                    type="datetime-local"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="flex flex-row justify-evenly">
                  <div className="p-1">
                    <label className="font-sm font-semibold text-black" htmlFor="startTime">Start Time</label>
                    <Input
                      required
                      name="start_time"
                      type="datetime-local"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                    />
                  </div>
                  <div className="p-1">
                    <label className="font-sm font-semibold text-black" htmlFor="endTime">End Time</label>
                    <Input
                      required
                      name="end_time"
                      type="datetime-local"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                    />
                  </div>
                </div>
                <div className="p-1">
                  <label className="font-sm font-semibold text-black" htmlFor="supervisorId">Supervisor ID</label>
                  <MySelectBox
                    key={'sid'}
                    // placeholder={shift ? shift.supervisor.username : " "}
                    content={supervisorNames}
                    selectedValue={supervisorId}
                    setSelectValue={setSupervisorId}
                  />
                </div>
                <div className="p-1">
                  <label className="font-sm font-semibold text-black" htmlFor="shiftStatus">Status</label>
                  <MySelectBox
                    content={statusOptions}
                    selectedValue={shiftStatus}
                    setSelectValue={setShiftStatus}
                  />
                </div>
                    <Button type="submit" className="mx-auto block my-1">
                      Add
                    </Button>
              </form>
            </DialogDescription>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}

  export default AddShift
