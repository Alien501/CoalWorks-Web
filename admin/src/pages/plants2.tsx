import React, { useState, useMemo, useEffect } from 'react'
import axios from 'axios'; // Make sure to install axios
import { Plus, Search, Filter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from '@/components/ui/badge';
import { AddWorkForce } from '@/components/custom/addWorkforce';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
  DialogDescription
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel
} from "@/components/ui/select"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Label } from "@/components/ui/label"
import { fetchSectionTypes } from '@/utils/fetchSectionTypes'
import { toast } from 'sonner';
import { fetchSections } from '@/utils/fetchSections';
import MapPolygonDrawer from '@/components/custom/drawingMap';
import { MoreHorizontal } from 'lucide-react';
import { AssignWorkForce } from '@/components/custom/assignWorkforce';
import { Description } from '@radix-ui/react-dialog';
// import { toast } from "@/components/ui/use-toast" // Assuming you're using shadcn/ui toast
import { Checkbox } from "@/components/ui/checkbox"
import CreateShiftTemplateDialog from '@/components/custom/createShiftTemplateDialog';
import ShiftAssignmentDialog from '@/components/custom/ShiftAssignmentDialog';

interface SectionType {
  id: number
  name: string
  description: string
}

interface Section {
  id: number,
  name: string,
  sectionType: number,
  area: number
}

