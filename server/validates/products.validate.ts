import { NextFunction, Request, Response } from "express";

export const createProduct = (request: Request, res: Response, next: NextFunction) => {
    const {
        slug,
        title,
        mainImage,
        price,
        description,
        manufacturer,
        category,
        inStock,
    } = request.body;

    const errors = [];

    if (!slug || typeof slug !== "string" || slug.trim() === "") {
        errors.push("Slug không hợp lệ");
    }

    if (!title || typeof title !== "string" || title.trim().length < 3) {
        errors.push("Title phải từ 3 ký tự trở lên");
    }

    if (title && title.length > 200) {
        errors.push("Title tối đa 200 ký tự");
    }

    if (price === undefined || price === null || isNaN(price)) {
        errors.push("Price phải là số");
    } else if (Number(price) < 0) {
        errors.push("Price không được âm");
    }

    if (!category || typeof category !== "string") {
        errors.push("Category không hợp lệ");
    }

    if (inStock === undefined || inStock === null) {
        errors.push("InStock là bắt buộc (0 hoặc 1)");
    } else {
        const stock = Number(inStock);

        if (!Number.isInteger(stock) || (stock !== 0 && stock !== 1)) {
            errors.push("InStock chỉ nhận 0 hoặc 1");
        } else {
            request.body.inStock = stock;
        }
    }

    if (errors.length > 0) {
        return res.status(400).json({
            message: "Validation error",
            errors,
        });
    }

    request.body.price = Number(price);

    next();
};


export const updateProduct = (request: Request, res: Response, next: NextFunction) => {
    const {
        slug,
        title,
        mainImage,
        price,
        description,
        manufacturer,
        category,
        inStock,
    } = request.body;

    const errors: string[] = [];

    if (slug !== undefined) {
        if (typeof slug !== "string" || slug.trim() === "") {
            errors.push("Slug không hợp lệ");
        }
    }

    if (title !== undefined) {
        if (typeof title !== "string" || title.trim().length < 3) {
            errors.push("Title phải từ 3 ký tự trở lên");
        } else if (title.length > 200) {
            errors.push("Title tối đa 200 ký tự");
        }
    }

    if (price !== undefined) {
        if (price === null || price === "" || isNaN(price)) {
            errors.push("Price phải là số");
        } else if (Number(price) < 0) {
            errors.push("Price không được âm");
        } else {
            request.body.price = Number(price);
        }
    }

    if (category !== undefined) {
        if (typeof category !== "string" || category.trim() === "") {
            errors.push("Category không hợp lệ");
        }
    }

    // inStock (0 | 1)
    if (inStock !== undefined) {
        const stock = Number(inStock);

        if (!Number.isInteger(stock) || (stock !== 0 && stock !== 1)) {
            errors.push("InStock chỉ nhận 0 hoặc 1");
        } else {
            request.body.inStock = stock;
        }
    }

    if (errors.length > 0) {
        return res.status(400).json({
            message: "Validation error",
            errors,
        });
    }

    next();
};