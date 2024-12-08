'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LayoutList, PencilIcon, EyeIcon, CheckCircleIcon, MapPin, PlusIcon, MoreHorizontal } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import axios from 'axios'

interface Asset {
    id: string;
    name: string;
    type: { name: string };
    section: { name: string; area: number };
    description: string;
}

interface Section {
    id: string;
    name: string;
    type: { name: string };
}

interface Task {
    id: string;
    sectionId: string;
    name: string;
    responseType: 'text' | 'image';
}

interface Question {
    id: string;
    sectionId: string;
    name: string;
    responseType: 'text' | 'image';
}

interface RoundAndTasksProps {
    sections: Section[];
    assets: Asset[];
    roundName: string;
    setRoundName: (name: string) => void;
    roundDescription: string;
    setRoundDescription: (description: string) => void;
    checkedAssets: string[];
    handleCheckAssets: (asset: Asset) => void;
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
    questions: Question[];
    setQuestions: (questions: Question[]) => void;
    isRoundDetailsDialogOpen: boolean;
    setIsRoundDetailsDialogOpen: (open: boolean) => void;
    isAddTaskDialogOpen: boolean;
    setIsAddTaskDialogOpen: (open: boolean) => void;
    isAddQuestionDialogOpen: boolean;
    setIsAddQuestionDialogOpen: (open: boolean) => void;
    selectedSectionId: string;
    setSelectedSectionId: (id: string) => void;
    taskName: string;
    setTaskName: (name: string) => void;
    questionName: string;
    setQuestionName: (name: string) => void;
    responseType: 'text' | 'image';
    setResponseType: (type: 'text' | 'image') => void;
    handleAddTask: () => void;
    handleAddQuestion: () => void;
    handleSaveRoundDetails: () => void;
    selectedAssetsData: any,
    planDetails: any
}


