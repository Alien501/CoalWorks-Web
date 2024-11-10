import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusIcon, Trash2 } from "lucide-react";
import { useState } from "react";
import DynamicInputField from "./InputType";


const QuestionField = () => {
    const [inputType, setInputType] = useState(null);

    const onInputTypeSelected = (e) => {
        setInputType(prev => e);
    }

    return (
        <Card className="w-[80%] mx-auto p-2 mt-2 mb-2">
            <CardDescription>
                <CardHeader>
                    <Label>
                        Question 1
                    </Label>
                </CardHeader>
                <CardContent>
                    <Input
                        placeholder="Question"
                        className="border-b-2 bg-slate-300/30 border-b-black/50 focus:border-b-black/80 border-l-0 border-t-0 focus-visible:ring-0 border-r-0 h-14 focus:outline-none focus:outline-transparent active::outline-none active:outline-transparent rounded-none"
                    />
                </CardContent>
                <CardFooter className="gap-1 flex flex-col w-full">
                    <div className="w-full flex flex-row gap-2 items-center justify-evenly">
                        <Input
                            placeholder="Note"
                            className="border-b-2 bg-slate-300/20 border-b-black/50 focus:border-b-black/80 border-l-0 border-t-0 focus-visible:ring-0 border-r-0 h-10 focus:outline-none focus:outline-transparent active::outline-none active:outline-transparent rounded-none"
                        />
                        <div className="w-[80%] mx-auto flex flex-row justify-between items-center">
                            <Select onValueChange={onInputTypeSelected}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Input Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="text">Text</SelectItem>
                                    <SelectItem value="number">Number</SelectItem>
                                    <SelectItem value="radio">Radio</SelectItem>
                                    <SelectItem value="check">Checkbox</SelectItem>
                                    <SelectItem value="dropdown">Dropdown</SelectItem>
                                    <SelectItem value="file">File</SelectItem>
                                    <SelectItem value="slider">Slider</SelectItem>
                                    <SelectItem value="textarea">Textarea</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    {inputType && (
                        <div className="w-full mt-4">
                            <DynamicInputField type={inputType} />
                        </div>
                    )}
                </CardFooter>
            </CardDescription>
        </Card>
    )
}

const FormBuilder = () => {
    const [formFields, setFormFields] = useState([

    ])

    const onAddButtonClicked = () => {
        setFormFields(prev => {
            return [...prev, <QuestionField />]
        })
    }
    return (
        <div id="form-builder">
            <div className="flex justify-center items-center h-11">
                <h1 className="text-center font-bold">Form builder</h1>
            </div>
            <Card className="w-[80%] mx-auto p-2 mt-2 mb-2">
                <CardDescription>
                    <CardHeader>
                        <Label>
                            Form Name
                        </Label>
                    </CardHeader>
                    <CardContent>
                        <Input
                            placeholder="Form Title"
                            className="border-b-2 bg-slate-300/30 border-b-black/50 focus:border-b-black/80 border-l-0 border-t-0 focus-visible:ring-0 border-r-0 h-14 focus:outline-none focus:outline-transparent active::outline-none active:outline-transparent rounded-none"
                        />
                    </CardContent>
                    <CardFooter>
                        <Input
                            placeholder="Form Description"
                            className="border-b-2 bg-slate-300/20 border-b-black/50 focus:border-b-black/80 border-l-0 border-t-0 focus-visible:ring-0 border-r-0 h-10 focus:outline-none focus:outline-transparent active::outline-none active:outline-transparent rounded-none"
                        />
                    </CardFooter>
                </CardDescription>
            </Card>
            {
                formFields
            }
            <div className="button-container h-[80px] flex items-center justify-center">
                <Button onClick={onAddButtonClicked}>
                    <span>
                        <PlusIcon />
                    </span>
                    <span>
                        Add Field
                    </span>
                </Button>
            </div>
        </div>
    );
}

export default FormBuilder;