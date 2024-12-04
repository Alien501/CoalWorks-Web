import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from 'lucide-react'
import { OwnerDetails } from '@/types/initialization'

interface OwnerDetailsFormProps {
  onSubmit: (ownerDetails: OwnerDetails) => void,
  data: OwnerDetails
}

export default function OwnerDetailsForm({ onSubmit, data }: OwnerDetailsFormProps) {
  const [ownerDetails, setOwnerDetails] = useState<OwnerDetails>({
    name: '',
    address: '',
    email: '',
    phoneNumber: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(ownerDetails)
  }

  useEffect(() => {
    setOwnerDetails(data)
  }, [])
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Alert variant="warning">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Owner details cannot be edited once submitted. Please ensure all information is correct.
        </AlertDescription>
      </Alert>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={ownerDetails.name}
          onChange={(e) => setOwnerDetails(prev => ({ ...prev, name: e.target.value }))}
          required
          className='rounded-sm'
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          value={ownerDetails.address}
          onChange={(e) => setOwnerDetails(prev => ({ ...prev, address: e.target.value }))}
          required
          className='rounded-sm'
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={ownerDetails.email}
          onChange={(e) => setOwnerDetails(prev => ({ ...prev, email: e.target.value }))}
          required
          className='rounded-sm'
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phoneNumber">Phone Number</Label>
        <Input
          id="phoneNumber"
          type="tel"
          value={ownerDetails.phoneNumber}
          onChange={(e) => setOwnerDetails(prev => ({ ...prev, phoneNumber: e.target.value }))}
          required
          className='rounded-sm'
        />
      </div>
      <Button type="submit">Next</Button>
    </form>
  )
}

