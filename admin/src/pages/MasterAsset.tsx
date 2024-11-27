import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, Search } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "sonner"

interface Assets {
    id: string
    name: string
    description: string
    model: string
    type: string
    createdAt: string
    updatedAt: string
    location: string
}

const sampleAssets: Assets[] = [
    {
        id: "1",
        name: "Excavator X-500",
        description: "Heavy-duty excavator for digging and earth-moving tasks.",
        model: "X-500",
        type: "Excavator",
        createdAt: "2024-01-15T08:30:00Z",
        updatedAt: "2024-11-01T10:00:00Z",
        location: "Plant A - Zone 1"
    },
    {
        id: "2",
        name: "Dump Truck DT-3000",
        description: "Large dump truck for transporting coal from mining sites.",
        model: "DT-3000",
        type: "Truck",
        createdAt: "2023-05-22T09:00:00Z",
        updatedAt: "2024-10-18T14:30:00Z",
        location: "Plant A - Zone 2"
    },
    {
        id: "3",
        name: "Coal Crusher C-200",
        description: "Crusher for breaking down large chunks of coal into smaller sizes.",
        model: "C-200",
        type: "Crusher",
        createdAt: "2023-09-05T07:45:00Z",
        updatedAt: "2024-11-12T11:20:00Z",
        location: "Plant B - Crushing Section"
    },
    {
        id: "4",
        name: "Belt Conveyor BC-400",
        description: "Conveyor belt system for transporting coal across the plant.",
        model: "BC-400",
        type: "Conveyor",
        createdAt: "2022-12-10T16:30:00Z",
        updatedAt: "2024-07-29T13:15:00Z",
        location: "Plant C - Conveyor Line"
    },
    {
        id: "5",
        name: "Drill Rig DR-1200",
        description: "Drill rig used for drilling boreholes in mining operations.",
        model: "DR-1200",
        type: "Drill",
        createdAt: "2024-02-20T10:45:00Z",
        updatedAt: "2024-09-30T15:00:00Z",
        location: "Mine Site 4 - Borehole Area"
    }
];
export default function MasterAsset() {
    const [assets, setAssets] = useState(sampleAssets)
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [model, setModel] = useState("");
    const [type, setType] = useState("");
    const [location, setLocation] = useState("");

    const onSaveAsset = ()=> {
        setAssets((prev: any) => [...prev, {name: name, description: description, model: model, type: type, location: location}])
        toast.success("Asset Created Successfully")
        setIsDialogOpen(false)
    }
    return (
        <div className="container mx-auto py-10">
            <div className="flex justify-between items-center p-2 mb-6">
                <h1 className="text-3xl font-bold">Assets</h1>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <Input
                            placeholder="Search Assets..."
                            className="pl-10 w-64"
                        //   value={searchTerm}
                        //   onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <Dialog open = {isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                            <Button onClick={() => setIsDialogOpen(true)}>Create New Asset</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Create new Asset</DialogTitle>
                                {/* <DialogDescription>
                                    Make changes to your profile here. Click save when you're done.
                                </DialogDescription> */}
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        className="col-span-3"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="model" className="text-right">
                                        Model
                                    </Label>
                                    <Input
                                        id="model"
                                        className="col-span-3"
                                        onChange={(e) => setModel(e.target.value)}
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="description" className="text-right">
                                        Description
                                    </Label>
                                    <Input
                                        id="description"
                                        className="col-span-3"
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="type" className="text-right">
                                        Type
                                    </Label>
                                    <Input
                                        id="type"
                                        className="col-span-3"
                                        onChange={(e) => setType(e.target.value)}
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="location" className="text-right">
                                        Location
                                    </Label>
                                    <Input
                                        id="location"
                                        className="col-span-3"
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button onClick = {onSaveAsset}>Save changes</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Model</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {assets.map((asset) => (
                            <TableRow key={asset.id}>
                                <TableCell className="font-medium">{asset.name}</TableCell>
                                <TableCell>{asset.model}</TableCell>
                                <TableCell>{asset.description}</TableCell>
                                <TableCell>{asset.type}</TableCell>
                                <TableCell>{asset.location}</TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <span className="sr-only">Open menu</span>
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem>Edit Asset</DropdownMenuItem>
                                            <DropdownMenuItem>View Details</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="text-red-600">Delete Asset</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}