export default function SectionsPage() {
  const [activeTab, setActiveTab] = useState("types");
  const [sectionTypes, setSectionTypes] = useState([]);
  const [sections, setSections] = useState([]);

  const [typeSearch, setTypeSearch] = useState("");
  const [sectionSearch, setSectionSearch] = useState("");
  const [sectionTypeFilter, setSectionTypeFilter] = useState("");

  const [newSectionType, setNewSectionType] = useState({
    name: "",
    description: "",
    color: ''
  });

  const [newSection, setNewSection] = useState({
    name: "",
    sectionType: "",
    area: "",
    coordinates: []
  });

  const mockShifts = [
    { id: 1, name: "Morning Shift" },
    { id: 2, name: "Afternoon Shift" },
    { id: 3, name: "Night Shift" }
  ];

  const mockSupervisors = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Mike Johnson" }
  ];

  const mockOperators = [
    { id: 1, name: "Alice Brown" },
    { id: 2, name: "Bob Wilson" },
    { id: 3, name: "Charlie Davis" },
    { id: 4, name: "Diana Evans" },
    { id: 5, name: "Ethan Green" }
  ];

  const [selectedShift, setSelectedShift] = useState(null);
  const [shiftAssignments, setShiftAssignments] = useState({});
  const [selectedSupervisor, setSelectedSupervisor] = useState(null);
  const [selectedOperators, setSelectedOperators] = useState([]);

  const handleShiftSelection = (shift) => {
    setSelectedShift(shift);
    // Reset selections when changing shifts
    setSelectedSupervisor(null);
    setSelectedOperators([]);
  };

  const handleSupervisorSelect = (supervisor) => {
    setSelectedSupervisor(supervisor);
  };

  const handleOperatorToggle = (operator) => {
    setSelectedOperators(prev =>
      prev.includes(operator)
        ? prev.filter(op => op.id !== operator.id)
        : [...prev, operator]
    );
  };

  const handleAssignToShift = () => {
    if (!selectedShift || !selectedSupervisor) return;

    setShiftAssignments(prev => ({
      ...prev,
      [selectedShift.id]: {
        shift: selectedShift,
        supervisor: selectedSupervisor,
        operators: selectedOperators
      }
    }));

    // Reset selections after assignment
    setSelectedSupervisor(null);
    setSelectedOperators([]);
  };

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isEditDialogOpen2, setIsEditDialogOpen2] = useState(false)
  const [assignWorkForceOpen, setIsAssignWorkForceOpen] = useState(false)
  const [editingSectionType, setEditingSectionType] = useState<SectionType | null>(null)
  const [editingSection, setEditingSection] = useState<Section | null>(null)
  const [users, setUsers] = useState([])
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [overAllSelectedSection, setOverallSelectedSection] = useState<Section | null>(null)

  const handleAssignWorkforce = (section) => {
    setOverallSelectedSection(section)
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClose2 = () => {
    setIsOpen2(false);
  };

  const handleAddWorkForce = (section) => {
    setOverallSelectedSection(section)
    setIsOpen2(true);
  };


  const handleEditClick = (section: SectionType) => {
    setEditingSectionType(section)
    setIsEditDialogOpen(true)
  }

  const handleEditClick2 = (section: Section) => {
    setEditingSection(section)
    setIsEditDialogOpen2(true)
  }

  const handleSaveChanges2 = () => {
    if (editingSection) {
      onEditSection(editingSection.id, editingSection)
      setIsEditDialogOpen(false)
      setEditingSection(null)
    }
  }

  const handleSaveChanges = () => {
    if (editingSectionType) {
      onEditSectionType(editingSectionType.id)
      setIsEditDialogOpen(false)
      setEditingSectionType(null)
    }
  }

  const onEditSection = (id: number, section: any) => {
    if (editingSection) {
      console.log(JSON.stringify(section))
      onEditSectionHandler(editingSection.id)
      setIsEditDialogOpen(false)
      setEditingSection(null)
    }
  }

  async function onDeleteSectionType(id: number) {
    try {
      const res = await axios.delete(`/api/data/sectiontype/${id}`);
      if (res.status === 200) {
        toast.success("Section Type deleted successfully")
        setSectionTypes(await fetchSectionTypes())
      }
      else {
        console.log(res.status)
        toast.error("Section type can't be deleted due to some errors")
      }
    }
    catch (error: any) {
      if (error.status === 409) {
        toast.error("Section Type cant be deleted since you have sections with this type.")
      }
      else {
        toast.error("Section type can't be deleted due to some errors. Please try again later")
      }
    }
  }

  async function onEditSectionType(id: number) {
    try {
      const res = await axios.post(`/api/data/sectiontype/${id}`, {
        name: editingSectionType?.name,
        description: editingSectionType?.description
      });
      if (res.status === 200) {
        toast.success("Section type edited successfully")
        setSectionTypes(await fetchSectionTypes())
      }
      else {
        toast.error("Section type can't be edited due to some errors. Please try again later")
      }
    }
    catch (error) {
      toast.error("Section Type can't be edited due to some errors")
    }
  }

  async function onDeleteSection(id: number) {
    try {
      const res = await axios.delete(`/api/data/section/${id}`);

      // Check response status
      if (res.status === 200) {
        toast.success(res.data.message || "Section deleted successfully");
      } else {
        toast.error("Error while deleting the section");
      }
    } catch (error: any) {
      const serverMessage = error.response?.data?.msg || "An unexpected error occurred.";

      if (error.response?.status === 409) {
        toast.error(serverMessage);
      } else {
        toast.error(serverMessage);
      }
      console.error(error);
    } finally {
      const updatedSections = await fetchSections();
      setSections(updatedSections);
    }
  }


  const onEditSectionHandler = async (id: number) => {
    try {
      const res = await axios.post(`/api/data/section/${id}`, {
        name: editingSection?.name,
        area: editingSection?.area,
        sectionType: editingSection?.sectionType
      });
      if (res.status === 200) {
        toast.success("Section edited succssfully")
        setSections(await fetchSections())
      }
      else {
        toast.error("Section can't be edited due to some errors")
      }
    }
    catch (error) {
      toast.error("Section can't be edited due to some errors")
    }
  }

  const filteredSectionTypes = useMemo(() => {
    return sectionTypes?.filter(type =>
      type.name.toLowerCase().includes(typeSearch.toLowerCase()) ||
      type.description.toLowerCase().includes(typeSearch.toLowerCase())
    );
  }, [sectionTypes, typeSearch]);

  const filteredSections = useMemo(() => {
    return sections?.filter(section =>
      (section.name.toLowerCase().includes(sectionSearch.toLowerCase())) &&
      (!sectionTypeFilter || section.sectionType === parseInt(sectionTypeFilter))
    );
  }, [sections, sectionSearch, sectionTypeFilter]);

  const handleAddSectionType = async () => {
    try {
      if (!newSectionType.name || !newSectionType.description) {
        toast.success("Name and description are required")
        return;
      }

      const response = await axios.post('/api/data/sectiontype', {
        name: newSectionType.name,
        description: newSectionType.description,
        color: newSectionType.color
      });

      setSectionTypes([...sectionTypes, response.data]);

      setNewSectionType({ name: "", description: "", color: '' });

      toast.success("Section Type created successfully")
    } catch (error) {
      console.error("Error creating section type:", error);
      toast.error("Failed to create section type")
    }
  };

  const handleAddSection = async () => {
    try {
      if (!newSection.name || !newSection.sectionType || !newSection.area || newSection.coordinates.length == 0) {
        toast.error("All fields are required")
        return;
      }

      const response = await axios.post('/api/data/section', {
        name: newSection.name,
        sectionType: parseInt(newSection.sectionType),
        area: parseFloat(newSection.area),
        coordinates: newSection.coordinates
      });

      setSections([...sections, response.data]);

      setNewSection({ name: "", sectionType: "", area: "", coordinates: [] });
      console.log(newSection)

      toast.success("Section created successfully")
    } catch (error) {
      console.error("Error creating section:", error);
      toast.error("Failed to create section")
    }
  };

  useEffect(() => {
    const getAndSetSectiontype = async () => {
      try {
        const res = await fetchSectionTypes();
        setSectionTypes(res);
      } catch (error) {
        console.error("Error fetching section types:", error);
      }
    }

    const getAndSetSection = async () => {
      try {
        const res = await fetchSections();
        setSections(res);
        console.log(res)
      } catch (error) {
        console.error("Error fetching section types:", error);
      }
    }

    // const fetchAllUsers = async () => {
    //   const res = await axios.get("/api/data/user")
    //   setUsers(res.data.data);
    // }

    getAndSetSectiontype();
    getAndSetSection();
    // fetchAllUsers();
  }, [])

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="container mx-auto py-10 space-y-4">
      <Tabs defaultValue="types">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger
              value="types"
              onClick={() => setActiveTab("types")}
            >
              Section Types
            </TabsTrigger>
            <TabsTrigger
              value="sections"
              onClick={() => setActiveTab("sections")}
            >
              Sections
            </TabsTrigger>
          </TabsList>

          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add {activeTab === "sections" ? "Section" : "Section Type"}
              </Button>
            </DialogTrigger>
            <DialogContent>
              {activeTab === "types" ? (
                <>
                  <DialogHeader>
                    <DialogTitle>Create New Section Type</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4 text-left">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        value={newSectionType.name}
                        onChange={(e) => setNewSectionType({
                          ...newSectionType,
                          name: e.target.value
                        })}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="description" className="text-right">
                        Description
                      </Label>
                      <Input
                        id="description"
                        value={newSectionType.description}
                        onChange={(e) => setNewSectionType({
                          ...newSectionType,
                          description: e.target.value
                        })}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="description" className="text-right">
                        Color
                      </Label>
                      <Input
                        id="color"
                        value={newSectionType.color}
                        onChange={(e) => setNewSectionType({
                          ...newSectionType,
                          color: e.target.value
                        })}
                        type='color'
                        className="col-span-3"
                      />
                    </div>
                    <Button onClick={handleAddSectionType}>
                      Create Section Type
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <DialogHeader>
                    <DialogTitle>Create New Section</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="section-name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="section-name"
                        value={newSection.name}
                        onChange={(e) => setNewSection({
                          ...newSection,
                          name: e.target.value
                        })}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="section-type" className="text-right">
                        Section Type
                      </Label>
                      <Select
                        value={newSection.sectionType}
                        onValueChange={(value) => setNewSection({
                          ...newSection,
                          sectionType: value
                        })}
                      >
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select Section Type" />
                        </SelectTrigger>
                        <SelectContent>
                          {sectionTypes.map(type => (
                            <SelectItem
                              key={type.id}
                              value={type.id.toString()}
                            >
                              {type.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="section-area" className="text-right">
                        Area
                      </Label>
                      <Input
                        id="section-area"
                        type="number"
                        value={newSection.area}
                        onChange={(e) => setNewSection({
                          ...newSection,
                          area: e.target.value
                        })}
                        className="col-span-3"
                      />
                    </div>
                    <div className='h-[400px]'>
                      <MapPolygonDrawer
                        setCoordinate={setNewSection}
                      />
                    </div>
                    <Button onClick={handleAddSection}>
                      Create Section
                    </Button>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>

        {/* Search and Filter Section */}
        <div className="flex items-center space-x-2 mb-4 mt-4">
          <div className="flex items-center border rounded-md px-3 py-1 flex-1">
            <Search className="mr-2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={`Search ${activeTab === 'types' ? 'Section Types' : 'Sections'}`}
              value={activeTab === 'types' ? typeSearch : sectionSearch}
              onChange={(e) =>
                activeTab === 'types'
                  ? setTypeSearch(e.target.value)
                  : setSectionSearch(e.target.value)
              }
              className="border-none focus-visible:ring-0"
            />
          </div>
          {activeTab === 'sections' && (
            <Select
              value={sectionTypeFilter}
              onValueChange={setSectionTypeFilter}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by Type" />
              </SelectTrigger>
              <SelectContent>
                {sectionTypes.map(type => (
                  <SelectItem
                    key={type.id}
                    value={type.id.toString()}
                  >
                    {type.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>

        {/* Section Types Table */}
        <TabsContent value="types" className="space-y-4 border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='py-4'>Id</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className='text-right'>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSectionTypes.map(type => (
                <TableRow key={type.id}>
                  <TableCell className='py-4'>{type.id}</TableCell>
                  <TableCell>{type.name}</TableCell>
                  <TableCell>{type.description}</TableCell>
                  <TableCell className="text-right">
                    <AlertDialog>
                      <Dialog open={isEditDialogOpen && editingSectionType?.id === type.id} onOpenChange={setIsEditDialogOpen}>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel >Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => handleEditClick(type)}>
                              Edit Section Type
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              <AlertDialogTrigger>Delete Section Type</AlertDialogTrigger>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Edit Section Type</DialogTitle>
                            <DialogDescription>
                              Make changes to your section type here. Click save when you're done.
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
                                value={editingSectionType?.name || ''}
                                onChange={(e) => setEditingSectionType(prev => prev ? { ...prev, name: e.target.value } : null)}
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="description" className="text-right">
                                Description
                              </Label>
                              <Input
                                id="description"
                                className="col-span-3"
                                value={editingSectionType?.description || ''}
                                onChange={(e) => setEditingSectionType(prev => prev ? { ...prev, description: e.target.value } : null)}
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button onClick={handleSaveChanges}>Save changes</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the section type and remove it from the server.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => onDeleteSectionType(type.id)}>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        {/* Sections Table */}
        <TabsContent value="sections" className="space-y-4 border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='py-4'>Id</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Area</TableHead>
                <TableHead>Choose Template</TableHead>
                <TableHead>Publish Shift Template</TableHead>
                <TableHead className='text-right'>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSections?.map(section => {
                const sectionType = sectionTypes.find(
                  type => type.id === section.sectionType
                )
                return (
                  <TableRow key={section.id}>
                    <TableCell className="py-4">{section.id}</TableCell>
                    <TableCell>{section.name}</TableCell>
                    <TableCell>{sectionType?.name || 'Unknown'}</TableCell>
                    <TableCell>{section.area || 'N/A'}</TableCell>
                    <TableCell>
                      {/* <CreateShiftTemplateDialog sectionId={section.id}></CreateShiftTemplateDialog> */}
                      <Button onClick={() => setIsModalOpen(true)}>Choose Template</Button>
                      <ShiftAssignmentDialog section={section.id} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}  />
                    </TableCell>
                    <TableCell>
                      <Button>Publish Shift Template</Button>
                    </TableCell>
                    <TableCell className="text-right">
                      <AlertDialog>
                        <Dialog open={isEditDialogOpen2 && editingSection?.id === section.id} onOpenChange={setIsEditDialogOpen2}>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem onSelect={() => handleEditClick2(section)}>
                                Edit Section
                              </DropdownMenuItem>
                              <DropdownMenuItem onSelect={() => handleAssignWorkforce(section)}>
                                Assign Workforce
                              </DropdownMenuItem>
                              <DropdownMenuItem onSelect={() => handleAddWorkForce(section)}>
                                Add Workforce
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <AlertDialogTrigger>Delete Section</AlertDialogTrigger>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>Edit Section</DialogTitle>
                              <DialogDescription>
                                Make changes to your section here. Click save when you're done.
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
                                  value={editingSection?.name || ''}
                                  onChange={(e) => setEditingSection(prev => prev ? { ...prev, name: e.target.value } : null)}
                                />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="sectionType" className="text-right">
                                  Section Type
                                </Label>
                                <Select
                                  value={editingSection?.sectionType.toString()}
                                  onValueChange={(value: string) => setEditingSection(prev => prev ? { ...prev, sectionType: parseInt(value) } : null)}
                                >
                                  <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a Section Type" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>Section Types</SelectLabel>
                                      {sectionTypes?.map((sectionType) => (
                                        <SelectItem key={sectionType.id} value={sectionType.id.toString()}>
                                          {sectionType.name}
                                        </SelectItem>
                                      ))}
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="area" className="text-right">
                                  Area
                                </Label>
                                <Input
                                  id="area"
                                  type="number"
                                  className="col-span-3"
                                  value={editingSection?.area || 0}
                                  onChange={(e) => setEditingSection(prev => prev ? { ...prev, area: parseFloat(e.target.value) } : null)}
                                />
                              </div>
                            </div>
                            <DialogFooter>
                              <Button onClick={handleSaveChanges2}>Save changes</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                        <Dialog open={isOpen2} onOpenChange={handleClose2}>
                          <DialogContent className="w-[95vw] max-w-[95vw] h-[90%] sm:w-[90vw] sm:max-w-[90vw] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Add Workforce</DialogTitle>
                              <DialogDescription>
                                Select and add workforce to {overAllSelectedSection?.name}
                                <AddWorkForce overAllSelectedSection={overAllSelectedSection}></AddWorkForce>
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
                        <Dialog open={isOpen} onOpenChange={handleClose}>
                          <AssignWorkForce overAllSelectedSection={overAllSelectedSection}></AssignWorkForce>
                        </Dialog>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete the section and remove it from the server.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => onDeleteSection(section.id)}>Continue</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
}