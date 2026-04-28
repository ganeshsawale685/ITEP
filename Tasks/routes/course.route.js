import express from 'express';
import { courseAdd, courseShow, deleteCourse, oneCourse, updateCourse } from '../controller/course.controller.js';
import { addLesson, allLesson, byId } from '../controller/lesson.controller.js';

const router = express.Router();
router.post("/lessons",addLesson)
router.get("/lessons",allLesson)
router.get("/lessons/:id",byId)

router.post("/",courseAdd)
router.get("/",courseShow)
router.get("/:id",oneCourse)
router.put("/:id",updateCourse)
router.delete("/:id",deleteCourse)





export default router