const RoundAndTasks: React.FC<RoundAndTasksProps> = ({
    sections,
    assets,
    roundName,
    setRoundName,
    roundDescription,
    setRoundDescription,
    checkedAssets,
    handleCheckAssets,
    tasks,
    questions,
    isRoundDetailsDialogOpen,
    setIsRoundDetailsDialogOpen,
    isAddTaskDialogOpen,
    setIsAddTaskDialogOpen,
    isAddQuestionDialogOpen,
    setIsAddQuestionDialogOpen,
    selectedSectionId,
    setSelectedSectionId,
    taskName,
    setTaskName,
    questionName,
    setQuestionName,
    responseType,
    setResponseType,
    handleAddTask,
    handleAddQuestion,
    selectedAssetsData,
    handleSaveRoundDetails,
    planDetails
}) => {

    async function onclickingNext() {
        const tasksAndQuestions = [...tasks, ...questions];
    
        const requestBody = {
            planName: planDetails.planName,
            planDescription: planDetails.planDescription,
            notes: planDetails.notes || '',
            form: tasksAndQuestions,
            assets: selectedAssetsData
        };
    
        const formData = new FormData();
        if (planDetails.attachments && planDetails.attachments.length > 0) {
            console.log(planDetails.attachments)
            planDetails.attachments.forEach((file, index) => {
                formData.append(`files`, file);
            });
        }

        console.log(formData)
    
        try {
            const res = await axios.post("api/data/rounds/create", 
                {
                    ...requestBody,
                    files: formData
                }, 
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
        } catch (error) {
            console.error('Error creating round:', error);
        }
    }

    return (
        <div className="p-6 space-y-6 h-full">
            {/* Header section */}
            <div className="flex justify-between items-center bg-card rounded-lg shadow-md p-4">
                <div className="flex items-center space-x-4">
                    <LayoutList className="text-primary h-6 w-6" />
                    <div>
                        <h2 className="text-xl font-semibold">{roundName}</h2>
                        <p className="text-sm text-muted-foreground">{roundDescription}</p>
                    </div>
                    <Button variant="outline" onClick={() => setIsRoundDetailsDialogOpen(true)}>
                        <PencilIcon className="mr-2" /> Edit
                    </Button>
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
                    <Button variant="outline" size="sm" onClick={() => onclickingNext()}>
                        <EyeIcon className="h-4 w-4 mr-2" />
                        Preview
                    </Button>
                    <Button size="sm" onClick={onclickingNext}>Next</Button>
                </div>
            </div>

            {/* Main content */}
            <div className="grid grid-cols-[30%_70%] gap-6 h-full">
                <Card className="shadow-md">
                    <CardHeader className="flex flex-row justify-between items-center">
                        <h3 className="text-lg font-semibold">Assets</h3>
                        <Button variant="ghost" size="sm"><PlusIcon className="h-4 w-4" /></Button>
                    </CardHeader>
                    <CardContent>
                        <Input
                            placeholder="Search by name/description"
                            className="mb-4"
                        />
                        <ScrollArea className="h-[300px] w-full mx-1 rounded-md border px-3">
                            {assets?.map((item) => (
                                <div key={item.id} className="flex flex-col p-2 bg-accent rounded-md m-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <Checkbox
                                                checked={checkedAssets.includes(item.id)}
                                                onCheckedChange={() => handleCheckAssets(item)}
                                                id={`asset-${item.id}`}
                                            />
                                            <label
                                                htmlFor={`asset-${item.id}`}
                                                className="flex items-center space-x-3 cursor-pointer"
                                            >
                                                <MapPin className="text-primary h-5 w-5" />
                                                <div>
                                                    <p className="font-medium">{item.name}</p>
                                                    <p className="text-xs text-muted-foreground">
                                                        Type: {item.type.name}
                                                    </p>
                                                    <p className="text-xs text-muted-foreground">
                                                        Section: {item.section.name} (Area: {item.section.area} sqm)
                                                    </p>
                                                </div>
                                            </label>
                                        </div>
                                        <Button size="sm" variant="ghost">
                                            <MoreHorizontal className="h-4 w-4" />
                                            <span className="sr-only">More options</span>
                                        </Button>
                                    </div>
                                    <div className="mt-2 text-sm text-muted-foreground">
                                        {item.description}
                                    </div>
                                </div>
                            ))}
                        </ScrollArea>
                        <Textarea
                            readOnly
                            value={assets.filter(asset => checkedAssets.includes(asset.id)).map(asset => asset.name).join(', ')}
                            placeholder="Selected assets will appear here"
                            className="w-full h-24 mt-4"
                        />
                    </CardContent>
                </Card>

                <Card className="shadow-md h-full mr-7">
                    <CardHeader className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Sections and Tasks</h3>
                        <div className='flex space-x-3 justify-center items-center'>
                            <Button onClick={() => setIsAddTaskDialogOpen(true)} size="sm">
                                <PlusIcon className="h-4 w-4 mr-2" />
                                Add Task
                            </Button>
                            <Button onClick={() => setIsAddQuestionDialogOpen(true)} size="sm">
                                <PlusIcon className="h-4 w-4 mr-2" />
                                Add Question
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        {sections
                            .filter(section =>
                                tasks.some(task => task.sectionId === section.id) ||
                                questions.some(question => question.sectionId === section.id)
                            )
                            .map(section => (
                                <div key={section.id} className="mb-6 border bg-secondary p-2 rounded-lg">
                                    <div>
                                        <h4 className="text-md font-semibold mb-2"><span className='font-semibold'>Section Name:</span> {section.name}</h4>
                                        {/* {JSON.stringify(section)} */}
                                        <h4 className="text-md font-semibold mb-2"><span className='font-semibold'>Type:</span> {section.type.name}</h4>
                                    </div>

                                    {/* Render tasks for the section */}
                                    {tasks
                                        .filter(task => task.sectionId === section.id)
                                        .map(task => (
                                            <div key={task.id} className="bg-background p-2 rounded-md mb-2">
                                                <p className="font-medium">Task: {task.name}</p>
                                                <p className="text-xs text-muted-foreground">Response type: {task.responseType}</p>
                                            </div>
                                        ))
                                    }

                                    {/* Render questions for the section */}
                                    {questions
                                        .filter(question => question.sectionId === section.id)
                                        .map(question => (
                                            <div key={question.id} className="bg-background p-2 rounded-md mb-2">
                                                <p className="font-medium">Question: {question.name}</p>
                                                <p className="text-xs text-muted-foreground">Response type: {question.responseType}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </CardContent>

                </Card>
            </div>

            {/* Round Details Dialog */}
            <Dialog open={isRoundDetailsDialogOpen} onOpenChange={setIsRoundDetailsDialogOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit Round Details</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="round_name" className="text-right">
                                Round Name
                            </Label>
                            <Input
                                id="round_name"
                                className="col-span-3"
                                value={roundName}
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
                                value={roundDescription}
                                onChange={(e) => setRoundDescription(e.target.value)}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button onClick={() => setIsRoundDetailsDialogOpen(false)}>Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Add Task Dialog */}
            hi there
            <Dialog open={isAddTaskDialogOpen} onOpenChange={setIsAddTaskDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add Task</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="section">Section</Label>
                            <Select onValueChange={setSelectedSectionId} value={selectedSectionId}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a section" />
                                </SelectTrigger>
                                <SelectContent>
                                    {sections?.map((section) => (
                                        <SelectItem key={section.id} value={section.id}>
                                            {section.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="taskName">Task Name</Label>
                            <Input
                                id="taskName"
                                value={taskName}
                                onChange={(e) => setTaskName(e.target.value)}
                                placeholder="Enter task name"
                            />
                        </div>
                        <div>
                            <Label>Response Type</Label>
                            <RadioGroup value={responseType} onValueChange={(value: 'text' | 'image') => setResponseType(value)}>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="text" id="text" />
                                    <Label htmlFor="text">Text</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="image" id="image" />
                                    <Label htmlFor="image">Image</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="checkbox" id="checkbox" />
                                    <Label htmlFor="checkbox">Checkboxes</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="date" id="date" />
                                    <Label htmlFor="date">Date and Time</Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button onClick={handleAddTask} disabled={!selectedSectionId || !taskName}>Add Task</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            hi there - hello there
            <Dialog open={isAddQuestionDialogOpen} onOpenChange={setIsAddQuestionDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add Question</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="section">Section</Label>
                            <Select onValueChange={setSelectedSectionId} value={selectedSectionId}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a section" />
                                </SelectTrigger>
                                <SelectContent>
                                    {sections?.map((section) => (
                                        <SelectItem key={section.id} value={section.id}>
                                            {section.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="questionName">Question Name</Label>
                            <Input
                                id="questionName"
                                value={questionName}
                                onChange={(e) => setQuestionName(e.target.value)}
                                placeholder="Enter question name"
                            />
                        </div>
                        <div>
                            <Label>Response Type</Label>
                            <RadioGroup value={responseType} onValueChange={(value: 'text' | 'image') => setResponseType(value)}>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="text" id="text" />
                                    <Label htmlFor="text">Text</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="image" id="image" />
                                    <Label htmlFor="image">Image</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="checkbox" id="checkbox" />
                                    <Label htmlFor="checkbox">Checkboxes</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="date" id="date" />
                                    <Label htmlFor="date">Date and Time</Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button onClick={handleAddQuestion} disabled={!selectedSectionId || !questionName}>Add Question</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default RoundAndTasks

