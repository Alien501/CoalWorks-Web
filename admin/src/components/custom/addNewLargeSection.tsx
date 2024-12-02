import React, { useEffect, useState } from "react"
import { TabsContent } from "@/components/ui/tabs"
import { Search, Plus, MapPin } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogTrigger, DialogDescription, DialogTitle, DialogHeader, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { MapboxAreaPlotter } from "./MapBoxAreaPlotter"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import axios from "axios"

interface Mine {
    mineId: number;
    name: string;
    location: string;
}

interface SectionType {
    typeId: number;
    typeName: string;
}

interface FormData {
    name: string;
    description: string;
    area: number;
    mine: Mine | null;
    type: SectionType | null;
    coordinates: number[][];
}

interface LargeSection {
    itemId: number;
    itemName: string;
}

export const AddNewLargeSection = ({ searchTerm, setSearchTerm, onSaveClicked, sectionType }: {
    searchTerm: string,
    setSearchTerm: (term: string) => void,
    onSaveClicked: (data: FormData, type: string) => void,
    sectionType: string
}) => {
    const [largeSections, setLargeSections] = useState<LargeSection[]>([])
    const [formData, setFormData] = useState<FormData>({
        name: '',
        description: '',
        area: 0,
        mine: null,
        type: null,
        coordinates: []
    })

    const [isMapOpen, setIsMapOpen] = useState(false)

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: name === 'area' ? Number(value) : value
        }))
    }

    const handleTypeChange = (value: string) => {
        const selectedSection = largeSections.find((item) => item.itemId.toString() === value)
        if (selectedSection) {
            setFormData(prev => ({
                ...prev,
                type: { typeId: selectedSection.itemId, typeName: selectedSection.itemName }
            }))
        }
    }

    const addNewLargeSection = async () => {
        if (formData.name.trim() === '' || formData.description.trim() === '') {
            return
        }
        try {
            const res = await fetch('/api/data/section/create', {
                headers: {
                    'Content-type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    ...formData,
                    area: formData.area,
                    scaleLevel: 5
                })
            })

            if (res.ok) {
                const d = await res.json();
                onSaveClicked(formData, sectionType)
                setFormData({
                    name: '',
                    description: '',
                    area: 0,
                    mine: null,
                    type: null,
                    coordinates: []
                })
            } else {
                console.error('Failed to save section')
            }
        } catch (error) {
            console.error('Error saving section:', error)
        }
    }

    useEffect(() => {
        const getAllLargeSections = async () => {
            try {
                const res = await axios.get("/api/data/section/items?scaleLevel=5");
                const largeSections = res?.data;
                setLargeSections(largeSections)
            } catch (error) {
                console.error('Error fetching large sections:', error)
            }
        }
        getAllLargeSections();
    }, [])

    const handleSaveCoordinates = (coordinates: number[][]) => {
        setFormData(prev => ({
            ...prev,
            coordinates
        }))
        setIsMapOpen(false)
    }

    return (
        <TabsContent value="section1">
            <div className="flex justify-between items-center mb-6 p-2">
                <h1 className="text-3xl font-bold">Large Area</h1>
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

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>
                                <Plus className="mr-2 h-4 w-4" /> Add New Section
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Add new section</DialogTitle>
                                <DialogDescription>
                                    Fill in the details for the new large section
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        className="col-span-3"
                                        name="name"
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
                                        className="col-span-3"
                                        name="description"
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
                                        className="col-span-3"
                                        name="area"
                                        type="number"
                                        value={formData.area}
                                        onChange={onValueChange}
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="Mine" className="text-right">
                                        Mine
                                    </Label>
                                    <Input
                                        id="mine"
                                        className="col-span-3"
                                        type="text"
                                        name="mine"
                                        onChange={onValueChange}
                                    />
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
                                                {largeSections.map((item) => (
                                                    <DropdownMenuRadioItem value={item.itemId.toString()} key={item.itemId}>
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
                                <Button onClick={addNewLargeSection} type="submit">Save changes</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
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
        </TabsContent>
    )
}