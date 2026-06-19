import express from "express";
import * as controller from "../controllers/products.controller";
import * as validate from "../validates/products.validate";
import * as middleware  from "../middlewares/uploadFile.middleware";
const router = express.Router();

router.get("/", controller.index);
router.get("/:productSlug", controller.getProductDetail);
router.post("/",validate.createProduct, controller.createProduct);
router.patch("/:productSlug",validate.updateProduct,middleware.uploadImage, controller.updateProduct);
router.delete("/:productSlug", controller.deleteProduct);

export default router;