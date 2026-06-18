import { Request, Response } from "express";
import prisma from "../utils/db";

export const getSingleProductImages = async (request: Request, response: Response) => {
    const productID = request.params.productID as string;

    const images = await prisma.image.findMany({
        where: { productID: productID }
    });

    if (images.length === 0) {
        return response.status(400).json({ error: "Images not found" });
    }

    return response.status(200).json(images);
}
export const createImage = async (request: Request, response: Response) => {
    try {
        const { image, productID } = request.body;
        const imageRes = await prisma.image.create({
            data: {
                image, productID
            }
        });
        return response.status(201).json(imageRes);
    } catch (error) {
        return response.status(500).json({ error: "Server error" });
    }
}
export const updateImage = async (request: Request, response: Response) => {
    try {
        const imageID = request.params.imageID;

        if (!imageID || typeof imageID !== "string") {
            return response.status(400).json({ error: "Invalid imageID" });
        }

        const { image, productID } = request.body;

        const data = {
            ...(image !== undefined && { image }),
            ...(productID !== undefined && { productID }),
        };

        const updated = await prisma.image.update({
            where: { imageID },
            data,
        });

        return response.status(200).json(updated);
    } catch (error: any) {
        if (error.code === "P2025") {
            return response.status(404).json({
                error: "Image not found",
            });
        }

        return response.status(500).json({
            error: "Server error",
        });
    }
}
export const deleteImage = async (request: Request, response: Response) => {
    try {
        const imageID = request.params.imageID;

        if (!imageID || typeof imageID !== "string") {
            return response.status(400).json({ error: "Invalid imageID" });
        }

        await prisma.image.delete({
            where: { imageID }
        });

        return response.status(200).json({message: "Delete Success"});
    } catch (error: any) {
        if (error.code === "P2025") {
            return response.status(404).json({
                error: "Image not found",
            });
        }

        return response.status(500).json({
            error: "Server error",
        });
    }
}