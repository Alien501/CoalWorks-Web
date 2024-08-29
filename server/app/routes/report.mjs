import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createReport = async (req, res) => {
  const { report_type, generated_by_id, date_generated, content } = req.body;
  if (!report_type || !generated_by_id || !date_generated || !content) {
    return res.status(400).send({ message: 'All fields are required!' });
  }

  try {
    const newReport = await prisma.report.create({
      data: {
        report_type,
        generated_by_id: parseInt(generated_by_id),
        date_generated: new Date(date_generated),
        content
      }
    });
    return res.status(201).send({ message: 'Report created successfully', data: newReport });
  } catch (error) {
    return res.status(500).send({ message: 'Error creating report', error: error.message });
  }
};

const getAllReports = async (req, res) => {
  try {
    const allReports = await prisma.report.findMany({
      include: {
        generated_by: true
      }
    });
    return res.status(200).send({ message: 'All reports retrieved', data: allReports });
  } catch (error) {
    return res.status(500).send({ message: 'Error retrieving reports', error: error.message });
  }
};

const getReport = async (req, res) => {
  const { report_id } = req.params;
  try {
    const report = await prisma.report.findUnique({
      where: { report_id: parseInt(report_id) },
      include: {
        generated_by: true
      }
    });
    if (!report) {
      return res.status(404).send({ message: 'Report not found' });
    }
    return res.status(200).send({ message: 'Report retrieved', data: report });
  } catch (error) {
    return res.status(500).send({ message: 'Error retrieving report', error: error.message });
  }
};

export {
  createReport,
  getAllReports,
  getReport
};