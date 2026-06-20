import express from "express";
const router = express.Router();
import * as controller from "../controllers/order.controller";

router.post("/", controller.createOrder);

export default router;