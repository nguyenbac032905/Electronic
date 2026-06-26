import { Express } from "express";
import productRoutes from "./products.route";
import productImagesRoutes from "./productImages.route";
import userRoutes from "./user.route";
import orderRoutes from "./orders.route";
import categoryRoutes from "./categories.route";
import orderItemRoutes from "./orderItem.route";
import { productLimiter } from "../middlewares/advancedRateLimiter";
const router = (app: Express) => {
    const PATH = "/api";
    app.use(PATH + "/products",productLimiter,productRoutes);
    app.use(PATH + "/images", productImagesRoutes);
    app.use(PATH + "/users",userRoutes);
    app.use(PATH + "/orders",orderRoutes);
    app.use(PATH + "/categories",categoryRoutes);
    app.use(PATH + "/order-items", orderItemRoutes);
}

export default router;