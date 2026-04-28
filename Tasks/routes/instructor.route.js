import express from 'express';
import { instAll, instOne } from '../controller/instructor.controller.js';

const router = express.Router()
router.get("/",instAll)
router.get("/:id",instOne)

export default router;