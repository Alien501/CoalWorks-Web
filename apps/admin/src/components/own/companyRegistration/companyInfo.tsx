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
import {
  Textarea
} from "@/components/ui/textarea"
import { useEffect } from "react"

const formSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  ownerName: z.string().min(1, "Owner name is required"),
  registrationNumber: z.string().min(1, "Registration number is required"),
  parentCompany: z.string().optional(),
  address: z.string().min(5, "Address is required"),
  email: z.string().email(),
});

export default function CompanyInfo({ setIsSubmitted, setRegisterData, registerData }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: registerData?.[0]?.get ? registerData[0].get("companyName") || "" : "",
      ownerName: registerData?.[0]?.get ? registerData[0].get("ownerName") || "" : "",
      registrationNumber: registerData?.[0]?.get ? registerData[0].get("registrationNumber") || "" : "",
      parentCompany: registerData?.[0]?.get ? registerData[0].get("parentCompany") || "" : "",
      address: registerData?.[0]?.get ? registerData[0].get("address") || "" : "",
      email: registerData?.[0]?.get ? registerData[0].get("email") || "" : "",
    }
  });

  useEffect(() => {
    if (registerData?.[0]?.get) {
      form.reset({
        companyName: registerData[0].get("companyName") || "",
        ownerName: registerData[0].get("ownerName") || "",
        registrationNumber: registerData[0].get("registrationNumber") || "",
        parentCompany: registerData[0].get("parentCompany") || "",
        address: registerData[0].get("address") || "",
        email: registerData[0].get("email") || "",
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
  } return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">

        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Company Name"
                  {...field}
                  defaultValue={registerData?.companyName || ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="ownerName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Owner Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Owner Name"
                  type=""
                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="registrationNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Registration Number</FormLabel>
              <FormControl>
                <Input
                  placeholder="Registration Number"
                  type=""
                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="parentCompany"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parent Company (if any)</FormLabel>
              <FormControl>
                <Input
                  placeholder="Parent Company"
                  type=""
                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Address"
                  {...field}
                />
              </FormControl>
              <FormDescription>Enter the valid Mine Location</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="email"

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