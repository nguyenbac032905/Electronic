import express from "express";
const router = express.Router();
import * as controller from "../controllers/productImages.controller";

router.get("/:productID", controller.getSingleProductImages);

export default router;