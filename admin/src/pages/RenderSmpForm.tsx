import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { renderField } from '@/components/custom/formFields';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import axios from 'axios';

interface FormData {
  sections: {
    section_name: string;
    section_description: string;
    fields: {
      name: string;
      type: string;
      label: string;
      value: string;
      checked: boolean;
      required: boolean;
      description: string;
      placeholder: string;
      options?: string[];
    }[];
  }[];
  form_name: string;
  form_description: string;
}

export const RenderSmpForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const params = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState();

  useEffect(() => {
    if(!params.id || isNaN(params.id)) {
      toast.error("Somthing went wrong!");
      navigate(-1);
    }

    const fetchAndSetForm = async () => {
      try {
        const res = await axios.get(`/api/data/smp/ra/form/${params.id}`)
        // console.log(res.data);
        setFormData(res.data.riskControlPlan[0])
        console.log(res.data.riskControlPlan[0])
      } catch (error) {
        console.error(error);
      }
    }
    fetchAndSetForm();
  }, [])
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      {
        !formData ?
        <p>No form found</p>
        :
        <>
          <CardHeader>
            <CardTitle>{formData.form_name}</CardTitle>
            <CardDescription>{formData.form_description}</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent>
              {formData.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-8">
                  <h3 className="text-lg font-semibold mb-2">{section.section_name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{section.section_description}</p>
                  {section.fields.map((field, fieldIndex) => (
                    <div key={fieldIndex} className="mb-4">
                      <Label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
                        {field.label}
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                      </Label>
                      {renderField(field, register)}
                      {field.description && (
                        <p className="mt-1 text-sm text-gray-500">{field.description}</p>
                      )}
                      {errors[field.name] && (
                        <p className="mt-1 text-sm text-red-500">This field is required</p>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">Submit</Button>
            </CardFooter>
          </form>
        </>
      }
    </Card>
  );
};

