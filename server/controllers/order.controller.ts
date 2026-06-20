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