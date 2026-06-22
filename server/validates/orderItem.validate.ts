import { Request, Response, NextFunction } from "express";

export const createOrderItem = (
    request: Request,
    response: Response,
    next: NextFunction
) => {

    const { orderID, productId, price, quantity } = request.body;

    // empty
    if (!orderID) {
        return response.status(400).json({
            message: "Order ID is required"
        });
    }

    if (!productId) {
        return response.status(400).json({
            message: "Product ID is required"
        });
    }

    if (price === undefined) {
        return response.status(400).json({
            message: "Price is required"
        });
    }

    if (quantity === undefined) {
        return response.status(400).json({
            message: "Quantity is required"
        });
    }

    // validate number
    if (isNaN(price) || Number(price) <= 0) {
        return response.status(400).json({
            message: "Price must be greater than 0"
        });
    }

    if (isNaN(quantity) || Number(quantity) <= 0) {
        return response.status(400).json({
            message: "Quantity must be greater than 0"
        });
    }

    next();
};