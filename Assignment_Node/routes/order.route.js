import express from 'express'
import { orderId } from '../controller/order.controller.js';

const router  = express.Router();

router.get('/:id',orderId)

export default router