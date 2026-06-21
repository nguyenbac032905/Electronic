import { Express } from "express";
import productRoutes from "./products.route";
import productImagesRoutes from "./productImages.route";
import userRoutes from "./user.route";
import orderRoutes from "./orders.route";
import categoryRoutes from "./categories.route";
const router = (app: Express) => {
    const PATH = "/api";
    app.use(PATH + "/products",productRoutes);
    app.use(PATH + "/images", productImagesRoutes);
    app.use(PATH + "/users",userRoutes);
    app.use(PATH + "/orders",orderRoutes);
    app.use(PATH + "/categories",categoryRoutes);
}

export default router;