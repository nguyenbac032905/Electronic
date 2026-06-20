import { Request, Response } from "express";
import prisma from "../utils/db";

export const index = async (request: Request, response: Response) => {
    try {
        const users = await prisma.user.findMany({});
        response.status(200).json(users);
    } catch (error) {
        response.status(500).json({error: "Server error"});
    }
}
export const getUserByID = async (request: Request,response: Response) => {
    try {
        const userID = request.params.userID as string;
        const user = await prisma.user.findUnique({
            where: {
                id: userID
            },
            select: {
                id: true,
                email: true
            }
        });
        
        if (!user) {
            return response.status(404).json({
                error: "User not found"
            });
        }

        return response.status(200).json(user);
    } catch (error) {
        return response.status(500).json({
            error: "Server error"
        });
    }
};
