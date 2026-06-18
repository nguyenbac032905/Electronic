import { Request, Response } from "express";
import prisma from "../utils/db";

export const index = async (request: Request, response: Response) => {
    const dividerLocation = request.url.indexOf("?");
    const queryArray = decodeURIComponent(request.url.substring(dividerLocation+1, request.url.length)).split("&");
    console.log(queryArray)
    let filterArray = [];

    let sortByValue = "defaultSort";

    for(let i=0; i<queryArray.length; i++){
        const match = queryArray[i].match(/filters\[(.*?)\]\[\$(.*?)\]=(.*)/);
        if (match) {
            const [, filterType, filterOperator, filterValue] = match;
            filterArray.push({filterType,filterOperator,filterValue});
        }
        if(queryArray[i].indexOf("sort") !== -1){
            sortByValue = queryArray[i].substring(queryArray[i].indexOf("=")+1,queryArray[i].length);
        }
    }
    
    let filterObj = {};
    for (const item of filterArray) {
        filterObj = {
            ...filterObj,
            [item.filterType]: {
                [item.filterOperator]:item.filterType === "category" ? item.filterValue: Number(item.filterValue)
            }
        };
    }
    
    let sortByObj = {};
    switch (sortByValue) {
        case "titleAsc":
            sortByObj = {
                title: "asc"
            }
            break;
        case "titleDesc":
            sortByObj = {
                title: "desc"
            }
            break;
        case "lowPrice":
            sortByObj = {
                price: "asc"
            }
            break;
        case "highPrice":
            sortByObj = {
                price: "desc"
            }
            break;
    
        default:
            sortByObj = {}
            break;
    }
    
    const products = await prisma.product.findMany({
        where: filterObj,
        orderBy: sortByObj
    });
    return response.json(products);
}
export const getProductDetail = async (request: Request, response: Response) => {
    if(typeof request.params.productSlug !== "string"){
            return response.status(400).json({
                error: "Product slug must be string",
            });
        }
    const productSlug = request.params.productSlug;

    const product = await prisma.product.findUnique({
        where: {slug: productSlug}
    });
    if(!product){
        return response.status(404).json({error: "404 Not Found"});
    }
    return response.status(200).json(product);
}
export const searchProducts = async (request:Request, response: Response) => {
    if(typeof request.query.keyword !== "string"){
        return response.status(400).json({
            error: "Keyword must be string",
        });
    }
    const keyword = request.query.keyword;
    if(!keyword){
        return response.status(400).json({error: "Keyword is required"});
    }
    const products = await prisma.product.findMany({
        where: {
            OR: [
                {
                    title: {
                        contains: keyword
                    }
                },
                {
                    description: {
                        contains: keyword
                    }
                },
                {
                    manufacturer: {
                        contains: keyword
                    }
                },
                {
                    category: {
                        contains: keyword
                    }
                }
            ]
        }
    });
    return response.status(200).json(products);
}
export const createProduct = async (request: Request, response: Response) => {
    try{
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
    }catch(error){
        return response.status(500).json({error: "Server error"});
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
        if(typeof productSlug !== "string"){
            return response.status(400).json({error: "Product slug must be string"});
        }
        await prisma.product.delete({
            where: {
                slug: productSlug
            }
        })
        return response.status(200).json({message: "Delete success"});
    } catch (error: any) {
        if (error.code === "P2025") {
            return response.status(404).json({ error: "Not found" });
        }
        return response.status(500).json({error: "Server error"});
    }
}