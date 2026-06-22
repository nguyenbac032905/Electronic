import express from "express";
const router = express.Router();
import * as controller from "../controllers/orderItem.controller";
import * as validate from "../controllers/orderItem.controller";

router.get("/:orderID/orders", controller.getOrderItemByOrderID);
router.post("/",validate.createOrderItem, controller.createOrderItem);

export default router;