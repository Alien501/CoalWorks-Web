import { cn } from "@/lib/utils"
import { ScrollArea } from "../ui/scroll-area"

interface AlertEntry {
  date: string
  status: string
  isActive?: boolean
}

export default function AlertsCard() {
  const entries: AlertEntry[] = [
    {
      date: "11 Dec 2023",
      status: "Security Warning",
      isActive: true
    },
    {
      date: "12 Dec 2023",
      status: "Potential Breach Detected",
      isActive: true
    },
    {
      date: "13 Dec 2023",
      status: "Resolved",
      isActive: false
    },
    {
      date: "14 Dec 2023",
      status: "Resolved",
      isActive: false
    },
    {
      date: "15 Dec 2023",
      status: "System Check",
      isActive: false
    }
  ]

  return (
    <div className="bg-background shadow-sm rounded-lg border">
      <ScrollArea className="h-[250px]">
        <div className="p-4 space-y-4">
          {entries.map((entry, index) => (
            <div key={index} className="flex items-center gap-3">
              {/* <div 
                className={cn(
                  "w-3 h-3 rounded-full",
                  entry.isActive 
                    ? "bg-yellow-500" 
                    : entry.status === "Resolved" 
                      ? "bg-green-500" 
                      : "border-2 border-gray-200"
                )}
              /> */}
              
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <p className={cn(
                    "text-sm",
                    entry.isActive ? "text-yellow-600" : 
                    entry.status === "Resolved" ? "text-green-600" : "text-gray-500"
                  )}>
                    {entry.status}
                  </p>
                  <p className="text-xs text-gray-400">
                    {entry.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}