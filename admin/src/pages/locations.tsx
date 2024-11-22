"use client"

import { useState } from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Ellipsis, Search, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Modal from "@/components/own/Modal"

const initialLocations = [
    {
        Name: "Mine Site 1",
        Description: "N/A",
        Model: "GM",
        Parent: "California Mine",
    },
    {
        Name: "Mine Site 2",
        Description: "N/A",
        Model: "N/A",
        Parent: "California Mine",
    },
    {
        Name: "California Mine",
        Description: "N/A",
        Model: "N/A",
        Parent: "N/A",
    },
    {
        Name: "Excavators",
        Description: "N/A",
        Model: "GE",
        Parent: "California Mine",
    },
    {
        Name: "Pump House",
        Description: "N/A",
        Model: "N/A",
        Parent: "Fukushima Nuclear Power Plant",
    },
    {
        Name: "Reactor Room",
        Description: "N/A",
        Model: "N/A",
        Parent: "Fukushima Nuclear Power Plant",
    },
    {
        Name: "Turbine Room",
        Description: "N/A",
        Model: "N/A",
        Parent: "Turbine Room",
    },
    {
        Name: "Power Plant (Area_001)",
        Description: "N/A",
        Model: "N/A",
        Parent: "N/A",
    },
    {
        Name: "Fukushima Nuclear Power Plant",
        Description: "N/A",
        Model: "N/A",
        Parent: "N/A",
    },
]

const formSchema = z.object({
    name: z.string().min(2, {
        message: 'Name must be at least 2 characters'
    }),
    locationId: z.string().min(2, {
        message: 'Location ID must be at least 2 characters'
    }),
    model: z.string().min(2, {
        message: 'Model should be at least 2 characters'
    }),
    description: z.string().min(2, {
        message: 'Description should be at least 2 characters'
    }),
    plant: z.string().min(2, {
        message: 'Invalid selection'
    }),
    parent: z.string().min(2, {
        message: 'Invalid selection'
    }),
    isUnit: z.boolean()
})

type Location = z.infer<typeof formSchema>

const  Locations = () => {
    const [locations, setLocations] = useState(initialLocations)
    const [searchTerm, setSearchTerm] = useState("")
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const form = useForm<Location>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: '',
            isUnit: false,
            locationId: "",
            model: '',
            parent: '',
            plant: ''
        }
    })

    const filteredLocations = locations.filter(location =>
        Object.values(location).some(value =>
            value.toLowerCase().includes(searchTerm.toLowerCase())
        )
    )

    function onSubmit(values: Location) {
        setLocations([...locations, { 
            Name: values.name, 
            Description: values.description, 
            Model: values.model, 
            Parent: values.parent 
        }])
        setIsDialogOpen(false)
        form.reset()
    }

    const NewLocation = () => {
        return (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="flex justify-evenly items-center">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Location Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Location Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="locationId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Location ID</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Location ID" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="model"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Model</FormLabel>
                                <FormControl>
                                    <Input placeholder="Model" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input placeholder="Description" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex  space-x-2 items-center justify-between">
                        <div className="flex space-x-2 items-center justify-center">
                            <FormField
                                control={form.control}
                                name="plant"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Plant</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a plant" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="p1">Plant 1</SelectItem>
                                                <SelectItem value="p2">Plant 2</SelectItem>
                                                <SelectItem value="p3">Plant 3</SelectItem>
                                                <SelectItem value="p4">Plant 4</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="parent"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Parent</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a parent" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="p1">Parent 1</SelectItem>
                                                <SelectItem value="p2">Parent 2</SelectItem>
                                                <SelectItem value="p3">Parent 3</SelectItem>
                                                <SelectItem value="p4">Parent 4</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <FormField
                                control={form.control}
                                name="isUnit"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel>
                                                Mark as Unit
                                            </FormLabel>
                                        </div>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save Location</Button>
                    </DialogFooter>
                </form>
            </Form>
        )
    }

    return (
        <div className="container mx-auto py-10">
            <div className="flex justify-between items-center mb-6 p-2">
                <h1 className="text-3xl font-bold">Locations</h1>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <Input
                            placeholder="Search locations..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 w-64"
                        />
                    </div>
                    <Modal
                        modalTitle="Add new Location"
                        modalTriggerElement={<Button><Plus className="mr-2 h-4 w-4" /> Create New</Button>}
                        modalContent={<NewLocation />}
                    />
                </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[200px]">Name</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Model</TableHead>
                            <TableHead>Parent</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredLocations.map((location, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{location.Name}</TableCell>
                                <TableCell>{location.Description}</TableCell>
                                <TableCell>{location.Model}</TableCell>
                                <TableCell>{location.Parent}</TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <span className="sr-only">Open menu</span>
                                                <Ellipsis className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem>Edit Location</DropdownMenuItem>
                                            <DropdownMenuItem>View Details</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="text-red-600">Delete Location</DropdownMenuItem>
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

export default Locations