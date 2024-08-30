import { prismaRead, prismaWrite } from "../db/prisma.mjs";


const createSafetyCompliance = async (req, res) => {
  const { safety_supervisor_id, machine_id, compliance_status, date_checked } = req.body;
  if (!safety_supervisor_id || !machine_id || !compliance_status || !date_checked) {
    return res.status(400).send({ message: 'All fields are required!' });
  }

  try {
    const newCompliance = await prismaWrite.safetyCompliance.create({
      data: {
        safety_supervisor_id: parseInt(safety_supervisor_id),
        machine_id: parseInt(machine_id),
        compliance_status,
        date_checked: new Date(date_checked)
      }
    });
    return res.status(201).send({ message: 'Safety compliance record created', data: newCompliance });
  } catch (error) {
    return res.status(500).send({ message: 'Error creating safety compliance record', error: error.message });
  }
};

const getAllSafetyCompliances = async (req, res) => {
  try {
    const allCompliances = await prismaRead.safetyCompliance.findMany({
      include: {
        safety_supervisor: true,
        machine: true
      }
    });
    return res.status(200).send({ message: 'All safety compliances retrieved', data: allCompliances });
  } catch (error) {
    return res.status(500).send({ message: 'Error retrieving safety compliances', error: error.message });
  }
};

const getSafetyCompliance = async (req, res) => {
  const { compliance_id } = req.params;
  try {
    const compliance = await prismaRead.safetyCompliance.findUnique({
      where: { compliance_id: parseInt(compliance_id) },
      include: {
        safety_supervisor: true,
        machine: true
      }
    });
    if (!compliance) {
      return res.status(404).send({ message: 'Safety compliance record not found' });
    }
    return res.status(200).send({ message: 'Safety compliance record retrieved', data: compliance });
  } catch (error) {
    return res.status(500).send({ message: 'Error retrieving safety compliance record', error: error.message });
  }
};

const updateComplianceStatus = async (req, res) => {
  const { compliance_id } = req.params;
  const { compliance_status } = req.body;
  if (!compliance_status) {
    return res.status(400).send({ message: 'Compliance status is required!' });
  }
  try {
    const updatedCompliance = await prismaWrite.safetyCompliance.update({
      where: { compliance_id: parseInt(compliance_id) },
      data: { compliance_status }
    });
    return res.status(200).send({ message: 'Compliance status updated', data: updatedCompliance });
  } catch (error) {
    return res.status(500).send({ message: 'Error updating compliance status', error: error.message });
  }
};

const deleteSafety = async (req, res) => {
  const { compliance_id } = req.params;
  const complianceId = await prismaRead.safetyCompliance.findFirst({
      where: { compliance_id: compliance_id }
  });

  if (!complianceId) {
      return res.status(404).json({ message: 'Compliance not found.' });
  }

  const deleteThisCompliance = await prismaWrite.safetyCompliance.delete({
      where: {
          compliance_id: compliance_id
      }
  })
  if(deleteThisCompliance)
      return res.status(200).send({ message: 'Deleted safety compliance sucessfully!' })
  return res.status(500).send({ message: "Somthing went wrong while deleting!" })
}

export {
  createSafetyCompliance,
  getAllSafetyCompliances,
  getSafetyCompliance,
  updateComplianceStatus,
  deleteSafety
};