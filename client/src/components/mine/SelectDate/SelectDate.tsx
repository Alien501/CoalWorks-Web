//@ts-nocheck
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from '@/components/ui/button'
import { cn } from "@/lib/utils"
import { useState } from "react"
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar";

const SelectDate = ({dateProp}) => {
  console.log(dateProp)
  const [date, setDate] = useState(dateProp);

  return(
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] mt-0 justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus

        />
      </PopoverContent>
    </Popover>
  )
}

export default SelectDate;