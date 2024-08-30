import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createPayroll = async (req, res) => {
  const { user_id, shift_id, hours_worked, overtime_hours, salary } = req.body;
  if (!user_id || !shift_id || hours_worked === undefined || overtime_hours === undefined || salary === undefined) {
    return res.status(400).send({ message: 'All fields are required!' });
  }

  try {
    const newPayroll = await prisma.payroll.create({
      data: {
        user_id: parseInt(user_id),
        shift_id: parseInt(shift_id),
        hours_worked: parseFloat(hours_worked),
        overtime_hours: parseFloat(overtime_hours),
        salary: parseFloat(salary)
      }
    });
    return res.status(201).send({ message: 'Payroll record created successfully', data: newPayroll });
  } catch (error) {
    return res.status(500).send({ message: 'Error creating payroll record', error: error.message });
  }
};

const getAllPayrolls = async (req, res) => {
  try {
    const allPayrolls = await prisma.payroll.findMany({
      include: {
        user: true,
        shift: true
      }
    });
    return res.status(200).send({ message: 'All payroll records retrieved', data: allPayrolls });
  } catch (error) {
    return res.status(500).send({ message: 'Error retrieving payroll records', error: error.message });
  }
};

const getPayroll = async (req, res) => {
  const { payroll_id } = req.params;
  try {
    const payroll = await prisma.payroll.findUnique({
      where: { payroll_id: parseInt(payroll_id) },
      include: {
        user: true,
        shift: true
      }
    });
    if (!payroll) {
      return res.status(404).send({ message: 'Payroll record not found' });
    }
    return res.status(200).send({ message: 'Payroll record retrieved', data: payroll });
  } catch (error) {
    return res.status(500).send({ message: 'Error retrieving payroll record', error: error.message });
  }
};

const updatePayrollHours = async (req, res) => {
  const { payroll_id } = req.params;
  const { hours_worked, overtime_hours } = req.body;
  if (hours_worked === undefined && overtime_hours === undefined) {
    return res.status(400).send({ message: 'Hours worked or overtime hours must be provided!' });
  }
  try {
    const updatedPayroll = await prisma.payroll.update({
      where: { payroll_id: parseInt(payroll_id) },
      data: {
        ...(hours_worked !== undefined && { hours_worked: parseFloat(hours_worked) }),
        ...(overtime_hours !== undefined && { overtime_hours: parseFloat(overtime_hours) })
      }
    });
    return res.status(200).send({ message: 'Payroll hours updated successfully', data: updatedPayroll });
  } catch (error) {
    return res.status(500).send({ message: 'Error updating payroll hours', error: error.message });
  }
};

const updatePayrollSalary = async (req, res) => {
  const { payroll_id } = req.params;
  const { salary } = req.body;
  if (salary === undefined) {
    return res.status(400).send({ message: 'Salary must be provided!' });
  }
  try {
    const updatedPayroll = await prisma.payroll.update({
      where: { payroll_id: parseInt(payroll_id) },
      data: { salary: parseFloat(salary) }
    });
    return res.status(200).send({ message: 'Payroll salary updated successfully', data: updatedPayroll });
  } catch (error) {
    return res.status(500).send({ message: 'Error updating payroll salary', error: error.message });
  }
};

const deletePayroll = async (req, res) => {
  const { payroll_id } = req.params;
  const payrollId = await prisma.payroll.findFirst({
      where: { payroll_id: payroll_id }
  });

  if (!payrollId) {
      return res.status(404).json({ message: 'Payroll not found.' });
  }

  const deleteThisPayroll = await prisma.payroll.delete({
      where: {
          payroll_id: payroll_id
      }
  })
  if(deleteThisPayroll)
      return res.status(200).send({ message: 'Deleted Payroll sucessfully!' })
  return res.status(500).send({ message: "Somthing went wrong while deleting!" })
}

export {
  createPayroll,
  getAllPayrolls,
  getPayroll,
  updatePayrollHours,
  updatePayrollSalary,
  deletePayroll
};