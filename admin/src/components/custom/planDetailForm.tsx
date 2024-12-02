'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { LinkIcon, X } from 'lucide-react'

const PlanDetailsForm = () => {
  const [formData, setFormData] = useState({
    planName: '',
    planDescription: '',
    notes: '',
    attachments: [] as File[]
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({
        ...prev,
        attachments: [...prev.attachments, ...Array.from(e.target.files as FileList)]
      }))
    }
  }

  const handleRemoveFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted with data:", formData)
    // Add your form submission logic here
  }

  return (
    <Card className="max-w-[70%] mx-auto">
      <CardHeader>
        <p>Plan Details</p>
      </CardHeader>
      <CardContent>
        <form id="plan-details-form" onSubmit={handleSubmit} className="space-y-2">
          <div className="flex flex-col justify-start space-y-1">
            <Label htmlFor="planName">Plan Name</Label>
            <Input
              placeholder="Eg: inspection check"
              id="planName"
              name="planName"
              value={formData.planName}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col justify-start space-y-1">
            <Label htmlFor="planDescription">Plan Description</Label>
            <Input
              placeholder="Enter your description"
              id="planDescription"
              name="planDescription"
              value={formData.planDescription}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="notes">Notes And Attachments</Label>
            <Textarea
              placeholder="Enter notes"
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
            />
            <br />
            <Label htmlFor="round-file" className="flex items-center space-x-1 rounded-sm bg-gray-200/10 p-2 w-max h-9 hover:bg-gray-200/30 hover:cursor-pointer">
              <span><LinkIcon /></span>
              <span>Add Images or PDF</span>
            </Label>
            <Input
              id="round-file"
              name="attachments"
              type="file"
              multiple
              accept="image/*,.pdf,.docx"
              className="hidden"
              onChange={handleFileChange}
            />
            <div className="mt-2 space-y-2">
              {formData.attachments.map((file, index) => (
                <div key={index} className="flex items-center justify-between border p-2 rounded">
                  <span>{file.name}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveFile(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default PlanDetailsForm

