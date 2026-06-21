import express from "express";
const router = express.Router();
import * as controller from "../controllers/categories.controller";
import * as validate from "../validates/categories.validate";

router.get("/", controller.index);
router.get("/:idCategory", controller.detail);
router.post("/",validate.createCategory, controller.createCategory);
router.patch("/:idCategory",validate.updateCategory, controller.updateCategory);
router.delete("/:idCategory", controller.deleteCategory);

export default router;