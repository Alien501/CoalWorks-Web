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
    PlusIcon
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect } from "react"

const formSchema = z.object({
    permanentWorkers: z.string(),
    contractWorkers: z.string(),
    technicalWorkers: z.string(),
    adminstrativeStaffs: z.string(),
    shitName: z.string().optional(),
    name_8981253814: z.any(),
    supervisorName: z.string(),
    supervisorContact: z.string(),
});

const ShiftDetails = ({ key, shiftName, onDelete, supervisorName, shiftTimings, supervisorContact }:{
    shiftName: string,
    supervisorName: string,
    shiftTimings: string,
    supervisorContact: string,
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
                <div className="w-full flex justify-end pt-5 space-x-4">
                    <Button onClick={()=> onDelete(key)}>Delete Shift</Button>
                </div>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                        <FormField
                            control={form.control}
                            name="shitName"
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
                            name="supervisorName"
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
                            name="supervisorContact"
                            render={({ field }) => (
                                <FormItem className="flex flex-col items-start">
                                    <FormLabel>Supervisor contact</FormLabel>
                                    <FormControl className="w-full">
                                        <PhoneInput
                                            placeholder="1234567890"
                                            {...field}
                                            defaultCountry="IN"
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


//@ts-ignore
export default function WrokForce({registerData, setRegisterData, setIsSubmitted}) {

    const [shiftDetails, setShiftDetails] = useState([{ id: 0, shiftName: "", supervisorName:"", supervisorContact: "", shiftTimings: "" }]);

    const deleteShift = (id:number) => {
        setShiftDetails(prevDetails => prevDetails.filter(shift => shift.id !== id));
    };


    const onShiftAddButtonClicked = (e: any) => {
        e.preventDefault()
        setShiftDetails((prev) => [...prev, {id: prev.length, shiftName: "", supervisorName:"", supervisorContact: "", shiftTimings: "" }])
    }
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            contractWorkers: registerData?.[0]?.get ? registerData[0].get("contractWorkers") || "" : "",
            permanentWorkers: registerData?.[0]?.get ? registerData[0].get("permanentWorkers") || "" : "",
            technicalWorkers: registerData?.[0]?.get ? registerData[0].get("technicalWorkers") || "" : "",
            adminstrativeStaffs: registerData?.[0]?.get ? registerData[0].get("adminstrativeStaffs") || "" : "",
            //@ts-ignore
          }
    })

    useEffect(() => {
        if (registerData?.[0]?.get) {
          form.reset({
            contractWorkers: registerData[0].get("contractWorkers") || "",
            technicalWorkers: registerData[0].get("technicalWorkers") || "",
            adminstrativeStaffs: registerData[0].get("adminstrativeStaffs") || "",
            shitName: registerData[0].get("shitName") || "",
            supervisorName: registerData[0].get("supervisorName") || "",
            supervisorContact: registerData[0].get("supervisorContact") || "",
            name_8981253814: registerData[0].get("name_8981253814") || "",
            permanentWorkers: registerData[0].get("permanentWorkers") || "",
          });
        }
      }, [registerData, form]);

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
          updated[0] = true;
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
                <div className="text-center font-medium text-2xl h-9">
                    <h1 className="font-medium">Total Workforce</h1>
                </div>
                <FormField
                    control={form.control}
                    name="permanentWorkers"
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
                    name="contractWorkers"
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
                    name="technicalWorkers"
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
                    name="adminstrativeStaffs"
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

                {/* <div>
                    <div className="text-center font-medium text-2xl h-9">
                        <h1>Shift Details</h1>
                    </div>
                    {
                        shiftDetails.map((shift) => (
                            <ShiftDetails key={shift.id} shiftName={shift.shiftName} shiftTimings={shift.shiftTimings} supervisorContact={shift.supervisorContact} supervisorName={shift.supervisorName} onDelete = {()=> deleteShift(shift.id)} /> 
                        ))
                    }
                    <div className="h-16 flex items-center justify-center space-x-4">
                        <Button onClick={onShiftAddButtonClicked}>
                            <span><PlusIcon /></span>
                            <span>Add New Shift</span>
                        </Button>
                    </div>
                </div> */}
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}