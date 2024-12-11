import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from '@/components/ui/button'

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

  const getRiskDetails = (value) => {
    const numValue = parseFloat(value);
  
    if (numValue <= 0.0) {
      return { color: 'bg-green-500', level: 'No Risk' }; 
    } else if (numValue <= 0.05) {
      return { color: 'bg-green-400', level: 'Minimal Risk' }; 
    } else if (numValue <= 5) {
      return { color: 'bg-yellow-300', level: 'Low Risk' }; 
    } else if (numValue <= 10) {
      return { color: 'bg-yellow-400', level: 'Moderate Risk' }; 
    } else if (numValue <= 30) {
      return { color: 'bg-orange-400', level: 'Elevated Risk' }; 
    } else {
      return { color: 'bg-red-500', level: 'High Risk' };
    }
  };
  

  return (
    <Card className="w-full h-full shadow-lg rounded-lg flex flex-col">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white flex-shrink-0">
        <CardTitle className="text-2xl font-bold">{data.name}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 flex-grow overflow-hidden">
        <ScrollArea className="h-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="bg-background rounded-tl-lg">Exposure</TableHead>
                <TableHead className="bg-background">Probability</TableHead>
                {consequences.map((cons, index) => (
                  <TableHead 
                    key={cons.id} 
                    className={`bg-background text-center ${index === consequences.length - 1 ? 'rounded-tr-lg' : ''}`}
                  >
                    {cons.name} ({cons.scale})
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {likelihood.map((like, i) => (
                <TableRow key={like.id} className={i === likelihood.length - 1 ? 'border-b-0' : ''}>
                  <TableCell className="font-medium bg-background">
                    {exposure[i].name} ({exposure[i].scale})
                  </TableCell>
                  <TableCell className="font-medium bg-background">
                    {like.name} ({like.scale})
                  </TableCell>
                  {consequences.map((cons, index) => {
                    const value = (like.scale * cons.scale * exposure[i].scale).toFixed(2);
                    const { color, level } = getRiskDetails(value);
                    
                    return (
                      <TableCell
                        key={`${like.id}-${cons.id}`}
                        className={`px-4 py-2 ${color} ${
                          i === likelihood.length - 1 && index === consequences.length - 1 
                            ? 'rounded-br-lg' 
                            : ''
                        } ${
                          i === likelihood.length - 1 && index === 0 
                            ? 'rounded-bl-lg' 
                            : ''
                        }`}
                      >
                        <div className="text-center font-bold">
                          {value}
                          <div className="text-xs text-gray-600 mt-1">{level} Risk</div>
                        </div>
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

export default FinalMatrix
