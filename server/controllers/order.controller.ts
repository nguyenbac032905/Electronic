import { Request, Response } from "express";
import prisma from "../utils/db";

export const createOrder = async (request: Request, response: Response) => {
    try {
        const newOrder = await prisma.order.create({
            data: {
                name: request.body.name,
                lastname: request.body.lastname,
                phone: request.body.phone,
                email: request.body.email,
                cardName: request.body.cardName,
                cardNumber: request.body.cardNumber,
                expirationDate: request.body.expirationDate,
                cvc: request.body.cvc,
                company: request.body.company,
                address: request.body.address,
                apartment: request.body.apartment,
                city: request.body.city,
                country: request.body.country,
                postalCode: request.body.postalCode
            }
        })
        return response.status(201).json({ newOrder });
    } catch (error) {
        return response.status(500).json({ error: "Server error" });
    }
}
export const index = async (request: Request, response: Response) => {
    try {
        const orders = await prisma.order.findMany({});
        return response.status(200).json(orders);
    } catch (error) {
        return response.status(500).json({error: "Server error"});
    }
}
export const detail = async (request: Request, response: Response) => {
    try {
        const id = request.params.orderID as string;
        const order = await prisma.order.findUnique({
            where: {
                id : id
            }
        })
        if(!order){
            return response.status(404).json({error: "Order not found"});
        }
        return response.status(200).json(order);
    } catch (error) {
        return response.status(500).json({error: "Server error"});
    }
}