import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import axios from 'axios'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    PhoneInput
} from "@/components/ui/phone-input";
import { toast } from 'sonner'



const CreateUserSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email format"),
    phone: z.string().optional(),
    password: z.string().min(8, "Password must be at least 8 characters"),
    userRoleId: z.number().int("User role must be a valid integer"),
    positionId: z.number().int("Position must be a valid integer").optional(),
    createdBy: z.number().int("Creator ID invalid")
})


interface User {
    userId: number
    username: string
    userRole: {
        roleName: string
    },
    email: string,
    phone: string,
    isSupervisor: boolean
}

export function UserManagement() {

    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        try {
            const response = await axios.get('/api/data/user')
            console.log(response.data.data)
            setUsers(response.data.data)
        } catch (error) {
            console.error('Failed to fetch users:', error)
        }
    }

    const handleUserCreated = () => {
        fetchUsers()
    }

    return (
        <div className="container mx-auto py-10">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">User Management</h1>
                <CreateUserDialog onUserCreated={handleUserCreated} />
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Username</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Supervisor</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.userId}>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>{user.userRole.roleName}</TableCell>
                            <TableCell>{user.isSupervisor ? 'Yes' : 'No'}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

type CreateUserForm = z.infer<typeof CreateUserSchema>

interface CreateUserDialogProps {
    onUserCreated: () => void
}

export function CreateUserDialog({ onUserCreated }: CreateUserDialogProps) {

    const formSchema = z.object({
        username: z.string(),
        email: z.string(),
        password: z.string(),
        phone: z.string(),
        userRoleId: z.string()
    });


    const [isOpen, setIsOpen] = useState(false)
    const [roles, setRoles] = useState<Role[]>([])

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await axios.get('/api/data/role')
                setRoles(response.data.data)
            } catch (error) {
                console.error('Failed to fetch roles:', error)
            }
        }
        fetchRoles()
    }, [])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),

    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const payload = {...values, userRoleId: Number(values.userRoleId)}
            const res = await axios.post("/api/data/user/create", 
                payload
            )  
            if(res.status === 201){
                toast.success("user created successfully")
            }
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button>Create New User</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create New User</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5  max-w-3xl py-10">

                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="username"

                                            type=""
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="email"

                                            type=""
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="password"

                                            type=""
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="flex flex-col items-start">
                                    <FormLabel>Phone number</FormLabel>
                                    <FormControl className="w-full">
                                        <PhoneInput
                                            placeholder="Placeholder"
                                            {...field}
                                            defaultCountry="TR"
                                        />
                                    </FormControl>
                                    <FormDescription>Enter your phone number.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                        <FormField
                            control={form.control}
                            name="userRoleId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Role</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a role of the user" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {
                                                roles.map((role) => (
                                                    <SelectItem value={role.roleId.toString()}>{role.roleName}</SelectItem>
                                                ))
                                            }
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}