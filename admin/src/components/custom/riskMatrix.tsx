import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

type RiskLevel = "Low" | "Medium" | "High" | "Extreme"
type Likelihood = "Rare" | "Unlikely" | "Possible" | "Likely" | "Almost Certain"
type Severity = "Negligible" | "Minor" | "Moderate" | "Major" | "Catastrophic"

interface RiskCell {
  level: RiskLevel
  description: string
  color: string
}

const riskMatrix: Record<Likelihood, Record<Severity, RiskCell>> = {
  "Almost Certain": {
    "Negligible": { level: "Medium", description: "Frequent minor incidents", color: "bg-yellow-500" },
    "Minor": { level: "High", description: "Regular accidents with minor injuries", color: "bg-orange-500" },
    "Moderate": { level: "High", description: "Frequent accidents with lost time injuries", color: "bg-orange-500" },
    "Major": { level: "Extreme", description: "High likelihood of serious accidents", color: "bg-red-500" },
    "Catastrophic": { level: "Extreme", description: "Imminent danger of fatal accidents", color: "bg-red-700" }
  },
  "Likely": {
    "Negligible": { level: "Low", description: "Occasional minor incidents", color: "bg-green-500" },
    "Minor": { level: "Medium", description: "Potential for minor injuries", color: "bg-yellow-500" },
    "Moderate": { level: "High", description: "Significant risk of lost time injuries", color: "bg-orange-500" },
    "Major": { level: "Extreme", description: "High risk of serious accidents", color: "bg-red-500" },
    "Catastrophic": { level: "Extreme", description: "Potential for multiple fatalities", color: "bg-red-700" }
  },
  "Possible": {
    "Negligible": { level: "Low", description: "Rare minor incidents", color: "bg-green-500" },
    "Minor": { level: "Medium", description: "Occasional minor injuries possible", color: "bg-yellow-500" },
    "Moderate": { level: "High", description: "Moderate risk of significant injuries", color: "bg-orange-500" },
    "Major": { level: "High", description: "Potential for serious accidents", color: "bg-orange-500" },
    "Catastrophic": { level: "Extreme", description: "Risk of fatal accident", color: "bg-red-500" }
  },
  "Unlikely": {
    "Negligible": { level: "Low", description: "Very rare minor incidents", color: "bg-green-300" },
    "Minor": { level: "Low", description: "Low chance of minor injuries", color: "bg-green-500" },
    "Moderate": { level: "Medium", description: "Potential for moderate injuries", color: "bg-yellow-500" },
    "Major": { level: "High", description: "Unlikely but possible serious accident", color: "bg-orange-500" },
    "Catastrophic": { level: "High", description: "Remote chance of fatal accident", color: "bg-orange-500" }
  },
  "Rare": {
    "Negligible": { level: "Low", description: "Extremely rare minor incidents", color: "bg-green-300" },
    "Minor": { level: "Low", description: "Very low chance of minor injuries", color: "bg-green-300" },
    "Moderate": { level: "Low", description: "Rare chance of moderate injuries", color: "bg-green-500" },
    "Major": { level: "Medium", description: "Very unlikely serious accident", color: "bg-yellow-500" },
    "Catastrophic": { level: "High", description: "Highly improbable fatal accident", color: "bg-orange-500" }
  }
}

const likelihoods: Likelihood[] = ["Almost Certain", "Likely", "Possible", "Unlikely", "Rare"]
const severities: Severity[] = ["Negligible", "Minor", "Moderate", "Major", "Catastrophic"]

export default function RiskMatrix() {
  const [selectedRisk, setSelectedRisk] = useState<RiskCell | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleCellClick = (risk: RiskCell) => {
    setSelectedRisk(risk)
    setDialogOpen(true)
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Coal Mine Risk Matrix</CardTitle>
      </CardHeader>
      <CardContent className="">
        <div className="grid grid-cols-6 gap-2">
          <div className="col-span-1"></div>
          {severities.map((severity) => (
            <div key={severity} className="font-semibold text-center text-sm">
              {severity}
            </div>
          ))}
          {likelihoods.map((likelihood) => (
            <React.Fragment key={likelihood}>
              <div className="font-semibold text-right text-sm pr-2 flex items-center justify-end">
                {likelihood}
              </div>
              {severities.map((severity) => {
                const risk = riskMatrix[likelihood][severity]
                return (
                  <Button
                    key={`${likelihood}-${severity}`}
                    className={`w-full h-16 ${risk.color} hover:opacity-80 transition-opacity`}
                    onClick={() => handleCellClick(risk)}
                  >
                    {risk.level}
                  </Button>
                )
              })}
            </React.Fragment>
          ))}
        </div>
      </CardContent>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedRisk?.level} Risk</DialogTitle>
            <DialogDescription>{selectedRisk?.description}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </Card>
  )
}