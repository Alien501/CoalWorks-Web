'use client'

import { useState, useEffect } from "react"
import axios from "axios"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Define types for our data structure
type AdditionalControlMeasure = {
  description: string
  responsible_party: string
  priority: string
}

type Hazard = {
  hazard_id: string
  hazard_aspect: string
  possible_outcome: string
  existing_control_measures: string
  probability: number
  exposure: number
  consequences: number
  risk_score: number
  risk_rating: string
  additional_control_measures: AdditionalControlMeasure[]
  residual_impact: string
}

type HazardAnalysisResult = {
  activity_name: string
  hazards: Hazard[]
}

export const RenderSmp = () => {
  const [activityName, setActivityName] = useState("")
  const [hazardAnalysis, setHazardAnalysis] = useState<HazardAnalysisResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getDetail = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const res = await axios.post("http://192.168.137.88:8000/hazard-analysis", {
        activity_name: activityName
      })
      setHazardAnalysis(res.data.result)
    } catch (err) {
      setError("Failed to fetch hazard analysis. Please try again.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (activityName) {
      getDetail()
    }
  }, [activityName])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Hazard Analysis</h1>
      <div className="mb-4">
        <Input
          type="text"
          value={activityName}
          onChange={(e) => setActivityName(e.target.value)}
          placeholder="Enter activity name"
          className="mr-2"
        />
        <Button onClick={getDetail} disabled={isLoading}>
          {isLoading ? "Loading..." : "Get Hazard Analysis"}
        </Button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {hazardAnalysis && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Activity: {hazardAnalysis.activity_name}</h2>
          {hazardAnalysis.hazards.map((hazard) => (
            <Card key={hazard.hazard_id} className="mb-4">
              <CardHeader>
                <CardTitle>{hazard.hazard_aspect}</CardTitle>
                <CardDescription>ID: {hazard.hazard_id}</CardDescription>
              </CardHeader>
              <CardContent>
                <p><strong>Possible Outcome:</strong> {hazard.possible_outcome}</p>
                <p><strong>Existing Control Measures:</strong> {hazard.existing_control_measures}</p>
                <p><strong>Risk Score:</strong> {hazard.risk_score}</p>
                <p><strong>Risk Rating:</strong> {hazard.risk_rating}</p>
                <p><strong>Residual Impact:</strong> {hazard.residual_impact}</p>
                <h3 className="font-semibold mt-2">Additional Control Measures:</h3>
                <ul>
                  {hazard.additional_control_measures.map((measure, index) => (
                    <li key={index}>
                      {measure.description} (Responsible: {measure.responsible_party}, Priority: {measure.priority})
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

