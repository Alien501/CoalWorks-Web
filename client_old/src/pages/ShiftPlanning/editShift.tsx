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
export const EditShift = (({ trigger, shift }) => {

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

    const [date, setDate] = useState(shift ? shift.date : '');
    const [supervisorId, setSupervisorId] = useState(shift ? shift.supervisor.user_id : '');
    const [shiftStatus, setShiftStatus] = useState(shift ? shift.status : '');
    const [startTime, setStartTime] = useState(shift ? shift.start_time : '');
    const [endTime, setEndTime] = useState(shift ? shift.end_time : '');
    const [edited, setEdited] = useState(false)

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>{trigger}</DialogTrigger>
                <DialogContent className="min-h-fit max-h-[80%]">
                    <ScrollArea className="h-full w-full rounded-md">
                        <DialogHeader>
                            <DialogTitle className="text-sm font-semibold text-center">{`Edit shift ${shift.shift_id}`}</DialogTitle>
                        </DialogHeader>
                        <DialogDescription>
                            <div className="p-1">
                                <label className="font-sm font-semibold text-black" htmlFor="shiftDate">Shift Date</label>
                                <Input
                                    required
                                    className="w-fit"
                                    name="date"
                                    type="datetime-local"
                                    value={date}
                                    placeholder={shift ? shift.date.split('.')[0] : "Enter shift date"}
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
                                        placeholder={shift ? shift.start_time.split('.')[0] : "Enter start time"}
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
                                        placeholder={shift ? shift.end_time.split('.')[0] : "Enter end time"}
                                        onChange={(e) => setEndTime(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="p-1">
                                <label className="font-sm font-semibold text-black" htmlFor="supervisorId">Supervisor ID</label>
                                <MySelectBox
                                    key={'sid'}
                                    placeholder={shift ? shift.supervisor.username : "Select supervisor"}
                                    content={supervisorNames}
                                    selectedValue={supervisorId}
                                    setSelectValue={setSupervisorId}
                                />
                            </div>
                            <div className="p-1">
                                <label className="font-sm font-semibold text-black" htmlFor="shiftStatus">Status</label>
                                <MySelectBox
                                    placeholder={shift ? shift.status : "Select status"}
                                    content={statusOptions}
                                    selectedValue={shiftStatus}
                                    setSelectValue={setShiftStatus}
                                />
                            </div>
                            <Button onClick={async () => {
                                const res = await editShift(shift.shift_id, date, supervisorId, shiftStatus, startTime, endTime)
                                if (res) {
                                    setEdited((prev)=>!prev)
                                    toast('Shift Edited Successfully');
                                }
                                else {
                                    toast('Something went wrong while editing shift, try again later!')
                                }
                            }} className="mx-auto block my-1">
                                {shift ? "Edit" : "Add"}
                            </Button>
                        </DialogDescription>
                    </ScrollArea>
                </DialogContent>
            </Dialog>
        </div>

    )
})