import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const retentionData = [
  { month: 'Jun', percentage: 100 },
  { month: 'May', percentage: 65.8 },
  { month: 'Apr', percentage: 58.7 },
  { month: 'Mar', percentage: 54.7 },
  { month: 'Feb', percentage: 48.4 },
  { month: 'Jan', percentage: 43.6 },
]

export default function BitcoinRetention() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bitcoin retention</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-6 gap-2">
          {retentionData.map((data) => (
            <div key={data.month} className="flex flex-col items-center">
              <div className="w-full bg-gray-200 rounded-full h-32 flex flex-col-reverse">
                <div
                  className="bg-blue-600 rounded-full"
                  style={{ height: `${data.percentage}%` }}
                ></div>
              </div>
              <span className="text-sm mt-2">{data.month}</span>
              <span className="text-xs text-gray-500">{data.percentage}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

