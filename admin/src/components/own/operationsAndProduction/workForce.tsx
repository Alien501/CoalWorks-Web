"use client"
import {
    useState
} from "react"
import {
    toast
} from "sonner"
import {
    useForm
} from "react-hook-form"
import {
    zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
import {
    Button
} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Input
} from "@/components/ui/input"
import { SmartDatetimeInput } from "@/components/ui/smart-datetime-input"
import {
    PhoneInput
} from "@/components/ui/phone-input";
import {
    CloudUpload,
    Paperclip,
    PlusIcon
} from "lucide-react"
import {
    FileInput,
    FileUploader,
    FileUploaderContent,
    FileUploaderItem
} from "@/components/ui/file-upload"
import { Card, CardContent } from "@/components/ui/card"

const formSchema = z.object({
    name_2770148879: z.number(),
    name_8854337757: z.string(),
    name_9972309272: z.string(),
    name_8587753748: z.string(),
    name_2750486301: z.string(),
    name_8981253814: z.coerce.date(),
    name_1866446556: z.string(),
    name_2330885548: z.string(),
    name_9103344774: z.string(),
    name_7359237946: z.string()
});

const ShiftDetails = ({ key, onDelete }:{
    key:number,
    onDelete: any
}) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            "name_8981253814": new Date()
        },
    })

    return (
        <Card className="m-2" key={key}>
            <CardContent>
                <div className="w-full flex justify-end pt-5">
                    <Button onClick={()=> onDelete(key)}>Delete Shift</Button>
                </div>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                        <FormField
                            control={form.control}
                            name="name_2750486301"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Shift Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Shift One"

                                            type="text"
                                            {...field} />
                                    </FormControl>
                                    <FormDescription>Name of the Shift</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="col-span-6">

                        <FormField
                            control={form.control}
                            name="name_8981253814"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Shift Timings</FormLabel>
                                    <FormControl>
                                        <SmartDatetimeInput
                                            value={field.value}
                                            onValueChange={field.onChange}
                                            placeholder="e.g. Tomorrow morning 9am"


                                        />
                                    </FormControl>
                                    <FormDescription>Select shift timing details</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                </div>

                <div className="grid grid-cols-12 gap-4">

                    <div className="col-span-6">

                        <FormField
                            control={form.control}
                            name="name_1866446556"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Supervisor Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Sandeep Singh"

                                            type="text"
                                            {...field} />
                                    </FormControl>
                                    <FormDescription>Name of the Supervisor</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="col-span-6">

                        <FormField
                            control={form.control}
                            name="name_2330885548"
                            render={({ field }) => (
                                <FormItem className="flex flex-col items-start">
                                    <FormLabel>Supervisor contact</FormLabel>
                                    <FormControl className="w-full">
                                        <PhoneInput
                                            placeholder="1234567890"
                                            {...field}
                                            defaultCountry="TR"
                                        />
                                    </FormControl>
                                    <FormDescription>Enter Supervisor phone number</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default function WrokForce() {

    const [files, setFiles] = useState<File[] | null>(null);
    const [shiftDetails, setShiftDetails] = useState([{ id: 0 }]);

    const deleteShift = (id:number) => {
        setShiftDetails(prevDetails => prevDetails.filter(shift => shift.id !== id));
    };


    const onShiftAddButtonClicked = (e: any) => {
        e.preventDefault()
        setShiftDetails((prev) => [...prev, {id: prev.length}])
    }

    const dropZoneConfig = {
        maxFiles: 5,
        maxSize: 1024 * 1024 * 4,
        multiple: true,
    };
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            "name_8981253814": new Date()
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(values);
            toast(
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                </pre>
            );
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
                <div className="text-center font-medium text-2xl h-9">
                    <h1 className="font-medium">Total Workforce</h1>
                </div>
                <FormField
                    control={form.control}
                    name="name_2770148879"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Permanent Workers</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Permanent Workers"

                                    type="number"
                                    {...field} />
                            </FormControl>
                            <FormDescription>No. of Permanent Workers</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name_8854337757"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Contract Workers</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Contract Workers"

                                    type=""
                                    {...field} />
                            </FormControl>
                            <FormDescription>No. of contract workers</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
            />

                <FormField
                    control={form.control}
                    name="name_9972309272"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Technical Workers</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Technical Workers"

                                    type=""
                                    {...field} />
                            </FormControl>
                            <FormDescription>No. of Technical Workers</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name_8587753748"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Administrative Staffs</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Administrative Staffs"

                                    type=""
                                    {...field} />
                            </FormControl>
                            <FormDescription>No. of Administrative Staffs</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div>
                    <div className="text-center font-medium text-2xl h-9">
                        <h1>Shift Details</h1>
                    </div>
                    {
                        shiftDetails.map((shift) => (
                            <ShiftDetails key={shift.id} onDelete = {()=> deleteShift(shift.id)} /> 
                        ))
                    }
                    <div className="h-16 flex items-center justify-center">
                        <Button onClick={onShiftAddButtonClicked}>
                            <span><PlusIcon /></span>
                            <span>Add New Shift</span>
                        </Button>
                    </div>
                </div>

                <FormField
                    control={form.control}
                    name="name_9103344774"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Workforce Structure</FormLabel>
                            <FormControl>
                                <FileUploader
                                    value={files}
                                    onValueChange={setFiles}
                                    dropzoneOptions={dropZoneConfig}
                                    className="relative bg-background rounded-lg p-2"
                                >
                                    <FileInput
                                        id="fileInput"
                                        className="outline-dashed outline-1 outline-slate-500"
                                    >
                                        <div className="flex items-center justify-center flex-col p-8 w-full ">
                                            <CloudUpload className='text-gray-500 w-10 h-10' />
                                            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">Click to upload</span>
                                                &nbsp; or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                PDF or .docx
                                            </p>
                                        </div>
                                    </FileInput>
                                    <FileUploaderContent>
                                        {files &&
                                            files.length > 0 &&
                                            files.map((file, i) => (
                                                <FileUploaderItem key={i} index={i}>
                                                    <Paperclip className="h-4 w-4 stroke-current" />
                                                    <span>{file.name}</span>
                                                </FileUploaderItem>
                                            ))}
                                    </FileUploaderContent>
                                </FileUploader>
                            </FormControl>
                            <FormDescription>Enter workforce structure file</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name_7359237946"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Shift Roster</FormLabel>
                            <FormControl>
                                <FileUploader
                                    value={files}
                                    onValueChange={setFiles}
                                    dropzoneOptions={dropZoneConfig}
                                    className="relative bg-background rounded-lg p-2"
                                >
                                    <FileInput
                                        id="fileInput"
                                        className="outline-dashed outline-1 outline-slate-500"
                                    >
                                        <div className="flex items-center justify-center flex-col p-8 w-full ">
                                            <CloudUpload className='text-gray-500 w-10 h-10' />
                                            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">Click to upload</span>
                                                &nbsp; or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                PDF or .docx
                                            </p>
                                        </div>
                                    </FileInput>
                                    <FileUploaderContent>
                                        {files &&
                                            files.length > 0 &&
                                            files.map((file, i) => (
                                                <FileUploaderItem key={i} index={i}>
                                                    <Paperclip className="h-4 w-4 stroke-current" />
                                                    <span>{file.name}</span>
                                                </FileUploaderItem>
                                            ))}
                                    </FileUploaderContent>
                                </FileUploader>
                            </FormControl>
                            <FormDescription>upload Shift Roster File`</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}