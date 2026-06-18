import express from "express";
import * as controller from "../controllers/products.controller";
import * as valiidate from "../validates/products.validate";
const router = express.Router();

router.get("/", controller.index);
router.get("/detail/:productSlug", controller.getProductDetail);
router.get("/search", controller.searchProducts);
router.post("/",valiidate.createProduct, controller.createProduct);
router.patch("/:productSlug",valiidate.updateProduct, controller.updateProduct);
router.delete("/:productSlug", controller.deleteProduct);

export default router;