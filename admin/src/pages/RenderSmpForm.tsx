import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { renderField } from '@/components/custom/formFields';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import axios from 'axios';

interface LoginData {
  username: string;
  password: string;
}

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [completedSections, setCompletedSections] = useState<number[]>([]);
  const { register: loginRegister, handleSubmit: handleLoginSubmit } = useForm<LoginData>();
  const { register, handleSubmit, formState: { errors, isValid }, watch } = useForm({ mode: 'onChange' });
  const params = useParams();
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null)
  const watchedValues = watch();

  // Login form submission handler
  const onLoginSubmit = async (loginData: LoginData) => {
    try {
      const response = await axios.post('/api/data/user/login', {
        email: loginData.username,
        password: loginData.password
      });

      if (response.data.userId) {
        // Successful login
        setIsAuthenticated(true);
        setUserId(response.data.userId)
        toast.success('Login successful');
      } else {
        // Login failed
        toast.error('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please try again.');
    }
  };

  // Fetch form data after authentication
  useEffect(() => {
    if (!isAuthenticated) return;

    if (!params.id || isNaN(Number(params.id))) {
      toast.error("Something went wrong!");
      navigate(-1);
      return;
    }

    const fetchAndSetForm = async () => {
      try {
        const res = await axios.get(`/api/data/smp/ra/${params.id}`);
        setFormData(res.data.riskControlPlan[0]);
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch form data');
        navigate(-1);
      }
    };

    fetchAndSetForm();
  }, [isAuthenticated, params.id, navigate]);

  // Check if a section's required fields are filled
  const isSectionComplete = (section) => {
    return section.fields
      .filter(field => field.required)
      .every(field => {
        const value = watchedValues[field.name];
        // Handle different field types 
        if (field.type === 'checkbox') return value === true;
        return value && value.toString().trim() !== '';
      });
  };

  // Mark section as finished
  const markSectionAsFinished = (sectionIndex: number) => {
    const section = formData.sections[sectionIndex];
    
    // Only allow marking if all required fields are filled
    if (!isSectionComplete(section)) {
      toast.error(`Please fill all required fields in Section ${sectionIndex + 1} before marking as finished`);
      return;
    }

    // Toggle section completion
    setCompletedSections(prev => 
      prev.includes(sectionIndex) 
        ? prev.filter(index => index !== sectionIndex)
        : [...prev, sectionIndex]
    );
    
    toast.success(`Section ${sectionIndex + 1} ${completedSections.includes(sectionIndex) ? 'unmarked' : 'marked'} as finished`);
  };

  // Form submission handler
  const onSubmit = async (data: any) => {
    // Automatically mark sections as complete if all required fields are filled
    const autoCompletedSections = formData.sections.reduce((acc, section, index) => {
      if (isSectionComplete(section)) {
        acc.push(index);
      }
      return acc;
    }, []);

    const res = await axios.post("/api/data/riskresponse", {
      userId: userId,
      formId: parseInt(params.id),
      response: data,
      noOfSectionsCompleted: autoCompletedSections.length
    })
    if (res.status === 201) {
      toast.success("Response submitted Successfully")
    }
    else {
      toast.error("Error in submitting response")
    }
  };

  // Login form rendering
  if (!isAuthenticated) {
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Please log in to access the form</CardDescription>
          </CardHeader>
          <form onSubmit={handleLoginSubmit(onLoginSubmit)}>
            <CardContent>
              <div className="mb-4">
                <Label htmlFor="username">Username</Label>
                <input
                  {...loginRegister('username', { required: true })}
                  type="text"
                  className="w-full p-2 border rounded mt-1"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="password">Password</Label>
                <input
                  {...loginRegister('password', { required: true })}
                  type="password"
                  className="w-full p-2 border rounded mt-1"
                  placeholder="Enter your password"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">Log In</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    );
  }

  // Form rendering after authentication
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <Card className="w-full max-w-3xl mx-auto ">
        {!formData ? (
          <p>No form found</p>
        ) : (
          <>
            <CardHeader>
              <CardTitle>{formData.form_name}</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardContent>
                {formData.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="mb-8">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{section.section_name}</h3>
                        <p className="text-sm text-gray-500 mb-4">{section.section_description}</p>
                      </div>
                      <Button 
                        type="button"
                        variant={completedSections.includes(sectionIndex) ? "default" : "outline"}
                        onClick={() => markSectionAsFinished(sectionIndex)}
                        className="ml-4"
                        disabled={!isSectionComplete(section)}
                      >
                        {completedSections.includes(sectionIndex) ? 'Unmark' : 'Mark'} as Finished
                      </Button>
                    </div>
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
        )}
      </Card>
    </div>
  );
};  