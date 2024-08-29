import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const role = express.Router();

role.post("/createRole", async (req, res) => {
    const { role_name } = req.body;
    try {
        if (!role_name) {
            return res.status(400).json({ message: 'Role name is required.' });
        }
        const existingRole = await prisma.role.findUnique({
            where: { role_name: role_name }
        });

        if (existingRole) {
            return res.status(400).json({ message: 'Role already exists.' });
        }
        const newRole = await prisma.role.create({
            data: {
                role_name: role_name
            }
        });
        res.status(201).json({ message: 'Role created successfully', role: newRole });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while creating the role.' });
    }
});

role.get("/getAllRoles", async (req, res) => {
    try {
        const roles = await prisma.role.findMany();
        res.status(200).json(roles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while fetching roles.' });
    }
});

role.get("/getRole/:role_id", async (req, res) => {
    const { role_id } = req.params;
    try {
        const role = await prisma.role.findUnique({
            where: {
                role_id: parseInt(role_id)
            }
        });

        if (!role) {
            return res.status(404).json({ message: 'Role not found.' });
        }
        res.status(200).json(role);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while fetching the role.' });
    }
});
