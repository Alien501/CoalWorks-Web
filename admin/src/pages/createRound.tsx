import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { EllipsisIcon, EyeIcon, LayoutList, LinkIcon, LocateIcon, MapIcon, MapPin, PencilIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

const CreateRound = () => {
    const tablsList = [
        {
            name: 'Plan Details',
            value: 'plan-details',
            status: true,
        },
        {
            name: 'Rounds and Tasks',
            value: 'round-and-tasks',
            status: false
        },
        {
            name: 'PDF Setup',
            value: 'pdf-setup',
            status: false
        }
    ]

    const [tabs, setTabs] = useState(tablsList);

    return (
        <section id="create-round">
            <Tabs defaultValue={tablsList[0].value}>
                <div id="header" className="h-20 p-1 flex items-center justify-between">
                    <div className="w-full flex items-center justify-center">
                        <TabsList className="h-full rounded-full">
                            {
                                tabs.map((item, index) => (
                                    item.status ?
                                        <TabsTrigger className="space-x-2 h-full rounded-full" value={item.value}>
                                            <span>
                                                <Badge className="rounded-full h-6 w-6 font-semibold flex items-center justify-center">
                                                    <span>{index + 1}</span>
                                                </Badge>
                                            </span>
                                            <span>
                                                {item.name}
                                            </span>
                                        </TabsTrigger>
                                        :
                                        <TabsTrigger className="space-x-2 h-full rounded-full" value={item.value    }>
                                            <span>
                                                <Badge className="rounded-full h-6 w-6 font-semibold flex items-center justify-center">
                                                    <span>{index + 1}</span>
                                                </Badge>
                                            </span>
                                            <span>
                                                {item.name}
                                            </span>
                                        </TabsTrigger>
                                ))
                            }
                        </TabsList>
                    </div>
                    <div className="flex space-x-2 items-center h-full">
                        <Button variant={'secondary'} className="rounded-full h-9">Cancel</Button>
                        <Button className="rounded-full h-9">Save & Next</Button>
                    </div>
                </div>
                <TabsContent value="plan-details">
                    <Card className="max-w-[70%] mx-auto">
                        <CardHeader>
                            <p>Plan Details</p>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="flex flex-col justify-start space-y-1">
                                <Label htmlFor="plan-name">
                                    Plan Name
                                </Label>
                                <Input
                                    placeholder="Eg: inspection check"
                                    id="plan-name"
                                />
                            </div>
                            <div className="flex flex-col justify-start space-y-1">
                                <Label htmlFor="plan-description">
                                    Plan Name
                                </Label>
                                <Input
                                    placeholder="Enter your description"
                                    id="plan-description"
                                />
                            </div>
                            <div className="flex justify-between space-x-2">
                                <div className="w-full">
                                    <Label>Plant</Label>
                                    <Select>
                                        <SelectTrigger>Plant</SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="p-1">Plant 1</SelectItem>
                                            <SelectItem value="p-2">Plant 2</SelectItem>
                                            <SelectItem value="p-3">Plant 3</SelectItem>
                                            <SelectItem value="p-4">Plant 4</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="w-full">
                                    <Label>Unit</Label>
                                    <Select>
                                        <SelectTrigger>Unit</SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="u-1">Unit 1</SelectItem>
                                            <SelectItem value="u-2">Unit 2</SelectItem>
                                            <SelectItem value="u-3">Unit 3</SelectItem>
                                            <SelectItem value="u-4">Unit 4</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="tags">Tags</Label>
                                <Input
                                    id="tags"
                                    placeholder="Enter tags here seperated by commas"
                                />
                            </div>
                            <div>
                                <Label>Notes And Attachments</Label>
                                <Textarea
                                    placeholder="Enter notes"
                                />
                                <br />
                                <Label htmlFor="round-file" className="flex items-center space-x-1 rounded-sm bg-gray-200/10 p-2 w-max h-9 hover:bg-gray-200/30 hover:cursor-pointer">
                                    <span><LinkIcon /></span>
                                    <span>Add Images or PDF</span>
                                </Label>
                                <Input
                                    id="round-file"
                                    type="file"
                                    multiple
                                    accept="image/*,.pdf,.docx"
                                    className="hidden"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="round-and-tasks">
                    {/* Header section */}
                    <div className="flex h-14 justify-between items-center p-1">
                        <div className="flex items-center space-x-2">
                            <span><LayoutList /></span>
                            <div className="grid grid-cols-[80%_20%] place-content-center">
                                <div className="flex flex-col">
                                    <span>Round Name</span>
                                    <span className="text-slate-100/60">Round Description</span>
                                </div>
                                <div className="place-content-center">
                                    <Button variant='ghost' className="place-self-center"><PencilIcon /></Button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span className="font-medium">Plant: </span>
                                <span>SHR_PLANT01</span>
                            </div>
                        </div>
                        <div className="h-full flex items-center space-x-2">
                            <span>All changes saved</span>
                            <Button variant={'outline'}>
                                <span><EyeIcon /></span>
                                <span>Preview</span>
                            </Button>
                            <Button>Next</Button>
                        </div>
                    </div>
                    {/* Main content goes here */}
                    <div className="grid grid-cols-[30%_70%] p-2 min-h-[550px]">
                        <Card className="p-0 shadow-none h-full rounded-none">
                            <CardHeader className="flex flex-row justify-between items-center">
                                <div className="flex items-center space-x-1">
                                    <span>Loactions/Assets</span>
                                    <Button variant='ghost' className="w-10 h-10">
                                        <PlusIcon />
                                    </Button>
                                </div>
                                <div>
                                    <p>Tasks - {4}</p>
                                </div>
                            </CardHeader>
                            <CardContent className="p-2">
                                <div>
                                    <Input
                                        placeholder="Search by name/description"
                                    />
                                </div>
                                <div>
                                    <div className="loc-ass-container space-x-2"> 
                                        <div className="grid grid-cols-[10%_70%_20%] h-14 p-1 place-content-center">
                                            <span className="place-self-center"><MapPin width={16} height={16} /></span>
                                            <div className="flex flex-col text-sm">
                                                <span>SHR_UNIT</span>
                                                <span className="text-xs">ID: SHR_UNIT</span>
                                            </div>
                                            <div className="w-full h-full flex items-center space-x-2">
                                                <Badge className="w-5 h-5 flex items-center justify-center rounded-full">
                                                    <span>3</span>
                                                </Badge>
                                                <Button className="w-10 h-10" variant={'secondary'}><EllipsisIcon /></Button>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-[10%_70%_20%] h-14 p-1 place-content-center">
                                            <span className="place-self-center"><MapPin width={16} height={16} /></span>
                                            <div className="flex flex-col text-sm">
                                                <span>SHR_UNIT</span>
                                                <span className="text-xs">ID: SHR_UNIT</span>
                                            </div>
                                            <div className="w-full h-full flex items-center space-x-2">
                                                <Badge className="w-5 h-5 flex items-center justify-center rounded-full">
                                                    <span>3</span>
                                                </Badge>
                                                <Button className="w-10 h-10" variant={'secondary'}><EllipsisIcon /></Button>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-[10%_70%_20%] h-14 p-1 place-content-center">
                                            <span className="place-self-center"><MapPin width={16} height={16} /></span>
                                            <div className="flex flex-col text-sm">
                                                <span>SHR_UNIT</span>
                                                <span className="text-xs">ID: SHR_UNIT</span>
                                            </div>
                                            <div className="w-full h-full flex items-center space-x-2">
                                                <Badge className="w-5 h-5 flex items-center justify-center rounded-full">
                                                    <span>3</span>
                                                </Badge>
                                                <Button className="w-10 h-10" variant={'secondary'}><EllipsisIcon /></Button>
                                            </div>
                                        </div>  

                                        <div className="grid grid-cols-[10%_70%_20%] h-14 p-1 place-content-center">
                                            <span className="place-self-center"><MapPin width={16} height={16} /></span>
                                            <div className="flex flex-col text-sm">
                                                <span>SHR_UNIT</span>
                                                <span className="text-xs">ID: SHR_UNIT</span>
                                            </div>
                                            <div className="w-full h-full flex items-center space-x-2">
                                                <Badge className="w-5 h-5 flex items-center justify-center rounded-full">
                                                    <span>3</span>
                                                </Badge>
                                                <Button className="w-10 h-10" variant={'secondary'}><EllipsisIcon /></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="p-0 shadow-none h-full rounded-none">
                            <CardHeader className="">

                            </CardHeader>
                            <CardContent className="p-2">

                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </section>
    )
}

export default CreateRound;