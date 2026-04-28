import express from "express";
import { saveInBulk,fetchAll, fetchById } from "../controller/product.controller.js";
const router = express.Router();

router.post("/save",saveInBulk);
router.get("/",fetchAll);
router.get("/:id",fetchById);
export default router;
