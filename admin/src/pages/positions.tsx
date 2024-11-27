import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Ellipsis } from 'lucide-react'
import { toast } from 'sonner'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
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
    const [activeItem, setActiveItem] = useState<'positions' | 'roles'>('positions')
    const [positions, setPositions] = useState(defaultPositions)
    const [position, setPosition] = useState("")
    const [description, setDescription] = useState("")
    const [subsidiary, setSubsidiary] = useState("")
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleItemClick = (item: 'positions' | 'roles') => {
        setActiveItem(item)
    }

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
                                    <span className={window.location.pathname === "/master-data/positions" ? "text-black" : ""}>
                                        Positions
                                    </span>
                                </a>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <a href="/master-data/permissions">
                                    <span className={window.location.pathname === "/master-data/permissions" ? "text-black" : ""}>
                                        Roles and Permission
                                    </span>
                                </a>
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                    </BreadcrumbList>
                </Breadcrumb>

                <div>
                    <div className="flex">
                        <span className='pr-4'>
                            <div className="flex items-center border rounded w-60 p-1">
                                <Search className="text-gray-400 mr-2" size={20} />
                                <input
                                    placeholder="Search Positions"
                                    className="w-full border-none focus:ring-0 focus:outline-none text-sm py-1"
                                />
                            </div>
                        </span>
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
            </div>

            <div className="mt-4">
                {activeItem === 'positions' ? (
                    <div className="">
                        <h2 className="text-xl font-semibold mb-2">Positions</h2>
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
                                        <TableCell className="text-right"><span className="hover:cursor-pointer flex justify-end"><Ellipsis className="w-10 rounded-full bg-black/[0.05] px-3 py-1"></Ellipsis></span></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                ) : (
                    <div className="">
                        <h2 className="text-xl font-semibold mb-2">Roles and Permissions</h2>
                    </div>
                )}
            </div>
        </div>
    )
}

