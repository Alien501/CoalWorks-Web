import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { PlusIcon, X as CrossIcon, PencilIcon, SaveIcon } from "lucide-react";
import Map from './map';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Item } from '@radix-ui/react-select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';

const MapConfig = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [showDialog, setShowDialog] = useState(true);
    const [areaData, setAreaData] = useState([])
    const [formData, setFormData] = useState({
        section1: { name: '', items: [] },
        section2: { name: '', items: [] },
        section3: { name: '', items: [] },
        section4: { name: '', items: [] },
        section5: { name: '', items: [] }
    });
    const [newItem, setNewItem] = useState('');
    const [saveAreaClicked, setSaveAreaClicked]= useState(false)
    const [currentSection, setCurrentSection] = useState(null);
    const [canEditMap, setCanEditMap] = useState(false);
    const [areaName, setAreaName] = useState('');
    const [areaItems, setAreaItems] = useState([]);
    const [areaDescription, setAreaDescription] = useState('');
    const [areaSize, setAreaSize] = useState(0);
    const [overAllData, setOverAllData] = useState([])
    const areaNameRef = useRef<HTMLInputElement>(null);
    const areaDescriptionRef = useRef<HTMLInputElement>(null);
    const areaSizeRef = useRef<HTMLInputElement>(null);

    useEffect(()=> {
        console.log(overAllData)
    }, [overAllData])

    const onSectionChange = (e) => {
        setCurrentSection(e)
    }

    const onAreaNameChanged = (e) => {
        const value = e.target.value;
        setAreaName(prev => value.trim())
    }

    const onAreaDescriptionChanged = (e) => {
        const value = e.target.value;
        setAreaDescription(prev => value.trim())
    }

    const onAreaSizeChanged = (e) => {
        const value = e.target.value;
        if (!isNaN(value)) {
            setAreaSize(prev => parseFloat(value));
        }
    }

    const onAreaItemsSelected = (e: string) => {
        if (e.trim() == '') {
            return;
        }
        setAreaItems(prev => {
            return [
                ...prev,
                e
            ]
        })
    }

    const onAddAreaClicked = () => {
        if (areaName.trim() == '' || areaDescription.trim() == '') {
            return
        }
        console.log(areaName);
        console.log(areaDescription);
        console.log(areaSize);
        console.log(areaItems)
        setCanEditMap(prev => !prev);
    }

    const onSaveAreaClicked = () => {
        setOverAllData((prev)=> [...prev, {areaName: areaName, areaDescription: areaDescription, areaSize: areaSize, areaItems:areaItems, coordinates: null}])
        setSaveAreaClicked(!saveAreaClicked)
        setAreaName("")
        setAreaDescription("")
        setAreaDescription("")
        if (areaNameRef?.current) {
            areaNameRef.current.value = "";
          }
          
          if (areaDescriptionRef?.current) {
            areaDescriptionRef.current.value = "";
          }
          
          if (areaSizeRef?.current) {
            areaSizeRef.current.value = "";
          }
          
        setAreaItems([])
    }

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
        setShowDialog(open);
    };

    const onFinishClick = () => {
        localStorage.setItem('mapConfig', JSON.stringify(formData));
        setShowDialog(false);
    };

    useEffect(() => {
        const mapConfig = localStorage.getItem('mapConfig');
        if (mapConfig) {
            setFormData(prev => ({
                ...JSON.parse(mapConfig)
            }));
            const parsedConfig = JSON.parse(mapConfig);
            const isComplete = Object.values(parsedConfig).every(
                section => section.name.trim() !== '' && section.items.length > 0
            );
            setShowDialog(!isComplete);
        }
    }, []);

    // TODO: Save all map details as a list with coordinates
    // 1. Create a state to hold that data
    // 2. Drill that state inside map component
    // 3. Retain previous drawing if possible
    // 4. Drill current formdata inside map and make it available inside drawn area
    return (
        <section id="map-config">
            <div className='grid grid-cols-[79%_19%] h-[90vh] gap-2'>
                <div className='w-full h-full'>
                    <Card className='p-2'>
                        <CardContent className='p-0 rounded-sm overflow-hidden'>
                            <Map
                                areaName={areaName}
                                isEditable={canEditMap}
                                overAllData = {overAllData}
                                setOverAllData = {setOverAllData}
                            />
                        </CardContent>
                    </Card>
                </div>
                <Card>
                    <CardContent className='p-1'>
                        <div className='w-full h-full p-1 space-y-2'>
                            <div>
                                <Select onValueChange={onSectionChange}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Area Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Object.entries(formData).map(([key, value]) => (
                                            <SelectItem key={key} value={key}>
                                                {value.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            {
                                currentSection &&
                                <Card className="p-1 h-[200px] w-full shadow-none flex flex-col">
                                    <CardContent className="pb-2">
                                        <p className="text-sm text-gray-600">Items that might be present in this area</p>
                                    </CardContent>
                                    <CardContent className="p-0 flex-1 min-h-0"> {/* min-h-0 is crucial for nested flex content */}
                                        <ScrollArea className="h-[120px]"> {/* Explicit height for scroll area */}
                                            {currentSection && formData[currentSection]?.items.length > 0 ? (
                                                <div className="pr-4"> {/* Add padding for scrollbar */}
                                                    {formData[currentSection].items.map((item, index) => (
                                                        <div key={`${item}-${index}`} className="p-2 flex w-full items-center space-x-2 hover:bg-gray-50">
                                                            <Checkbox onCheckedChange={() => onAreaItemsSelected(item)} id={`${item}-${index}`} />
                                                            <Label
                                                                htmlFor={`${item}-${index}`}
                                                                className="text-sm cursor-pointer"
                                                            >
                                                                {item}
                                                            </Label>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="h-full flex items-center justify-center text-gray-500 text-sm">
                                                    {currentSection ? 'No items available' : 'Select Area'}
                                                </div>
                                            )}
                                        </ScrollArea>
                                    </CardContent>
                                </Card>
                            }

                            <div className='space-y-2'>
                                <Input
                                    placeholder='Name'
                                    type='text'
                                    onChange={onAreaNameChanged}
                                    ref = {areaNameRef}
                                />
                                <Textarea
                                    placeholder='Descritpion about that palce'
                                    onChange={onAreaDescriptionChanged}
                                    ref = {areaDescriptionRef}
                                />
                                <div className='flex items-center space-x-2'>
                                    <Input
                                        placeholder='Approx. Area'
                                        type='number'
                                        onChange={onAreaSizeChanged}
                                        ref = {areaSizeRef}
                                    />
                                    <span>
                                        km
                                    </span>
                                </div>
                            </div>

                            <div className='flex items-center justify-evenly'>
                                {canEditMap ?
                                    <Button disabled>
                                        <span><PlusIcon /></span>
                                        <span>Add Area</span>
                                    </Button>
                                    :
                                    <Button onClick={onAddAreaClicked}>
                                        <span><PencilIcon /></span>
                                        <span>Draw Area</span>
                                    </Button>
                                }
                                {!canEditMap ?
                                    <Button disabled>
                                        <span><SaveIcon /></span>
                                        <span>Save Area</span>
                                    </Button>
                                    :
                                    <Button onClick={onSaveAreaClicked}>
                                        <span><SaveIcon /></span>
                                        <span>Save Area</span>
                                    </Button>
                                }
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <Dialog open={showDialog} onOpenChange={handleOpenChange}>
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
                                    className={`rounded-full w-10 h-10 ${step === currentStep
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
                                    <Button onClick={onFinishClick}>Finish</Button>
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
            </Dialog>
        </section>
    );
};

export default MapConfig;