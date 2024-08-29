import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const shift = express.Router();

shift.post("/createShift", async (req, res) => {
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
});

shift.get("/getAllShifts", async (req, res) => {
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
});

shift.put("/updateShiftStatus/:shift_id", async (req, res) => {
    const { shift_id } = req.params;
    const { status } = req.body;

    try {
        if (!status || typeof status !== 'string') {
            return res.status(400).json({ message: 'Invalid status value.' });
        }
        const updatedShift = await prisma.shiftSchedule.update({
            where: { shift_id: parseInt(shift_id, 10) },
            data: { status: status }
        });


        //need to implement 
        // when the shift status is completed we have to change the status of the supervisor (for ex: from active to free)
        if (!updatedShift) {
            return res.status(404).json({ message: 'Shift not found.' });
        }
        res.status(200).json({ message: 'Shift status updated successfully', shift: updatedShift });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while updating the shift status.' });
    }
});
