import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"

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

  const getRiskColor = (value: number) => {
    if (value <= 4) return 'bg-green-200'
    if (value <= 8) return 'bg-yellow-200'
    return 'bg-red-200'
  }

  return (
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
              <TableRow key={like.id}>
                <TableCell className='font-medium bg-background'>
                  {exposure[i].name} ({exposure[i].scale})
                </TableCell>
                <TableCell className="font-medium bg-background">
                  {like.name} ({like.scale})
                </TableCell>
                {consequences.map((cons) => {
                  const value = like.scale * cons.scale * exposure[i].scale;
                  const matchedHazards = findMatchingHazards(like.scale, cons.scale, exposure[i].scale);
                  return (
                    <TableCell
                      key={`${like.id}-${cons.id}`}
                      className={`p-2 ${getRiskColor(value)} overflow-hidden`}
                    >
                      <div className="text-center font-bold mb-2">{value}</div>
                      <ScrollArea className="h-40">
                        {matchedHazards.length === 0 ? (
                          // <p className="text-sm text-gray-500">No hazards</p>
                          null
                        ) : (
                          matchedHazards.map(hazard => (
                            <div key={hazard.id} className="mb-2 p-2 bg-white bg-opacity-50 rounded text-sm">
                              <p className="font-semibold">{hazard.activity}</p>
                              <p>Hazard: {hazard.hazard}</p>
                              <p>Exposed: {hazard.exposedGroup}</p>
                            </div>
                          ))
                        )}
                      </ScrollArea>
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default FinalMatrix
