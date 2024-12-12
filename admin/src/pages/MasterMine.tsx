import { useEffect, useState } from 'react'
import { Mine } from '@/types/mine'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog"
import { AddMineForm } from '@/components/custom/NewMineForm'
import { fetchMines } from '@/utils/fetchMines'
import { Switch } from '@/components/ui/switch'
import { updateMines } from '@/utils/updateMines'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'
import { toast } from 'sonner'
import SectionsPage from './plants2'
import Locations from './locations'
import { UserManagement } from './userManagement'
import RolesManagement from './rolesAndPermissions'
import MasterShift from './MasterShift'
import MasterAsset from './MasterAsset'
import SoftwareIntegration from './SoftwareIntegration'



export default function MinesPage() {
  const [mines, setMines] = useState<Mine[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [sortConfig, setSortConfig] = useState<{ key: keyof Mine; direction: 'asc' | 'desc' } | null>(null)

  const getAndSetMineData = async () => {
    const res = await fetchMines();
    setMines(res);
  }

  useEffect(() => {
    getAndSetMineData();
  }, [])

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleSort = (key: keyof Mine) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const sortedMines = [...mines].sort((a, b) => {
    if (!sortConfig) return 0
    const { key, direction } = sortConfig
    if (a[key] < b[key]) return direction === 'asc' ? -1 : 1
    if (a[key] > b[key]) return direction === 'asc' ? 1 : -1
    return 0
  })

  const filteredMines = sortedMines.filter(mine =>
    mine.mineName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mine.address.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const addNewMine = (newMine: Mine) => {
    setMines([...mines, { ...newMine, mineId: mines.length + 1 }])
  }

  const onMineStatusChanged = async (mineId, checked) => {
    const res = await updateMines(mineId, {
      operationalStatus: !mines.find(mine => mine.mineId === mineId)?.operationalStatus
    })
    if (res) {
      setMines(prev => prev.map(mine => mine.mineId == mineId ? { ...mine, operationalStatus: !mine.operationalStatus } : mine))
      toast.success("Changed mine status!")
    } else {
      toast.error("Something went wrong!")
    }
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <Input
          className="max-w-sm"
          placeholder="Search mines..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add New Mine</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Mine</DialogTitle>
            </DialogHeader>
            <AddMineForm onSubmit={addNewMine} />
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="cursor-pointer" onClick={() => handleSort('mineId')}>Mine ID</TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort('mineName')}>Mine Name</TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort('locationLatitude')}>Location</TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort('address')}>Address</TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort('productionCapacity')}>Production Capacity</TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort('operationalStatus')}>Is Active</TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort('startDate')}>Start Date</TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort('endDate')}>End Date</TableHead>
            <TableHead className="cursor-pointer">Configure Mine</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredMines.map((mine) => (
            <TableRow key={mine.mineId}>
              <TableCell>{mine.mineId}</TableCell>
              <TableCell>{mine.mineName}</TableCell>
              <TableCell>{`${mine.locationLatitude}, ${mine.locationLongitude}`}</TableCell>
              <TableCell>{mine.address}</TableCell>
              <TableCell>{mine.productionCapacity}</TableCell>
              <TableCell><Switch onCheckedChange={(check) => onMineStatusChanged(mine.mineId, check)} checked={mine.operationalStatus} /></TableCell>
              <TableCell>{mine.startDate}</TableCell>
              <TableCell>{mine.endDate ? mine.endDate : 'N/A'}</TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Configure Mine</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[95vw] sm:max-h-[95vh] w-[95vw] h-[95vh]">
                    <Tabs defaultValue="sections" className="w-full h-full flex flex-col">
                      <TabsList className="mx-auto">
                        <TabsTrigger value="sections">Sections</TabsTrigger>
                        <TabsTrigger value="shifts">Shifts</TabsTrigger>
                        <TabsTrigger value="locations">Locations</TabsTrigger>
                        <TabsTrigger value="assets">Assets</TabsTrigger>
                        <TabsTrigger value="roles">Roles</TabsTrigger>
                        <TabsTrigger value="users">Users</TabsTrigger>
                        <TabsTrigger value="software-integration">Software Integration</TabsTrigger>
                      </TabsList>
                      <TabsContent value="sections" className="h-[calc(95vh-100px)] flex-grow">
                        <SectionsPage />
                      </TabsContent>
                      <TabsContent value="shifts" className="h-[calc(95vh-100px)] flex-grow">
                        <MasterShift />
                      </TabsContent>
                      <TabsContent value="locations" className="h-[calc(95vh-100px)] flex-grow">
                        <Locations />
                      </TabsContent>
                      <TabsContent value="assets" className="h-[calc(95vh-100px)] flex-grow">
                        <MasterAsset />
                      </TabsContent>
                      <TabsContent value="roles" className="h-[calc(95vh-100px)] flex-grow">
                        <RolesManagement />
                      </TabsContent>
                      <TabsContent value="users" className="h-[calc(95vh-100px)] flex-grow">
                        <UserManagement />
                      </TabsContent>
                      <TabsContent value="software-integration" className="h-[calc(95vh-100px)] flex-grow">
                        <SoftwareIntegration />
                      </TabsContent>
                    </Tabs>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

