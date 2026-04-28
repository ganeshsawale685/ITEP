import express from 'express'
import { fetchAll, fetchOne, update } from '../controller/student.controller.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();


router.get("/",fetchAll);
router.get("/:id",auth,fetchOne);
router.put("/:id",update);

export default router;