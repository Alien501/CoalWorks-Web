import { Worker } from '@/lib/workerData'
import { Button } from '../ui/button'
import { ArrowLeft, Clipboard, Clock, MapPin, UserRound } from 'lucide-react'
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'
import { Progress } from '../ui/progress'
import { DashboardTable } from './dashboardTable'
import { Table, TableHead, TableHeader, TableRow } from '../ui/table'

const WorkerDetails = ({workerData, onBackButtonPressed}: {workerData: Worker, onBackButtonPressed: () => void}) => {
    return(
        <div id="worker-details" className="p-4 max-w-4xl mx-auto">
        <div className='flex justify-between items-center mb-4'>
          <Button onClick={onBackButtonPressed} variant="secondary">
            <ArrowLeft />
          </Button>
          <h2 className="text-xl font-medium">Worker ID: {workerData.id}</h2>
        </div>
  
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                <UserRound className="mr-2" /> Worker Info
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center">
                <Avatar className="w-32 h-32 mb-4">
                  <AvatarImage src="https://github.com/shadcn.png" alt={workerData.name} />
                  <AvatarFallback>
                    {workerData.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold">{workerData.name}</h3>
                <p className="text-muted-foreground">{workerData.role}</p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <div className="mb-2">
                <span className='text-gray-200/70'>Department:</span> {workerData.department}
              </div>
              <div>
                <span className='text-gray-200/70'>Contact:</span> {workerData.contactInfo}
              </div>
            </CardFooter>
          </Card>
  
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2" /> Shift Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <span className='text-gray-200/70'>Shift Start:</span> {workerData.shiftStart}
                </div>
                <div>
                  <span className='text-gray-200/70'>Shift End:</span> {workerData.shiftEnd}
                </div>
                <div>
                  <span className='text-gray-200/70'>Active Hours:</span> {workerData.activeHours}
                </div>
                <div className="flex items-center">
                  <span className="mr-2 text-gray-200/70">Fatigue Risk:</span>
                  <Badge variant={workerData.fatigueRisk ? "destructive" : "default"}>
                    {workerData.fatigueRisk ? "High" : "Low"}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
  
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clipboard className="mr-2" /> Current Task
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <span className='text-gray-200/70'>Current Task:</span> {workerData.currentTask}
                </div>
                <div>
                  <span className='text-gray-200/70'>Progress:</span>
                  <Progress value={workerData.taskProgress} className="mt-2" />
                </div>
                <div className="flex items-center">
                  <Button className='mx-auto' variant={'secondary'}>
                    <MapPin className="mr-2" /> {workerData.location}
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div>
                <span className='text-gray-200/70'>Recent Tasks:</span>
                <ul className="list-disc pl-5 mt-2">
                  {workerData.lastTasks.map((task, index) => (
                    <li key={index} className="text-sm">{task}</li>
                  ))}
                </ul>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className='mt-2'>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>1</TableHead>
                        <TableHead>1</TableHead>
                        <TableHead>1</TableHead>
                    </TableRow>
                </TableHeader>
            </Table>
        </div>
      </div>
    )
}

export default WorkerDetails;