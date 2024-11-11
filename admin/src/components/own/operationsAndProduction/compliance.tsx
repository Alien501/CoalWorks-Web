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
    cn
} from "@/lib/utils"
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
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import {
    format
} from "date-fns"
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover"
import {
    Calendar
} from "@/components/ui/calendar"
import {
    Calendar as CalendarIcon
} from "lucide-react"
import {
    CloudUpload,
    Paperclip
} from "lucide-react"
import {
    FileInput,
    FileUploader,
    FileUploaderContent,
    FileUploaderItem
} from "@/components/ui/file-upload"
import {
    Input
} from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const formSchema = z.object({
    name_4965393694: z.string(),
    name_9560773177: z.coerce.date().optional(),
    name_5776676903: z.string().optional(),
    name_7997757417: z.coerce.date().optional(),
    name_3228003635: z.string().optional(),
    name_1942746534: z.coerce.date().optional(),
    name_7649809179: z.string().optional(),
    name_6462759425: z.coerce.date().optional(),
    name_6789066937: z.string().optional(),
    name_0188176464: z.coerce.date().optional(),
    name_9969220193: z.string().optional(),
    name_0219336195: z.coerce.date().optional(),
    name_8821144206: z.string().optional(),
    name_5350613664: z.coerce.date().optional(),
    name_4988461384: z.string().optional(),
    name_8008430409: z.string(),
    name_0594706575: z.coerce.date().optional(),
    name_5851666427: z.string().optional(),
    name_0092236402: z.coerce.date().optional(),
    name_3765920777: z.string().optional(),
    name_4525070318: z.coerce.date().optional(),
    name_5058772194: z.string().optional(),
    name_1165787524: z.coerce.date().optional(),
    name_0680671345: z.string().optional(),
    name_6745226133: z.coerce.date().optional(),
    name_9718709428: z.string().optional(),
    name_4041542393: z.string(),
    name_4780652395: z.coerce.date().optional(),
    name_8120790047: z.string().optional(),
    name_5956261526: z.coerce.date().optional(),
    name_6380273652: z.string().optional(),
    name_9215696027: z.coerce.date().optional(),
    name_3411986262: z.string().optional(),
    name_8349449222: z.string(),
    name_8067879161: z.coerce.date().optional(),
    name_6140110866: z.string().optional(),
    name_1395526814: z.coerce.date().optional(),
    name_4502728621: z.string().optional(),
    name_8495489853: z.coerce.date().optional(),
    name_9804597082: z.string().optional()
});

