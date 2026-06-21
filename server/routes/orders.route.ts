import express from "express";
const router = express.Router();
import * as controller from "../controllers/order.controller";

router.post("/", controller.createOrder);
router.get("/", controller.index);
router.get("/:orderID", controller.detail);

export default router;