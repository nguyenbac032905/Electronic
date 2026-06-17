import { Request, Response } from "express";
import prisma from "../utils/db";

export const getSingleProductImages = async (request: Request,response: Response) => {
    const productID = request.params.productID as string;

    const images = await prisma.image.findMany({
        where: {productID: productID}
    });

    if(images.length === 0){
        return response.status(400).json({error: "Images not found"});
    }

    return response.status(200).json(images);
}