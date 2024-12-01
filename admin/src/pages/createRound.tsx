import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { EllipsisIcon, EyeIcon, LayoutList, LinkIcon, X, Pencil, MoreHorizontal, FileTextIcon, ImageIcon, CheckCircleIcon, MapPin, PencilIcon, PlusIcon, CircleChevronDown, CircleChevronUp } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox"
import axios from "axios";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
    interface Section {
        id: number;
        name: string;
        tasks: any[];
        questions: any[];
    }

    interface CheckedLocation {
        id: string;
        name: string;
    }

    const [tabs, setTabs] = useState(tablsList);
    const [sections, setSections] = useState<Section[]>([]);
    const [taskName, setTaskName] = useState("")
    const [taskDescription, setTaskDescription] = useState('')
    const [responseType, setResponseType] = useState("text")
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [isEditSectionDialogOpen, setIsEditSectionDialogOpen] = useState(false)
    const [expandedSection, setExpandedSection] = useState<number | null>(null);
    const [sectionName, setSectionName] = useState("")
    const [questionName, setQuestionName] = useState("")
    const [questionResponseType, setQuestionResponseType] = useState("text")
    const [isQuestionDialogOpen, setIsQuestionDialogOpen] = useState(false)
    const [workArea, setWorkArea] = useState([])
    const [selectedWorkArea, setSelectedWorkArea] = useState("Work Area");
    const [roundName, setRoundName] = useState("Round Name")
    const [roundDescription, setRoundDescription] = useState("Round Description")
    const [isRoundDetailsDialogOpen, setIsRounDetailsDialogOpen] = useState(false)
    const [formDataSubmitted, setFormDataSubmitted] = useState(false)
    const [locations, setLocations] = useState([])
    const [checkedLocations, setCheckedLocations] = useState<string[]>([])
    const [roundDetails, setRoundDetails] = useState<Section[]>([])
    const [planDetails, setPlanDetails] = useState<PlanDetails | null>(null)
    const [selectedFields, setSelectedFields] = useState<string[]>([])

    const handleCheckLocation = (location: Location) => {
        setCheckedLocations(prev =>
            prev.some(loc => loc.id === location.sectionId)
                ? prev.filter(loc => loc.id !== location.sectionId)
                : [...prev, { id: location.sectionId, name: location.name }]
        )
    }

    const checkedLocationsText = checkedLocations
        .map(loc => `${loc.name} (ID: ${loc.id})`)
        .join(', ')

    const [formData, setFormData] = useState({
        planName: '',
        planDescription: '',
        workArea: '',
        notes: '',
        workAreaId: '',
        attachments: [] as File[]
    })


    useEffect(() => {
        async function getWorkAreas() {
            const res = await axios.get("http://localhost:3000/api/v1/section")
            const workAreas = res.data
            //@ts-ignore
            setWorkArea([...workAreas])
        }
        getWorkAreas();
    }, [])

    useEffect(() => {
        console.log(sections)
    }, [sections])

    useEffect(() => {
        async function getSections() {
            const planDetail = JSON.parse(localStorage.getItem("planDetail"))
            if (planDetail && (planDetail.workAreaId > 0)) {
                const res = await axios.get("http://localhost:3000/api/v1/section/" + planDetail?.workAreaId)
                setLocations([...res.data.data])
            }
        }
        getSections();
    }, [formDataSubmitted])

    useEffect(() => {
        const storedRoundDetails = localStorage.getItem('roundDetail')
        const storedPlanDetails = localStorage.getItem('planDetail')

        if (storedRoundDetails) {
            setRoundDetails(JSON.parse(storedRoundDetails))
        }
        if (storedPlanDetails) {
            setPlanDetails(JSON.parse(storedPlanDetails))
        }
    }, [])

    const handleCheckboxChange = (field: string) => {
        setSelectedFields(prev =>
            prev.includes(field) ? prev.filter(f => f !== field) : [...prev, field]
        )
    }

    const toggleSection = (index: number) => {
        setExpandedSection((prev) => (prev === index ? null : index));
    };

    const onAddSection = () => {
        //@ts-ignore
        setSections((prev) => [...prev, { id: sections.length + 1, name: "Section " + parseInt(sections.length + 1), tasks: [], questions: [] }])
    }

    const onAddQuestion = (index: number) => {
        setSections((prevSections) => {
            const newSections = [...prevSections];

            if (index >= 0 && index < newSections.length) {
                const section = newSections[index];

                const newQuestion = {
                    id: section.questions.length + 1,
                    name: questionName,
                    responseType,
                };
                section.questions = [...section.questions, newQuestion];
            }

            return newSections;
        })
        setIsQuestionDialogOpen(false)
    };

    function onRoundDetailsSubmitted() {
        localStorage.setItem("roundDetail", JSON.stringify(sections))
    }


    const onAddTask = (index: number) => {
        setSections((prevSections) => {
            const newSections = [...prevSections];

            if (index >= 0 && index < newSections.length) {
                const section = newSections[index];

                const newTask = {
                    id: section.tasks.length + 1,
                    name: taskName,
                    description: taskDescription,
                    responseType,
                };
                section.tasks = [...section.tasks, newTask];
            }

            return newSections;
        });

        setTaskName("");
        setTaskDescription("");
        setResponseType("text");
        setIsDialogOpen(false)
    };

    const onEditSection = (index: number) => {
        console.log(index)
        setSections(prev => prev.map(section => {
            if (section.id === index + 1) {
                return {
                    ...section,
                    name: sectionName
                };
            }
            return section;
        }));
        setSectionName("")
        setIsEditSectionDialogOpen(false)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFormData(prev => ({
                ...prev,
                attachments: [...prev.attachments, ...Array.from(e.target.files)]
            }))
        }
    }

    const handleRemoveFile = (index: number) => {
        setFormData(prev => ({
            ...prev,
            attachments: prev.attachments.filter((_, i) => i !== index)
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted with data:", formData);

        try {
            const localStorageData: Record<string, any> = {};

            const formDataToSend = new FormData();
            Object.entries(formData).forEach(async ([key, value]) => {
                if (key === "attachments") {
                    const attachmentsBase64 = await Promise.all(
                        value.map((file: File) => toBase64(file))
                    );
                    localStorageData.attachments = attachmentsBase64;

                    value.forEach((file: File) => {
                        formDataToSend.append("attachments", file);
                    });
                } else {
                    formDataToSend.append(key, value as string);
                    localStorageData[key] = value;
                }
            });
            localStorage.setItem("planDetail", JSON.stringify(localStorageData));
            setFormDataSubmitted(!formDataSubmitted)

            console.log("Data saved to localStorage:", localStorageData);

            // Uncomment to send the data to an API
            // const response = await fetch('/api/create-round', {
            //     method: 'POST',
            //     body: formDataToSend,
            // });

            // if (response.ok) {
            //     console.log("Round created successfully");
            // } else {
            //     console.error("Failed to create round");
            // }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const toBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });
    };

    const renderPreviewContent = () => {
        console.log('Selected Fields:', selectedFields); // Debug log
        console.log('Plan Details:', planDetails); // Debug log
        console.log('Round Details:', roundDetails); // Debug log

        if (selectedFields.length === 0) {
            return (
                <p className="text-muted-foreground">
                    No fields selected. Choose fields from the left to see a preview.
                </p>
            );
        }

        return (
            <ul className="space-y-2">
                {selectedFields.map((field) => {
                    console.log('Processing field:', field); // Debug log
                    const [type, sectionId, itemId] = field.split('-');
                    let content = '';

                    try {
                        if (type === 'plan') {
                            content = `${itemId.charAt(0).toUpperCase() + itemId.slice(1)}: ${planDetails?.[itemId] || 'N/A'}`;
                        } else if (type === 'section') {
                            const section = roundDetails.find(s => s.id === parseInt(sectionId));
                            content = `Section: ${section?.name || 'Unknown Section'}`;
                        } else if (type === 'task') {
                            const section = roundDetails.find(s => s.id === parseInt(sectionId));
                            const task = section?.tasks.find(t => t.id === parseInt(itemId));
                            content = `Task: ${task?.name || 'Unknown Task'}`;
                        } else if (type === 'question') {
                            const section = roundDetails.find(s => s.id === parseInt(sectionId));
                            const question = section?.questions.find(q => q.id === parseInt(itemId));
                            content = `Question: ${question?.name || 'Unknown Question'}`;
                        }
                    } catch (error) {
                        console.error('Error processing field:', field, error);
                        content = `Error processing ${field}`;
                    }

                    return <li key={field}>{content}</li>;
                })}
            </ul>
        );
    }

    return (
        <section id="create-round" className="">
            <Tabs defaultValue={tablsList[0].value}>
                <div id="header" className="h-20 p-1 flex items-center justify-between ">
                    <div className="w-full flex items-center justify-center">
                        <TabsList className="h-full rounded-full">
                            {tabs.map((item, index) => (
                                <TabsTrigger
                                    key={item.value}
                                    className="space-x-2 h-full rounded-full"
                                    value={item.value}
                                >
                                    <span>
                                        <Badge className="rounded-full h-6 w-6 font-semibold flex items-center justify-center">
                                            <span>{index + 1}</span>
                                        </Badge>
                                    </span>
                                    <span>
                                        {item.name}
                                    </span>
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>
                    <div className="flex space-x-2 items-center h-full">
                        <Button variant={'secondary'} className="rounded-full h-9">Cancel</Button>
                        <Button type="submit" form="plan-details-form" className="rounded-full h-9">Save & Next</Button>
                    </div>
                </div>
                <TabsContent value="plan-details">
                    <Card className="max-w-[70%] mx-auto">
                        <CardHeader>
                            <p>Plan Details</p>
                        </CardHeader>
                        <CardContent>
                            <form id="plan-details-form" onSubmit={handleSubmit} className="space-y-2">
                                <div className="flex flex-col justify-start space-y-1">
                                    <Label htmlFor="planName">
                                        Plan Name
                                    </Label>
                                    <Input
                                        placeholder="Eg: inspection check"
                                        id="planName"
                                        name="planName"
                                        value={formData.planName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="flex flex-col justify-start space-y-1">
                                    <Label htmlFor="planDescription">
                                        Plan Description
                                    </Label>
                                    <Input
                                        placeholder="Enter your description"
                                        id="planDescription"
                                        name="planDescription"
                                        value={formData.planDescription}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="flex justify-between space-x-2">
                                    <div className="w-full">
                                        <Label>Work Area</Label>
                                        <Select
                                            onValueChange={(value) => {
                                                setSelectedWorkArea(workArea[Number(value) - 1].name)
                                                setFormData(prev => ({ ...prev, workArea: workArea[Number(value) - 1].name, workAreaId: workArea[Number(value - 1)].scaleLevel }))
                                            }}
                                        >
                                            <SelectTrigger>{selectedWorkArea}</SelectTrigger>
                                            <SelectContent>
                                                {workArea
                                                    ?.filter((item) => item.scaleLevel >= 3)
                                                    .map((item, index) => (
                                                        <SelectItem key={index} value={`${index + 1}`}>
                                                            {item.name}
                                                        </SelectItem>
                                                    ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="notes">Notes And Attachments</Label>
                                    <Textarea
                                        placeholder="Enter notes"
                                        id="notes"
                                        name="notes"
                                        value={formData.notes}
                                        onChange={handleInputChange}
                                    />
                                    <br />
                                    <Label htmlFor="round-file" className="flex items-center space-x-1 rounded-sm bg-gray-200/10 p-2 w-max h-9 hover:bg-gray-200/30 hover:cursor-pointer">
                                        <span><LinkIcon /></span>
                                        <span>Add Images or PDF</span>
                                    </Label>
                                    <Input
                                        id="round-file"
                                        name="attachments"
                                        type="file"
                                        multiple
                                        accept="image/*,.pdf,.docx"
                                        className="hidden"
                                        onChange={handleFileChange}
                                    />
                                    <div className="mt-2 space-y-2">
                                        {formData.attachments.map((file, index) => (
                                            <div key={index} className="flex items-center justify-between border p-2 rounded">
                                                <span>{file.name}</span>
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => handleRemoveFile(index)}
                                                >
                                                    <X className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="round-and-tasks" className="p-6 space-y-6 h-full">
                    {/* Header section */}
                    <div className="flex justify-between items-center bg-card rounded-lg shadow-md p-4">
                        <div className="flex items-center space-x-4">
                            <LayoutList className="text-primary h-6 w-6" />
                            <div>
                                <h2 className="text-xl font-semibold">{roundName}</h2>
                                <p className="text-sm text-muted-foreground">{roundDescription}</p>
                            </div>
                            <Dialog open={isRoundDetailsDialogOpen} onOpenChange={setIsRounDetailsDialogOpen}>
                                <DialogTrigger asChild>
                                    <Button variant="outline"><PencilIcon className=" mr-2" /> Edit</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Edit Round Details</DialogTitle>
                                        {/* <DialogDescription>
                                            Make changes to your profile here. Click save when you're done.
                                        </DialogDescription> */}
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="round_name" className="text-right">
                                                Round Name
                                            </Label>
                                            <Input
                                                id="round_name"
                                                className="col-span-3"
                                                onChange={(e) => setRoundName(e.target.value)}
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="round_description" className="text-right">
                                                Round Description
                                            </Label>
                                            <Input
                                                id="description"
                                                className="col-span-3"
                                                onChange={(e) => setRoundDescription(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button onClick={() => setIsRounDetailsDialogOpen(false)}>Save changes</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="text-sm">
                                <span className="font-medium">Plant: </span>
                                <span className="text-muted-foreground">SHR_PLANT01</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <CheckCircleIcon className="h-4 w-4 text-green-500" />
                                <span>All changes saved</span>
                            </div>
                            <Button variant="outline" size="sm">
                                <EyeIcon className="h-4 w-4 mr-2" />
                                Preview
                            </Button>
                            <Button size="sm" onClick={() => onRoundDetailsSubmitted()}>Next</Button>
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="grid grid-cols-[30%_70%] gap-6 h-full ">
                        <Card className="shadow-md">
                            <CardHeader className="flex flex-row justify-between items-center">
                                <h3 className="text-lg font-semibold">Locations/Assets</h3>
                                <div className="flex items-center space-x-2">
                                    <Button variant="ghost" size="sm"><PlusIcon className="h-4 w-4" /></Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <Input
                                    placeholder="Search by name/description"
                                    className="mb-4"
                                />
                                <div className="space-y-2">
                                    {/* Repeat this block for each location/asset */}
                                    <ScrollArea className="h-[300px] w-full rounded-md border">
                                        {locations.map((item) => (
                                            <div key={item.sectionId} className="flex items-center justify-between p-2 bg-accent rounded-md m-2">
                                                <div className="flex items-center space-x-3">
                                                    <Checkbox
                                                        checked={checkedLocations.some(loc => loc.id === item.sectionId)}
                                                        onCheckedChange={() => handleCheckLocation(item)}
                                                        id={`location-${item.sectionId}`}
                                                    />
                                                    <label
                                                        htmlFor={`location-${item.sectionId}`}
                                                        className="flex items-center space-x-3 cursor-pointer"
                                                    >
                                                        <MapPin className="text-primary h-5 w-5" />
                                                        <div>
                                                            <p className="font-medium">{item.name}</p>
                                                            <p className="text-xs text-muted-foreground">ID: {item.sectionId}</p>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Button size="sm" variant="ghost">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                        <span className="sr-only">More options</span>
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </ScrollArea>
                                    <Textarea
                                        value={checkedLocationsText}
                                        readOnly
                                        placeholder="Selected locations will appear here"
                                        className="w-full h-24"
                                    />
                                    {/* Repeat ends */}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="shadow-md h-full mr-7">
                            <CardHeader>
                                <h3 className="text-lg font-semibold">Sections and Tasks</h3>
                            </CardHeader>
                            <CardContent>
                                {sections?.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center h-64">
                                        <Button variant="outline" onClick={() => onAddSection()}>Add sections</Button>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {sections?.map((item: any, index: number) => (
                                            <div key={index} className="border rounded-md p-4">
                                                <div className="flex justify-between items-center mb-2">
                                                    <div className="text-md font-semibold flex space-x-2 justify-center items-center">
                                                        <span>{item.name}</span>
                                                        <Dialog open={isEditSectionDialogOpen} onOpenChange={setIsEditSectionDialogOpen}>
                                                            <DialogTrigger asChild>
                                                                <span className="cursor-pointer p-2 hover:bg-secondary rounded-md"><Pencil size={15}></Pencil></span>
                                                            </DialogTrigger>
                                                            <DialogContent className="sm:max-w-[425px]">
                                                                <DialogHeader>
                                                                    <DialogTitle>Edit Section Name</DialogTitle>
                                                                    {/* <DialogDescription>
                                                                        Make changes to your profile here. Click save when you're done.
                                                                    </DialogDescription> */}
                                                                </DialogHeader>
                                                                <div className="grid gap-4 py-4">
                                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                                        <Label htmlFor="name" className="text-right text-nowrap">
                                                                            Section Name
                                                                        </Label>
                                                                        <Input
                                                                            id="name"
                                                                            className="col-span-3"
                                                                            onChange={(e) => setSectionName(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <DialogFooter>
                                                                    <Button onClick={() => onEditSection(index)}>Save changes</Button>
                                                                </DialogFooter>
                                                            </DialogContent>
                                                        </Dialog>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                                                            <DialogTrigger asChild>
                                                                <Button variant="outline">Add Tasks</Button>
                                                            </DialogTrigger>
                                                            <DialogContent className="sm:max-w-[500px]">
                                                                <DialogHeader>
                                                                    <DialogTitle>Create a Task</DialogTitle>
                                                                </DialogHeader>
                                                                <div className="grid gap-4 py-4">
                                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                                        <Label htmlFor="name" className="text-right">Task Name</Label>
                                                                        <Input
                                                                            id="name"
                                                                            className="col-span-3"
                                                                            onChange={(e) => setTaskName(e.target.value)}
                                                                        />
                                                                    </div>
                                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                                        <Label htmlFor="description" className="text-right">Task Description</Label>
                                                                        <Input
                                                                            id="description"
                                                                            className="col-span-3"
                                                                            onChange={(e) => setTaskDescription(e.target.value)}
                                                                        />
                                                                    </div>
                                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                                        <Label htmlFor="response_type" className="text-right">Response Type</Label>
                                                                        <DropdownMenu>
                                                                            <DropdownMenuTrigger asChild>
                                                                                <Button variant="outline">
                                                                                    {responseType[0].toUpperCase() + responseType.slice(1)}
                                                                                </Button>
                                                                            </DropdownMenuTrigger>
                                                                            <DropdownMenuContent className="w-56">
                                                                                <DropdownMenuLabel>Set the response type</DropdownMenuLabel>
                                                                                <DropdownMenuSeparator />
                                                                                <DropdownMenuRadioGroup value={responseType} onValueChange={setResponseType}>
                                                                                    <DropdownMenuRadioItem value="text">Text</DropdownMenuRadioItem>
                                                                                    <DropdownMenuRadioItem value="image">Image</DropdownMenuRadioItem>
                                                                                </DropdownMenuRadioGroup>
                                                                            </DropdownMenuContent>
                                                                        </DropdownMenu>
                                                                    </div>
                                                                </div>
                                                                <DialogFooter>
                                                                    <Button onClick={() => onAddTask(index)}>Save</Button>
                                                                </DialogFooter>
                                                            </DialogContent>
                                                        </Dialog>

                                                        <Dialog open={isQuestionDialogOpen} onOpenChange={setIsQuestionDialogOpen}>
                                                            <DialogTrigger asChild>
                                                                <Button variant="outline">Create Question</Button>
                                                            </DialogTrigger>
                                                            <DialogContent className="sm:max-w-[500px]">
                                                                <DialogHeader>
                                                                    <DialogTitle>Create a Question</DialogTitle>
                                                                </DialogHeader>
                                                                <div className="grid gap-4 py-4">
                                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                                        <Label htmlFor="name" className="text-right">Title</Label>
                                                                        <Input
                                                                            id="name"
                                                                            className="col-span-3"
                                                                            onChange={(e) => setQuestionName(e.target.value)}
                                                                        />
                                                                    </div>
                                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                                        <Label htmlFor="question_response_type" className="text-right text-wrap">Response Type</Label>
                                                                        <DropdownMenu>
                                                                            <DropdownMenuTrigger asChild>
                                                                                <Button variant="outline">
                                                                                    {questionResponseType[0].toUpperCase() + questionResponseType.slice(1)}
                                                                                </Button>
                                                                            </DropdownMenuTrigger>
                                                                            <DropdownMenuContent className="w-56">
                                                                                <DropdownMenuLabel>Set the response type</DropdownMenuLabel>
                                                                                <DropdownMenuSeparator />
                                                                                <DropdownMenuRadioGroup value={questionResponseType} onValueChange={setQuestionResponseType}>
                                                                                    <DropdownMenuRadioItem value="text">Text</DropdownMenuRadioItem>
                                                                                    <DropdownMenuRadioItem value="image">Image</DropdownMenuRadioItem>
                                                                                </DropdownMenuRadioGroup>
                                                                            </DropdownMenuContent>
                                                                        </DropdownMenu>
                                                                    </div>
                                                                </div>
                                                                <DialogFooter>
                                                                    <Button onClick={() => onAddQuestion(index)}>Save</Button>
                                                                </DialogFooter>
                                                            </DialogContent>
                                                        </Dialog>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => toggleSection(index)}
                                                        >
                                                            {expandedSection === index ? (
                                                                <CircleChevronUp className="h-4 w-4" />
                                                            ) : (
                                                                <CircleChevronDown className="h-4 w-4" />
                                                            )}
                                                        </Button>
                                                    </div>
                                                </div>
                                                {expandedSection === index && (
                                                    <div className="pl-4">
                                                        <h3 className="font-semibold text-2xl mb-4">
                                                            Tasks
                                                        </h3>
                                                        {item.tasks.length > 0 ? (
                                                            <ul className="space-y-2">
                                                                {item.tasks.map((task: any, taskIndex: number) => (
                                                                    <li key={taskIndex} className="flex items-start space-x-2">
                                                                        <div className="mt-1">
                                                                            {task.responseType === 'text' ? (
                                                                                <FileTextIcon className="h-4 w-4 text-blue-500" />
                                                                            ) : (
                                                                                <ImageIcon className="h-4 w-4 text-green-500" />
                                                                            )}
                                                                        </div>
                                                                        <div>
                                                                            <p className="font-medium">{task.name}</p>
                                                                            <p className="text-sm text-muted-foreground">{task.description}</p>
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        ) : (
                                                            <p className="text-sm text-muted-foreground">No tasks available.</p>
                                                        )}

                                                        <h3 className="font-semibold text-2xl mb-4 mt-4 ">
                                                            Questions
                                                        </h3>

                                                        {item.questions.length > 0 ? (
                                                            <ul className="space-y-2">
                                                                {item.questions.map((question: any, index: number) => (
                                                                    <li key={index} className="flex items-start space-x-2">
                                                                        <div className="mt-1">
                                                                            {question.responseType === 'text' ? (
                                                                                <FileTextIcon className="h-4 w-4 text-blue-500" />
                                                                            ) : (
                                                                                <ImageIcon className="h-4 w-4 text-green-500" />
                                                                            )}
                                                                        </div>
                                                                        <div>
                                                                            <p className="font-medium">{question.name}</p>
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        ) : (
                                                            <p className="text-sm text-muted-foreground">No tasks available.</p>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                        <div className="flex justify-center items-center">
                                            <Button variant={"outline"} onClick={() => onAddSection()}>Add Section</Button>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
                <TabsContent value="pdf-setup" className="p-6 space-y-6 h-full">
                    <div className="grid grid-cols-2 gap-6 h-full">
                        <Card>
                            <CardHeader>
                                <CardTitle>Select Fields for PDF Report</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ScrollArea className="h-[calc(100vh-200px)]">
                                    <Accordion type="multiple" className="w-full">
                                        <AccordionItem value="plan-details">
                                            <AccordionTrigger>Plan Details</AccordionTrigger>
                                            <AccordionContent>
                                                {planDetails && Object.entries(planDetails).map(([key, value]) => (
                                                    <div key={key} className="flex items-center space-x-2 py-2">
                                                        <Checkbox
                                                            id={`plan-${key}`}
                                                            checked={selectedFields.includes(`plan-${key}`)}
                                                            onCheckedChange={() => handleCheckboxChange(`plan-${key}`)}
                                                        />
                                                        <label
                                                            htmlFor={`plan-${key}`}
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {key.charAt(0).toUpperCase() + key.slice(1)}
                                                        </label>
                                                    </div>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                        {roundDetails.map((section) => (
                                            <AccordionItem key={section.id} value={`section-${section.id}`}>
                                                <AccordionTrigger>{section.name}</AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="pl-4">
                                                        <div className="flex items-center space-x-2 py-2">
                                                            <Checkbox
                                                                id={`section-${section.id}-name`}
                                                                checked={selectedFields.includes(`section-${section.id}-name`)}
                                                                onCheckedChange={() => handleCheckboxChange(`section-${section.id}-name`)}
                                                            />
                                                            <label
                                                                htmlFor={`section-${section.id}-name`}
                                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                            >
                                                                Section Name
                                                            </label>
                                                        </div>
                                                        <Accordion type="multiple" className="w-full">
                                                            <AccordionItem value={`section-${section.id}-tasks`}>
                                                                <AccordionTrigger>Tasks</AccordionTrigger>
                                                                <AccordionContent>
                                                                    {section.tasks.map((task) => (
                                                                        <div key={task.id} className="flex items-center space-x-2 py-2 pl-4">
                                                                            <Checkbox
                                                                                id={`task-${section.id}-${task.id}`}
                                                                                checked={selectedFields.includes(`task-${section.id}-${task.id}`)}
                                                                                onCheckedChange={() => handleCheckboxChange(`task-${section.id}-${task.id}`)}
                                                                            />
                                                                            <label
                                                                                htmlFor={`task-${section.id}-${task.id}`}
                                                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                                            >
                                                                                {task.name}
                                                                            </label>
                                                                        </div>
                                                                    ))}
                                                                </AccordionContent>
                                                            </AccordionItem>
                                                            <AccordionItem value={`section-${section.id}-questions`}>
                                                                <AccordionTrigger>Questions</AccordionTrigger>
                                                                <AccordionContent>
                                                                    {section.questions.map((question) => (
                                                                        <div key={question.id} className="flex items-center space-x-2 py-2 pl-4">
                                                                            <Checkbox
                                                                                id={`question-${section.id}-${question.id}`}
                                                                                checked={selectedFields.includes(`question-${section.id}-${question.id}`)}
                                                                                onCheckedChange={() => handleCheckboxChange(`question-${section.id}-${question.id}`)}
                                                                            />
                                                                            <label
                                                                                htmlFor={`question-${section.id}-${question.id}`}
                                                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                                            >
                                                                                {question.name}
                                                                            </label>
                                                                        </div>
                                                                    ))}
                                                                </AccordionContent>
                                                            </AccordionItem>
                                                        </Accordion>
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </ScrollArea>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>PDF Report Preview</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ScrollArea className="h-[calc(100vh-200px)]">
                                    {renderPreviewContent()}
                                </ScrollArea>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </section>
    )
}

export default CreateRound;