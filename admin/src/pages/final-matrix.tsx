import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Tooltip } from 'react-tooltip'
import { Button } from "@/components/ui/button"
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

interface FinalMatrixProps {
  data: MatrixData
  onPrev: () => void
}

const getColor = (value: number) => {
  if (value <= 3) return 'bg-green-100 hover:bg-green-200'
  if (value <= 6) return 'bg-yellow-100 hover:bg-yellow-200'
  if (value <= 9) return 'bg-orange-100 hover:bg-orange-200'
  return 'bg-red-100 hover:bg-red-200'
}

export const FinalMatrix: React.FC<FinalMatrixProps> = ({ data, onPrev }) => {
  console.log(data)
  const [hoveredCell, setHoveredCell] = useState<string | null>(null)
  const consequences = data.RiskValues.filter(rv => rv.type === "Consequence")
  const likelihood = data.RiskValues.filter(rv => rv.type === "Probability").reverse()

  return (
    <Card className="sm:max-w-4xl md:max-w-6xl lg:max-w-7xl shadow-lg rounded-lg w-full">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <CardTitle className="text-2xl font-bold">{data.name}</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px] bg-background">Likelihood</TableHead>
              {consequences.map((cons) => (
                <TableHead key={cons.id} className="bg-background-100 text-center">
                  {cons.name} ({cons.scale})
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {likelihood.map((like) => (
              <TableRow key={like.id} className='h-20'>
                <TableCell className="font-medium bg-background">
                  {like.name} ({like.scale})
                </TableCell>
                {consequences.map((cons) => {
                  const value = like.scale * cons.scale;
                  const cellId = `${like.id}-${cons.id}`;

                  // Determine the background color based on value
                  let bgColorClass = '';
                  if (value <= 4) {
                    bgColorClass = 'bg-green-200'; // Low risk (green)
                  } else if (value <= 8) {
                    bgColorClass = 'bg-yellow-200'; // Medium risk (yellow)
                  } else {
                    bgColorClass = 'bg-red-200'; // High risk (red)
                  }

                  return (
                    <TableCell
                      key={cellId}
                      className={`p-0 text-center text-black ${bgColorClass}`}
                    >
                      {value}
                      <Tooltip id={cellId} />
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

