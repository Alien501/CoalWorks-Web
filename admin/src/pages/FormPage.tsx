import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DynamicFormGenerator from '@/components/custom/dynamicFormGenerator';

// Example database or state to store forms (replace this with your API/database)
const mockFormDatabase: { [key: string]: any } = {
  "coal-mine-blasting-operation-record": {
    form_name: "Example Form",
    form_description: "This is a dynamically generated form.",
    sections: [
      {
        section_name: "Personal Information",
        fields: [
          {
            label: "Name",
            name: "name",
            type: "Text",
            placeholder: "Enter your name",
            required: true,
          },
          {
            label: "Email",
            name: "email",
            type: "Text",
            placeholder: "Enter your email",
            required: true,
          },
        ],
      },
    ],
  },
};

function FormPage() {
    const { uniqueKey } = useParams(); // Get the uniqueKey from the URL
    const [formData, setFormData] = useState(null);
  
    useEffect(() => {
      // Fetch the form data using the uniqueKey from the URL
      // the url is like this http://localhost:5173/form/067c1614-4e87-4839-8012-4ef292ca9296
      // but the unique key is null

      console.log(uniqueKey)
      const fetchedData = localStorage.getItem(uniqueKey?.toString());
      console.log(fetchedData)
  
      if (fetchedData) {
        setFormData(JSON.parse(fetchedData)); // Load the form data from localStorage (or your database)
      }
    }, [uniqueKey]);
  
    if (!formData) return <p>Loading form...</p>;
  
    return (
      <div>
        <DynamicFormGenerator formData={formData} />
      </div>
    );
  }
  
  export default FormPage;