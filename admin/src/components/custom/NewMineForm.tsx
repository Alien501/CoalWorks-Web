import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Trash2, PlusCircle } from "lucide-react"
import axios from 'axios'
import { toast } from 'sonner'

// Define the Mine interface
interface Mine {
  mineName: string
  location: {
    latitude: number
    longitude: number
  }
  address: string
  mineType: 'Open Cast' | 'Underground'
  isActive: boolean
  productionCapacity: number
  startDate: Date
  endDate?: Date
}

export function AddMineForm() {
  const [mine, setMine] = useState<Mine>({
    mineName: '',
    location: { latitude: 0, longitude: 0 },
    address: '',
    mineType: 'Open Cast',
    isActive: true,
    productionCapacity: 0,
    startDate: new Date(),
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (field: string, value: string | number | boolean | Date) => {
    setMine(prev => {
      if (field === 'latitude' || field === 'longitude') {
        return {
          ...prev,
          location: {
            ...prev.location,
            [field]: typeof value === 'string' ? parseFloat(value) : value
          }
        }
      }
      
      if (field === 'startDate' || field === 'endDate') {
        return {
          ...prev,
          [field]: value instanceof Date ? value : new Date(value)
        }
      }
      
      return {
        ...prev,
        [field]: value
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      if (!mine.mineName || !mine.address) {
        setError('Please fill in all required fields')
        setIsSubmitting(false)
        return
      }

      const response = await axios.post('/api/data/mine', {
        ...mine,
        operationalStatus: mine.isActive
      })
      
      toast.success('Mine added successfully');
      
      setMine({
        mineName: '',
        location: { latitude: 0, longitude: 0 },
        address: '',
        mineType: 'Open Cast',
        isActive: true,
        productionCapacity: 0,
        startDate: new Date(),
      })
    } catch (err) {
      setError('Failed to add mine. Please try again.')
      toast.error('Submission error:')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          {error}
        </div>
      )}

      <div className="space-y-4 p-4 border rounded-md">
        <div className="space-y-2">
          <Label htmlFor="mineName">Mine Name</Label>
          <Input
            id="mineName"
            value={mine.mineName}
            onChange={(e) => handleChange('mineName', e.target.value)}
            required
            placeholder="Enter mine name"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="latitude">Latitude</Label>
            <Input
              id="latitude"
              type="number"
              value={mine.location.latitude}
              onChange={(e) => handleChange('latitude', e.target.value)}
              step="0.000001"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="longitude">Longitude</Label>
            <Input
              id="longitude"
              type="number"
              value={mine.location.longitude}
              onChange={(e) => handleChange('longitude', e.target.value)}
              step="0.000001"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            value={mine.address}
            onChange={(e) => handleChange('address', e.target.value)}
            required
            placeholder="Enter full address"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mineType">Mine Type</Label>
          <Select 
            value={mine.mineType}
            onValueChange={(value) => handleChange('mineType', value as 'Open Cast' | 'Underground')}
          >
            <SelectTrigger id="mineType">
              <SelectValue placeholder="Select mine type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Open Cast">Open Cast</SelectItem>
              <SelectItem value="Underground">Underground</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="isActive"
            checked={mine.isActive}
            onCheckedChange={(checked) => handleChange('isActive', checked)}
          />
          <Label htmlFor="isActive">Active</Label>
        </div>

        <div className="space-y-2">
          <Label htmlFor="productionCapacity">Production Capacity (in Tons)</Label>
          <Input
            id="productionCapacity"
            type="number"
            value={mine.productionCapacity}
            onChange={(e) => handleChange('productionCapacity', parseFloat(e.target.value))}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="startDate">Start Date</Label>
            <Input
              id="startDate"
              type="date"
              value={mine.startDate.toISOString().split('T')[0]}
              onChange={(e) => handleChange('startDate', e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="endDate">End Date (Optional)</Label>
            <Input
              id="endDate"
              type="date"
              value={mine.endDate ? mine.endDate.toISOString().split('T')[0] : ''}
              onChange={(e) => handleChange('endDate', e.target.value)}
            />
          </div>
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Submitting...' : 'Add Mine'}
        </Button>
      </div>
    </form>
  )
}