export default function Compliance() {

    const [files, setFiles] = useState<File[] | null>(null);

    const dropZoneConfig = {
        maxFiles: 5,
        maxSize: 1024 * 1024 * 4,
        multiple: true,
    };
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            "name_9560773177": new Date(),
            "name_7997757417": new Date(),
            "name_1942746534": new Date(),
            "name_6462759425": new Date(),
            "name_0188176464": new Date(),
            "name_0219336195": new Date(),
            "name_5350613664": new Date(),
            "name_0594706575": new Date(),
            "name_0092236402": new Date(),
            "name_4525070318": new Date(),
            "name_1165787524": new Date(),
            "name_6745226133": new Date(),
            "name_4780652395": new Date(),
            "name_5956261526": new Date(),
            "name_9215696027": new Date(),
            "name_8067879161": new Date(),
            "name_1395526814": new Date(),
            "name_8495489853": new Date()
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full mx-auto py-10">

                <FormField
                    control={form.control}
                    name="name_4965393694"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tenure</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Tenure" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="monthly">Monthly</SelectItem>
                                    <SelectItem value="quaterly">Quaterly</SelectItem>
                                    <SelectItem value="biannual">Bi-Annually</SelectItem>
                                    <SelectItem value="annual">Annually</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormDescription>Select Tenure of the document</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <h1 className="text-xl font-medium text-center">Environmental Compliance Reports</h1>
                <Card>
                    <CardHeader></CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-6">

                                <FormField
                                    control={form.control}
                                    name="name_9560773177"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[240px] pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormDescription>Date of Submission</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="col-span-6">

                                <FormField
                                    control={form.control}
                                    name="name_5776676903"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Air Quality Report</FormLabel>
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
                                            <FormDescription>Select a file to upload.</FormDescription>
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
                                    name="name_7997757417"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[240px] pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormDescription>Date of Submission</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="col-span-6">

                                <FormField
                                    control={form.control}
                                    name="name_3228003635"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Water Quality Report</FormLabel>
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
                                            <FormDescription>Select a file to upload.</FormDescription>
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
                                    name="name_1942746534"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[240px] pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormDescription>Date of Submission</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="col-span-6">

                                <FormField
                                    control={form.control}
                                    name="name_7649809179"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Waste Management Report</FormLabel>
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
                                            <FormDescription>Select a file to upload.</FormDescription>
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
                                    name="name_6462759425"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[240px] pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormDescription>Date of Submission</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="col-span-6">

                                <FormField
                                    control={form.control}
                                    name="name_6789066937"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Reclamation and Rehabilitation Plan</FormLabel>
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
                                            <FormDescription>Select a file to upload.</FormDescription>
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
                                    name="name_0188176464"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[240px] pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormDescription>Date of Submission</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="col-span-6">

                                <FormField
                                    control={form.control}
                                    name="name_9969220193"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Noise and Vibration Report</FormLabel>
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
                                            <FormDescription>Select a file to upload.</FormDescription>
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
                                    name="name_0219336195"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[240px] pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormDescription>Date of Submission</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="col-span-6">

                                <FormField
                                    control={form.control}
                                    name="name_8821144206"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Biodiversity Report</FormLabel>
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
                                            <FormDescription>Select a file to upload.</FormDescription>
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
                                    name="name_5350613664"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[240px] pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormDescription>Date of Submission</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="col-span-6">

                                <FormField
                                    control={form.control}
                                    name="name_4988461384"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Energy Consumption and Efficiency Report</FormLabel>
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
                                            <FormDescription>Select a file to upload.</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                        </div>
                    </CardContent>
                    <CardFooter></CardFooter>
                </Card>

                <h1 className="text-xl font-medium text-center">Operational Compliance Reports</h1>
                <Card>
                    <CardHeader></CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-12 gap-4">

                            <div className="col-span-6">

                                <FormField
                                    control={form.control}
                                    name="name_0594706575"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[240px] pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormDescription>Date of Submission</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="col-span-6">

                                <FormField
                                    control={form.control}
                                    name="name_5851666427"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Coal Grade Analysis Report</FormLabel>
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
                                            <FormDescription>Select a file to upload.</FormDescription>
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
                                    name="name_0092236402"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[240px] pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormDescription>Date of Submission</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="col-span-6">

                                <FormField
                                    control={form.control}
                                    name="name_3765920777"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Dispatch Documentation</FormLabel>
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
                                            <FormDescription>Select a file to upload.</FormDescription>
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
                                    name="name_4525070318"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[240px] pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormDescription>Date of Submission</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="col-span-6">

                                <FormField
                                    control={form.control}
                                    name="name_5058772194"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Weighbridge Records</FormLabel>
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
                                            <FormDescription>Select a file to upload.</FormDescription>
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
                                    name="name_1165787524"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[240px] pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormDescription>Date of Submission</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="col-span-6">

                                <FormField
                                    control={form.control}
                                    name="name_0680671345"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Stockpile Management Report</FormLabel>
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
                                            <FormDescription>Select a file to upload.</FormDescription>
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
                                    name="name_6745226133"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[240px] pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormDescription>Date of Submission</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="col-span-6">

                                <FormField
                                    control={form.control}
                                    name="name_9718709428"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Production Report</FormLabel>
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
                                            <FormDescription>Select a file to upload.</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                        </div>
                    </CardContent>
                    <CardFooter></CardFooter>
                </Card>

                <h1 className="text-xl font-medium text-center">Safety and Health Compliance Reports</h1>
                <Card>
                    <CardHeader></CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-12 gap-4">

                            <div className="col-span-6">

                                <FormField
                                    control={form.control}
                                    name="name_4780652395"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[240px] pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormDescription>Date of Submission</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="col-span-6">

                                <FormField
                                    control={form.control}
                                    name="name_8120790047"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Mine Safety Audit</FormLabel>
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
                                            <FormDescription>Select a file to upload.</FormDescription>
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
                                    name="name_5956261526"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[240px] pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormDescription>Date of Submission</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="col-span-6">

                                <FormField
                                    control={form.control}
                                    name="name_6380273652"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Worker Health Surveillance Report</FormLabel>
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
                                            <FormDescription>Select a file to upload.</FormDescription>
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
                                    name="name_9215696027"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[240px] pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormDescription>Date of Submission</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="col-span-6">

                                <FormField
                                    control={form.control}
                                    name="name_3411986262"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Accident and Incident Report</FormLabel>
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
                                            <FormDescription>Select a file to upload.</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                        </div>
                    </CardContent>
                    <CardFooter></CardFooter>
                </Card>

                <h1 className="text-xl font-medium text-center">Environmental Compliance Reports</h1>
                <Card>
                    <CardHeader></CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-12 gap-4">

                            <div className="col-span-6">

                                <FormField
                                    control={form.control}
                                    name="name_8067879161"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[240px] pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormDescription>Date of Submission</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="col-span-6">

                                <FormField
                                    control={form.control}
                                    name="name_6140110866"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Date of Submission</FormLabel>
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
                                            <FormDescription>Select a file to upload.</FormDescription>
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
                                    name="name_1395526814"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[240px] pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormDescription>Date of Submission</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="col-span-6">

                                <FormField
                                    control={form.control}
                                    name="name_4502728621"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Compliance Certificate</FormLabel>
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
                                            <FormDescription>Select a file to upload.</FormDescription>
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
                                    name="name_8495489853"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[240px] pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormDescription>Date of Submission</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="col-span-6">

                                <FormField
                                    control={form.control}
                                    name="name_9804597082"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Audit Report</FormLabel>
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
                                            <FormDescription>Select a file to upload.</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                        </div>
                    </CardContent>
                    <CardFooter></CardFooter>
                {/* <div className="flex items-center justify-end">
                    <Button type="submit">Submit</Button>
                </div> */}
                </Card>
            </form>
        </Form>
    )
}