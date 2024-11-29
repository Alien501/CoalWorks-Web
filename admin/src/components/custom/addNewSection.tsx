import { Check, ChevronsUpDown, Plus, Search } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DialogFooter } from "@/components/ui/dialog"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { useState, useEffect } from "react"

interface SectionType {
  typeId: number;
  typeName: string;
}

interface FormData {
  name: string;
  description: string;
  area: number;
  inside: string;
  type: SectionType | string;
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
  outerSection: { name: string }[];
  onSaveClicked: (data: FormData, type: string) => void;
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
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    area: 0,
    inside: "",
    type: "",
  })

  const [dialogOpen, setDialogOpen] = useState(false)

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'area' ? parseFloat(value) || 0 : value
    }))
  }

  const addNewSection = () => {
    if (formData.name.trim() === '' || formData.description.trim() === '') {
      return
    }
    onSaveClicked(formData, sectionType)
    setFormData({
      name: '',
      description: '',
      area: 0,
      inside: "",
      type: '',
    })
    setValue("")
    setDialogOpen(false)
  }

  useEffect(() => {
    if (value) {
      setFormData(prev => ({ ...prev, inside: value }))
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
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-[200px] justify-between"
                    >
                      {value || "Select Area"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search Area..." />
                      <CommandList>
                        <CommandEmpty>No area found.</CommandEmpty>
                        <CommandGroup>
                          {outerSection?.map((item) => (
                            <CommandItem
                              key={item.name}
                              value={item.name}
                              onSelect={(currentValue) => {
                                setValue(currentValue === value ? "" : currentValue)
                                setFormData(prev => ({ ...prev, inside: currentValue }))
                                setOpen(false)
                              }}
                            >
                              {item.name}
                              <Check
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  value === item.name ? "opacity-100" : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="type" className="text-right">
                  Type
                </Label>
                <Input
                  id="type"
                  name="type"
                  className="col-span-3"
                  value={formData.type}
                  onChange={onValueChange}
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={addNewSection}>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
