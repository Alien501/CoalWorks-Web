import { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from 'lucide-react'
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export const renderField = ({
  type, 
  name, 
  label, 
  placeholder, 
  required, 
  options, 
  register, 
  error,
  watch
}: any) => {
  switch (type) {
    case 'Text':
    case 'Number':
      return (
        <Input
          type={type === 'Number' ? 'number' : 'text'}
          id={name}
          placeholder={placeholder}
          {...register(name, { 
            required: required ? `${label} is required` : false 
          })}
          className={error ? "border-red-500" : ""}
        />
      );
    case 'Textarea':
      return (
        <Textarea
          id={name}
          placeholder={placeholder}
          {...register(name, { 
            required: required ? `${label} is required` : false 
          })}
          className={error ? "border-red-500" : ""}
        />
      );
    case 'Checkbox':
      return (
        <div className="flex items-center space-x-2">
          <Checkbox
            id={name}
            {...register(name)}
          />
          <label 
            htmlFor={name} 
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        </div>
      );
    // case 'Select':
    //   return (
    //     <Select {...register(name, { 
    //       required: required ? `${label} is required` : false 
    //     })}>
    //       <SelectTrigger className={error ? "border-red-500" : ""}>
    //         <SelectValue placeholder={placeholder} />
    //       </SelectTrigger>
    //       <SelectContent>
    //         {options.map((option: any, index: number) => (
    //           <SelectItem 
    //             key={index} 
    //             value={option.value || option}
    //           >
    //             {option.label || option}
    //           </SelectItem>
    //         ))}
    //       </SelectContent>
    //     </Select>
    //   );
    case 'File Input':
      return (
        <Input
          type="file"
          id={name}
          {...register(name, { 
            required: required ? `${label} is required` : false 
          })}
          className={error ? "border-red-500" : ""}
        />
      );
    case 'Date Picker':
      return <DatePickerField 
        name={name} 
        label={label} 
        placeholder={placeholder} 
        register={register} 
        required={required}
        error={error}
      />;
    default:
      return null;
  }
};

const DatePickerField = ({ 
  name, 
  label, 
  placeholder, 
  register, 
  required,
  error 
}: any) => {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground",
            error && "border-red-500"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(newDate) => {
            setDate(newDate);
            // Manually register the date value
            register(name).onChange(newDate ? newDate.toISOString() : null);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};