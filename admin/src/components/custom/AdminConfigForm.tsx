import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AdminConfig } from '@/types/initialization'

interface AdminConfigFormProps {
  onSubmit: (adminConfig: AdminConfig, type: boolean) => void,
  data: AdminConfig
}

export default function AdminConfigForm({ onSubmit }: AdminConfigFormProps) {
  const [adminConfig, setAdminConfig] = useState<AdminConfig>({
    email: '',
    password: '',
    name: ''
  })

  const handleSubmit = (e: React.FormEvent, type: boolean) => {
    e.preventDefault()
    onSubmit(adminConfig, type)
  }

  return (
    <>
        <div>
            <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="adminName">Super Admin Name</Label>
                <Input
                id="adminName"
                type="name"
                value={adminConfig.name}
                onChange={(e) => setAdminConfig(prev => ({ ...prev, name: e.target.value }))}
                required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="adminEmail">Super Admin Email</Label>
                <Input
                id="adminEmail"
                type="email"
                value={adminConfig.email}
                onChange={(e) => setAdminConfig(prev => ({ ...prev, email: e.target.value }))}
                required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="adminPassword">Super Admin Password</Label>
                <Input
                id="adminPassword"
                type="password"
                value={adminConfig.password}
                onChange={(e) => setAdminConfig(prev => ({ ...prev, password: e.target.value }))}
                required
                />
            </div>
            <Button type="submit">Save</Button>
            </form>
        </div>
        <br />
        <Button onClick={(e) => handleSubmit(e, true)}>Complete</Button>
    </>
  )
}

