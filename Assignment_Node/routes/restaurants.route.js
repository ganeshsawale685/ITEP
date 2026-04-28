import express from 'express'
import { create, getAll, menus } from '../controller/restaurant.controller.js';
import { add, show } from '../controller/menuitem.contoller.js';
const router = express.Router();

router.get("/",getAll);
router.post("/",create);
router.get("/:id/menu",menus)


router.get("/:restaurantId/menu-items",show)
router.post("/:restaurantId/menu-items",add)

export default router;