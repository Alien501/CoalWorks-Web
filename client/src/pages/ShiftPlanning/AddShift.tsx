import { Dialog, DialogTitle, DialogContent, DialogHeader, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import SelectDate from "@/components/mine/SelectDate/SelectDate";
import MySelectBox from "@/components/mine/MySelectbox/MySelectbox";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const AddShift = ({trigger}) => {
  const shifTypes = [
    {
      text: 'Day',
      value: 'day'
    },
    {
      text: 'Night',
      value: 'night'
    },
    {
      text: 'maintenance',
      value: 'Maintenance'
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
  const mineNo = [
    {
      text: 'Mine 1',
      value: 'm1'
    },
    {
      text: 'Mine 2',
      value: 'm2'
    },
    {
      text: 'Mine 3',
      value: 'm3'
    }
  ];


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
                  <MySelectBox key={'st'} placeholder={'Shift Type'} content={shifTypes} />
                </div>
                <div className="p-1">
                  <label className="font-sm font-semibold text-black" htmlFor="">Task Description</label>
                  <Input name="taskDescription" placeholder="Task Description" type="text"  />
                </div>
                <div className="p-1">
                  <label className="font-sm font-semibold text-black" htmlFor="">Supervisor Name</label>
                  <MySelectBox key={'sn'} placeholder={'Supervisor Name'} content={supervisorNames} />
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
                  <MySelectBox key={'mn'} placeholder={'Mine no.'} content={mineNo} />
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

export default AddShift;