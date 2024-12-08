'use client'

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { v4 as uuidv4 } from 'uuid'
import { ChevronLeft, Plus, Pencil, Trash2, MoreVertical, GripVertical } from 'lucide-react'
import { cn } from "@/lib/utils"

type FieldType = 'text' | 'number' | 'select' | 'checkbox' | 'textarea' | 'date'

interface FormField {
    id: string
    type: FieldType
    label: string
    required: boolean
    options?: string[]
    placeholder?: string
}

interface FormSection {
    id: string
    title: string
    fields: FormField[]
}

interface FormTemplateBasicInfo {
    name: string
    section: string
    position: string
}

export default function FormTemplateBuilder() {
    const [currentStep, setCurrentStep] = useState(1)
    const [basicInfo, setBasicInfo] = useState<FormTemplateBasicInfo>({
        name: '',
        section: '',
        position: ''
    })
    const [sections, setSections] = useState<FormSection[]>([
        {
            id: uuidv4(),
            title: 'Basic Information',
            fields: [
                {
                    id: uuidv4(),
                    type: 'text',
                    label: 'Full Name',
                    required: true,
                    placeholder: 'Enter your full name'
                }
            ]
        }
    ])

    const renderBasicInfoStep = () => {
        const handleInputChange = (field: keyof FormTemplateBasicInfo, value: string) => {
            setBasicInfo(prev => ({ ...prev, [field]: value }))
        }

        const isStepValid = basicInfo.name.trim() !== '' &&
            basicInfo.section.trim() !== ''

        return (
            <Card className="max-w-xl mx-auto">
                <CardHeader>
                    <CardTitle>Form Template Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label>Name <span className="text-red-500">*</span></Label>
                        <Input
                            placeholder="Shift Log Template"
                            value={basicInfo.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Section <span className="text-red-500">*</span></Label>
                        <Select
                            value={basicInfo.section}
                            onValueChange={(value) => handleInputChange('section', value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select Plant" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="plant1">544566 - CWP 7468 Plant</SelectItem>
                                <SelectItem value="plant2">789012 - Main Production Plant</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label>Position</Label>
                        <Select
                            value={basicInfo.position}
                            onValueChange={(value) => handleInputChange('position', value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select Position" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="position1">Shift Supervisor</SelectItem>
                                <SelectItem value="position2">Operation Manager</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex justify-end space-x-2">
                        <Button
                            onClick={() => setCurrentStep(2)}
                            disabled={!isStepValid}
                        >
                            Next
                        </Button>
                    </div>
                </CardContent>
            </Card>
        )
    }

    const renderFormBuilderStep = () => {
        const addSection = () => {
            const newSection: FormSection = {
                id: uuidv4(),
                title: `Section ${sections.length + 1}`,
                fields: []
            }
            setSections([...sections, newSection])
        }

        const addField = (sectionId: string) => {
            const newField: FormField = {
                id: uuidv4(),
                type: 'text',
                label: 'New Field',
                required: false
            }

            setSections(sections.map(section =>
                section.id === sectionId
                    ? { ...section, fields: [...section.fields, newField] }
                    : section
            ))
        }

        return (
            <div className="max-w-4xl mx-auto space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-semibold">Build Your Form</h2>
                        <p className="text-muted-foreground">Create sections and add fields to your form template</p>
                    </div>
                    <Button onClick={addSection} variant="outline">
                        <Plus className="w-4 h-4 mr-2" /> Add Section
                    </Button>
                </div>

                {sections.map((section) => (
                    <Card key={section.id} className="border">
                        <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <GripVertical className="w-4 h-4" />
                                <span>{section.title}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-white hover:text-white"
                                >
                                    <Pencil className="w-4 h-4" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-white hover:text-white"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                        <CardContent className="p-4">
                            {section.fields.map((field) => (
                                <div
                                    key={field.id}
                                    className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg group"
                                >
                                    <GripVertical className="w-4 h-4 text-gray-400" />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <span>{field.label}</span>
                                            <span className="bg-blue-100 text-blue-600 text-xs px-1 rounded">
                                                {field.type.charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="opacity-0 group-hover:opacity-100"
                                    >
                                        <MoreVertical className="w-4 h-4" />
                                    </Button>
                                </div>
                            ))}
                            <Button
                                variant="outline"
                                className="w-full mt-4"
                                onClick={() => addField(section.id)}
                            >
                                <Plus className="w-4 h-4 mr-2" /> Add Field
                            </Button>
                        </CardContent>
                    </Card>
                ))}

                <div className="flex justify-between">
                    <Button
                        variant="outline"
                        onClick={() => setCurrentStep(1)}
                    >
                        <ChevronLeft className="w-4 h-4 mr-2" /> Back
                    </Button>
                    <Button>Save Template</Button>
                </div>
            </div>
        )
    }

    const renderStepperIndicator = () => {
        return (
            <div className="flex items-center justify-center mb-6">
                <div className="flex items-center">
                    <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center",
                        currentStep === 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                    )}>
                        1
                    </div>
                    <div className={cn(
                        "w-16 h-0.5 mx-2",
                        currentStep > 1 ? "bg-blue-600" : "bg-gray-200"
                    )} />
                    <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center",
                        currentStep === 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                    )}>
                        2
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background p-6">
            <div className="container mx-auto">
                {renderStepperIndicator()}
                {currentStep === 1 ? renderBasicInfoStep() : renderFormBuilderStep()}
            </div>
        </div>
    )
}