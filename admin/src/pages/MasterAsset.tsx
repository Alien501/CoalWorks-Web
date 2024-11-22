import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CogIcon, Ellipsis } from "lucide-react";

interface Asset {
    name: string;
    value: string;
    description: string;
    model: string;
    parent: string;
}

const MasterAsset = () => {
    const assetData: Asset[] = [
        {
            name: 'High pressure water pump',
            value: '123343',
            description: 'High pressure pumps are used in variety of applications where a high pressure flow of water is needed',
            model: 'GE',
            parent: 'Turbine Room',
        },
        {
            name: 'Dumping system',
            value: '123343',
            description: 'High pressure pumps are used in variety of applications where a high pressure flow of water is needed',
            model: 'NA',
            parent: 'Engine Cat 3512E',
        },
        {
            name: 'Transmission',
            value: '123343',
            description: 'NA',
            model: 'Ford',
            parent: 'Mine Site 1',
        },
        
    ]
    const NewAsset = () => {
        return(
            <div id="new-asset">
                <form>
                    <Input
                        placeholder="Name"
                    />
                     <Input
                        placeholder="aSSETS ID"
                    />
                    <Input
                        placeholder="mODEL"
                    />
                    <div>
                        <div>
                            <span>Parent Type</span>
                        </div>
                        <div>
                            <div>
                                <RadioGroup>
                                    <div>
                                        
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
    return(
        <section id="assets-container">
            <div className="h-16 flex justify-between p-2 items-center">
                <div>
                    <span className="text-lg font-bold">Assets</span>
                </div>
                <div className="flex space-x-2">
                    <Input
                        placeholder="Search"
                        className="bg-gray-200"
                    />
                    <Button>
                        Create New
                    </Button>
                </div>
            </div>
            <div>
                <Table className="bg-black/[0.05]">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Model</TableHead>
                            <TableHead>Parent</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            assetData.map(asset => (
                                <TableRow className="bg-white">
                                    <TableCell className="flex items-center space-x-2">
                                        <div>
                                            <CogIcon />
                                        </div>
                                        <div>
                                            <p>{asset.name}</p>
                                            <p>{asset.value}</p>
                                        </div>
                                    </TableCell>
                                    <TableCell>{asset.description}</TableCell>
                                    <TableCell>{asset.model}</TableCell>
                                    <TableCell>{asset.parent}</TableCell>
                                    <TableCell><Ellipsis /></TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        </section>
    )
}

export default MasterAsset;