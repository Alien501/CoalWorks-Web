export interface Worker {
    id: number;
    name: string;
    role: string;
    department: string;
    shiftStart: string;
    shiftEnd: string;
    currentTask: string;
    taskProgress: number;
    location: string;
    contactInfo: string;
    lastTasks: string[];
    activeHours: number;
    fatigueRisk: boolean;
  }  

export const workerData: Worker[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Logistics",
    department: "Operations",
    shiftStart: "08:00",
    shiftEnd: "16:00",
    currentTask: "Inventory Management",
    taskProgress: 75,
    location: "Warehouse A",
    contactInfo: "+1234567890",
    lastTasks: ["Equipment Check", "Shipment Processing", "Team Briefing"],
    activeHours: 6,
    fatigueRisk: false
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Safety Officer",
    department: "Safety",
    shiftStart: "07:00",
    shiftEnd: "15:00",
    currentTask: "Site Inspection",
    taskProgress: 60,
    location: "Pit B",
    contactInfo: "+1987654321",
    lastTasks: ["Safety Drill", "Equipment Audit", "Incident Report Filing"],
    activeHours: 7,
    fatigueRisk: false
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Mining Engineer",
    department: "Mining",
    shiftStart: "06:00",
    shiftEnd: "18:00",
    currentTask: "Blast Planning",
    taskProgress: 90,
    location: "Pit A",
    contactInfo: "+1122334455",
    lastTasks: ["Geological Survey", "Equipment Maintenance", "Team Coordination"],
    activeHours: 11,
    fatigueRisk: true
  },
  // Add more mock data as needed
];

export const getActiveWorkers = () => workerData.length;

export const getWorkerIncrease = () => {
  // Mock function to calculate percentage increase
  const previousShiftWorkers = 45; // Assuming previous shift had 45 workers
  const currentWorkers = getActiveWorkers();
  const percentageChange = ((currentWorkers - previousShiftWorkers) / previousShiftWorkers) * 100;
  return percentageChange.toFixed(1);
};

export const filterWorkers = (workers: Worker[], search: string, department: string) => {
  return workers.filter(worker => 
    (worker.name.toLowerCase().includes(search.toLowerCase()) || 
     worker.role.toLowerCase().includes(search.toLowerCase())) &&
    (department === "All" || worker.department === department)
  );
};

