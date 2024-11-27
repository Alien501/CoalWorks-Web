import { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from 'lucide-react'
import { toast } from 'sonner'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"



const defaultPositions = [
    {
        name: "Overman",
        subsidiary: "subsidiary 1",
        description: ""
    },
    {
        name: "Sirdar",
        subsidiary: "subsidiary 2",
        description: ""
    },
]

export default function Positions() {
    const [positions, setPositions] = useState(defaultPositions)
    const [position, setPosition] = useState("")
    const [description, setDescription] = useState("")
    const [subsidiary, setSubsidiary] = useState("")
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const addPosition = () => {
        setPositions((prev) => [...prev, { name: position, description: description, subsidiary: subsidiary }])
        toast.success("Position created Successfully")
        setIsDialogOpen(false)
    }
    console.log(window.location.pathname)
    return (
        <div className="w-full pt-3  px-4">
            <div className='flex justify-between items-center border-b pb-3'>
                <Breadcrumb about='skjfdk'>
                    <BreadcrumbList >
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <a href="/master-data/positions">
                                    <span className={window.location.pathname === "/master-data/positions" ? "text-black: dark:text-white" : ""}>
                                        Positions
                                    </span>
                                </a>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <a href="/master-data/permissions">
                                    <span className={window.location.pathname === "/master-data/permissions" ? "text-black dark:text-white" : ""}>
                                        Roles and Permission
                                    </span>
                                </a>
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="container mx-auto py-10">
                <div className="flex justify-between items-center p-2 mb-6">
                    <h1 className="text-3xl font-bold">Positions</h1>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <Input
                                placeholder="Search Positions..."
                                className="pl-10 w-64"
                            //   value={searchTerm}
                            //   onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                            <DialogTrigger asChild>
                                <Button onClick={() => setIsDialogOpen(true)}>Create New</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Create new position</DialogTitle>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="position" className="text-right">
                                            Position
                                        </Label>
                                        <Input
                                            id="position"
                                            className="col-span-3"
                                            onChange={(e) => setPosition(e.target.value)}
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
                                        <Label htmlFor="susbsidiary" className="text-right">
                                            Subsidiary
                                        </Label>
                                        <Input
                                            id=""
                                            className="col-span-3"
                                            onChange={(e) => setSubsidiary(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button onClick={addPosition}>Save changes</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
                <div className="border rounded-lg overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Name</TableHead>
                                <TableHead>Subisdiary</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {positions.map((position, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium w-[300px]">{position.name}</TableCell>
                                    <TableCell>{position.subsidiary}</TableCell>
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
                                                <DropdownMenuItem>Edit Position</DropdownMenuItem>
                                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="text-red-600">Delete Position</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

