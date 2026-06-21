import { Request, Response, NextFunction } from "express";

export const createCategory = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const {name} = request.body;
    if(!name) {
        return response.status(400).json({error: "Vui long gui len category"})
    }
    next();
};
export const updateCategory = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const {name} = request.body;
    if (name !== undefined && typeof name !== "string") {
        return response.status(400).json({error: "Category phai la string"})
    }
    next();
};