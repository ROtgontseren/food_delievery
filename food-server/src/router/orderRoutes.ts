import { Router } from "express";
import { createOrder, updateOrder } from "../controller/orderController";
import { authenticate } from "../middleware/auth";

const router = Router();

router.route("/").post(createOrder);

router.route("/:orderId").put(updateOrder);

export default router;