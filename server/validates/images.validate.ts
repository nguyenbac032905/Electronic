import { Request, Response, NextFunction } from "express";

export const createImage = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const { image, productID } = request.body;

    const errors: string[] = [];

    if (!image || typeof image !== "string" || image.trim() === "") {
        errors.push("Image không hợp lệ");
    }

    if (
        productID === undefined ||
        productID === null ||
        productID === ""
    ) {
        errors.push("productID là bắt buộc");
    } else if (typeof productID !== "string") {
        errors.push("productID phải là string");
    }

    if (errors.length > 0) {
        return response.status(400).json({
            message: "Validation error",
            errors,
        });
    }

    next();
};

export const updateImage = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const { image, productID } = request.body;

    const errors: string[] = [];

    if (image !== undefined) {
        if (typeof image !== "string" || image.trim() === "") {
            errors.push("Image không hợp lệ");
        }
    }

    if (productID !== undefined) {
        if (
            typeof productID !== "string" ||
            productID.trim() === ""
        ) {
            errors.push("ProductID không hợp lệ");
        }
    }

    if (errors.length > 0) {
        return response.status(400).json({
            message: "Validation error",
            errors,
        });
    }

    next();
};