import { useEffect, useState } from 'react'
import { PlusIcon, Search, Trash2Icon } from 'lucide-react'
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
import { Suspense } from 'react'
import { Switch } from '@/components/ui/switch'
import { ScrollArea } from '@/components/ui/scroll-area'
import { addNewPosition } from '@/utils/addPosition'
import { fetchPositions } from '@/utils/fetchPosition'
import { updatePosition } from '@/utils/updatePosition'

interface Responsbility {
    responsibility: string
}

interface Postion {
    positionName: string;
    description: string;
    isActive: boolean;
    responsibilities: Responsbility[]
}

export default function Positions() {
    const [positions, setPositions] = useState<Postion[]>([])
    const [formData, setFormData] = useState<Postion>({
        positionName: "",
        description: '',
        isActive: true,
        responsibilities: []
    })
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [responsibility, setResponsibility] = useState('');
    const [selectedPosition, setSelectedPosition] = useState(-1);

    const onInputChange = (e) => {
        setFormData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const onResponsibilitChange = (e) => {
        setResponsibility(prev => e.target.value);
    }

    const onResponsibilityAdd = () => {
        if (!responsibility || responsibility.trim() == '') {
            return;
        }
        setFormData(prev => {
            return {
                ...prev,
                responsibilities: [...prev.responsibilities, { responsibility }]
            }
        })
        setResponsibility('')
    }

    const addPosition = async () => {
        const res = await addNewPosition(formData)
        if (!res) {
            toast.success("Something went wrong while creating new user, please try again later!")
            return;
        }
        setPositions((prev) => [...prev, res])
        toast.success("Position created Successfully")
        setFormData(prev => {
            return {
                positionName: "",
                description: '',
                isActive: true,
                responsibilities: []
            }
        })
        setIsDialogOpen(false)
    }

    const initialisePositions = async () => {
        const res = await fetchPositions();
        if (res) {
            setPositions(prev => res);
        } else {
            setPositions([]);
        }
    }

    const onPositionStatusChanged = async (id) => {
        const data = {
            isActive: !positions.find(po => po.positionId === id)?.isActive
        }
        const res = await updatePosition(data, id);
        if (res) {
            toast.success("Updated successfull!");
            setPositions(positions.map(position => position.positionId === id ? { ...position, isActive: !position.isActive } : position))
        } else {
            toast.error("Something went wrong")
            return;
        }
    }

    useEffect(() => {
        initialisePositions();
    }, [])

    return (
        <Suspense fallback={"loading"}>
            <div className="w-full pt-3 px-4">
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
                                            <Label htmlFor="position" className="text-left">
                                                Position
                                            </Label>
                                            <Input
                                                id="position"
                                                className="col-span-3"
                                                name='positionName'
                                                onChange={(e) => onInputChange(e)}
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="description" className="text-left">
                                                Description
                                            </Label>
                                            <Input
                                                id="description"
                                                className="col-span-3"
                                                name='description'
                                                onChange={(e) => onInputChange(e)}
                                            />
                                        </div>
                                        <div>
                                            <div className='flex justify-between items-center'>
                                                <p>Responsibilities</p>
                                            </div>
                                            <div className='flex space-x-2 p-2' >
                                                <Input
                                                    type='text'
                                                    placeholder='Enter responsibility here'
                                                    name='responsibility'
                                                    onChange={onResponsibilitChange}
                                                    value={responsibility}
                                                />
                                                <Button onClick={onResponsibilityAdd}>
                                                    <PlusIcon />
                                                </Button>
                                            </div>
                                            <div className='bg-gray-600/10 h-40 space-y-2 p-2'>
                                                <ScrollArea className='h-36'>
                                                    {
                                                        formData.responsibilities.map(responsibility => (
                                                            <div className='w-full mt-1 h-max p-2 bg-gray-500/10 rounded-sm'>
                                                                <p>{responsibility.responsibility}</p>
                                                                {/* <Button>
                                                                    <Trash2Icon />
                                                                </Button> */}
                                                            </div>
                                                        ))
                                                    }
                                                </ScrollArea>
                                            </div>
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
                                    <TableHead>Description</TableHead>
                                    <TableHead>Active</TableHead>
                                    <TableHead>Responsibilities</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {positions.map((position, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium w-[300px]">{position.positionName}</TableCell>
                                        <TableCell>{position.description}</TableCell>
                                        <TableCell>
                                            <Switch
                                                checked={position.isActive}
                                                onCheckedChange={() => onPositionStatusChanged(position.positionId)}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button onClick={() => setSelectedPosition(index)} variant={'ghost'}>Responsibilites</Button>
                                                </DialogTrigger>
                                                <DialogContent>
                                                    {
                                                        selectedPosition !== -1 &&
                                                        (positions[selectedPosition].responsibilities.map(responsibility => (
                                                            <div className='p-5 bg-slate-50/10 rounded-sm'>
                                                                {responsibility.responsibility}
                                                            </div>
                                                        )))
                                                    }
                                                </DialogContent>
                                            </Dialog>
                                        </TableCell>
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
        </Suspense>
    )
}

