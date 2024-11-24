import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { PlusIcon, X as CrossIcon } from "lucide-react";
import Map from './map';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const MapConfig = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        section1: { name: '', items: [] },
        section2: { name: '', items: [] },
        section3: { name: '', items: [] },
        section4: { name: '', items: [] },
        section5: { name: '', items: [] }
    });
    const [newItem, setNewItem] = useState('');

    const sections = {
        1: { name: 'Large Section', description: 'Larger section can be defined as something that covers area over 200km, ie, spans over a wide-spread area' },
        2: { name: 'Medium Section', description: 'Medium section covers an area between 50-200km, suitable for regional divisions' },
        3: { name: 'Small Section', description: 'Small section represents areas between 10-50km, ideal for local districts' },
        4: { name: 'Micro Section', description: 'Micro sections cover 1-10km areas, perfect for neighborhood-level mapping' },
        5: { name: 'Unit Section', description: 'Unit section represents the smallest division, covering areas under 1km' }
    };

    const handleNameChange = (value) => {
        setFormData(prev => ({
            ...prev,
            [`section${currentStep}`]: {
                ...prev[`section${currentStep}`],
                name: value
            }
        }));
    };

    const addItem = () => {
        if (newItem.trim()) {
            setFormData(prev => ({
                ...prev,
                [`section${currentStep}`]: {
                    ...prev[`section${currentStep}`],
                    items: [...prev[`section${currentStep}`].items, newItem.trim()]
                }
            }));
            setNewItem('');
        }
    };

    const removeItem = (itemToRemove) => {
        setFormData(prev => ({
            ...prev,
            [`section${currentStep}`]: {
                ...prev[`section${currentStep}`],
                items: prev[`section${currentStep}`].items.filter(item => item !== itemToRemove)
            }
        }));
    };

    const canProceed = () => {
        const currentData = formData[`section${currentStep}`];
        return currentData.name.trim() !== '' && currentData.items.length > 0;
    };

    const isAllSectionsComplete = () => {
        return Object.values(formData).every(section => 
            section.name.trim() !== '' && section.items.length > 0
        );
    };

    const handleNext = () => {
        if (currentStep < 5 && canProceed()) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const handleOpenChange = (open) => {
        if (!open && !isAllSectionsComplete()) {
            return false;
        }
        return true;
    };

    return (
        <section id="map-config">
            <div className='grid grid-cols-[80%_20%] h-screen'>
                <div className='w-full h-full'>
                    <Map />
                </div>
                <div className='w-full h-full p-1'>
                    <div>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='scale-1'>Large Section</SelectItem>
                                <SelectItem value='scale-2'>Medium Section</SelectItem>
                                <SelectItem value='scale-3'>Small Section</SelectItem>
                                <SelectItem value='scale-4'>Extra Small Section</SelectItem>
                                <SelectItem value='scale-5'>Unit Section</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     
                </div>
            </div>
            {/* <Dialog defaultOpen open={currentStep <= 5} onOpenChange={handleOpenChange}>
                <DialogContent className="max-w-2xl" onInteractOutside={(e) => {
                    if (!isAllSectionsComplete()) {
                        e.preventDefault();
                    }
                }}>
                    <DialogHeader>
                        <p className="text-xl font-semibold">Map Configuration Setup</p>
                        {!isAllSectionsComplete() && (
                            <p className="text-sm text-red-500">
                                Please complete all sections before closing
                            </p>
                        )}
                    </DialogHeader>
                    <DialogDescription>
                        <div id="stepper-container" className="flex justify-evenly mb-6">
                            {[1, 2, 3, 4, 5].map((step) => (
                                <Button
                                    key={step}
                                    className={`rounded-full w-10 h-10 ${
                                        step === currentStep
                                            ? 'bg-black'
                                            : step < currentStep
                                            ? 'bg-black'
                                            : 'bg-gray-300'
                                    }`}
                                    disabled={step !== currentStep}
                                >
                                    {step}
                                </Button>
                            ))}
                        </div>
                        <div className="space-y-6">
                            <div className="text-center flex items-center justify-center flex-col">
                                <h1 className="text-lg font-medium text-black mb-2">
                                    {sections[currentStep].name}
                                </h1>
                                <p className="text-gray-600 text-sm px-4">
                                    {sections[currentStep].description}
                                </p>
                            </div>

                            <div className="flex items-center justify-center">
                                <Input
                                    placeholder="How would you like to call this section?"
                                    className="max-w-md"
                                    value={formData[`section${currentStep}`].name}
                                    onChange={(e) => handleNameChange(e.target.value)}
                                />
                            </div>

                            <div className="text-center">
                                <p className="text-sm text-gray-600">
                                    Name the things that would be typically present inside this section
                                </p>
                            </div>

                            <div className="space-y-3 max-w-md mx-auto">
                                <div className="flex space-x-3">
                                    <Input
                                        placeholder="New Type"
                                        value={newItem}
                                        onChange={(e) => setNewItem(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && addItem()}
                                    />
                                    <Button
                                        variant="default"
                                        className="rounded-full"
                                        onClick={addItem}
                                    >
                                        <PlusIcon className="w-4 h-4" />
                                    </Button>
                                </div>
                                <div className="min-h-[100px] bg-gray-100 rounded-md p-3">
                                    <div className="flex flex-wrap gap-2">
                                        {formData[`section${currentStep}`].items.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center space-x-2 bg-white px-3 py-1 rounded-full shadow-sm"
                                            >
                                                <span className="text-sm">{item}</span>
                                                <Button
                                                    className="p-1 h-5 w-5"
                                                    variant="ghost"
                                                    onClick={() => removeItem(item)}
                                                >
                                                    <CrossIcon className="w-3 h-3" />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between pt-4">
                                <Button
                                    variant="outline"
                                    onClick={handleBack}
                                    disabled={currentStep === 1}
                                >
                                    Back
                                </Button>
                                {currentStep === 5 && isAllSectionsComplete() ? (
                                    <DialogClose asChild>
                                        <Button>Finish</Button>
                                    </DialogClose>
                                ) : (
                                    <Button
                                        onClick={handleNext}
                                        disabled={!canProceed() || currentStep === 5}
                                    >
                                        Next
                                    </Button>
                                )}
                            </div>
                        </div>
                    </DialogDescription>
                </DialogContent>
            </Dialog> */}
        </section>
    );
};

export default MapConfig;