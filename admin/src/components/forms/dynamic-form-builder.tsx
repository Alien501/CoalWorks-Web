"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'
import { FormSchema } from "./form"
import { DynamicTable } from "./dynamic-table"
import { SignatureSection } from "./signature-section"

export function DynamicFormBuilder({ formData }: { formData: FormSchema }) {
  const [formValues, setFormValues] = useState<Record<string, any>>({})

  const handleInputChange = (fieldName: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [fieldName]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form Values:", formValues)
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle>{formData.formName}</CardTitle>
        <p className="text-sm text-muted-foreground">{formData.formNo}</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {formData.formSchema && formData.formSchema.map((field, index) => {
            if (field.isTable) {
              return (
                <DynamicTable
                  key={index}
                  tableHeader={field.tableHeader || []}
                  onDataChange={(data) => handleInputChange(`table_${index}`, data)}
                />
              )
            }

            if (field.isSignature) {
              return (
                <SignatureSection
                  key={index}
                  labels={field.signatureLabels || []}
                  onSignaturesChange={(signatures) => handleInputChange(`signatures_${index}`, signatures)}
                />
              )
            }

            return (
              <div key={index} className="grid gap-2">
                <Label htmlFor={field.fieldName}>{field.fieldLabel}</Label>
                {field.fieldType === "textarea" ? (
                  <Textarea
                    id={field.fieldName}
                    value={formValues[field.fieldName] || ""}
                    onChange={(e) => handleInputChange(field.fieldName, e.target.value)}
                  />
                ) : (
                  <Input
                    id={field.fieldName}
                    type={field.fieldType}
                    value={formValues[field.fieldName] || ""}
                    onChange={(e) => handleInputChange(field.fieldName, e.target.value)}
                  />
                )}
              </div>
            )
          })}
          <Button type="submit" className="w-full">Submit Form</Button>
        </form>
      </CardContent>
    </Card>
  )
}

