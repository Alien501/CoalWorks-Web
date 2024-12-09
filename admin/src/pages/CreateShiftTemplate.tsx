import React, { useEffect, useState } from "react"
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
import { Dialog, DialogHeader, DialogContent, DialogFooter, DialogTrigger, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { v4 as uuidv4 } from 'uuid'
import { ChevronLeft, Plus, Pencil, Trash2, MoreVertical, GripVertical } from 'lucide-react'
import { cn } from "@/lib/utils"
import { fetchSections } from "@/utils/fetchSections"
import { fetchPositions } from "@/utils/fetchPosition"
import { fetchAllRoles } from "@/utils/fetchAllRoles"
import { Sparkles } from "lucide-react"
import { formData } from "./YellowBook"
import { dummyAiResponse } from "@/lib/dummyAiResponse"
import { DynamicFormBuilder } from "@/components/forms/dynamic-form-builder"
import { DynamicFormGenerator } from "@/components/custom/dynamicFormGenerator"

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
    const [selectedRole, setSelectedRole] = useState<string | null>(null);
    const [selectedForm, setSelectedForm] = useState<string | null>(null);
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
    const [mineSections, setMineSections] = useState([])
    const [roles, setRoles] = useState([]);

    const renderBasicInfoStep = () => {
        const handleInputChange = (field: keyof FormTemplateBasicInfo, value: string) => {
            setBasicInfo(prev => ({ ...prev, [field]: value }))
        }

        const isStepValid = basicInfo.name.trim() !== '' &&
            !isNaN(basicInfo.section)

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
                                <SelectValue placeholder="Select Section" />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    mineSections.map(section => (
                                        <SelectItem value={section.id}>{section.name}</SelectItem>
                                    ))
                                }
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
                                {
                                    roles.map(role => (
                                        <SelectItem value={role.roleId}>{role.roleName}</SelectItem>
                                    ))
                                }
                                {/* <SelectItem value="position1">Shift Supervisor</SelectItem>
                                <SelectItem value="position2">Operation Manager</SelectItem> */}
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

    const [editSectionModalOpen, setEditSectionModalOpen] = useState(false)
    const [editFieldModalOpen, setEditFieldModalOpen] = useState(false)
    const [currentSection, setCurrentSection] = useState<FormSection | null>(null)
    const [currentField, setCurrentField] = useState<FormField | null>(null)
    const [userQuery, setuserQuery] = useState("")
    const [aiResponse, setAiResponse] = useState(null)

    const addSection = () => {
        const newSection: FormSection = {
            id: uuidv4(),
            title: `Section ${sections.length + 1}`,
            fields: []
        }
        setSections([...sections, newSection])
    }

    const deleteSection = (sectionId: string) => {
        setSections(sections.filter(section => section.id !== sectionId))
    }

    const openEditSectionModal = (section: FormSection) => {
        setCurrentSection(section)
        setEditSectionModalOpen(true)
    }

    const updateSection = () => {
        if (!currentSection) return

        setSections(sections.map(section =>
            section.id === currentSection.id ? currentSection : section
        ))
        setEditSectionModalOpen(false)
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

    async function onAIGenerate(){
        const queryString = `Make me a shift log template for ${selectedRole} that will help me to fill ${selectedForm}, ${userQuery}`
        console.log("reaches")
        setAiResponse(dummyAiResponse)
    }

    const deleteField = (sectionId: string, fieldId: string) => {
        setSections(sections.map(section => {
            if (section.id === sectionId) {
                return {
                    ...section,
                    fields: section.fields.filter(field => field.id !== fieldId)
                }
            }
            return section
        }))
    }

    const openEditFieldModal = (section: FormSection, field: FormField) => {
        setCurrentSection(section)
        setCurrentField(field)
        setEditFieldModalOpen(true)
    }

    const updateField = () => {
        if (!currentSection || !currentField) return

        setSections(sections.map(section => {
            if (section.id === currentSection.id) {
                return {
                    ...section,
                    fields: section.fields.map(field =>
                        field.id === currentField.id ? currentField : field
                    )
                }
            }
            return section
        }))
        setEditFieldModalOpen(false)
    }

    useEffect(() => {
        const getAndSetAllSections = async () => {
            const d = await fetchSections();
            if (d) {
                setMineSections(d);
            }
        }

        const getAndSetRoles = async () => {
            const d = await fetchAllRoles();
            if (d) {
                setRoles(d)
            }
        }

        getAndSetAllSections();
        getAndSetRoles();
    }, []);

    const renderFormBuilderStep = () => {
        return (
            <div className="max-w-4xl mx-auto space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-semibold">Build Your Log Template</h2>
                        <p className="text-muted-foreground">Create sections and add fields to your form template</p>
                    </div>
                    <div className="flex items-center justify-center space-x-5">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button>
                                    <Sparkles className="w-4 h-4 " /> Generate with AI
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
                                <DialogHeader>
                                    <DialogTitle>Generate form with AI</DialogTitle>
                                    <DialogDescription>
                                        Fill all the details
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="position" className="text-right">
                                            Position
                                        </Label>
                                        <Select onValueChange={(value) => setSelectedRole(value)}>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Position" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {
                                                    roles.map(role => (
                                                        <SelectItem value={role.roleName}>{role.roleName}</SelectItem>
                                                    ))
                                                }
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="formname" className="text-right">
                                            Which Form in yellow book
                                        </Label>
                                        <Select onValueChange={(value) => setSelectedForm(value)}>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Form No." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {
                                                    formData.map(form => (
                                                        <SelectItem value={form.formNo}>{form.formNo}</SelectItem>
                                                    ))
                                                }
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="query" className="text-right">
                                            How do you need the form
                                        </Label>
                                        <Input
                                            id="query"
                                            className="col-span-3"
                                            onChange={(e)=> setuserQuery(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button onClick={onAIGenerate}>Generate</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                        <Button onClick={addSection} variant="outline">
                            <Plus className="w-4 h-4 mr-2" /> Add Section
                        </Button>
                    </div>
                </div>

                {aiResponse!= null ?sections.map((section) => (
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
                                    onClick={() => openEditSectionModal(section)}
                                >
                                    <Pencil className="w-4 h-4" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-white hover:text-white"
                                    onClick={() => deleteSection(section.id)}
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                        <CardContent className="p-4">
                            {section.fields.map((field) => (
                                <div
                                    key={field.id}
                                    className="flex items-center gap-4 p-4 hover:bg-background-50 rounded-lg group"
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
                                    <div className="flex items-center gap-2">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="opacity-0 group-hover:opacity-100"
                                            onClick={() => openEditFieldModal(section, field)}
                                        >
                                            <Pencil className="w-4 h-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="opacity-0 group-hover:opacity-100"
                                            onClick={() => deleteField(section.id, field.id)}
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>
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
                )): (
                    <DynamicFormGenerator formData={aiResponse}></DynamicFormGenerator>
                )}

                <Dialog open={editSectionModalOpen} onOpenChange={setEditSectionModalOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Edit Section</DialogTitle>
                        </DialogHeader>
                        {currentSection && (
                            <div className="space-y-4">
                                <Label>Section Title</Label>
                                <Input
                                    value={currentSection.title}
                                    onChange={(e) => setCurrentSection({
                                        ...currentSection,
                                        title: e.target.value
                                    })}
                                />
                            </div>
                        )}
                        <DialogFooter>
                            <Button variant="outline" onClick={() => setEditSectionModalOpen(false)}>
                                Cancel
                            </Button>
                            <Button onClick={updateSection}>
                                Save Changes
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <Dialog open={editFieldModalOpen} onOpenChange={setEditFieldModalOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Edit Field</DialogTitle>
                        </DialogHeader>
                        {currentSection && currentField && (
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Field Label</Label>
                                    <Input
                                        value={currentField.label}
                                        onChange={(e) => setCurrentField({
                                            ...currentField,
                                            label: e.target.value
                                        })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Field Type</Label>
                                    <Select
                                        value={currentField.type}
                                        onValueChange={(value: FieldType) => setCurrentField({
                                            ...currentField,
                                            type: value
                                        })}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select field type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {['text', 'number', 'select', 'checkbox', 'textarea', 'date'].map(type => (
                                                <SelectItem key={type} value={type as FieldType}>
                                                    {type.charAt(0).toUpperCase() + type.slice(1)}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={currentField.required}
                                            onChange={(e) => setCurrentField({
                                                ...currentField,
                                                required: e.target.checked
                                            })}
                                        />
                                        Required Field
                                    </Label>
                                </div>
                                {currentField.type === 'select' && (
                                    <div className="space-y-2">
                                        <Label>Options (comma-separated)</Label>
                                        <Input
                                            value={currentField.options?.join(', ') || ''}
                                            onChange={(e) => setCurrentField({
                                                ...currentField,
                                                options: e.target.value.split(',').map(opt => opt.trim())
                                            })}
                                        />
                                    </div>
                                )}
                            </div>
                        )}
                        <DialogFooter>
                            <Button variant="outline" onClick={() => setEditFieldModalOpen(false)}>
                                Cancel
                            </Button>
                            <Button onClick={updateField}>
                                Save Changes
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

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

    useEffect(() => {
        const getAndSetAllSections = async () => {
            const d = await fetchSections();
            if (d) {
                setMineSections(d);
            }
            return false;
        }

        const getAndSetRoles = async () => {
            const d = await fetchAllRoles();
            if (d) {
                console.log(d)
                setRoles(d)
            }
            return false;
        }

        getAndSetAllSections();
        getAndSetRoles();
    }, []);

    return (
        <div className="min-h-screen bg-background p-6">
            <div className="container mx-auto">
                {renderStepperIndicator()}
                {currentStep === 1 ? renderBasicInfoStep() : renderFormBuilderStep()}
            </div>
        </div>
    )
}