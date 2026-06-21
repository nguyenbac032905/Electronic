import { Request, Response } from "express";
import prisma from "../utils/db"

export const index = async (request: Request, response: Response) => {
    try {
        const categories = await prisma.category.findMany({});
        return response.status(200).json(categories);
    } catch (error) {
        return response.status(500).json({error: "Server error"});
    }
}
export const detail = async (request: Request, response: Response) => {
    try {
        const id = request.params.idCategory as string;
        const category = await prisma.category.findUnique({
            where: {
                id: id
            }
        });
        return response.status(200).json(category);
    } catch (error : any) {
        if(error.code === "P2025"){
            return response.status(404).json({error: "Category not found"});
        }
        return response.status(500).json({error: "Server error"});
    }
}
export const createCategory = async (request: Request, response: Response) => {
    try {
        const category = await prisma.category.create({
            data: {
                name: request.body.name
            }
        })
        return response.status(201).json(category);
    } catch (error) {
        return response.status(500).json({error: "Server error"});
    }
}
export const updateCategory = async (request: Request, response: Response) => {
    try {
        const idCategory = request.params.idCategory as string;
        const category = await prisma.category.update({
            where: {
                id: idCategory
            },
            data: {
                name: request.body.name
            }
        })
        response.status(200).json(category);
    } catch (error: any) {
        if(error.code === "P2025"){
            return response.status(404).json({error: "Category not found"});
        }
        return response.status(500).json({error: "Server error"});
    }
}
export const deleteCategory = async (request: Request, response: Response) => {
    try {
        const idCategory = request.params.idCategory as string;

        await prisma.category.delete({
            where: {
                id: idCategory
            }
        });

        return response.status(200).json({
            message: "Delete Success"
        });
    } catch (error: any) {
        if(error.code === "P2025"){
            return response.status(404).json({error: "Category not found"});
        }
        return response.status(500).json({error: "Server error"});
    }
}