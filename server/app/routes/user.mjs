import express, { Router } from "express"
import { PrismaClient } from '@prisma/client'
import bcrypt from "bcrypt"
const prisma = new PrismaClient()
export const user = express.Router()

user.post('/createUser', async (req, res) => {
    const { username, password, email, contact_number, status, role_id } = req.body;
    try {
        if (!username || !password || !role_id) {
            return res.status(400).json({ message: 'Username, password, and role_id are required.' });
        }
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { username: username },
                    { email: email }
                ]
            }
        });
        if (existingUser) {
            return res.status(400).json({ message: 'Username or email already exists.' });
        }
        const password_hash = await bcrypt.hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                username: username,
                password_hash: password_hash,
                email: email,
                contact_number: contact_number,
                status: status,
                role_id: role_id
            }
        });
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while creating the user' });
    }
});

user.get('/getAllUsers', async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            include: {
                role: true 
            }
        });
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while fetching users' });
    }
});

user.get('/getUser/:user_id', async (req, res) => {
    const { user_id } = req.params;

    try {
        const user = await prisma.user.findUnique({
            where: {
                user_id: parseInt(user_id)
            },
            include: {
                role: true 
            }
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while fetching the user' });
    }
});


