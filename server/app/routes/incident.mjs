import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createIncident = async (req, res) => {
    const { reported_by_id, incident_type, description, date_reported, status, assigned_to_id } = req.body;
    try {
        const newIncident = await prisma.incident.create({
            data: {
                reported_by_id: parseInt(reported_by_id, 10),
                incident_type,
                description,
                date_reported: new Date(date_reported),
                status: status || "reported",
                assigned_to_id: parseInt(assigned_to_id, 10)
            }
        });
        res.status(201).json({ message: 'Incident created successfully', incident: newIncident });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while creating the incident.' });
    }
};

const modifyIncident = async (req, res) => {
    const { incident_id } = req.params;
    const { status } = req.body;
    try {
        const updatedIncident = await prisma.incident.update({
            where: { incident_id: parseInt(incident_id, 10) },
            data: { status }
        });
        if (!updatedIncident) {
            return res.status(404).json({ message: 'Incident not found.' });
        }
        res.status(200).json({ message: 'Incident status updated successfully', incident: updatedIncident });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while updating the incident status.' });
    }
};

const getIncident = async (req, res) => {
    const { incident_id } = req.params;
    try {
        const incident = await prisma.incident.findUnique({
            where: { incident_id: parseInt(incident_id, 10) }
        });
        if (!incident) {
            return res.status(404).json({ message: 'Incident not found.' });
        }
        res.status(200).json(incident);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while fetching the incident.' });
    }
};

// Get All Incidents
const getAllIncidents = async (req, res) => {
    try {
        const incidentsList = await prisma.incident.findMany();
        res.status(200).json(incidentsList);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while fetching incidents.' });
    }
};

export {
    createIncident,
    modifyIncident,
    getAllIncidents,
    getIncident
}