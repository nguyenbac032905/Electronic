import { Request, Response, NextFunction } from "express";
import fileUpload from "express-fileupload";
import path from "path";

export const uploadImage = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        if (!req.files || !req.files.mainImage) {
            return next();
        }

        const image =
            req.files.mainImage as fileUpload.UploadedFile;

        const allowedTypes = [
            "image/png",
            "image/jpeg",
            "image/webp",
        ];

        if (!allowedTypes.includes(image.mimetype)) {
            return res.status(400).json({
                message: "Invalid image type",
            });
        }

        const imageName =
            Date.now() + "-" + image.name;

        const uploadPath = path.join(
            __dirname,
            "../../public",
            imageName
        );

        await image.mv(uploadPath);

        req.body.mainImage = imageName;

        next();
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Upload failed",
        });
    }
};