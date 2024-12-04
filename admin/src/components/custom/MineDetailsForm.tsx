import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { MineDetails } from '@/types/initialization'
import { PlusCircle, Trash2 } from 'lucide-react'

interface MineDetailsFormProps {
  onSubmit: (mineDetails: MineDetails[], isNextButton: boolean) => void,
  data: MineDetails[]
}

export default function MineDetailsForm({ onSubmit, data }: MineDetailsFormProps) {
  const [mines, setMines] = useState<MineDetails[]>([{
    mineName: '',
    location: { latitude: 0, longitude: 0 },
    address: '',
    mineType: 'Open Cast',
    isActive: true,
    productionCapacity: 0,
    startDate: new Date(),
    endDate: new Date(),
  }])

  const handleAddMine = () => {
    setMines(prev => [...prev, {
      mineName: '',
      location: { latitude: 0, longitude: 0 },
      address: '',
      mineType: 'Open Cast',
      isActive: true,
      productionCapacity: 0,
      startDate: new Date(),
      endDate: new Date(),
    }])
  }

  const handleDeleteMine = (indexToRemove: number) => {
    if (mines.length > 1) {
      setMines(prev => prev.filter((_, index) => index !== indexToRemove))
    }
  }

  const handleMineChange = (index: number, field: keyof MineDetails, value: any) => {
    setMines(prev => prev.map((mine, i) => 
      i === index ? { ...mine, [field]: value } : mine
    ))
  }

  const handleSubmit = (e: React.FormEvent, isNextButton: boolean) => {
    e.preventDefault()
    onSubmit(mines, isNextButton)
  }

  useEffect(() => {
    setMines(data)
  }, [])

  return (
    <form className="space-y-6">
      {mines.map((mine, index) => (
        <div key={index} className="space-y-4 p-4 border rounded-md relative">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Mine {index + 1}</h3>
            {mines.length > 1 && (
              <Button 
                type="button" 
                variant="destructive" 
                size="sm" 
                onClick={() => handleDeleteMine(index)}
                className="absolute top-2 right-2"
              >
                <Trash2 className="h-4 w-4 mr-2" /> Delete
              </Button>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor={`mineName-${index}`}>Mine Name</Label>
            <Input
              id={`mineName-${index}`}
              value={mine.mineName}
              onChange={(e) => handleMineChange(index, 'mineName', e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`latitude-${index}`}>Latitude</Label>
              <Input
                id={`latitude-${index}`}
                type="number"
                value={mine.location.latitude}
                onChange={(e) => handleMineChange(index, 'location', { ...mine.location, latitude: parseFloat(e.target.value) })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`longitude-${index}`}>Longitude</Label>
              <Input
                id={`longitude-${index}`}
                type="number"
                value={mine.location.longitude}
                onChange={(e) => handleMineChange(index, 'location', { ...mine.location, longitude: parseFloat(e.target.value) })}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor={`address-${index}`}>Address</Label>
            <Input
              id={`address-${index}`}
              value={mine.address}
              onChange={(e) => handleMineChange(index, 'address', e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`mineType-${index}`}>Mine Type</Label>
            <Select
              value={mine.mineType}
              onValueChange={(value) => handleMineChange(index, 'mineType', value)}
            >
              <SelectTrigger id={`mineType-${index}`}>
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
              id={`isActive-${index}`}
              checked={mine.isActive}
              onCheckedChange={(checked) => handleMineChange(index, 'isActive', checked)}
            />
            <Label htmlFor={`isActive-${index}`}>Active</Label>
          </div>
          <div className="space-y-2">
            <Label htmlFor={`productionCapacity-${index}`}>Production Capacity (in Tons)</Label>
            <Input
              id={`productionCapacity-${index}`}
              type="number"
              value={mine.productionCapacity}
              onChange={(e) => handleMineChange(index, 'productionCapacity', parseFloat(e.target.value))}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`startDate-${index}`}>Start Date</Label>
              <Input
                id={`startDate-${index}`}
                type="date"
                value={mine.startDate.toISOString().split('T')[0]}
                onChange={(e) => handleMineChange(index, 'startDate', new Date(e.target.value))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`endDate-${index}`}>End Date</Label>
              <Input
                id={`endDate-${index}`}
                type="date"
                value={mine.endDate.toISOString().split('T')[0]}
                onChange={(e) => handleMineChange(index, 'endDate', new Date(e.target.value))}
              />
            </div>
          </div>
          <Button onClick={(e) => handleSubmit(e, false)} type="submit">Save</Button>
        </div>
      ))}
      <Button type="button" variant="outline" onClick={handleAddMine} className="w-full">
        <PlusCircle className="mr-2 h-4 w-4" /> Add Another Mine
      </Button>
      <Button onClick={(e) => handleSubmit(e, true)}>Next</Button>
    </form>
  )
}