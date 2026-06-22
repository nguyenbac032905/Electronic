import { Request, Response } from "express";
import prisma from "../utils/db";

export const index = async (request: Request, response: Response) => {
    const filters = request.query.filters as any;
    const sort = request.query.sort as any;
    const search = request.query.search as any;
    const page = request.query.page ? Number(request.query.page): null;;


    let where: any = {};
    let orderBy: any = {};
    
    //search
    if (search) {
        where.OR = [
            {
                title: {
                    contains: search
                },
            },
            {
                description: {
                    contains: search
                },
            },
            {
                manufacturer: {
                    contains: search
                },
            },
            {
                category: {
                    contains: search
                },
            },
        ];
    }

    // filter
    if (filters) {
        for (const field in filters) {
            const operators = filters[field];

            if (!where[field]) {
                where[field] = {};
            }

            for (const operator in operators) {
                const value = operators[operator];

                switch (operator) {
                    case "$lte":
                        where[field].lte = Number(value);
                        break;

                    case "$gte":
                        where[field].gte = Number(value);
                        break;

                    case "$equals":
                        where[field].equals = isNaN(Number(value))
                            ? value
                            : Number(value);
                        break;

                    case "$lt":
                        where[field].lt = Number(value);
                        break;

                    case "$gt":
                        where[field].gt = Number(value);
                        break;

                    case "$contains":
                        where[field].contains = value;
                        break;
                }
            }
        }
    }

    //sort
    switch (sort) {
        case "titleAsc":
            orderBy = {
                title: "asc",
            };
            break;

        case "titleDesc":
            orderBy = {
                title: "desc",
            };
            break;

        case "lowPrice":
            orderBy = {
                price: "asc",
            };
            break;

        case "highPrice":
            orderBy = {
                price: "desc",
            };
            break;

        default:
            orderBy = {};
            break;
    }
    
    const queryOptions: any = {
        where,
        orderBy,
    };

    if (page) {
        queryOptions.skip = (page - 1) * 1;
        queryOptions.take = 1;
    }

    const products = await prisma.product.findMany(queryOptions);
    
    return response.status(200).json(products);
};
export const getProductDetail = async (request: Request, response: Response) => {
    if (typeof request.params.productSlug !== "string") {
        return response.status(400).json({
            error: "Product slug must be string",
        });
    }
    const productSlug = request.params.productSlug;

    const product = await prisma.product.findUnique({
        where: { slug: productSlug }
    });
    if (!product) {
        return response.status(404).json({ error: "404 Not Found" });
    }
    return response.status(200).json(product);
}
export const createProduct = async (request: Request, response: Response) => {
    try {
        const { slug, title, mainImage, price, description, manufacturer, category, inStock } = request.body;
        const product = await prisma.product.create({
            data: {
                slug,
                title,
                mainImage,
                price,
                description,
                manufacturer,
                category,
                inStock
            }
        });
        return response.status(201).json(product);
    } catch (error) {
        return response.status(500).json({ error: "Server error" });
    }
}
export const updateProduct = async (request: Request, response: Response) => {
    try {
        const productSlug = request.params.productSlug;
        if (typeof productSlug !== "string") {
            return response.status(400).json({
                error: "Product slug must be string",
            });
        }

        const acceptUpdate = [
            "slug",
            "title",
            "mainImage",
            "price",
            "description",
            "manufacturer",
            "category",
            "inStock",
        ];

        const objectUpdate: any = {};

        acceptUpdate.forEach((item) => {
            if (request.body[item] !== undefined) {
                objectUpdate[item] = request.body[item];
            }
        });

        const product = await prisma.product.update({
            where: { slug: productSlug },
            data: objectUpdate,
        });

        return response.status(200).json(product);
    } catch (error: any) {
        if (error.code === "P2025") {
            return response.status(404).json({ error: "Not found" });
        }
        return response.status(500).json({ error: "Server error" });
    }
};
export const deleteProduct = async (request: Request, response: Response) => {
    try {
        const productSlug = request.params.productSlug
        if (typeof productSlug !== "string") {
            return response.status(400).json({ error: "Product slug must be string" });
        }
        await prisma.product.delete({
            where: {
                slug: productSlug
            }
        })
        return response.status(200).json({ message: "Delete success" });
    } catch (error: any) {
        if (error.code === "P2025") {
            return response.status(404).json({ error: "Not found" });
        }
        return response.status(500).json({ error: "Server error" });
    }
}