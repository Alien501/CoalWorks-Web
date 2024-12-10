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

export const renderField = (field: any, register: any) => {
  switch (field.type) {
    case 'Text':
    case 'Number':
      return (
        <Input
          type={field.type === 'Number' ? 'number' : 'text'}
          id={field.name}
          placeholder={field.placeholder}
          {...register(field.name, { required: field.required })}
        />
      );
    case 'Textarea':
      return (
        <Textarea
          id={field.name}
          placeholder={field.placeholder}
          {...register(field.name, { required: field.required })}
        />
      );
    case 'Checkbox':
      return (
        <Checkbox
          id={field.name}
          {...register(field.name, { required: field.required })}
        />
      );
    case 'Select':
      return (
        <Select {...register(field.name, { required: field.required })}>
          <SelectTrigger>
            <SelectValue placeholder={field.placeholder} />
          </SelectTrigger>
          <SelectContent>
            {field.options.map((option: string, index: number) => (
              <SelectItem key={index} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    case 'File Input':
      return (
        <Input
          type="file"
          id={field.name}
          {...register(field.name, { required: field.required })}
        />
      );
    case 'Date Picker':
      return (
        <DatePickerField
          field={field}
          register={register}
        />
      );
    default:
      return null;
  }
};

const DatePickerField = ({ field, register }: { field: any, register: any }) => {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>{field.placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(newDate) => {
            setDate(newDate);
            register(field.name).onChange(newDate);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

