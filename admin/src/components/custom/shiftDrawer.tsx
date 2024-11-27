import { Drawer, DrawerContent } from "@/components/ui/drawer"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "../ui/badge"
import { ClipboardList } from "lucide-react"
import { Phone } from "lucide-react"
export default function ShiftDrawer({selectedShift, setSelectedShift}:{
    selectedShift: any,
    setSelectedShift:any
}){
    return(
        <Drawer
                open={!!selectedShift}
                onOpenChange={() => setSelectedShift(null)}
            >
                <DrawerContent className="w-[70%] mx-auto">
                    {selectedShift && (
                        <ScrollArea>
                            <div className="p-6 bg-background rounded-lg w-[92%] mx-auto mb-4">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="font-bold text-2xl">Shift Details</h3>
                                    <Badge variant="outline" className="text-lg px-3 py-1">
                                        {selectedShift.id}
                                    </Badge>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <h4 className="font-semibold text-xl flex items-center gap-2">
                                            <ClipboardList className="h-5 w-5" />
                                            Pending Tasks
                                        </h4>
                                        {selectedShift.details.taskList.length > 0 ? (
                                            <ul className="space-y-2">
                                                {selectedShift.details.taskList.map((task:any, index: number) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex-shrink-0">
                                                            {index + 1}
                                                        </span>
                                                        <span className="text-sm">{task}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-muted-foreground">No pending tasks</p>
                                        )}
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="font-semibold text-xl flex items-center gap-2">
                                            <Phone className="h-5 w-5" />
                                            Contact Information
                                        </h4>
                                        <p className="text-sm bg-muted/50 p-3 rounded-md">
                                            {selectedShift.details.contactInfo}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollArea>
                    )}
                </DrawerContent>
            </Drawer>
    )
}