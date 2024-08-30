//@ts-nocheck
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import MySelectBox from "@/components/mine/MySelectbox/MySelectbox";
import SelectDate from "@/components/mine/SelectDate/SelectDate";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableHeader, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useState } from 'react';

const DetailsTab = () => (
  <div className="space-y-4">
    <div>
      <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
      <Input id="title" placeholder="Main & Service Line Inspection Report" />
    </div>
    <div>
      <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
      <Input id="description" placeholder="Enter description" />
    </div>
    <div>
      <label htmlFor="plant" className="block text-sm font-medium text-gray-700">Plant</label>
      <Select>
        <SelectTrigger id="plant">
          <SelectValue placeholder="Select plant" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="plant1">Plant 1</SelectItem>
          <SelectItem value="plant2">Plant 2</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div>
      <label htmlFor="responsibility" className="block text-sm font-medium text-gray-700">Responsibility</label>
      <Select>
        <SelectTrigger id="responsibility">
          <SelectValue placeholder="Select responsibility" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="manager">Manager</SelectItem>
          <SelectItem value="supervisor">Supervisor</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>
);

const SchedulingTab = () => (
  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700">Frequency</label>
      <div className="flex space-x-2">
        <ToggleGroup type="multiple" variant={'outline'}>
          <ToggleGroupItem value="daily">Daily</ToggleGroupItem>
          <ToggleGroupItem value="weekly">Weekly</ToggleGroupItem>
          <ToggleGroupItem value="monthly">Monthly</ToggleGroupItem>
          <ToggleGroupItem value="quarterly">Quarterly</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <span>Every</span>
      <Input type="number" className="w-16" defaultValue="1" />
      <span>days</span>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Schedule</label>
      <div className="">
        <ToggleGroup type="multiple">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
            <ToggleGroupItem key={day} value={day} variant="outline" className="w-full">{day}</ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Shifts</label>
      <MySelectBox placeholder={'Shift'} content={[
        { text: 'Shift 1: 12:00AM-6:00AM', value: 's1' },
        { text: 'Shift 2: 6:00AM-12:00PM', value: 's2' },
        { text: 'Shift 3: 12:00PM-6:00PM', value: 's3' },
        { text: 'Shift 4: 6:00PM-12:00AM', value: 's4' },
      ]} />
    </div>
    <div>
      <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
      <SelectDate dateProp={date} />
    </div>
  </div>
);

const ExtrasTab = () => (
  <div className="space-y-4">
    <div>
      <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes & Instructions</label>
      <Textarea id="notes" placeholder="Wear protective eyewear, gloves and remember to inform the foreman before commencing round" />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Attachments</label>
      <Button variant="outline" className="mt-2">Add Attachment</Button>
    </div>
  </div>
);

interface Round {
  id: string;
  title: string;
  frequency: string;
  startDate: string;
  responsibility: string;
}

const RoundList: React.FC = () => {
  const [rounds] = useState<Round[]>([
    { id: '1', title: 'Daily Inspection', frequency: 'Daily', startDate: '2024-08-30', responsibility: 'Manager' },
    { id: '2', title: 'Weekly Maintenance', frequency: 'Weekly', startDate: '2024-09-01', responsibility: 'Supervisor' },
    // Add more sample rounds as needed
  ]);

  const [selectedRound, setSelectedRound] = useState<Round | null>(null);
  const [modalMode, setModalMode] = useState<'view' | 'edit'>('view');

  const handleAction = (round: Round, action: 'view' | 'edit' | 'delete') => {
    if (action === 'delete') {
      // Implement delete functionality
      console.log('Delete round:', round.id);
    } else {
      setSelectedRound(round);
      setModalMode(action);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Existing Rounds</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Frequency</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>Responsibility</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rounds.map((round) => (
            <TableRow key={round.id}>
              <TableCell>{round.title}</TableCell>
              <TableCell>{round.frequency}</TableCell>
              <TableCell>{round.startDate}</TableCell>
              <TableCell>{round.responsibility}</TableCell>
              <TableCell>
                <div className="space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" onClick={() => handleAction(round, 'view')}>View</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{modalMode === 'view' ? 'View Round' : 'Edit Round'}</DialogTitle>
                      </DialogHeader>
                      <RoundModal round={selectedRound} mode={modalMode} />
                    </DialogContent>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="default" onClick={() => handleAction(round, 'edit')}>Edit</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Round</DialogTitle>
                      </DialogHeader>
                      <RoundModal round={selectedRound} mode="edit" />
                    </DialogContent>
                  </Dialog>
                  <Button variant="destructive" onClick={() => handleAction(round, 'delete')}>Delete</Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

interface RoundModalProps {
  round: Round | null;
  mode: 'view' | 'edit';
}

const RoundModal: React.FC<RoundModalProps> = ({ round, mode }) => {
  if (!round) return null;

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <Input value={round.title} readOnly={mode === 'view'} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Frequency</label>
        <Input value={round.frequency} readOnly={mode === 'view'} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Start Date</label>
        <Input value={round.startDate} readOnly={mode === 'view'} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Responsibility</label>
        <Input value={round.responsibility} readOnly={mode === 'view'} />
      </div>
      {mode === 'edit' && (
        <Button onClick={() => console.log('Save changes')}>Save Changes</Button>
      )}
    </div>
  );
};

const PlanRounds: React.FC = () => {
  return (
    <div className="space-y-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Define Round Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="scheduling">Scheduling & Assignment</TabsTrigger>
              <TabsTrigger value="extras">Extras</TabsTrigger>
            </TabsList>
            <TabsContent value="details">
              <DetailsTab />
            </TabsContent>
            <TabsContent value="scheduling">
              <SchedulingTab />
            </TabsContent>
            <TabsContent value="extras">
              <ExtrasTab />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      <RoundList />
    </div>
  );
};

export default PlanRounds;