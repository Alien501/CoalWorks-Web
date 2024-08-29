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
