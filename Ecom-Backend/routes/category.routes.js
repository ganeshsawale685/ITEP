import express from "express";
import { saveInBulk, fetchAll } from "../controller/category.controller.js";

const router = express.Router();

router.post("/save",saveInBulk);
router.get("/",fetchAll);
export default router;