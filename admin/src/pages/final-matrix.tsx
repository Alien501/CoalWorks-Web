import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface RiskValue {
  id: number
  type: string
  name: string
  scale: number
  matrixId: number
}

interface MatrixData {
  id: number
  name: string
  col: number
  row: number
  RiskValues: RiskValue[]
}

interface Hazard {
  id: number
  activity: string
  hazard: string
  exposedGroup: string
  description: string
  consequence: number
  exposure: number
  probability: number
  riskValue: number
  riskContolPlan: {
    type: string
    person: string
    details: string
    dueDate: string
    completed: boolean
  }[]
}

interface FinalMatrixProps {
  data: MatrixData
  hazards: Hazard[]
  onPrev?: () => void
}

export const FinalMatrix: React.FC<FinalMatrixProps> = ({ data, hazards }) => {
  const [selectedHazards, setSelectedHazards] = useState<Hazard[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const consequences = data.RiskValues.filter(rv => rv.type === "Consequence").sort((a, b) => a.scale - b.scale)
  const likelihood = data.RiskValues.filter(rv => rv.type === "Probability").sort((a, b) => a.scale - b.scale)
  const exposure = data.RiskValues.filter(rv => rv.type === 'Exposure').sort((a, b) => a.scale - b.scale)

  const findMatchingHazards = (likelihoodScale: number, consequenceScale: number, exposureScale: number) => {
    return hazards.filter(hazard => 
      // Fuzzy matching with a small tolerance
      Math.abs(hazard.probability - likelihoodScale) <= 1 &&
      Math.abs(hazard.consequence - consequenceScale) <= 1 && 
      Math.abs(hazard.exposure - exposureScale) <= 1
    )
  }

  const handleCellClick = (likelihoodScale: number, consequenceScale: number, exposureScale: number) => {
    const matchedHazards = findMatchingHazards(likelihoodScale, consequenceScale, exposureScale)
    setSelectedHazards(matchedHazards)
    setIsDialogOpen(true)
  }

  const getRiskColor = (value: number) => {
    if (value <= 4) return 'bg-green-200 hover:bg-green-300 cursor-pointer'
    if (value <= 8) return 'bg-yellow-200 hover:bg-yellow-300 cursor-pointer'
    return 'bg-red-200 hover:bg-red-300 cursor-pointer'
  }

  return (
    <>
      <Card className="sm:max-w-4xl md:max-w-6xl lg:max-w-7xl shadow-lg rounded-lg w-full">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <CardTitle className="text-2xl font-bold">{data.name}</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[150px]'>Exposure</TableHead>
                <TableHead className="w-[150px] bg-background">Probability</TableHead>
                {consequences.map((cons) => (
                  <TableHead key={cons.id} className="bg-background-100 text-center">
                    {cons.name} ({cons.scale})
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {likelihood.map((like, i) => (
                <TableRow key={like.id} className='h-20'>
                  <TableCell className='font-medium bg-background'>
                    {exposure[i].name} ({exposure[i].scale})
                  </TableCell>
                  <TableCell className="font-medium bg-background">
                    {like.name} ({like.scale})
                  </TableCell>
                  {consequences.map((cons) => {
                    const value = like.scale * cons.scale * exposure[i].scale;
                    return (
                      <TableCell
                        key={`${like.id}-${cons.id}`}
                        className={`p-2 text-center text-black ${getRiskColor(value)}`}
                        onClick={() => handleCellClick(like.scale, cons.scale, exposure[i].scale)}
                      >
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[800px] max-h-[600px] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Hazards in this Risk Category</DialogTitle>
            <DialogDescription>
              {selectedHazards.length} hazard(s) matched this risk level
            </DialogDescription>
          </DialogHeader>
          {selectedHazards.length === 0 ? (
            <p>No hazards found for this risk level.</p>
          ) : (
            selectedHazards.map(hazard => (
              <div key={hazard.id} className="mb-4 p-4 border rounded-lg">
                <h3 className="font-bold">{hazard.activity}</h3>
                <p><strong>Hazard:</strong> {hazard.hazard}</p>
                <p><strong>Exposed Group:</strong> {hazard.exposedGroup}</p>
                <p><strong>Description:</strong> {hazard.description}</p>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <p><strong>Probability:</strong> {hazard.probability}</p>
                  <p><strong>Consequence:</strong> {hazard.consequence}</p>
                  <p><strong>Exposure:</strong> {hazard.exposure}</p>
                  <p><strong>Risk Value:</strong> {hazard.riskValue}</p>
                </div>
                <div className="mt-2">
                  <strong>Risk Control Plan:</strong>
                  {hazard.riskContolPlan.map((plan, index) => (
                    <div key={index} className="ml-4 mt-1 border-l-2 pl-2">
                      <p>Type: {plan.type}</p>
                      <p>Responsible: {plan.person}</p>
                      <p>Details: {plan.details}</p>
                      <p>Due Date: {plan.dueDate}</p>
                      <p>Status: {plan.completed ? 'Completed' : 'Pending'}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default FinalMatrix