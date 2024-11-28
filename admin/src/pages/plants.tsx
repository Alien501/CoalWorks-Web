"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Factory, MoreHorizontal, Plus, Search } from 'lucide-react'
import Modal from "@/components/own/Modal"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const plantsData = [
    {
        "Name": "DTY Plant",
        "Plant Id": "DTY Plant",
        "Country": "IN",
        "State": "Maharashtra",
        "Zip Code": "400324"
    },
    {
        "Name": "Hershey",
        "Plant Id": "HER",
        "Country": "USA",
        "State": "USA",
        "Zip Code": "940404"
    },
    {
        "Name": "RELJamNagar",
        "Plant Id": "REL",
        "Country": "REL",
        "State": "Gujarat",
        "Zip Code": "500006"
    },
    {
        "Name": "JK Cement",
        "Plant Id": "112909",
        "Country": "India",
        "State": "Rajasthan",
        "Zip Code": "400983"
    },
    {
        "Name": "Cement Production Plant",
        "Plant Id": "1008",
        "Country": "IN",
        "State": "Maharashtra",
        "Zip Code": "440023"
    },
    {
        "Name": "Chems Plant",
        "Plant Id": "1100",
        "Country": "USA",
        "State": "Texas",
        "Zip Code": "462132"
    },
    {
        "Name": "Pasadena Plastics",
        "Plant Id": "UA01",
        "Country": "US",
        "State": "CA",
        "Zip Code": "010020"
    }
]

const formSchema = z.object({
    name: z.string(),
    plantId: z.string(),
    country: z.string(),
    state: z.string(),
    zipCode: z.string()
})

