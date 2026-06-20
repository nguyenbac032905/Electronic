import express from "express";
const router = express.Router();
import * as controller from "../controllers/users.controller";

router.get("/",controller.index);

export default router