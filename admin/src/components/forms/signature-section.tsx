import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

interface SignatureSectionProps {
  labels: string[]
  onSignaturesChange: (signatures: Record<string, string>) => void
}

export function SignatureSection({ labels, onSignaturesChange }: SignatureSectionProps) {
  const [signatures, setSignatures] = useState<Record<string, string>>({})

  const handleSignatureChange = (label: string, value: string) => {
    const updatedSignatures = { ...signatures, [label]: value }
    setSignatures(updatedSignatures)
    onSignaturesChange(updatedSignatures)
  }

  return (
    <Card>
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {labels.map((label, index) => (
          <div key={index} className="space-y-2">
            <Label>{label}</Label>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) {
                  const reader = new FileReader()
                  reader.onloadend = () => {
                    handleSignatureChange(label, reader.result as string)
                  }
                  reader.readAsDataURL(file)
                }
              }}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