export function Plants() {
    const [plants, setPlants] = useState(plantsData)
    const [searchTerm, setSearchTerm] = useState("")
    const [sortColumn, setSortColumn] = useState("")
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
    const [name, setName] = useState("")


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            plantId: "",
            country: "",
            state: "",
            zipCode: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        setPlants((...prev: any) => [...prev, { ...values, "Plant Id": values.plantId, "Zip Code": values.zipCode }])
        form.reset()
    }

    const filteredPlants = plants.filter((plant) =>
        Object.values(plant).some((value) =>
            value.toLowerCase().includes(searchTerm.toLowerCase())
        )
    )

    const sortedPlants = [...filteredPlants].sort((a, b) => {
        if (!sortColumn) return 0
        const aValue = a[sortColumn as keyof typeof a]
        const bValue = b[sortColumn as keyof typeof b]
        if (aValue < bValue) return sortOrder === "asc" ? -1 : 1
        if (aValue > bValue) return sortOrder === "asc" ? 1 : -1
        return 0
    })

    const handleSort = (column: string) => {
        if (column === sortColumn) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc")
        } else {
            setSortColumn(column)
            setSortOrder("asc")
        }
    }

    const NewPlant = () => {
        return (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Plant name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="plantId"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Plant ID</FormLabel>
                                <FormControl>
                                    <Input placeholder="Plant ID" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Country</FormLabel>
                                <FormControl>
                                    <Input placeholder="Country" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>State</FormLabel>
                                <FormControl>
                                    <Input placeholder="State" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="zipCode"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Zip Code</FormLabel>
                                <FormControl>
                                    <Input placeholder="Zip Code" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <DialogFooter>
                        <Button type="submit">Save Plant</Button>
                    </DialogFooter>
                </form>
            </Form>
        )
    }

    return (
        <div className="container mx-auto py-10">
            <Tabs defaultValue="section1">
                <div className=" bg-slate-50/0 flex items-center justify-center h-14">
                    <TabsList className="h-12 bg-gray-100 dark:bg-black border rounded-lg p-1">
                        <TabsTrigger
                            className="h-full flex-1 rounded-md text-sm font-medium transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-white/85 data-[state=active]:text-black data-[state=active]:shadow-sm relative overflow-hidden"
                            value="section1"
                        >
                            <span>Section 1</span>
                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary transform origin-left transition-transform data-[state=active]:scale-x-100 scale-x-0" />
                        </TabsTrigger>
                        <TabsTrigger
                            className="h-full flex-1 rounded-md text-sm font-medium transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-white/85 data-[state=active]:text-black data-[state=active]:shadow-sm relative overflow-hidden"
                            value="section2"
                        >
                            <span>Section 2</span>
                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black transform origin-left transition-transform data-[state=active]:scale-x-100 scale-x-0" />
                        </TabsTrigger>
                        <TabsTrigger
                            className="h-full flex-1 rounded-md text-sm font-medium transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-white/85 data-[state=active]:text-black data-[state=active]:shadow-sm relative overflow-hidden"
                            value="section3"
                        >
                            <span>Section 3</span>
                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black transform origin-left transition-transform data-[state=active]:scale-x-100 scale-x-0" />
                        </TabsTrigger>
                        <TabsTrigger
                            className="h-full flex-1 rounded-md text-sm font-medium transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-white/85 data-[state=active]:text-black data-[state=active]:shadow-sm relative overflow-hidden"
                            value="section4"
                        >
                            <span>Section 4</span>
                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black transform origin-left transition-transform data-[state=active]:scale-x-100 scale-x-0" />
                        </TabsTrigger>
                        <TabsTrigger
                            className="h-full flex-1 rounded-md text-sm font-medium transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-white/85 data-[state=active]:text-black data-[state=active]:shadow-sm relative overflow-hidden"
                            value="section5"
                        >
                            <span>Section 5</span>
                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary transform origin-left transition-transform data-[state=active]:scale-x-100 scale-x-0" />
                        </TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="section1">
                    <div className="flex justify-between items-center mb-6 p-2">
                        <h1 className="text-3xl font-bold">Plants</h1>
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <Input
                                    placeholder="Search plants..."
                                    className="pl-10 w-64"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <Modal
                                modalTitle="Add New Plant"
                                modalTriggerElement={<Button><Plus className="mr-2 h-4 w-4" /> Add New Plant</Button>}
                                modalContent={<NewPlant />}
                            />
                        </div>
                    </div>
                    <div className="border rounded-lg overflow-hidden">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[200px] cursor-pointer" onClick={() => handleSort("Name")}>
                                        Name {sortColumn === "Name" && (sortOrder === "asc" ? "▲" : "▼")}
                                    </TableHead>
                                    <TableHead className="cursor-pointer" onClick={() => handleSort("Plant Id")}>
                                        Plant Id {sortColumn === "Plant Id" && (sortOrder === "asc" ? "▲" : "▼")}
                                    </TableHead>
                                    <TableHead className="cursor-pointer" onClick={() => handleSort("Country")}>
                                        Country {sortColumn === "Country" && (sortOrder === "asc" ? "▲" : "▼")}
                                    </TableHead>
                                    <TableHead className="cursor-pointer" onClick={() => handleSort("State")}>
                                        State {sortColumn === "State" && (sortOrder === "asc" ? "▲" : "▼")}
                                    </TableHead>
                                    <TableHead className="cursor-pointer" onClick={() => handleSort("Zip Code")}>
                                        Zip Code {sortColumn === "Zip Code" && (sortOrder === "asc" ? "▲" : "▼")}
                                    </TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {sortedPlants.map((plant, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">
                                            <div className="flex items-center space-x-2">
                                                <Factory className="h-4 w-4" />
                                                <span>{plant.Name}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>{plant["Plant Id"]}</TableCell>
                                        <TableCell>{plant.Country}</TableCell>
                                        <TableCell>{plant.State}</TableCell>
                                        <TableCell>{plant["Zip Code"]}</TableCell>
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
                                                    <DropdownMenuItem>Edit Plant</DropdownMenuItem>
                                                    <DropdownMenuItem>View Details</DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className="text-red-600">Delete Plant</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                </TabsContent>
            </Tabs >
        </div >
    )
}

