import { useState, useMemo, useEffect } from 'react'
import axios from 'axios';
import { Plus, Search, MoreHorizontal } from 'lucide-react'
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
  DialogTrigger,
  DialogDescription,
  DialogFooter
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
import { toast } from 'sonner';
import { fetchAssetType } from '@/utils/fetchAssetTypes';
import { fetchAssets } from '@/utils/fetchAssets';
import { fetchSections } from '@/utils/fetchSections';

interface Asset {
  id: number
  name: string
  description: string
  assetType: number
  assetSection: number
}

export default function MasterAsset() {
  const [activeTab, setActiveTab] = useState("types");
  const [assetTypes, setAssetTypes] = useState([]);
  const [assets, setAssets] = useState([]);
  const [sections, setSections] = useState([]);

  const [typeSearch, setTypeSearch] = useState("");
  const [assetSearch, setAssetSearch] = useState("");
  const [assetTypeFilter, setAssetTypeFilter] = useState("");
  const [sectionFilter, setSectionFilter] = useState("");
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingAsset, setEditingAsset] = useState<Asset | null>(null)

  const handleEditClick = (asset: Asset) => {
    setEditingAsset(asset)
    setIsEditDialogOpen(true)
  }

  const handleSaveChanges = () => {
    if (editingAsset) {
      onEditAsset(editingAsset.id)
      setIsEditDialogOpen(false)
      setEditingAsset(null)
    }
  }

  const [newAssetType, setNewAssetType] = useState({
    name: "",
    description: ""
  });

  const [editAssetType, setEditAssetType] = useState({
    name: "",
    description: ""
  });


  const [newAsset, setNewAsset] = useState({
    name: "",
    description: "",
    assetType: "",
    assetSection: "",
    latitude: 0.0,
    longitude: 0.0
  });

  async function onDeleteAssetType(id: number) {
    try {
      const res = await axios.delete(`/api/data/assettype/${id}`);
      if (res.status === 200) {
        toast.success("Asset type deleted successfully")
      }
    }
    catch (error: any) {
      if (error.status === 409) {
        toast.error("Asset Type cant be deleted since you have assets with this type.")
      }
      else {
        toast.error("Asset can't be deleted due to some errors")
      }
    }
  }

  async function onEditAssetType(id: number) {
    try {
      const res = await axios.post(`/api/data/assettype/${id}`, {
        name: editAssetType.name,
        description: editAssetType.description
      })
      if (res.status === 200) {
        toast.success("Asset edited succssfully")
        setAssetTypes(await fetchAssetType())
      }
      else {
        toast.error("Asset can't be edited, due to some errors")
      }
    }
    catch (error) {
      toast.error("Asset can't be edited, due to some errors")
    }
    finally {
      setIsEditDialogOpen(false)
      setEditAssetType({
        name: "",
        description: ""
      })
    }
  }

  async function onEditAsset(id: number) {
    try{
      const res = await axios.post(`/api/data/asset/${id}`, {
        name: editingAsset?.name,
        description: editingAsset?.description,
        assetType: editingAsset?.assetType,
        assetSection: editingAsset?.assetSection
      });
      if(res.status === 200){
        toast.success("Asset edited successfully")
        setAssets(await fetchAssets())
      }
      else{
        toast.error("Asset can't be edited. Please try again")
      }
    }
    catch(error){
      toast.error("Asset can't be edited due to some errors")
    }
    
  }

  const filteredAssetTypes = useMemo(() => {
    return assetTypes.filter(type =>
      type.name.toLowerCase().includes(typeSearch.toLowerCase()) ||
      type.description.toLowerCase().includes(typeSearch.toLowerCase())
    );
  }, [assetTypes, typeSearch]);

  const filteredAssets = useMemo(() => {
    console.log(assets)
    return assets.filter(asset =>
      (asset.name.toLowerCase().includes(assetSearch.toLowerCase()) ||
        asset.description.toLowerCase().includes(assetSearch.toLowerCase())) &&
      (!assetTypeFilter || asset.assetType === parseInt(assetTypeFilter)) &&
      (!sectionFilter || asset.assetSection === parseInt(sectionFilter))
    );
  }, [assets, assetSearch, assetTypeFilter, sectionFilter]);

  const handleAddAssetType = async () => {
    try {
      if (!newAssetType.name || !newAssetType.description) {
        toast.error("Name and description are required")
        return;
      }

      const response = await axios.post('/api/data/assettype', {
        name: newAssetType.name,
        description: newAssetType.description
      });

      setAssetTypes([...assetTypes, response.data]);

      setNewAssetType({ name: "", description: "" });

      toast.success("Asset Type created successfully")
    } catch (error) {
      console.error("Error creating asset type:", error);
      toast.error("Failed to create asset type")
    }
  };

  const handleAddAsset = async () => {
    try {
      if (!newAsset.name || !newAsset.description || !newAsset.assetType || !newAsset.assetSection) {
        toast.error("All fields are required")
        return;
      }

      const response = await axios.post('/api/data/asset', {
        name: newAsset.name,
        description: newAsset.description,
        assetType: parseInt(newAsset.assetType),
        assetSection: parseInt(newAsset.assetSection),
        latitude: parseFloat(newAsset.latitude),
        longitude: parseFloat(newAsset.longitude),
      });

      setAssets([...assets, response.data]);

      setNewAsset({ name: "", description: "", assetType: "", assetSection: "" });

      toast.success("Asset created successfully")
    } catch (error) {
      console.error("Error creating asset:", error);
      toast.error("Failed to create asset")
    }
  };

  async function onDeleteAsset(id: number) {
    try {
      const res = await axios.delete(`/api/data/asset/${id}`);
      if (res.status === 200) {
        toast.success("Asset deleted successfully")
      }
      else {
        toast.error("Error while deleting the asset")
      }
    }
    catch (error: any) {
      if (error.status === 409)
        toast.error("Error while deleting the asset")
    }
    finally {
      setAssets(await fetchAssets())
    }
  }

  useEffect(() => {
    const getAndSetData = async () => {
      try {
        const [assetTypesRes, assetsRes, sectionsRes] = await Promise.all([
          fetchAssetType(),
          fetchAssets(),
          fetchSections()
        ]);

        setAssetTypes(assetTypesRes);
        setAssets(assetsRes);
        setSections(sectionsRes);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch data")
      }
    }

    getAndSetData();
  }, [])

  return (
    <div className="container mx-auto py-10 space-y-4 ">
      <Tabs defaultValue="types">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger
              value="types"
              onClick={() => setActiveTab("types")}
            >
              Asset Types
            </TabsTrigger>
            <TabsTrigger
              value="assets"
              onClick={() => setActiveTab("assets")}
            >
              Assets
            </TabsTrigger>
          </TabsList>

          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add {activeTab === "assets" ? "Asset" : "Asset Type"}
              </Button>
            </DialogTrigger>
            <DialogContent>
              {activeTab === "types" ? (
                <>
                  <DialogHeader>
                    <DialogTitle>Create New Asset Type</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4 text-left">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        value={newAssetType.name}
                        onChange={(e) => setNewAssetType({
                          ...newAssetType,
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
                        value={newAssetType.description}
                        onChange={(e) => setNewAssetType({
                          ...newAssetType,
                          description: e.target.value
                        })}
                        className="col-span-3"
                      />
                    </div>
                    <Button onClick={handleAddAssetType}>
                      Create Asset Type
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <DialogHeader>
                    <DialogTitle>Create New Asset</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="asset-name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="asset-name"
                        value={newAsset.name}
                        onChange={(e) => setNewAsset({
                          ...newAsset,
                          name: e.target.value
                        })}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="asset-description" className="text-right">
                        Description
                      </Label>
                      <Input
                        id="asset-description"
                        value={newAsset.description}
                        onChange={(e) => setNewAsset({
                          ...newAsset,
                          description: e.target.value
                        })}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="asset-type" className="text-right">
                        Asset Type
                      </Label>
                      <Select
                        value={newAsset.assetType}
                        onValueChange={(value) => setNewAsset({
                          ...newAsset,
                          assetType: value
                        })}
                      >
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select Asset Type" />
                        </SelectTrigger>
                        <SelectContent>
                          {assetTypes.map(type => (
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
                      <Label htmlFor="asset-section" className="text-right">
                        Section
                      </Label>
                      <Select
                        value={newAsset.assetSection}
                        onValueChange={(value) => setNewAsset({
                          ...newAsset,
                          assetSection: value
                        })}
                      >
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select Section" />
                        </SelectTrigger>
                        <SelectContent>
                          {sections.map(section => (
                            <SelectItem
                              key={section.id}
                              value={section.id.toString()}
                            >
                              {section.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="asset-latitude" className="text-right">
                        Latitude
                      </Label>
                      <Input
                        id="asset-latitude"
                        value={newAsset.latitude}
                        onChange={(e) => setNewAsset({
                          ...newAsset,
                          latitude: e.target.value
                        })}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="asset-longitude" className="text-right">
                        Longitude
                      </Label>
                      <Input
                        id="asset-longitude"
                        value={newAsset.longitude}
                        onChange={(e) => setNewAsset({
                          ...newAsset,
                          longitude: e.target.value
                        })}
                        className="col-span-3"
                      />
                    </div>
                    <Button onClick={handleAddAsset}>
                      Create Asset
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
              placeholder={`Search ${activeTab === 'types' ? 'Asset Types' : 'Assets'}`}
              value={activeTab === 'types' ? typeSearch : assetSearch}
              onChange={(e) =>
                activeTab === 'types'
                  ? setTypeSearch(e.target.value)
                  : setAssetSearch(e.target.value)
              }
              className="border-none focus-visible:ring-0"
            />
          </div>
          {activeTab === 'assets' && (
            <>
              <Select
                value={assetTypeFilter}
                onValueChange={setAssetTypeFilter}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by Type" />
                </SelectTrigger>
                <SelectContent>
                  {assetTypes.map(type => (
                    <SelectItem
                      key={type.id}
                      value={type.id.toString()}
                    >
                      {type.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={sectionFilter}
                onValueChange={setSectionFilter}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by Section" />
                </SelectTrigger>
                <SelectContent>
                  {sections.map(section => (
                    <SelectItem
                      key={section.id}
                      value={section.id.toString()}
                    >
                      {section.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </>
          )}
        </div>

        {/* Asset Types Table */}
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
              {filteredAssetTypes.map(type => (
                <TableRow key={type.id}>
                  <TableCell className='py-4'>{type.id}</TableCell>
                  <TableCell>{type.name}</TableCell>
                  <TableCell>{type.description}</TableCell>
                  <TableCell className="text-right">
                    <AlertDialog>
                      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <DialogTrigger asChild onClick={() => setEditAssetType({
                                name: type.name,
                                description: type.description
                              })}>
                                <span className=' cursor-pointer'>Edit Asset Type</span>
                              </DialogTrigger>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              <AlertDialogTrigger>Delete Asset Type</AlertDialogTrigger>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Edit Asset type</DialogTitle>
                            <DialogDescription>
                              Make changes to your asset type here. Click save when you're done.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="name" className="text-right">
                                Name
                              </Label>
                              <Input
                                id="name"
                                defaultValue={type.name}
                                className="col-span-3"
                                onChange={(e) => setEditAssetType(
                                  {
                                    ...editAssetType,
                                    name: e.target.value
                                  })}
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="description" className="text-right">
                                Description
                              </Label>
                              <Input
                                id="description"
                                defaultValue={type.description}
                                className="col-span-3"
                                onChange={(e) => setEditAssetType(
                                  {
                                    ...editAssetType,
                                    description: e.target.value
                                  })}
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button onClick={() => onEditAssetType(type.id)}>Save changes</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the asset type and removed from the server
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => onDeleteAssetType(type.id)}>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        {/* Assets Table */}
        <TabsContent value="assets" className="space-y-4 border rounded-lg">
          <Table className=''>
            <TableHeader>
              <TableRow>
                <TableHead className='py-4'>Id</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Section</TableHead>
                <TableHead className='text-right'>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAssets.map(asset => {
                const assetType = assetTypes.find(type => type.id === asset.assetType)
                const section = sections.find(sec => sec.id === asset.assetSection)
                return (
                  <TableRow key={asset.id}>
                    <TableCell className="py-4">{asset.id}</TableCell>
                    <TableCell>{asset.name}</TableCell>
                    <TableCell>{asset.description}</TableCell>
                    <TableCell>{assetType?.name || 'Unknown'}</TableCell>
                    <TableCell>{section?.name || 'Unknown'}</TableCell>
                    <TableCell className="text-right">
                      <AlertDialog>
                        <Dialog open={isEditDialogOpen && editingAsset?.id === asset.id} onOpenChange={setIsEditDialogOpen}>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem onClick={() => handleEditClick(asset)}>
                                Edit Asset
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <AlertDialogTrigger>Delete Asset</AlertDialogTrigger>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>Edit Asset</DialogTitle>
                              <DialogDescription>
                                Make changes to your asset here. Click save when you're done.
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
                                  value={editingAsset?.name || ''}
                                  onChange={(e) => setEditingAsset(prev => prev ? { ...prev, name: e.target.value } : null)}
                                />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="description" className="text-right">
                                  Description
                                </Label>
                                <Input
                                  id="description"
                                  className="col-span-3"
                                  value={editingAsset?.description || ''}
                                  onChange={(e) => setEditingAsset(prev => prev ? { ...prev, description: e.target.value } : null)}
                                />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="assetType" className="text-right">
                                  Asset Type
                                </Label>
                                <Select
                                  value={editingAsset?.assetType.toString()}
                                  onValueChange={(value: string) => setEditingAsset(prev => prev ? { ...prev, assetType: parseInt(value) } : null)}
                                >
                                  <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select an Asset Type" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>Asset Types</SelectLabel>
                                      {assetTypes?.map((assetType) => (
                                        <SelectItem key={assetType.id} value={assetType.id.toString()}>
                                          {assetType.name}
                                        </SelectItem>
                                      ))}
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="section" className="text-right">
                                  Section
                                </Label>
                                <Select
                                  value={editingAsset?.assetSection.toString()}
                                  onValueChange={(value: string) => setEditingAsset(prev => prev ? { ...prev, assetSection: parseInt(value) } : null)}
                                >
                                  <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a section" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>Section</SelectLabel>
                                      {sections?.map((section) => (
                                        <SelectItem key={section.id} value={section.id.toString()}>
                                          {section.name}
                                        </SelectItem>
                                      ))}
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
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
                              This action cannot be undone. This will permanently delete the asset and remove it from the server.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => onDeleteAsset(asset.id)}>Continue</AlertDialogAction>
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