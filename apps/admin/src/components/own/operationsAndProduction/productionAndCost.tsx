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
import { useEffect } from "react"
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

const formSchema = z.object({
  sanctionedCapacity: z.string(),
  currentProduction: z.string(),
  productionMethod: z.string(),
  operatingCost: z.string(),
  monthlyProduction: z.string(),
  currentMineValuation: z.string(),
  insuranceDetails: z.string()
});

//@ts-ignore
export default function ProductionAndCost({ setRegisterData, registerData, setIsSubmitted }) {

  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sanctionedCapacity: registerData?.[0]?.get ? registerData[0].get("sanctionedCapacity") || "" : "",
      currentProduction: registerData?.[0]?.get ? registerData[0].get("currentProduction") || "" : "",
      productionMethod: registerData?.[0]?.get ? registerData[0].get("productionMethod") || "" : "",
      operatingCost: registerData?.[0]?.get ? registerData[0].get("operatingCost") || "" : "",
      monthlyProduction: registerData?.[0]?.get ? registerData[0].get("monthlyProduction") || "" : "",
      currentMineValuation: registerData?.[0]?.get ? registerData[0].get("currentMineValuation") || "" : "",
      insuranceDetails: registerData?.[0]?.get ? registerData[0].get("insuranceDetails") || "" : "",
    }
  })

  useEffect(() => {
    if (registerData?.[0]?.get) {
      form.reset({
        sanctionedCapacity: registerData[0].get("sanctionedCapacity") || "",
        currentProduction: registerData[0].get("currentProduction") || "",
        productionMethod: registerData[0].get("productionMethod") || "",
        operatingCost: registerData[0].get("operatingCost") || "",
        monthlyProduction: registerData[0].get("monthlyProduction") || "",
        currentMineValuation: registerData[0].get("currentMineValuation") || "",
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

    setIsSubmitted((prev: boolean[]) => {
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
          name="sanctionedCapacity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sanctioned Capacity</FormLabel>
              <FormControl>
                <Input 
                placeholder="tonnes/year"
                
                type=""
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="currentProduction"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Production</FormLabel>
              <FormControl>
                <Input 
                placeholder="tonnes/year"
                
                type=""
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="productionMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Production Method</FormLabel>
              <FormControl>
                <Input 
                placeholder="Production Method"
                
                type=""
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="operatingCost"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Operating Cost/Tonne</FormLabel>
              <FormControl>
                <Input 
                placeholder="Rupees"
                
                type=""
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="monthlyProduction"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Monthly Production Cost</FormLabel>
              <FormControl>
                <Input 
                placeholder="Rupees"
                
                type=""
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="currentMineValuation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Mine Valuation</FormLabel>
              <FormControl>
                <Input 
                placeholder="Rupees"
                
                type=""
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="insuranceDetails"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Insurance Details</FormLabel>
              <FormControl>
                <Input 
                placeholder="Insurance Details"
                
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