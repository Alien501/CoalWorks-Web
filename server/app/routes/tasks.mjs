import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const tasks = express.Router();

const createTask = async (req, res) => {
    const { task_description, assigned_to_id, shift_id, status } = req.body;

    try {
        if (!task_description || !assigned_to_id || !shift_id) {
            return res.status(400).json({ message: 'Missing required fields.' });
        }

        const newTask = await prisma.task.create({
            data: {
                task_description,
                assigned_to_id: parseInt(assigned_to_id, 10),
                shift_id: parseInt(shift_id, 10),
                status: status || "pending"
            }
        });

        res.status(201).json({ message: 'Task created successfully', task: newTask });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while creating the task.' });
    }
};

const putTask = async (req, res) => {
    const { task_id } = req.params;
    const { task_description, assigned_to_id, shift_id, status } = req.body;

    try {
        const updatedTask = await prisma.task.update({
            where: { task_id: parseInt(task_id, 10) },
            data: {
                task_description,
                assigned_to_id: assigned_to_id ? parseInt(assigned_to_id, 10) : undefined,
                shift_id: shift_id ? parseInt(shift_id, 10) : undefined,
                status
            }
        });

        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found.' });
        }

        res.status(200).json({ message: 'Task updated successfully', task: updatedTask });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while updating the task.' });
    }
};

const getTasks = async (req, res) => {
    const { task_id } = req.params;

    try {
        const task = await prisma.task.findUnique({
            where: { task_id: parseInt(task_id, 10) },
            include: { assigned_to: true, shift: true }
        });

        if (!task) {
            return res.status(404).json({ message: 'Task not found.' });
        }

        res.status(200).json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while fetching the task.' });
    }
};

const getAllTasks = async (req, res) => {
    try {
        const allTasks = await prisma.task.findMany({
            include: { assigned_to: true, shift: true }
        });

        res.status(200).json(allTasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while fetching tasks.' });
    }
};

const tasksStatus = async (req, res) => {
    const { task_id } = req.params;
    const { status } = req.body;

    try {
        if (!status || typeof status !== 'string') {
            return res.status(400).json({ message: 'Invalid status value.' });
        }

        const updatedTask = await prisma.task.update({
            where: { task_id: parseInt(task_id, 10) },
            data: { status: status }
        });

        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found.' });
        }

        res.status(200).json({ message: 'Task status updated successfully', task: updatedTask });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while updating the task status.' });
    }
};

export {
    createTask,
    putTask,
    getTasks,
    getAllTasks,
    tasksStatus
}