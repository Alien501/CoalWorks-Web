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
import { useEffect } from "react"

const formSchema = z.object({
  mineName: z.string(),
  mineRegisterNumber: z.string(),
  username: z.string(),
  noOfPits: z.string(),
  noOfPitsPlanned: z.string(),
  nearestPoliceStation: z.string(),
  nearestHospital: z.string(),
  openDate: z.any(),
  mineType: z.string(),
  mineLeaseNumber: z.string()
});

//@ts-ignore
export default function MineIdentification({ setIsSubmitted, setRegisterData, registerData }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mineName: registerData?.[0]?.get ? registerData[0].get("mineName") || "" : "",
      mineRegisterNumber: registerData?.[0]?.get ? registerData[0].get("mineRegisterNumber") || "" : "",
      username: registerData?.[0]?.get ? registerData[0].get("username") || "" : "",
      nearestPoliceStation: registerData?.[0]?.get ? registerData[0].get("nearestPoliceStation") || "" : "",
      nearestHospital: registerData?.[0]?.get ? registerData[0].get("nearestHospital") || "" : "",
      noOfPits: registerData?.[0]?.get ? registerData[0].get("noOfPits") || "" : "",
      noOfPitsPlanned: registerData?.[0]?.get ? registerData[0].get("noOfPitsPlanned") || "" : "",
      openDate: registerData?.[0]?.get ? registerData[0].get("openDate") || "" : "",
      mineType: registerData?.[0]?.get ? registerData[0].get("mineType") || "" : "",
      mineLeaseNumber: registerData?.[0]?.get ? registerData[0].get("mineLeaseNumber") || "" : ""
    },
  });

  useEffect(() => {
    if (registerData?.[0]?.get) {
      form.reset({
        mineName: registerData[0].get("mineName") || "",
        mineRegisterNumber: registerData[0].get("mineRegisterNumber") || "",
        username: registerData[0].get("username") || "",
        nearestPoliceStation: registerData[0].get("nearestPoliceStation") || "",
        nearestHospital: registerData[0].get("nearestHospital") || "",
        noOfPits: registerData[0].get("noOfPits") || "",
        noOfPitsPlanned: registerData[0].get("noOfPitsPlanned") || "",
        openDate: registerData[0].get("openDate") || "",
        mineType: registerData[0].get("mineType") || "",
        mineLeaseNumber: registerData[0].get("mineLeaseNumber") || ""
      });
    }
  }, [registerData, form]);

  const mines = [
    {
      label: "OpenCast",
      value: "opencast"
    },
    {
      label: "Underground",
      value: "underground"
    },
  ] as const;

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();

    for (const [key, value] of Object.entries(values)) {
      if (value) {
        formData.append(key, value);
      }
    }

    setRegisterData((prev: FormData[]) => {
      const newFormData = new FormData();

      if (prev?.[0]) {
        const prevForm = prev[0];
        for (const key of prevForm.keys()) {
          const oldValue = prevForm.get(key);
          const newValue = formData.get(key);

          if (newValue !== null && newValue !== oldValue) {
            newFormData.append(key, newValue);
          } else if (oldValue !== null) {
            newFormData.append(key, oldValue);
          }
        }

        for (const key of formData.keys()) {
          if (!prevForm.has(key)) {
            const newValue = formData.get(key);
            if (newValue !== null) {
              newFormData.append(key, newValue);
            }
          }
        }
      } else {
        for (const [key, value] of formData.entries()) {
          newFormData.append(key, value);
        }
      }

      return [newFormData];
    });

    setIsSubmitted((prev: any) => {
      const updated = [...prev];
      updated[1] = true;
      return updated;
    });

    try {
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
          name="mineName"
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
          name="mineRegisterNumber"
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
          name="openDate"
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
                    //@ts-ignore
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
          name="mineLeaseNumber"
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
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="username"

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
          name="mineType"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Mine Type</FormLabel>
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
                      {field.value ? mines.find((mine) => mine.value === mine.value)?.label : "Select Mine Type"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search Mine Type" />
                    <CommandList>
                      <CommandEmpty>No Mine Found.</CommandEmpty>
                      <CommandGroup>
                        {mines.map((mine) => (
                          <CommandItem
                            value={mine.label}
                            key={mine.value}
                            onSelect={() => {
                              form.setValue("mineType", mine.value);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                mine.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {mine.label}
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
              name="noOfPits"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of pits Active</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="pits active"

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
              name="noOfPitsPlanned"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Pits Planned</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="pits planned"

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
          name="nearestPoliceStation"
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
          name="nearestHospital"
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