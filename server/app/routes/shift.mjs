import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createShift = async (req, res) => {
    const { date, start_time, end_time, supervisor_id, status } = req.body;
    try {
        const supervisor = await prisma.user.findFirst({
            where: { user_id: supervisor_id }
        });

        if (!supervisor) {
            console.log(supervisor)
            return res.status(404).json({ message: 'Supervisor not found.' });
        }
        const newShift = await prisma.shiftSchedule.create({
            data: {
                date: new Date(date),
                start_time: new Date(start_time),
                end_time: new Date(end_time),
                supervisor_id: supervisor_id,
                status: status || "scheduled"
            }
        });

        res.status(201).json({ message: 'Shift created successfully', shift: newShift });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while creating the shift.' });
    }
};

const getAllShifts = async (req, res) => {
    try {
        const shifts = await prisma.shiftSchedule.findMany({
            include: {
                supervisor: true,
                tasks: true,
                payrolls: true
            }
        });
        res.status(200).json(shifts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while fetching shifts.' });
    }
};

const updateShiftSchedule = async (req, res) => {
    const { shift_id } = req.params;
    const { date, supervisorId, status, start_time, end_time } = req.body;

    try {
        const data = {
            date: new Date(date), 
            supervisor_id: supervisorId,
            status,
            start_time: new Date(start_time), 
            end_time: new Date(end_time), 
        };

        // Update the ShiftSchedule table with the provided data
        const result = await prisma.shiftSchedule.update({
            where: { shift_id: parseInt(shift_id) }, 
            data: data,
        });

        if (result) {
            return res.status(200).json({ message: 'Shift updated successfully.' });
        } else {
            return res.status(404).json({ message: 'Shift not found.' });
        }
    } catch (error) {
        console.error('Error updating shift:', error);
        return res.status(500).json({ message: 'An error occurred while updating the shift.' });
    }
};


export {
    createShift,
    getAllShifts,
    updateShiftSchedule
}