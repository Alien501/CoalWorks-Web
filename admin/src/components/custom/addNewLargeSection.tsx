import React, { useEffect, useState } from "react";
import { Search, Plus, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { MapboxAreaPlotter } from "./MapBoxAreaPlotter";

// TypeScript interfaces
interface outerMostLevels {
    id: number,
    name: string,
    description?: string
}

interface FormData {
    name: string;
    description: string;
    area: number;
    type?: {
        id: number;
        name: string;
    } | null;
    coordinates: number[][];
}

interface AddNewSectionProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    onSaveClicked: (data: FormData) => void;
    outerMostLevels?: { id: number; name: string }[];
}

export const AddNewLargeSection: React.FC<AddNewSectionProps> = ({
    searchTerm,
    setSearchTerm,
    onSaveClicked,
    outerMostLevels = [{ id: 1, name: "district" }, { id: 2, name: "subsidiary" }, { id: 3, name: "area" }],
}) => {
    const [isMapOpen, setIsMapOpen] = useState(false);

    const {
        control,
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors }
    } = useForm<FormData>({
        defaultValues: {
            name: "",
            description: "",
            area: 0,
            coordinates: [],
            type: null
        }
    });

    const handleSaveCoordinates = (coordinates: number[][]) => {
        setValue('coordinates', coordinates);
        setIsMapOpen(false);
    };

    const onSubmit = async (data: FormData) => {
        try {
            //   const res = await fetch("/api/data/section/create", {
            //     method: "POST",
            //     headers: {
            //       "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({
            //       ...data,
            //       scaleLevel: 5
            //     })
            //   });

            //   if (res.ok) {
            //     onSaveClicked(data, sectionType);
            //     reset();
            //   }
            onSaveClicked(data)
            console.log(JSON.stringify(data))
        } catch (error) {
            console.error("Error saving section:", error);
        }
    };

    return (
        <div className="flex justify-between items-center mb-6 p-2">
            <h1 className="text-3xl font-bold">Section Details</h1>
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <DialogHeader>
                                <DialogTitle>Add new section</DialogTitle>
                                <DialogDescription>
                                    Fill in the details for the new large section
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">Name</Label>
                                    <Input
                                        id="name"
                                        className="col-span-3"
                                        {...register("name", { required: "Name is required" })}
                                    />
                                    {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="description" className="text-right">
                                        Description
                                    </Label>
                                    <Input
                                        id="description"
                                        className="col-span-3"
                                        {...register("description", { required: "Description is required" })}
                                    />
                                    {errors.description && <span className="text-red-500">{errors.description.message}</span>}
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="area" className="text-right">
                                        Area
                                    </Label>
                                    <Input
                                        id="area"
                                        type="number"
                                        className="col-span-3"
                                        {...register("area", {
                                            required: "Area is required",
                                            min: { value: 0, message: "Area must be positive" }
                                        })}
                                    />
                                    {errors.area && <span className="text-red-500">{errors.area.message}</span>}
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="type" className="text-right">
                                        Type
                                    </Label>
                                    <Controller
                                        name="type"
                                        control={control}
                                        rules={{ required: "Type is required" }}
                                        render={({ field }) => (
                                            <Select
                                                onValueChange={(value) => {
                                                    const selectedType = outerMostLevels.find(item => item.id === Number(value));
                                                    field.onChange(selectedType);
                                                }}
                                                value={field.value ? String(field.value.id) : undefined}
                                            >
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Select Type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Section Type</SelectLabel>
                                                        {outerMostLevels.map((item) => (
                                                            <SelectItem
                                                                key={item.id}
                                                                value={String(item.id)}
                                                            >
                                                                {item.name}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="coordinates" className="text-right">
                                        Plot Area
                                    </Label>
                                    <Button
                                        type="button"
                                        onClick={() => setIsMapOpen(true)}
                                        className="col-span-3"
                                    >
                                        <MapPin className="mr-2 h-4 w-4" />
                                        {control._formValues.coordinates && control._formValues.coordinates.length > 0
                                            ? 'Edit Area'
                                            : 'Plot Area on Map'}
                                    </Button>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Save changes</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <Dialog open={isMapOpen} onOpenChange={setIsMapOpen}>
                <DialogContent className="sm:max-w-[800px] sm:max-h-[600px]">
                    <DialogHeader>
                        <DialogTitle>Plot Area on Map</DialogTitle>
                        <DialogDescription>
                            Click on the map to create a polygon. Double-click to finish.
                        </DialogDescription>
                    </DialogHeader>
                    <MapboxAreaPlotter
                        onSaveCoordinates={handleSaveCoordinates}
                        initialCoordinates={control._formValues.coordinates}
                    />
                </DialogContent>
            </Dialog>
        </div>
    );
};