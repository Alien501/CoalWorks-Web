import { RequestHandler, Request, Response } from "express";
import { prisma } from "../../utils/prisma";

const deleteMine: RequestHandler = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedMine = await prisma.mine.delete({
            where: { mineId: parseInt(id, 10) },
        });

        res.status(200).json({
            message: "Mine deleted successfully!",
            data: deletedMine,
            error: null,
        });
    } catch (error) {
        res.status(400).json({
            message: "Failed to delete the mine.",
            error: error,
            data: null,
        });
    }
};

export {
    deleteMine
}