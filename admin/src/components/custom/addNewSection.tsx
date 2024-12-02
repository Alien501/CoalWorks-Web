import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DialogFooter } from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { MapboxAreaPlotter } from './MapBoxAreaPlotter'
import axios from 'axios'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, Plus, MapPin } from 'lucide-react'

interface SectionType {
  typeId: number;
  typeName: string;
}

interface FormData {
  name: string;
  description: string;
  area: number;
  inside: string | null;
  insiderToId: string | null;
  type: SectionType | null;
  coordinates: number[][];
}

interface AddNewSectionProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  value: string;
  setValue: (value: string) => void;
  areaType: string;
  sectionType: string;
  outerSection: any[];
  onSaveClicked: (data: FormData, type: string) => void;
  scaleLevel: number;
}

export const AddNewSection: React.FC<AddNewSectionProps> = ({
  searchTerm,
  setSearchTerm,
  open,
  setOpen,
  value,
  setValue,
  areaType,
  sectionType,
  outerSection,
  onSaveClicked,
  scaleLevel
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    area: 0,
    inside: null,
    insiderToId: null,
    type: null,
    coordinates: [],
  })

  const [dialogOpen, setDialogOpen] = useState(false)
  const [isMapOpen, setIsMapOpen] = useState(false)
  const [sections, setSections] = useState([])

  useEffect(() => {
    const getAllSections = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/v1/section/items?scaleLevel=${scaleLevel}`);
        const sections = res?.data;
        setSections(sections)
      } catch (error) {
        console.error('Error fetching sections:', error)
      }
    }
    getAllSections();
  }, [scaleLevel])

  const addNewSection = async () => {
    if (formData.name.trim() === '' || formData.description.trim() === '') {
      return
    }
    try {
      const res = await fetch('http://localhost:3000/api/v1/section/create', {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          ...formData,
          area: formData.area,
          scaleLevel: scaleLevel
        })
      })

      if (res.ok) {
        await res.json();
        onSaveClicked(formData, sectionType)
        setFormData({
          name: '',
          description: '',
          area: 0,
          inside: null,
          insiderToId: null,
          type: null,
          coordinates: []
        })
        setValue("")
        setDialogOpen(false)
      } else {
        console.error('Failed to save section')
      }
    } catch (error) {
      console.error('Error saving section:', error)
    }
  }

  const handleSaveCoordinates = (coordinates: number[][]) => {
    setFormData(prev => ({
      ...prev,
      coordinates
    }))
    setIsMapOpen(false)
  }

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'area' ? Number(value) : value
    }))
  }

  const handleTypeChange = (value: string) => {
    const selectedSection = sections.find((item) => item.itemId.toString() === value)
    if (selectedSection) {
      setFormData(prev => ({
        ...prev,
        type: { typeId: selectedSection.itemId, typeName: selectedSection.itemName }
      }))
    }
  }

  const handleInsideChange = (value: string) => {
    const [id, name] = value.split('|||')
    setFormData(prev => ({
      ...prev,
      inside: name,
      insiderToId: parseInt(id) 
    }))
    setOpen(false)
  }

  useEffect(() => {
    if (value) {
      setFormData(prev => ({
        ...prev,
        inside: value,
        insiderToId: value
      }))
    }
  }, [value])

  return (
    <div className="flex justify-between items-center mb-6 p-2">
      <h1 className="text-3xl font-bold">{areaType}</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            placeholder="Search Section..."
            className="pl-10 w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add New Section
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add new section</DialogTitle>
              <DialogDescription>
                Enter the details for the new section.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  className="col-span-3"
                  value={formData.name}
                  onChange={onValueChange}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  id="description"
                  name="description"
                  className="col-span-3"
                  value={formData.description}
                  onChange={onValueChange}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="area" className="text-right">
                  Area
                </Label>
                <Input
                  id="area"
                  name="area"
                  type="number"
                  className="col-span-3"
                  value={formData.area}
                  onChange={onValueChange}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="inside" className="text-right">
                  Inside
                </Label>
                <Select
                  onValueChange={handleInsideChange}
                  value={formData.inside || undefined}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Inside" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Outer Section</SelectLabel>
                      {outerSection.map((item: any) => (
                        <SelectItem
                          key={item.sectionId}
                          value={`${item.sectionId}|||${item.name}`} // Combine ID and name
                        >
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="type" className="text-right">
                  Type
                </Label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">{formData.type ? formData.type.typeName : 'Select Type'}</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Set Section Type</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={formData.type ? formData.type.typeId.toString() : ''} onValueChange={handleTypeChange}>
                      {sections.map((item) => (
                        <DropdownMenuRadioItem value={item.typeId.toString()} key={item.typeId}>
                          {item.itemName}
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="coordinates" className="text-right">
                  Plot Area
                </Label>
                <Button
                  onClick={() => setIsMapOpen(true)}
                  className="col-span-3"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  {formData.coordinates.length > 0 ? 'Edit Area' : 'Plot Area on Map'}
                </Button>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={addNewSection}>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      {isMapOpen && (
        <Dialog open={isMapOpen} onOpenChange={setIsMapOpen}>
          <DialogContent className="sm:max-w-[800px] sm:max-h-[600px]">
            <DialogHeader>
              <DialogTitle>Plot Area on Map</DialogTitle>
              <DialogDescription>
                Click on the map to create a polygon. Double-click to finish.
              </DialogDescription>
            </DialogHeader>
            <MapboxAreaPlotter onSaveCoordinates={handleSaveCoordinates} initialCoordinates={formData.coordinates} />
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

