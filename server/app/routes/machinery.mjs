import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createMachinery = async (req, res) => {
  const { machine_name, status, last_maintenance_date, location } = req.body;
  if (!machine_name) {
    return res.status(400).send({ message: 'Machine name is required!' });
  }

  try {
    const newMachinery = await prisma.machinery.create({
      data: {
        machine_name,
        status,
        last_maintenance_date,
        location
      }
    });
    return res.status(201).send({ message: 'Machinery created successfully', data: newMachinery });
  } catch (error) {
    return res.status(500).send({ message: 'Error creating machinery', error: error.message });
  }
};

const getAllMachinery = async (req, res) => {
  try {
    const allMachinery = await prisma.machinery.findMany();
    return res.status(200).send({ message: 'All machinery retrieved', data: allMachinery });
  } catch (error) {
    return res.status(500).send({ message: 'Error retrieving machinery', error: error.message });
  }
};

const getMachinery = async (req, res) => {
  const { machine_id } = req.params;
  try {
    const machinery = await prisma.machinery.findUnique({
      where: { machine_id: parseInt(machine_id) }
    });
    if (!machinery) {
      return res.status(404).send({ message: 'Machinery not found' });
    }
    return res.status(200).send({ message: 'Machinery retrieved', data: machinery });
  } catch (error) {
    return res.status(500).send({ message: 'Error retrieving machinery', error: error.message });
  }
};

const updateMachineryStatus = async (req, res) => {
  const { machine_id } = req.params;
  const { status } = req.body;
  if (!status) {
    return res.status(400).send({ message: 'Status is required!' });
  }
  try {
    const updatedMachinery = await prisma.machinery.update({
      where: { machine_id: parseInt(machine_id) },
      data: { status }
    });
    return res.status(200).send({ message: 'Machinery status updated', data: updatedMachinery });
  } catch (error) {
    return res.status(500).send({ message: 'Error updating machinery status', error: error.message });
  }
};

const updateMachineryMaintenance = async (req, res) => {
  const { machine_id } = req.params;
  const { last_maintenance_date } = req.body;
  if (!last_maintenance_date) {
    return res.status(400).send({ message: 'Maintenance date is required!' });
  }
  try {
    const updatedMachinery = await prisma.machinery.update({
      where: { machine_id: parseInt(machine_id) },
      data: { last_maintenance_date: new Date(last_maintenance_date) }
    });
    return res.status(200).send({ message: 'Machinery maintenance date updated', data: updatedMachinery });
  } catch (error) {
    return res.status(500).send({ message: 'Error updating machinery maintenance date', error: error.message });
  }
};

export {
  createMachinery,
  getAllMachinery,
  getMachinery,
  updateMachineryStatus,
  updateMachineryMaintenance
};