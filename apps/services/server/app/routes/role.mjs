import { prismaRead, prismaWrite } from "../db/prisma.mjs";


const createRole = async (req, res) => {
    const { role_name } = req.body;
    try {
        if (!role_name) {
            return res.status(400).json({ message: 'Role name is required.' });
        }
        const existingRole = await prismaRead.role.findUnique({
            where: { role_name: role_name }
        });

        if (existingRole) {
            return res.status(400).json({ message: 'Role already exists.' });
        }
        const newRole = await prismaWrite.role.create({
            data: {
                role_name: role_name
            }
        });
        res.status(201).json({ message: 'Role created successfully', role: newRole });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while creating the role.' });
    }
};

const getAllRoles = async (req, res) => {
    try {
        const roles = await prismaRead.role.findMany();
        res.status(200).json(roles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while fetching roles.' });
    }
};

const getRole = async (req, res) => {
    const { role_id } = req.params;
    try {
        const role = await prismaWrite.role.findUnique({
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
};

const deleteRole = async (req, res) => {
    const { role_id } = req.params;
    const existingRole = await prismaRead.role.findUnique({
        where: { role_id: role_id }
    });
    if(!existingRole)
        return res.status(404).send('Role not found!');
    const deleteThisRole = await prismaWrite.role.delete({
        where: {
            role_id: role_id
        }
    })
    if(deleteThisRole)
        return res.status(200).send({message: 'Deleted this role successfully!'});
    return res.status(500).send({ message: 'Somthing went wrong while deleting this role!' })
}

export {
    createRole,
    getAllRoles,
    getRole,
    deleteRole
}