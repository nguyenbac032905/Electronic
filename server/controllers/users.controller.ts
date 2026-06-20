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