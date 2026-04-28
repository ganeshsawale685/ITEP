import express from 'express'
import { register, users } from '../controller/users.controller.js';
import { placeOrder, showOrder } from '../controller/order.controller.js';

const router = express.Router()

router.post("/",register);
router.get("/:id",users)

router.post("/:userId/orders",placeOrder)
router.get("/:userId/orders",showOrder)

export default router;