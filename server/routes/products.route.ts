import express from "express";
const router = express.Router();
import * as controller from "../controllers/products.controller";

router.get("/", controller.index);
router.get("/:productSlug", controller.getProductCategory);

export default router;