import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePicker() {
  const [date, setDate] = React.useState<Date>()

  return (
   <div className="flex-col justify-center place-content-center mt-3">
     <Popover >
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal bg-black border-2 border-[#212121] rounded-xl hover:bg-black hover:text-white p-7",
            !date && "text-white bg-black p-7 rounded-xl" 
          )}
        >
          <CalendarIcon className="mr-2 h-5 w-5 text-gray-400" />
          {date ? format(date, "PPP") : <span className="text-lg text-gray-400">Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          className="bg-black text-white"
        />
      </PopoverContent>
    </Popover>
   </div>
  )
}
