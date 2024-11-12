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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Input
} from "@/components/ui/input"
import { useEffect } from "react"

const formSchema = z.object({
  officeBuildings: z.string(),
  workShopFacilities: z.string(),
  storageFacilities: z.string(),
  powerSupply: z.string(),
  waterFacility: z.string(),
});

export default function Infrastructure({setIsSubmitted, setRegisterData, registerData}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      officeBuildings: registerData?.[0]?.get ? registerData[0].get("officeBuildings") || "" : "",
      workShopFacilities: registerData?.[0]?.get ? registerData[0].get("workShopFacilities") || "" : "",
      storageFacilities: registerData?.[0]?.get ? registerData[0].get("storageFacilities") || "" : "",
      powerSupply: registerData?.[0]?.get ? registerData[0].get("powerSupply") || "" : "",
      waterFacility: registerData?.[0]?.get ? registerData[0].get("waterFacility") || "" : "",
    }
  });

  useEffect(() => {
    if (registerData?.[0]?.get) {
      form.reset({
        officeBuildings: registerData[0].get("officeBuildings") || "",
        workShopFacilities: registerData[0].get("workShopFacilities") || "",
        storageFacilities: registerData[0].get("storageFacilities") || "",
        powerSupply: registerData[0].get("powerSupply") || "",
        waterFacility: registerData[0].get("waterFacility") || "",
      });
    }
  }, [registerData, form]);


  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();

    // Add all values to the new FormData object
    for (const [key, value] of Object.entries(values)) {
      if (value) {
        formData.append(key, value);
      }
    }

    setRegisterData((prev: FormData[]) => {
      const newFormData = new FormData();

      // If there's previous data, copy over unchanged values
      if (prev?.[0]) {
        const prevForm = prev[0];
        // Get all keys from previous FormData
        for (const key of prevForm.keys()) {
          const oldValue = prevForm.get(key);
          const newValue = formData.get(key);

          // If new value exists and is different, use new value
          // If new value doesn't exist, keep old value
          if (newValue !== null && newValue !== oldValue) {
            newFormData.append(key, newValue);
          } else if (oldValue !== null) {
            newFormData.append(key, oldValue);
          }
        }

        // Add any new keys that weren't in the previous data
        for (const key of formData.keys()) {
          if (!prevForm.has(key)) {
            const newValue = formData.get(key);
            if (newValue !== null) {
              newFormData.append(key, newValue);
            }
          }
        }
      } else {
        // If no previous data, use all values from new formData
        for (const [key, value] of formData.entries()) {
          newFormData.append(key, value);
        }
      }

      return [newFormData];
    });

    setIsSubmitted((prev) => {
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

        <FormField
          control={form.control}
          name="officeBuildings"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Office Buildings</FormLabel>
              <FormControl>
                <Input
                  placeholder="office buildings"

                  type=""
                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="workShopFacilities"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Workshop Facilities</FormLabel>
              <FormControl>
                <Input
                  placeholder="workshop facilities"

                  type=""
                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="storageFacilities"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Storage Facilities</FormLabel>
              <FormControl>
                <Input
                  placeholder=" sq meters. "

                  type=""
                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="powerSupply"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Power Supply</FormLabel>
              <FormControl>
                <Input
                  placeholder="KVA"

                  type=""
                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="waterFacility"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Water Facility</FormLabel>
              <FormControl>
                <Input
                  placeholder="KL/day"

                  type=""
                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}