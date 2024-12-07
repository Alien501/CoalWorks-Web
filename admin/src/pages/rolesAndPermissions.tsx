import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, MoreHorizontal, Plus, Edit, Trash2 } from 'lucide-react'

type Role = {
  id: string
  name: string
  description?: string
  createdAt: Date
}

export default function RolesManagement() {
  const [roles, setRoles] = useState<Role[]>([
    { 
      id: 'super-admin', 
      name: 'Super Admin', 
      description: 'Full system access',
      createdAt: new Date() 
    },
    { 
      id: 'manager', 
      name: 'Manager', 
      description: 'Operational management role',
      createdAt: new Date() 
    }
  ])
  const [searchTerm, setSearchTerm] = useState("")
  const [newRole, setNewRole] = useState<Partial<Role>>({})
  const [editingRole, setEditingRole] = useState<Role | null>(null)

  const handleAddRole = () => {
    if (!newRole.name) {
      alert("Role name is required")
      return
    }

    const roleToAdd: Role = {
      ...newRole as Role,
      id: newRole.name?.toLowerCase().replace(/\s+/g, '-'),
      createdAt: new Date()
    }

    setRoles([...roles, roleToAdd])
    setNewRole({}) // Reset form
  }

  const handleEditRole = () => {
    if (!editingRole) return

    setRoles(roles.map(role => 
      role.id === editingRole.id 
        ? { ...editingRole } 
        : role
    ))
    setEditingRole(null)
  }

  const handleDeleteRole = (roleId: string) => {
    setRoles(roles.filter(role => role.id !== roleId))
  }

  const filteredRoles = roles
    .filter(role => 
      role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (role.description?.toLowerCase().includes(searchTerm.toLowerCase()) || false)
    )

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-4">
        <div className="relative flex-grow max-w-md mr-4">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search roles..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        
        {/* Add Role Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Role
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Role</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Role Name
                </Label>
                <Input 
                  id="name" 
                  value={newRole.name || ''} 
                  onChange={(e) => setNewRole({...newRole, name: e.target.value})}
                  className="col-span-3" 
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input 
                  id="description" 
                  value={newRole.description || ''} 
                  onChange={(e) => setNewRole({...newRole, description: e.target.value})}
                  className="col-span-3" 
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button type="submit" onClick={handleAddRole}>
                  Add Role
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Edit Role Dialog */}
      <Dialog open={!!editingRole} onOpenChange={() => setEditingRole(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Role</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-name" className="text-right">
                Role Name
              </Label>
              <Input 
                id="edit-name" 
                value={editingRole?.name || ''} 
                onChange={(e) => setEditingRole(prev => prev ? {...prev, name: e.target.value} : null)}
                className="col-span-3" 
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-description" className="text-right">
                Description
              </Label>
              <Input 
                id="edit-description" 
                value={editingRole?.description || ''} 
                onChange={(e) => setEditingRole(prev => prev ? {...prev, description: e.target.value} : null)}
                className="col-span-3" 
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit" onClick={handleEditRole}>
                Save Changes
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Roles Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Role Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredRoles.map((role) => (
            <TableRow key={role.id}>
              <TableCell>{role.name}</TableCell>
              <TableCell>{role.description || 'No description'}</TableCell>
              <TableCell>{role.createdAt.toLocaleDateString()}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem 
                      onClick={() => setEditingRole(role)}
                      className="cursor-pointer"
                    >
                      <Edit className="mr-2 h-4 w-4" /> Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => handleDeleteRole(role.id)}
                      className="cursor-pointer text-red-600"
                    >
                      <Trash2 className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}