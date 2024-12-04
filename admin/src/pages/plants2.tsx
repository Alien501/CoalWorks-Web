import React, { useState, useMemo } from 'react'
import { Plus, Search, Filter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
  DialogTrigger 
} from "@/components/ui/dialog"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function SectionsPage() {
  const [activeTab, setActiveTab] = useState("sections");
  const [sectionTypes, setSectionTypes] = useState([]);
  const [sections, setSections] = useState([]);
  
  const [typeSearch, setTypeSearch] = useState("");
  const [sectionSearch, setSectionSearch] = useState("");
  const [sectionTypeFilter, setSectionTypeFilter] = useState("");

  const [newSectionType, setNewSectionType] = useState({
    name: "",
    description: ""
  });

  const [newSection, setNewSection] = useState({
    name: "",
    sectionType: "",
    area: ""
  });

  const filteredSectionTypes = useMemo(() => {
    return sectionTypes.filter(type => 
      type.name.toLowerCase().includes(typeSearch.toLowerCase()) ||
      type.description.toLowerCase().includes(typeSearch.toLowerCase())
    );
  }, [sectionTypes, typeSearch]);

  const filteredSections = useMemo(() => {
    return sections.filter(section => 
      (section.name.toLowerCase().includes(sectionSearch.toLowerCase())) &&
      (!sectionTypeFilter || section.sectionType === parseInt(sectionTypeFilter))
    );
  }, [sections, sectionSearch, sectionTypeFilter]);

  const handleAddSectionType = () => {
    const newType = {
      id: sectionTypes.length + 1,
      ...newSectionType
    };
    setSectionTypes([...sectionTypes, newType]);
    setNewSectionType({ name: "", description: "" });
  };

  const handleAddSection = () => {
    const newSectionEntry = {
      id: sections.length + 1,
      ...newSection,
      sectionType: parseInt(newSection.sectionType)
    };
    setSections([...sections, newSectionEntry]);
    setNewSection({ name: "", sectionType: "", area: "" });
  };

  return (
    <div className="container mx-auto py-10 space-y-4">
      <Tabs defaultValue="sections">
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
                  <div className="grid gap-4 py-4">
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
        <div className="flex items-center space-x-2 mb-4">
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
        <TabsContent value="types" className="space-y-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Id</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSectionTypes.map(type => (
                <TableRow key={type.id}>
                  <TableCell>{type.id}</TableCell>
                  <TableCell>{type.name}</TableCell>
                  <TableCell>{type.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        {/* Sections Table */}
        <TabsContent value="sections" className="space-y-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Id</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Area</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSections.map(section => {
                const sectionType = sectionTypes.find(
                  type => type.id === section.sectionType
                );
                return (
                  <TableRow key={section.id}>
                    <TableCell>{section.id}</TableCell>
                    <TableCell>{section.name}</TableCell>
                    <TableCell>{sectionType?.name || 'Unknown'}</TableCell>
                    <TableCell>{section.area || 'N/A'}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
}