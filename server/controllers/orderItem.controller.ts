import { Request, Response } from "express";
import prisma from "../utils/db";

export const getOrderItemByOrderID = async (
    request: Request,
    response: Response
) => {
    try {
        const orderID = request.params.orderID as string;
        const orderItems = await prisma.orderItem.findMany({
            where: {
                orderID: orderID
            },
            include: {
                product: {
                    select: {
                        title: true,
                        mainImage: true
                    }
                }
            }
        });
        return response.status(200).json(orderItems);

    } catch (error) {
        return response.status(500).json({
            error: "Server Error"
        });
    }
};
export const createOrderItem = async (
    request: Request,
    response: Response
) => {
    try {
        const { orderID, productId, price, quantity } = request.body;
        // check order
        const existOrder = await prisma.order.findUnique({
            where: {
                id: orderID
            }
        });
        if (!existOrder) {
            return response.status(400).json({
                error: "OrderID không tồn tại"
            });
        }

        // check product
        const existProduct = await prisma.product.findUnique({
            where: {
                id: productId
            }
        });
        if (!existProduct) {
            return response.status(400).json({
                error: "Product không tồn tại"
            });
        }

        const orderItem = await prisma.orderItem.create({
            data: {
                orderID,
                productId,
                price,
                quantity
            }
        });
        return response.status(201).json(orderItem);

    } catch (error) {
        return response.status(500).json({
            error: "Server Error"
        });

    }
};