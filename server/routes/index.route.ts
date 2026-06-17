import { Express } from "express";
import productRoutes from "./products.route";
import productImagesRoutes from "./productImages.route";
const router = (app: Express) => {
    const PATH = "/api";
    app.use(PATH + "/products",productRoutes);
    app.use(PATH + "/images", productImagesRoutes);
}

export default router;