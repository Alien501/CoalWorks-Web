import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const positions = [
    {
        id: "position1",
        label: "Position 1",
    },
    {
        id: "position2",
        label: "Position 2",
    },
    {
        id: "position3",
        label: "Position 3",
    },
    {
        id: "position4",
        label: "Position 4",
    },
    {
        id: "position5",
        label: "Position 5",
    },
]

export function ShiftHandoverCard() {
    const [selectedPositions, setSelectedPositions] = useState([])

    const handlePositionSelect = (positionId) => {
        setSelectedPositions(prev => 
            prev.includes(positionId)
                ? prev.filter(id => id !== positionId)
                : [...prev, positionId]
        )
    }

    return (
        <Card className="w-[450px] ">
            <CardHeader>
                <CardTitle className="text-xl">Create Shift Handover Template</CardTitle>
                <CardDescription className="">Create Shift Handover Template</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Name of the shift" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Position</Label>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline">
                                        {selectedPositions.length > 0 
                                            ? `${selectedPositions.length} position(s) selected` 
                                            : "Select Position"}
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Select Position</DialogTitle>
                                        <DialogDescription>
                                            Choose the positions for your shift handover.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        {positions.map((position) => (
                                            <div 
                                                key={position.id} 
                                                className="flex items-center space-x-2"
                                            >
                                                <Checkbox
                                                    id={position.id}
                                                    checked={selectedPositions.includes(position.id)}
                                                    onCheckedChange={() => handlePositionSelect(position.id)}
                                                />
                                                <Label 
                                                    htmlFor={position.id}
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    {position.label}
                                                </Label>
                                            </div>
                                        ))}
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit">Save changes</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
            </CardFooter>
        </Card>
    )
}

export const CreateShiftHandover = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <ShiftHandoverCard />
        </div>
    )
}