import React, { useState } from 'react';
import QRCode from 'qrcode';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CalendarIcon, QrCode } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

// Type definitions for form structure
type FormField = {
  label: string;
  name: string;
  type: string;
  description: string;
  placeholder: string;
  required: boolean;
  value: string;
  checked: boolean;
  options?: { label: string; value: string }[];
};

type FormSection = {
  section_name: string;
  section_description?: string;
  fields: FormField[];
};

type FormStructure = {
  form_name: string;
  form_description: string;
  sections: FormSection[];
};

export default function DynamicFormGenerator({ formData }) {
  console.log("See here now")
  console.log(formData);
  // State to manage form values
  const [formValues, setFormValues] = useState<{ [key: string]: any }>({});
  // const [qrCodeImage, setQrCodeImage] = useState<string | null>(null);

  // Generic change handler for inputs
  const handleChange = (name: string, value: any) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Render appropriate input based on field type
  const renderField = (field: FormField) => {
    switch (field.type) {
      case 'Text':
        return (
          <Input
            placeholder={field.placeholder}
            value={formValues[field.name] || ''}
            onChange={(e) => handleChange(field.name, e.target.value)}
            required={field.required}
          />
        );

      case 'Textarea':
        return (
          <Textarea
            placeholder={field.placeholder}
            value={formValues[field.name] || ''}
            onChange={(e) => handleChange(field.name, e.target.value)}
            required={field.required}
          />
        );

      case 'Number':
        return (
          <Input
            type="number"
            placeholder={field.placeholder}
            value={formValues[field.name] || ''}
            onChange={(e) => handleChange(field.name, e.target.value)}
            required={field.required}
          />
        );

      case 'Select':
        return (
          <Select
            onValueChange={(value) => handleChange(field.name, value)}
            value={formValues[field.name] || undefined}
          >
            <SelectTrigger>
              <SelectValue placeholder={field.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case 'Date Picker':
        return (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !formValues[field.name] && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {formValues[field.name]
                  ? format(formValues[field.name], "PPP")
                  : <span>{field.placeholder}</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={formValues[field.name]}
                onSelect={(date) => handleChange(field.name, date)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        );

      default:
        return <Input placeholder={field.placeholder} />;
    }
  };

  // Generate QR Code
  // const generateQRCode = async () => {
  //   const shareableLink = `http://localhost:5173/form/${qrCodeUrl}`;
  //   try {
  //     const qrCode = await QRCode.toDataURL(shareableLink);
  //     setQrCodeImage(qrCode);
  //   } catch (err) {
  //     console.error("Failed to generate QR code:", err);
  //   }
  // };

  // Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted', formValues);
  };
  return (
    <div className="max-w-4xl mx-auto p-6 shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">{formData.form_name}</h1>
          <p className="text-muted-foreground">{formData.form_description}</p>
        </div>
        {/* <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" onClick={generateQRCode}>
              <QrCode className="mr-2 h-4 w-4" /> Generate Share Link
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Shareable Form Link</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center space-y-4">
              {qrCodeImage && (
                <>
                  <img src={qrCodeImage} alt="QR Code" className="w-64 h-64" />
                  <div className="flex items-center space-x-2">
                    <Input
                      value={`http://localhost:5173/form/${qrCodeUrl}`}
                      readOnly
                      className="w-full"
                    />
                    <Button
                      variant="outline"
                      onClick={() => navigator.clipboard.writeText(qrCodeImage)}
                    >
                      Copy
                    </Button>
                  </div>
                </>
              )}
            </div>
          </DialogContent>
        </Dialog> */}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {formData?.sections?.map((section, sectionIndex) => (
          <div key={sectionIndex} className="border-b pb-6">
            <h2 className="text-xl font-semibold mb-4">{section.section_name}</h2>
            {section.section_description && (
              <p className="text-muted-foreground mb-4">{section.section_description}</p>
            )}
            <div className="grid md:grid-cols-2 gap-4">
              {section.fields.map((field) => (
                <div key={field.name} className="space-y-2">
                  <label className="block text-sm font-medium">
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  {renderField(field)}
                  {field.description && (
                    <p className="text-xs text-muted-foreground">{field.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <Button type="submit" className="w-full">Submit Form</Button>
      </form>
    </div>
  );
}