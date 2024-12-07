import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,DialogFooter,DialogClose} from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, MoreHorizontal, Plus, Download, Upload } from 'lucide-react'
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select"

type User = {
  userId: number
  username: string
  email: string
  phone: string | null
  userRoleId: number
  positionId: number | null
  isActive: boolean
  lastLogin: Date | null
  createdAt: Date,
  password?: string
}

const mockUsers: User[] = [
  {
    userId: 1,
    username: "john_doe",
    email: "john@example.com",
    phone: "123-456-7890",
    userRoleId: 1,
    positionId: 1,
    isActive: true,
    lastLogin: new Date(),
    createdAt: new Date(),
  },
]

export default function MasterUser() {
  const [users, setUsers] = useState<User[]>(mockUsers)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortColumn, setSortColumn] = useState<keyof User>("username")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [newUser, setNewUser] = useState<Partial<User>>({})

  const handleExportUsers = () => {
    const csvContent = [
      ["User ID", "Username", "Email", "Phone", "Role ID", "Position ID", "Active", "Last Login", "Created At"],
      ...users.map(user => [
        user.userId,
        user.username,
        user.email,
        user.phone || '',
        user.userRoleId,
        user.positionId || '',
        user.isActive ? 'Yes' : 'No',
        user.lastLogin ? user.lastLogin.toLocaleString() : 'Never',
        user.createdAt.toLocaleString()
      ])
    ].map(e => e.join(",")).join("\n")

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", "users_export.csv")
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleCreateUser = () => {
    if (!newUser.username || !newUser.email) {
      alert("Username and email are required")
      return
    }

    const userToAdd: User = {
      ...newUser as User,
      userId: users.length + 1,
      userRoleId: 1,
      positionId: null,
      isActive: true,
      lastLogin: null,
      createdAt: new Date()
    }

    setUsers([...users, userToAdd])
    setNewUser({})
  }

  const handleSort = (column: keyof User) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const handleToggleActiveStatus = (userId: number) => {
    setUsers(users.map(user => 
      user.userId === userId 
        ? { ...user, isActive: !user.isActive } 
        : user
    ))
  }

  const filteredAndSortedUsers = users
    .filter(
      (user) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
      if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
      return 0
    })

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-row-reverse p-2 justify-between mb-4">
        <div className="space-x-2">
          {/* Add User Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add User
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New User</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input 
                    id="username" 
                    value={newUser.username || ''} 
                    onChange={(e) => setNewUser({...newUser, username: e.target.value})}
                    className="col-span-3" 
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input 
                    id="email" 
                    value={newUser.email || ''} 
                    onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                    className="col-span-3" 
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phone" className="text-right">
                    Phone
                  </Label>
                  <Input 
                    id="phone" 
                    value={newUser.phone || ''} 
                    onChange={(e) => setNewUser({...newUser, phone: e.target.value})}
                    className="col-span-3" 
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="password" className="text-right">
                    Password
                  </Label>
                  <Input 
                    id="password" 
                    value={newUser.password || ''} 
                    onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                    className="col-span-3" 
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="password" className="text-right">
                    Role
                  </Label>
                  <div>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Role" />
                        </SelectTrigger>
                        <SelectContent>
                            
                        </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="password" className="text-right">
                    Position
                  </Label>
                  <div>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Position" />
                        </SelectTrigger>
                        <SelectContent>
                            
                        </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Cancel
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button type="submit" onClick={handleCreateUser}>
                    Add User
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" /> Import Users
          </Button>
          
          {/* Export Users Button */}
          <Button variant="outline" onClick={handleExportUsers}>
            <Download className="mr-2 h-4 w-4" /> Export Users
          </Button>
        </div>
        <Input
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead onClick={() => handleSort("username")} className="cursor-pointer">
                Username {sortColumn === "username" && (sortDirection === "asc" ? "▲" : "▼")}
              </TableHead>
              <TableHead onClick={() => handleSort("email")} className="cursor-pointer">
                Email {sortColumn === "email" && (sortDirection === "asc" ? "▲" : "▼")}
              </TableHead>
              <TableHead>Phone</TableHead>
              <TableHead onClick={() => handleSort("isActive")} className="cursor-pointer">
                Status {sortColumn === "isActive" && (sortDirection === "asc" ? "▲" : "▼")}
              </TableHead>
              <TableHead onClick={() => handleSort("lastLogin")} className="cursor-pointer">
                Last Login {sortColumn === "lastLogin" && (sortDirection === "asc" ? "▲" : "▼")}
              </TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedUsers.map((user) => (
              <TableRow key={user.userId}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone || "N/A"}</TableCell>
                <TableCell>
                  <Switch 
                    checked={user.isActive}
                    onCheckedChange={() => handleToggleActiveStatus(user.userId)}
                  />
                </TableCell>
                <TableCell>{user.lastLogin ? user.lastLogin.toLocaleString() : "Never"}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Edit User</DropdownMenuItem>
                      <DropdownMenuItem>Change Role</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Delete User</DropdownMenuItem>
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