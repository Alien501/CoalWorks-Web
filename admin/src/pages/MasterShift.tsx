"use client"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, Plus, Search } from 'lucide-react'
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import Modal from "@/components/own/Modal"
import { addNewShift } from "@/utils/addNewShifts"
import { getShifts } from "@/utils/getShifts"
import { updateShiftData } from "@/utils/updateShift"

const formSchema = z.object({
  name: z.string().min(5, {
    message: "Shift name must be at least 5 characters.",
  }),
  startTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
    message: "Please enter a valid time in HH:MM format.",
  }),
  endTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
    message: "Please enter a valid time in HH:MM format.",
  }),
})

interface Shift {
  shiftId: string
  name: string
  startTime: string
  endTime: string
  isActive: boolean
}


const MasterShift = () => {
  const [shifts, setShifts] = useState<Shift[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortColumn, setSortColumn] = useState<keyof Shift | "">("")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      startTime: "",
      endTime: "",
    },
  })

  const fetchAndSetShifts = async () => {
    const res = await getShifts();
    if(res) {
      console.log(res);
      setShifts(prev => res);
    }else{
      setShifts([]);
    }
  }


  useEffect(() => {
    fetchAndSetShifts()
  }, [])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await addNewShift(values);
      if(!response) {
        return;
      }
      const newShift: Shift = {
        ...response,
        isActive: true
      }
      
      setShifts([...shifts, newShift])
      form.reset()
    } catch (error) {
      console.error('Error creating shift:', error)
    }
  }

  const filteredShifts = shifts.filter((shift) =>
    shift.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    
  }, [shifts])
  const sortedShifts = [...filteredShifts].sort((a, b) => {
    if (!sortColumn) return 0
    const aValue = a[sortColumn]
    const bValue = b[sortColumn]
    if (aValue < bValue) return sortOrder === "asc" ? -1 : 1
    if (aValue > bValue) return sortOrder === "asc" ? 1 : -1
    return 0
  })

  const handleSort = (column: keyof Shift) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortOrder("asc")
    }
  }

  const toggleShiftActive = async (shiftId: string) => {
    const changeStatusRes = await updateShiftData({
      isActive: !shifts.find(shift => shift.shiftId == shiftId)?.isActive
    }, shiftId)
    if(changeStatusRes) {
      alert('Changed status successfully!')
      setShifts(shifts.map(shift => 
        shift.shiftId === shiftId ? { ...shift, isActive: !shift.isActive } : shift
      ))
    } else {
      alert('Something went wrong while updating data!');
    }
  }

  const NewShiftForm = () => {
    return(
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem >
                <FormLabel>Shift Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter shift name" {...field} />
                </FormControl>
                <FormDescription>
                  This is the name that will be displayed for the shift.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex space-x-4 justify-center items-center">
            <FormField
              control={form.control}
              name="startTime"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-">
                  <FormLabel>Start Time</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} className="w-max mx-auto" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endTime"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-">
                  <FormLabel>End Time</FormLabel>
                  <FormControl>
                    <Input type="time" className="w-max mx-auto" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <DialogFooter>
            <Button type="submit">Save Shift</Button>
          </DialogFooter>
        </form>
      </Form>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center p-2 mb-6">
        <h1 className="text-3xl font-bold">Shifts</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Search shifts..."
              className="pl-10 w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Modal
            modalTitle="Add New Shift"
            modalContent={<NewShiftForm />}
            modalTriggerElement={<Button><Plus className="mr-2 h-4 w-4" /> Create New Shift</Button>}
          />
        </div>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px] cursor-pointer" onClick={() => handleSort("name")}>
                Shift Name {sortColumn === "name" && (sortOrder === "asc" ? "▲" : "▼")}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("startTime")}>
                Start Time {sortColumn === "startTime" && (sortOrder === "asc" ? "▲" : "▼")}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("endTime")}>
                End Time {sortColumn === "endTime" && (sortOrder === "asc" ? "▲" : "▼")}
              </TableHead>
              <TableHead>Active</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody key={shifts}>
            {shifts.map((shift) => (
              <TableRow key={shift.shiftId}>
                <TableCell className="font-medium">{shift.name}</TableCell>
                <TableCell>{shift.startTime}</TableCell>
                <TableCell>{shift.endTime}</TableCell>
                <TableCell>
                  <Switch
                    checked={shift.isActive}
                    onCheckedChange={() => toggleShiftActive(shift.shiftId)}
                  />
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
                      <DropdownMenuItem>Edit Shift</DropdownMenuItem>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">Delete Shift</DropdownMenuItem>
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

export default MasterShift