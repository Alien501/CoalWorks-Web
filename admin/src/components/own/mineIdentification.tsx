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
  Input
} from "@/components/ui/input"
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
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command"
import {
  Check,
  ChevronsUpDown
} from "lucide-react"
import {
  Textarea
} from "@/components/ui/textarea"

const formSchema = z.object({
  name_3474302322: z.string(),
  name_6496088014: z.string(),
  name_3980192583: z.coerce.date(),
  name_5430123614: z.string(),
  name_6739610667: z.string(),
  name_8337881871: z.string(),
  name_5168890881: z.string(),
  name_1989288213: z.string(),
  name_0434656515: z.string(),
  name_5420134849: z.string(),
  name_6529525208: z.string(),
  name_6259928364: z.string()
});

export default function MineIdentification() {

  const [files, setFiles] = useState < File[] | null > (null);

  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };
  const languages = [{
      label: "English",
      value: "en"
    },
    {
      label: "French",
      value: "fr"
    },
    {
      label: "German",
      value: "de"
    },
    {
      label: "Spanish",
      value: "es"
    },
    {
      label: "Portuguese",
      value: "pt"
    },
    {
      label: "Russian",
      value: "ru"
    },
    {
      label: "Japanese",
      value: "ja"
    },
    {
      label: "Korean",
      value: "ko"
    },
    {
      label: "Chinese",
      value: "zh"
    },
  ] as
  const;
  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "name_3980192583": new Date()
    },
  })

  function onSubmit(values: z.infer < typeof formSchema > ) {
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
        
        <FormField
          control={form.control}
          name="name_3474302322"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mine Name</FormLabel>
              <FormControl>
                <Input 
                placeholder="Mine Name"
                
                type=""
                {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="name_6496088014"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mine Register Number</FormLabel>
              <FormControl>
                <Input 
                placeholder="Mine Register Number"
                
                type=""
                {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
      <FormField
      control={form.control}
      name="name_3980192583"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Opening Date</FormLabel>
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
          <FormMessage />
        </FormItem>
      )}
    />
        
        <FormField
          control={form.control}
          name="name_5430123614"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mine Lease Number</FormLabel>
              <FormControl>
                <Input 
                placeholder="Mine Lease Number"
                
                type=""
                {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
            <FormField
              control={form.control}
              name="name_6739610667"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mine Lease Document</FormLabel>
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
                            SVG, PNG, JPG or GIF
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
        
            <FormField
              control={form.control}
              name="name_8337881871"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mine Plan</FormLabel>
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
                            SVG, PNG, JPG or GIF
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
        
        <FormField
          control={form.control}
          name="name_5168890881"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input 
                placeholder="shadcn"
                
                type=""
                {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name_1989288213"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Mining Type</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                      
                    >
                      {field.value
                        ? languages.find(
                            (language) => language.value === field.value
                          )?.label
                        : "Select language"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search language..." />
                    <CommandList>
                      <CommandEmpty>No Mine found.</CommandEmpty>
                      <CommandGroup>
                        {languages.map((language) => (
                          <CommandItem
                            value={language.label}
                            key={language.value}
                            onSelect={() => {
                              form.setValue("name_1989288213", language.value);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                language.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {language.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-6">
            
        <FormField
          control={form.control}
          name="name_0434656515"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of pits Active</FormLabel>
              <FormControl>
                <Input 
                placeholder="shadcn"
                
                type=""
                {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          </div>
          
          <div className="col-span-6">
            
        <FormField
          control={form.control}
          name="name_5420134849"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Pits Planned</FormLabel>
              <FormControl>
                <Input 
                placeholder="shadcn"
                
                type=""
                {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          </div>
          
        </div>
        
        <FormField
          control={form.control}
          name="name_6529525208"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nearest Police Station and Contact</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Placeholder"
                  {...field}
                />
              </FormControl>
              <FormDescription>Mention the nearest police station and contact Details</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="name_6259928364"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nearest Hospital and Contact</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="address"
                  {...field}
                />
              </FormControl>
              <FormDescription>Mention the nearest police station and contact Details</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}