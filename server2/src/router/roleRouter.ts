import { Router, Response, Request, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { createRole } from "../libs/role/createRole";
import { getAllRoles, getAllRolesById } from "../libs/role/getAllRoles";
import { deleteRole } from "../libs/role/deleteRole";
import { updateRole } from "../libs/role/updateRole";

const roleRouter = Router();

/**
 * @swagger
 * tags:
 *   - name: Roles
 */


/**
 * @swagger
 * /role/create:
 *   post:
 *     summary: Create a new role
 *     description: Creates a new role with permissions.
 *     tags: [Roles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               roleName:
 *                 type: string
 *                 description: Name of the role
 *               description:
 *                 type: string
 *                 description: Description of the role
 *               permissions:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     permissionName:
 *                       type: string
 *                       description: Name of the permission
 *                     permission:
 *                       type: object
 *                       properties:
 *                         canView:
 *                           type: boolean
 *                         canEdit:
 *                           type: boolean
 *                         canCreate:
 *                           type: boolean
 *                         canDelete:
 *                           type: boolean
 *     responses:
 *       201:
 *         description: Role created successfully
 *       400:
 *         description: Bad request, validation errors
 */
roleRouter.post('/create', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await createRole(req, res, next);
}))

/**
 * @swagger
 * /role:
 *   get:
 *     summary: Get all roles
 *     description: Retrieves all the roles available in the system.
 *     tags: [Roles]
 *     responses:
 *       200:
 *         description: List of all roles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   roleName:
 *                     type: string
 *                   description:
 *                     type: string
 *                   permissions:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         permissionName:
 *                           type: string
 *                         permission:
 *                           type: object
 *                           properties:
 *                             canView:
 *                               type: boolean
 *                             canEdit:
 *                               type: boolean
 *                             canCreate:
 *                               type: boolean
 *                             canDelete:
 *                               type: boolean
 *       404:
 *         description: No roles found
 */
roleRouter.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAllRoles(req, res, next);
}))

/**
 * @swagger
 * /role/{roleId}:
 *   get:
 *     summary: Get role by ID
 *     description: Retrieves the role details by its ID.
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: roleId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The role ID to fetch
 *     responses:
 *       200:
 *         description: Role details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 roleName:
 *                   type: string
 *                 description:
 *                   type: string
 *                 permissions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       permissionName:
 *                         type: string
 *                       permission:
 *                         type: object
 *                         properties:
 *                           canView:
 *                             type: boolean
 *                           canEdit:
 *                             type: boolean
 *                           canCreate:
 *                             type: boolean
 *                           canDelete:
 *                             type: boolean
 *       404:
 *         description: Role not found
 */
roleRouter.get('/:roleId', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await getAllRolesById(req, res, next);
}))

/**
 * @swagger
 * /role/{roleId}:
 *   delete:
 *     summary: Delete a role by ID
 *     description: Deletes a role by its ID from the system.
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: roleId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The role ID to delete
 *     responses:
 *       200:
 *         description: Role deleted successfully
 *       404:
 *         description: Role not found
 *       400:
 *         description: Role cannot be deleted because it is assigned to users
 */
roleRouter.delete('/:roleId', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await deleteRole(req, res, next);
}))

/**
 * @swagger
 * /role/{roleId}:
 *   post:
 *     summary: Update an existing role
 *     description: Updates the details of a role by its ID, including role name, description, and permissions.
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: roleId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The role ID to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               roleName:
 *                 type: string
 *                 description: New name for the role
 *               description:
 *                 type: string
 *                 description: New description for the role
 *               permissions:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     permissionName:
 *                       type: string
 *                       description: Name of the permission
 *                     permission:
 *                       type: object
 *                       properties:
 *                         canView:
 *                           type: boolean
 *                         canEdit:
 *                           type: boolean
 *                         canCreate:
 *                           type: boolean
 *                         canDelete:
 *                           type: boolean
 *     responses:
 *       200:
 *         description: Role updated successfully
 *       404:
 *         description: Role not found
 *       400:
 *         description: Bad request, validation errors
 */
roleRouter.post('/:roleId', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await updateRole(req, res, next);
}))


export {
    roleRouter
}