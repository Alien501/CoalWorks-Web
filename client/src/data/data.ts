type Workers = {
  id: string;
  workerName: string;
  workerType: string;
  workerShift: number; // Assuming this is the shift number, like 1 for morning, 2 for evening, etc.
  workerWorked: number; // Assuming this is the total hours worked
  workerSalary: number; // Adding a field for worker's salary
  workerStatus: string; // Adding a field for status (e.g., "Active", "On Leave")
  hireDate: string; // Adding a field for hire date
  currentWork?: string;
};

const workers: Workers[] = [
  {
    id: "w001",
    workerName: "Santhosh",
    workerType: "Full-Time",
    workerShift: 1, // Morning shift
    workerWorked: 160, // Total hours worked in a month
    workerSalary: 5000, // Monthly salary
    workerStatus: "Active",
    hireDate: "2022-01-15"
  },
  {
    id: "w002",
    workerName: "Dhanush",
    workerType: "Part-Time",
    workerShift: 2, // Evening shift
    workerWorked: 80, // Total hours worked in a month
    workerSalary: 2500, // Monthly salary
    workerStatus: "Active",
    hireDate: "2023-03-22"
  },
  {
    id: "w003",
    workerName: "Rakhul",
    workerType: "Contractor",
    workerShift: 3, // Night shift
    workerWorked: 120, // Total hours worked in a month
    workerSalary: 3000, // Monthly salary
    workerStatus: "On Leave",
    hireDate: "2021-07-01"
  },
  {
    id: "w004",
    workerName: "Avinash",
    workerType: "Full-Time",
    workerShift: 1, // Morning shift
    workerWorked: 170, // Total hours worked in a month
    workerSalary: 5200, // Monthly salary
    workerStatus: "Active",
    hireDate: "2020-11-10"
  },
  {
    id: "w005",
    workerName: "Vignesh",
    workerType: "Part-Time",
    workerShift: 2, // Evening shift
    workerWorked: 90, // Total hours worked in a month
    workerSalary: 2700, // Monthly salary
    workerStatus: "Active",
    hireDate: "2024-05-05"
  }
];

export {
  workers,
  Workers
}