import React, { useState, useMemo, useEffect } from 'react'
import axios from 'axios'; // Make sure to install axios
import { Plus, Search } from 'lucide-react'
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
import { toast } from 'sonner';
import { fetchAssetType } from '@/utils/fetchAssetTypes';
import { fetchAssets } from '@/utils/fetchAssets';
import { fetchSections } from '@/utils/fetchSections';

export default function MasterAsset() {
  const [activeTab, setActiveTab] = useState("types");
  const [assetTypes, setAssetTypes] = useState([]);
  const [assets, setAssets] = useState([]);
  const [sections, setSections] = useState([]);
  
  const [typeSearch, setTypeSearch] = useState("");
  const [assetSearch, setAssetSearch] = useState("");
  const [assetTypeFilter, setAssetTypeFilter] = useState("");
  const [sectionFilter, setSectionFilter] = useState("");

  const [newAssetType, setNewAssetType] = useState({
    name: "",
    description: ""
  });

  const [newAsset, setNewAsset] = useState({
    name: "",
    description: "",
    assetType: "",
    assetSection: ""
  });

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
        assetSection: parseInt(newAsset.assetSection)
      });

      setAssets([...assets, response.data]);

      setNewAsset({ name: "", description: "", assetType: "", assetSection: "" });
      
      toast.success("Asset created successfully")
    } catch (error) {
      console.error("Error creating asset:", error);
      toast.error("Failed to create asset")
    }
  };

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
    <div className="container mx-auto py-10 space-y-4">
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
        <div className="flex items-center space-x-2 mb-4">
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
              {filteredAssetTypes.map(type => (
                <TableRow key={type.id}>
                  <TableCell>{type.id}</TableCell>
                  <TableCell>{type.name}</TableCell>
                  <TableCell>{type.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        {/* Assets Table */}
        <TabsContent value="assets" className="space-y-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Id</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Section</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAssets.map(asset => {
                const assetType = assetTypes.find(
                  type => type.id === asset.assetType
                );
                const section = sections.find(
                  sec => sec.id === asset.assetSection
                );
                return (
                  <TableRow key={asset.id}>
                    <TableCell>{asset.id}</TableCell>
                    <TableCell>{asset.name}</TableCell>
                    <TableCell>{asset.description}</TableCell>
                    <TableCell>{assetType?.name || 'Unknown'}</TableCell>
                    <TableCell>{section?.name || 'Unknown'}</TableCell>
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