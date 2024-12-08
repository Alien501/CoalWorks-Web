import { useState } from 'react';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/components/ui/tabs';
import { 
  BarChart2, 
  ClipboardList, 
  Users, 
  Route, 
  Eye, 
  FileText, 
  LineChart 
} from 'lucide-react';
import LogsTable from '@/components/custom/logsTable';
import ControlPlanTable from '@/components/custom/controlPlanTable';
import OperatorNotes from '@/components/custom/operatorNotes';
import OperatorTable from '@/components/custom/operatorTable';
import { ShiftSummary } from '@/components/custom/shiftSummart';


type TabValue = 'summary' | 'trends' | 'logs' | 'controlPlan' | 'observations' | 'notes' | 'operators' | 'statutory';

interface TabItem {
  value: TabValue;
  label: string;
  icon: React.ReactNode;
}

const tabs: TabItem[] = [
  { value: 'summary', label: 'Summary', icon: <BarChart2 className="w-4 h-4" /> },
  { value: 'logs', label: 'Logs', icon: <ClipboardList className="w-4 h-4" /> },
  { value: 'controlPlan', label: 'Control Plan', icon: <Route className="w-4 h-4" /> },
  { value: 'notes', label: 'Notes', icon: <FileText className="w-4 h-4" /> },
  { value: 'operators', label: 'Operators', icon: <Users className="w-4 h-4" /> },
  { value: 'statutory', label: 'Statutory Report', icon: <Users className="w-4 h-4" /> },
];

export function ShiftHandover2() {
  const [activeTab, setActiveTab] = useState<TabValue>('summary');

  return (
    <div className="w-full ">
      <div className="border-b py-4 px-5">
        <h2 className='text-xl font-semibold'>Supervisor</h2>
      </div>
      <div className="p-0 h-[calc(100vh-65px)]">
        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as TabValue)}
          orientation="vertical"
          className="flex justify-start"
        >
          <TabsList className="flex flex-col h-full space-y-2 bg-muted/50 p-4 ">
            {tabs.map((tab, index) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none w-full"
              >
                <TabItem
                  icon={tab.icon}
                  label={tab.label}
                  isActive={activeTab === tab.value}
                  isFirst={index === 0}
                  isLast={index === tabs.length - 1}
                  stepNumber={index + 1}
                />
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="flex-1">
            <TabsContent value="summary" className="mt-0 ">
              <ShiftSummary></ShiftSummary>
            </TabsContent>

            <TabsContent value="logs" className="mt-0 p-3">
              <LogsTable></LogsTable>
            </TabsContent>

            <TabsContent value="controlPlan" className="mt-0">
              <ControlPlanTable></ControlPlanTable>
            </TabsContent>

            <TabsContent value="notes" className="mt-0">
              <OperatorNotes></OperatorNotes>
            </TabsContent>

            <TabsContent value="operators" className="mt-0">
              <OperatorTable></OperatorTable>
            </TabsContent>

            <TabsContent value="statutory" className="mt-0">
              <OperatorTable></OperatorTable>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

interface TabItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  isFirst: boolean;
  isLast: boolean;
  stepNumber: number;
}

export function TabItem({ icon, label, isActive, isFirst, isLast, stepNumber }: TabItemProps) {
  return (
    <div className="relative flex items-center w-full group">
      {!isFirst && (
        <div 
          className={`absolute -top-[60%] left-[30px] w-[2px] h-[100%] ${isActive ? 'bg-primary' : 'bg-border'}`}
        />
      )}
      <div className={`relative z-10 flex items-center w-full gap-3 px-4 py-3 rounded-lg  transition-colors ${isActive && 'bg-primary/5'}`}>
        <div className={`flex items-center justify-center w-[30px] h-[30px] rounded-full border-2 transition-colors ${isActive ? 'border-primary bg-primary text-primary-foreground' : 'border-muted-foreground bg-background text-muted-foreground'}`}>
          <span className="text-sm font-medium">{stepNumber}</span>
        </div>
        <span className={`w-5 h-5 transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
          {icon}
        </span>
        <span className={`font-medium transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
          {label}
        </span>
      </div>
    </div>
  );
}