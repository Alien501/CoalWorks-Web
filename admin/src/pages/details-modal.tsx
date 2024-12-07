import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

type DetailsModalProps = {
  isOpen: boolean
  onClose: () => void
  category: 'Tasks' | 'Incidents' | 'Equipment'
  timeRange: string
  data: any[]
}

export default function DetailsModal({ isOpen, onClose, category, timeRange, data }: DetailsModalProps) {
  const metrics = data[0] ? Object.keys(data[0]).filter(key => key !== 'date') : []
  const colors = ['#8884d8', '#82ca9d', '#ffc658']

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{category} Trends - Last {timeRange === '7d' ? '7 Days' : '30 Days'}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              {metrics.map((metric, index) => (
                <Line 
                  key={metric} 
                  type="monotone" 
                  dataKey={metric} 
                  stroke={colors[index % colors.length]} 
                  activeDot={{ r: 8 }} 
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Key Insights:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Trend 1: Lorem ipsum dolor sit amet</li>
            <li>Trend 2: Consectetur adipiscing elit</li>
            <li>Trend 3: Sed do eiusmod tempor incididunt</li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}

