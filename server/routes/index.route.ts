import { Express } from "express";
import productRoutes from "./products.route";
import productImagesRoutes from "./productImages.route";
import userRoutes from "./user.route";
import orderRoutes from "./orders.route";
const router = (app: Express) => {
    const PATH = "/api";
    app.use(PATH + "/products",productRoutes);
    app.use(PATH + "/images", productImagesRoutes);
    app.use(PATH + "/users",userRoutes);
    app.use(PATH + "/orders",orderRoutes);
}

export default router;