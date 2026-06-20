import { Express } from "express";
import productRoutes from "./products.route";
import productImagesRoutes from "./productImages.route";
import userRoutes from "./user.route";
const router = (app: Express) => {
    const PATH = "/api";
    app.use(PATH + "/products",productRoutes);
    app.use(PATH + "/images", productImagesRoutes);
    app.use(PATH + "/users",userRoutes);
}

export default router;