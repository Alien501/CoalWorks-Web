import { RequestHandler, Request, Response, NextFunction } from "express";
import { prisma } from "../../utils/prisma";

const getMineById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    try {
        const mine = await prisma.mine.findUnique({
            where: { mineId: parseInt(id, 10) },
            include: {
                owner: true, // Fetch owner details
            },
        });

        if (!mine) {
            return res.status(404).json({
                message: "Mine not found.",
                error: null,
                data: null,
            });
        }

        res.status(200).json({
            message: "Mine fetched successfully!",
            data: mine,
            error: null,
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch the mine.",
            error: error,
            data: null,
        });
    }
};

export {
    getMineById
}