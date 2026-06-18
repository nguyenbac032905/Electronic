import express from "express";
const router = express.Router();
import * as controller from "../controllers/productImages.controller";
import * as validate from "../validates/images.validate";

router.get("/:productID", controller.getSingleProductImages);
router.post("/",validate.createImage,controller.createImage);
router.patch("/:imageID",validate.updateImage, controller.updateImage);
router.delete("/:imageID", controller.deleteImage);

export default router;