import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MoreVertical, ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

interface Permission {
  id: string;
  name: string;
  children?: Permission[];
  description?: string;
}

export default function RolesAndPermissions() {
  const [selectedRole, setSelectedRole] = useState("");
  const [expandedItems, setExpandedItems] = useState<string[]>(["tenant-management"]);
  const [rolePermissions, setRolePermissions] = useState<Record<string, Set<string>>>({});

  const roles = [
    { id: "super-admin", name: "Super Admin" },
    { id: "manager", name: "Manager" },
    { id: "maintenance-manager", name: "Maintenance Manager" },
    { id: "new-role", name: "New Role" },
    { id: "developer", name: "Developer" },
    { id: "supervisor", name: "Supervisor" },
  ];

  const permissions: Permission[] = [
    { id: "dashboard", name: "Dashboard" },
    {
      id: "tenant-management",
      name: "Tenant Management",
      children: [
        { id: "display-tenants", name: "Display Tenants" },
        { id: "create-tenant", name: "Create Tenant" },
        { id: "update-tenant", name: "Update Tenant" },
      ],
    },
    { id: "maintenance", name: "Maintenance Control Center" },
    { id: "spare-parts", name: "Spare Parts Control Center" },
    { id: "user-management", name: "User Management" },
    { id: "work-instructions", name: "Work Instructions Authoring" },
  ];

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const togglePermission = (permissionId: string) => {
    setRolePermissions((prev) => {
      // Clone the existing set or create a new one if it doesn't exist
      const updated = new Set(prev[selectedRole] || []);
  
      // Add or remove the permission
      if (updated.has(permissionId)) {
        updated.delete(permissionId);
      } else {
        updated.add(permissionId);
      }
  
      // Return the updated state
      return { ...prev, [selectedRole]: updated };
    });
  };
  
  const isPermissionChecked = (permissionId: string) => {
    return rolePermissions[selectedRole]?.has(permissionId) ?? false;
  };
  

  const handleSave = () => {
    const serializedPermissions = Object.fromEntries(
      Object.entries(rolePermissions).map(([role, permissions]) => [
        role,
        Array.from(permissions || []),
      ])
    );
    console.log(serializedPermissions);
    toast.success(`Saved Permissions: ${JSON.stringify(serializedPermissions, null, 2)}`);
  };
  

  return (
    <div className="flex w-full bg-background border-b">
      <div className="w-72 border-r">
        <div className="p-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search" className="pl-8" />
          </div>
        </div>
        <div className="space-y-1">
          {roles.map((role) => (
            <div
              key={role.id}
              className={`flex items-center justify-between px-2 py-1 hover:bg-accent ${
                selectedRole === role.id ? "bg-accent" : ""
              }`}
              onClick={() => setSelectedRole(role.id)}
            >
              <div className="flex items-center space-x-2">
                <Checkbox checked={selectedRole === role.id} />
                <span className="text-sm">{role.name}</span>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 p-4">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex space-x-8 justify-center items-center">
            <span className="text-nowrap font-semibold">Selected Role</span>
            <span>
              <Input disabled value={roles.find((r) => r.id === selectedRole)?.name || ""} />
            </span>
          </div>
          <div className="space-x-2">
            <Button variant="outline">Copy</Button>
            <Button onClick={handleSave}>Save</Button>
          </div>
        </div>

        <div className="space-y-1">
          {permissions.map((permission) => (
            <div key={permission.id} className="space-y-1">
              <div className="flex items-center space-x-2 rounded-md px-2 py-2 hover:bg-accent">
                <Checkbox
                  checked={isPermissionChecked(permission.id)}
                  onCheckedChange={() => togglePermission(permission.id)}
                />
                <span className="flex-1 text-sm">{permission.name}</span>
                {permission.children && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => toggleExpand(permission.id)}
                  >
                    <ChevronRight
                      className={`h-4 w-4 transition-transform ${
                        expandedItems.includes(permission.id) ? "rotate-90" : ""
                      }`}
                    />
                  </Button>
                )}
              </div>
              {permission.children && expandedItems.includes(permission.id) && (
                <div className="ml-6 space-y-1">
                  {permission.children.map((child) => (
                    <div
                      key={child.id}
                      className="flex items-center space-x-2 rounded-md px-2 py-2 hover:bg-accent"
                    >
                      <Checkbox
                        checked={isPermissionChecked(child.id)}
                        onCheckedChange={() => togglePermission(child.id)}
                      />
                      <span className="text-sm">{child.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
