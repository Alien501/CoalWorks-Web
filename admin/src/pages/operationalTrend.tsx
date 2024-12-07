"use client"

import { useState, useEffect, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { ArrowUpRight, AlertCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import DetailsModal from './details-modal'

// Types for our data
type DataPoint = {
  name: string
  value: number
  date: string
}

type Category = 'Tasks' | 'Incidents' | 'Equipment'

const generateData = (category: Category): DataPoint[] => {
  const baseData = {
    Tasks: [
      { name: 'Completion Rate', value: 0 },
      { name: 'Efficiency', value: 0 },
      { name: 'Quality', value: 0 },
    ],
    Incidents: [
      { name: 'Resolution Time', value: 0 },
      { name: 'Severity', value: 0 },
      { name: 'Frequency', value: 0 },
    ],
    Equipment: [
      { name: 'Uptime', value: 0 },
      { name: 'Maintenance', value: 0 },
      { name: 'Utilization', value: 0 },
    ],
  }

  return baseData[category].map(item => ({
    ...item,
    value: Math.floor(Math.random() * 100),
    date: new Date().toISOString(),
  }))
}

const generateHistoricalData = (category: Category, days: number) => {
  const data = []
  const endDate = new Date()
  for (let i = 0; i < days; i++) {
    const date = new Date(endDate)
    date.setDate(date.getDate() - i)
    data.unshift({
      date: date.toISOString().split('T')[0],
      ...generateData(category).reduce((acc, item) => ({...acc, [item.name]: item.value}), {})
    })
  }
  return data
}

export default function EnhancedOperationalTrendsCard() {
  const [data, setData] = useState<DataPoint[]>([])
  const [category, setCategory] = useState<Category>('Tasks')
  const [timeRange, setTimeRange] = useState<string>('7d')
  const [highlight, setHighlight] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [historicalData, setHistoricalData] = useState<any[]>([])

  useEffect(() => {
    setIsLoading(true)
    setError(null)

    const fetchData = () => {
      try {
        const newData = generateData(category)
        setData(newData)
        setHighlight(`${Math.floor(Math.random() * 20)}%`)
        setHistoricalData(generateHistoricalData(category, timeRange === '7d' ? 7 : 30))
        setIsLoading(false)
      } catch (err) {
        setError("Failed to fetch data. Please try again.")
        setIsLoading(false)
      }
    }

    fetchData()

    const interval = setInterval(fetchData, 5000)

    return () => clearInterval(interval)
  }, [category, timeRange])

  const maxValue = useMemo(() => Math.max(...data.map(item => item.value)), [data])

  const handleViewDetails = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <Card className="w-full h-full flex flex-col border-none shadow-none bg-transparent">
        <CardHeader className="p-2 pb-0">
          <CardTitle className="text-sm flex justify-between items-center">
            <Select value={category} onValueChange={(value: Category) => setCategory(value)}>
              <SelectTrigger className="w-[80px] h-6 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Tasks">Tasks</SelectItem>
                <SelectItem value="Incidents">Incidents</SelectItem>
                <SelectItem value="Equipment">Equipment</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex justify-between items-center mb-1">
                <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-[60px] h-6 text-[10px]">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="7d">7 days</SelectItem>
                    <SelectItem value="30d">30 days</SelectItem>
                </SelectContent>
                </Select>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col p-1 pt-0">
          <div className="flex-1 relative">
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-background/80 z-10"
                >
                  <p className="text-sm">Loading...</p>
                </motion.div>
              )}
            </AnimatePresence>
            {error ? (
              <div className="h-full flex items-center justify-center text-destructive">
                <AlertCircle className="w-4 h-4 mr-1" />
                <p className="text-[10px]">{error}</p>
              </div>
            ) : (
              <ChartContainer config={{ trend: { label: "Trend", color: "hsl(var(--chart-1))" } }} className="h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" tick={{ fill: 'hsl(var(--foreground))', fontSize: 10 }} />
                    <Radar name="Trend" dataKey="value" stroke="var(--color-trend)" fill="var(--color-trend)" fillOpacity={0.6} />
                    <ChartTooltip content={<CustomTooltip />} />
                  </RadarChart>
                </ResponsiveContainer>
              </ChartContainer>
            )}
          </div>
          <div className='grid grid-cols-2'>
            <p className="text-5xl font-black mt-1 text-muted-foreground line-clamp-2 place-self-center ">{highlight}</p>
            <Button variant="ghost" size="sm" className="w-full mt-2 text-[18 px] h-20" onClick={handleViewDetails}>
                <ArrowUpRight className="mr-1 h-3 w-3" />
                View Details
            </Button>
          </div>
        </CardContent>
      </Card>
      <DetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        category={category}
        timeRange={timeRange}
        data={historicalData}
      />
    </>
  )
}

function CustomTooltip({ active, payload }: { active?: boolean, payload?: any[] }) {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="bg-background p-1 rounded shadow-md border border-border text-[10px]">
        <p className="font-bold">{data.name}</p>
        <p>{`Value: ${data.value.toFixed(2)}`}</p>
        <p className="text-muted-foreground">{new Date(data.date).toLocaleDateString()}</p>
      </div>
    )
  }
  return null
}

