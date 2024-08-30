import { Router } from "express";
import { createUser, getAllUsers, getUser } from "./user.mjs";
import { createRole, getAllRoles, getRole } from "./role.mjs";
import { createShift, getAllShifts, updateShiftSchedule } from "./shift.mjs";
import { createTask, getAllTasks, getTasks, putTask, tasksStatus } from "./tasks.mjs";
import { createAlert, getAlert, getAllAlerts, updateAlertStatus } from "./alerts.mjs";
import { createMachinery, getAllMachinery, getMachinery, updateMachineryStatus, updateMachineryMaintenance } from "./machinery.mjs";
import { createSafetyCompliance, getAllSafetyCompliances, getSafetyCompliance, updateComplianceStatus } from "./safetyCompliance.mjs";
import { createUser, deleteUser, getAllUsers, getUser } from "./user.mjs";
import { createRole, deleteRole, getAllRoles, getRole } from "./role.mjs";
import { createShift, deleteShift, getAllShifts, updateShiftSchedule } from "./shift.mjs";
import { createTask, deleteTask, getAllTasks, getTasks, putTask, tasksStatus } from "./tasks.mjs";
import { createAlert, deleteAlert, getAlert, getAllAlerts, updateAlertStatus } from "./alerts.mjs";
import { createMachinery, getAllMachinery, getMachinery, updateMachineryStatus, updateMachineryMaintenance, deleteMachinery } from "./machinery.mjs";
import { createSafetyCompliance, deleteSafety, getAllSafetyCompliances, getSafetyCompliance, updateComplianceStatus } from "./safetyCompliance.mjs";
import { createReport, getAllReports, getReport } from "./report.mjs";
import { createPayroll, deletePayroll, getAllPayrolls, getPayroll, updatePayrollHours, updatePayrollSalary } from "./payroll.mjs";
import { createIncident, deleteIncident, getAllIncidents, getIncident, modifyIncident } from "./incident.mjs";
const router = Router();

router.get('/', (req, res) => {
  return res.status(200).send({
    message: 'Working Fine!',
    status: 200
  });
});

// User Routes
router.post('/user/create', createUser);
router.get('/user/all', getAllUsers);
router.get('/user/:user_id', getUser);
router.delete('/user/delete/:user_id', deleteUser);

// Role Routes
router.post('/role/create', createRole);
router.get('/role/all', getAllRoles);
router.get('/role/:role_id', getRole);
router.delete('/role/detele/:role_id', deleteRole);

// Shift Routes
router.post('/shift/create', createShift);
router.get('/shift/all', getAllShifts);
router.put('/shift/update/:shift_id', updateShiftSchedule);
router.delete('/shift/delete/:shift_id', deleteShift);

// Task Routes
router.post('/tasks/create', createTask);
router.put('/tasks/:task_id', putTask);
router.get('/tasks/:task_id', getTasks);
router.get('/tasks/all', getAllTasks);
router.put('/tasks/status/:task_id', tasksStatus);
router.delete('/tasks/delete/:task_id', deleteTask);

// Incidenets Routes
router.post('/incidents/createIncident', createIncident);
router.put('/incidents/:incident_id', modifyIncident);
router.get('/incidents/:incident_id', getIncident);
router.get('/incidents/all', getAllIncidents);
router.delete('/incidents/delete/:incident_id', deleteIncident);

// Alerts
router.post('/alerts/create', createAlert);
router.get('/alerts/all', getAllAlerts);
router.get('/alerts/:alert_id', getAlert);
router.put('/alerts/updateStatus', updateAlertStatus);
router.delete('/alerts/delete/:alert_id', deleteAlert);

// Machinery Routes
router.post('/machinery/create', createMachinery);
router.get('/machinery/all', getAllMachinery);
router.get('/machinery/:machine_id', getMachinery);
router.put('/machinery/status/:machine_id', updateMachineryStatus);
router.put('/machinery/maintenance/:machine_id', updateMachineryMaintenance);
router.delete('/machinery/delete/:machine_id', deleteMachinery);

// Safety Compliance Routes
router.post('/safety-compliance/create', createSafetyCompliance);
router.get('/safety-compliance/all', getAllSafetyCompliances);
router.get('/safety-compliance/:compliance_id', getSafetyCompliance);
router.put('/safety-compliance/status/:compliance_id', updateComplianceStatus);
router.delete('/safety-compliance/delete/:compliance_id', deleteSafety);

// Report Routes
router.post('/report/create', createReport);
router.get('/report/all', getAllReports);
router.get('/report/:report_id', getReport);
router.delete('/report/delete/:report_id', getReport);

// Payroll Routes
router.post('/payroll/create', createPayroll);
router.get('/payroll/all', getAllPayrolls);
router.get('/payroll/:payroll_id', getPayroll);
router.put('/payroll/hours/:payroll_id', updatePayrollHours);
router.delete('/payroll/delete/:payroll_id', deletePayroll);


export { router };